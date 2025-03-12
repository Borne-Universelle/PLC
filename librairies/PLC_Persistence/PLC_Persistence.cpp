#include "PLC_Persistence.h"

// Initialisation du singleton
PLC_Persistence* PLC_Persistence::instance = nullptr;

PLC_Persistence::PLC_Persistence() : busy(false), operationStartTime(0) {
    lastError[0] = '\0';
    // Monter le système de fichiers dès l'initialisation
    if (!LittleFS.begin()) {
        setLastError("Failed to mount LittleFS at initialization");
        Serial.println("Failed to mount LittleFS at initialization");
    } else {
        Serial.println("LittleFS mounted successfully at initialization");
    }
}

PLC_Persistence::~PLC_Persistence() {
    // Système de fichiers reste monté tout au long de l'exécution du programme
    // Pas de démontage explicite dans le destructeur
}

PLC_Persistence& PLC_Persistence::getInstance() {
    if (instance == nullptr) {
        instance = new PLC_Persistence();
    }
    return *instance;
}

bool PLC_Persistence::isBusy() const {
    return busy;
}

const char* PLC_Persistence::getLastError() const {
    return lastError;
}

void PLC_Persistence::setBusy(bool state) {
    busy = state;
    // Serial.printf("PLC_Persistence: Setting busy flag to %s at %lu\n", state ? "true" : "false", millis());
    if (busy) {
        operationStartTime = millis();
    }
}

bool PLC_Persistence::waitUntilAvailable(unsigned long timeout) {
    unsigned long startWait = millis();
    
    while (busy) {
        // Vérifier si le timeout est atteint
        if (millis() - startWait > timeout) {
            setLastError("Timeout waiting for persistence resource");
            return false;
        }
        
        // Vérifier si l'opération est bloquée depuis trop longtemps
        if (busy && (millis() - operationStartTime > timeout)) {
            Serial.println("PLC_Persistence: Force releasing busy state after timeout");
            busy = false;
            return true;
        }
        
        // Wait
        delay(DEFAULT_BUSY_WAIT_INTERVAL);
        yield(); // Permet au ESP32 de gérer d'autres tâches
    }
    
    return true;
}

void PLC_Persistence::setLastError(const char* error) {
    snprintf(lastError, sizeof(lastError), "PLC_Persistence error: %s\n", error);
    Serial.println(lastError);
}

bool PLC_Persistence::beginFS() {
    // Le système de fichiers est déjà monté, vérifions juste qu'il est OK
    if (!LittleFS.begin(false)) { // Le paramètre false indique de ne pas formater si le montage échoue
        // Essayer de remonter en formatant si nécessaire
        if (!LittleFS.begin(true)) { 
            setLastError("Failed to remount LittleFS (tried formatting)");
            return false;
        }
        Serial.println("WARNING: LittleFS remounted with formatting");
    }
    return true;
}

void PLC_Persistence::endFS() {
    // Ne pas démonter le système de fichiers
    // cette fonction est maintenue pour compatibilité avec le code existant
}

bool PLC_Persistence::isPathValid(const char* path) {
    if (!path || strlen(path) == 0) {
        setLastError("Path is empty");
        return false;
    }
    
    // Vérifier si le chemin contient des séquences dangereuses
    if (strstr(path, "..") != nullptr) {
        setLastError("Path contains invalid sequences");
        return false;
    }
    
    // Vérifier que le chemin commence par un slash
    if (path[0] != '/') {
        setLastError("Path must start with '/'");
        return false;
    }
    
    return true;
}

bool PLC_Persistence::saveToFile(const char* path, const char* data, size_t size) {
    Serial.printf("Will try to save file: %s\r\n", (char *)path);
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    bool success = false;
    
    if (!isPathValid(path)) {
        setBusy(false);
        return false;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return false;
    }
    
    File file = LittleFS.open(path, FILE_WRITE);
    if (!file) {
        setLastError("Failed to open file for writing");
        setBusy(false);
        return false;
    }
    
    size_t bytesWritten = file.write((uint8_t*)data, size);
    file.close();
    
    if (bytesWritten != size) {
        setLastError("Failed to write complete data to file");
        success = false;
    } else {
        success = true;
    }
    
    setBusy(false);
    return success;
}

bool PLC_Persistence::saveToFile(const char* path, const String& data) {
    return saveToFile(path, data.c_str(), data.length());
}

bool PLC_Persistence::readFile(const char* path, String& outData) {
    Serial.printf("Will try to read file: %s\r\n", path);
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    bool success = false;
    
    if (!isPathValid(path)) {
        setBusy(false);
        return false;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return false;
    }
    
    if (!LittleFS.exists(path)) {
        setLastError("File does not exist");
        setBusy(false);
        return false;
    }
    
    File file = LittleFS.open(path, FILE_READ);
    if (!file) {
        setLastError("Failed to open file for reading");
        setBusy(false);
        return false;
    }
    
    outData = file.readString();
    file.close();
    
    success = true;
    
    setBusy(false);
    return success;
}

bool PLC_Persistence::saveJsonToFile(const char* path, const JsonDocument& doc) {
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    // Vérifier la taille du document avant la sérialisation
    size_t estimatedSize = measureJson(doc);
    if (estimatedSize > JSON_DOCUMENT_MAX_SIZE) {
        char errorMsg[100];
        snprintf(errorMsg, sizeof(errorMsg), "JSON document too large (%zu bytes) for serialization", estimatedSize);
        setLastError(errorMsg);
        setBusy(false);
        return false;
    }
    
    // Allouer un buffer avec une marge de sécurité
    size_t bufferSize = estimatedSize + 64;
    String jsonString;
    jsonString.reserve(bufferSize);
    
    // Sérialiser le document dans le buffer
    serializeJson(doc, jsonString);
    
    if (jsonString.length() == 0) {
        setLastError("JSON serialization failed: empty result");
        setBusy(false);
        return false;
    }
    
    // Créer un backup avant d'écrire le nouveau fichier
    if (LittleFS.exists(path)) {
        createBackup(path);
    }
    
    // Sauvegarder le fichier
    bool success = saveToFile(path, jsonString);
    
    if (!success) {
        char errorMsg[256];
        snprintf(errorMsg, sizeof(errorMsg), "Failed to save JSON to %s: %s", path, lastError);
        setLastError(errorMsg);
    }
    
    setBusy(false);
    return success;
}

bool PLC_Persistence::readJsonFromFile(const char* path, JsonDocument& outDoc) {
    Serial.printf("%lu:: Try to read json from file: %s\r\n", millis(), path);
    if (!waitUntilAvailable()) {
        return false;
    }
    
    String jsonString;
    if (!readFile(path, jsonString)) {
        char errorMsg[256];
        snprintf(errorMsg, sizeof(errorMsg), "Failed to read JSON file %s: %s", path, lastError);
        setLastError(errorMsg);
        return false;
    }
    
    if (jsonString.length() == 0) {
        setLastError("Empty JSON file");
        return false;
    }
    
    // Nettoyer le document avant désérialisation
    outDoc.clear();
    
    DeserializationError error = deserializeJson(outDoc, jsonString);
    if (error) {
        char errorMsg[150];
        snprintf(errorMsg, sizeof(errorMsg), 
                "JSON deserialization failed for %s: %s (first 500 chars: %.500s)", 
                path, error.c_str(), jsonString.c_str());
        setLastError(errorMsg);
        return false;
    }
    return true;
}

bool PLC_Persistence::fileExists(const char* path) {
    Serial.printf("Will try to find if file: %s exist\r\n", path);
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    if (!isPathValid(path)) {
        setBusy(false);
        return false;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return false;
    }
    
    bool exists = LittleFS.exists(path);
    
    setBusy(false);
    return exists;
}

bool PLC_Persistence::deleteFile(const char* path) {
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    if (!isPathValid(path)) {
        setBusy(false);
        return false;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return false;
    }
    
    if (!LittleFS.exists(path)) {
        setLastError("File does not exist");
        setBusy(false);
        return false;
    }
    
    bool success = LittleFS.remove(path);
    
    if (!success) {
        setLastError("Failed to delete file");
    }
    
    setBusy(false);
    return success;
}

size_t PLC_Persistence::getFileSize(const char* path) {
    if (!waitUntilAvailable()) {
        return 0;
    }
    
    setBusy(true);
    
    size_t fileSize = 0;
    
    if (!isPathValid(path)) {
        setBusy(false);
        return 0;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return 0;
    }
    
    if (!LittleFS.exists(path)) {
        setLastError("File does not exist");
        setBusy(false);
        return 0;
    }
    
    File file = LittleFS.open(path, FILE_READ);
    if (!file) {
        setLastError("Failed to open file for reading");
        setBusy(false);
        return 0;
    }
    
    fileSize = file.size();
    file.close();
    
    setBusy(false);
    return fileSize;
}

bool PLC_Persistence::createBackup(const char* path, int maxVersions) {
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    if (!isPathValid(path)) {
        setBusy(false);
        return false;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return false;
    }
    
    if (!LittleFS.exists(path)) {
        setLastError("Source file does not exist");
        setBusy(false);
        return false;
    }
    
    // Extraire le nom de base et l'extension
    String origPath(path);
    int lastSlash = origPath.lastIndexOf('/');
    int lastDot = origPath.lastIndexOf('.');
    
    String baseName, extension, dirPath;
    
    if (lastSlash >= 0) {
        dirPath = origPath.substring(0, lastSlash + 1);
    } else {
        dirPath = "/";
    }
    
    if (lastDot > lastSlash) {
        baseName = origPath.substring(lastSlash + 1, lastDot);
        extension = origPath.substring(lastDot);
    } else {
        baseName = origPath.substring(lastSlash + 1);
        extension = "";
    }
    
    // Collecter toutes les versions existantes
    std::vector<String> backupFiles;
    std::vector<int> versionNumbers;
    
    File root = LittleFS.open(dirPath.c_str());
    if (!root || !root.isDirectory()) {
        setLastError("Failed to open directory");
        if (root) root.close();
        setBusy(false);
        return false;
    }
    
    // Format de nom de backup attendu: baseNom.v1.extension, baseNom.v2.extension, etc.
    String versionPrefix = baseName + ".v";
    
    File file = root.openNextFile();
    while (file) {
        if (!file.isDirectory()) {
            String fileName = String(file.name());
            
            // Vérifier si c'est un fichier de backup pour ce fichier
            if (fileName.startsWith(dirPath + versionPrefix)) {
                String versionPart = fileName;
                versionPart.replace(dirPath + versionPrefix, "");
                versionPart.replace(extension, "");
                
                // Essayer de convertir en nombre
                int versionNum = versionPart.toInt();
                if (versionNum > 0) {
                    backupFiles.push_back(fileName);
                    versionNumbers.push_back(versionNum);
                }
            }
        }
        file.close();
        file = root.openNextFile();
    }
    root.close();
    
    // Trouver le numéro de version le plus élevé
    int highestVersion = 0;
    for (int version : versionNumbers) {
        if (version > highestVersion) {
            highestVersion = version;
        }
    }
    
    // Créer le nouveau nom de version
    int newVersion = highestVersion + 1;
    String backupPath = dirPath + baseName + ".v" + String(newVersion) + extension;
    
    // Copier le contenu
    File sourceFile = LittleFS.open(path, FILE_READ);
    if (!sourceFile) {
        setLastError("Failed to open source file");
        setBusy(false);
        return false;
    }
    
    File backupFile = LittleFS.open(backupPath.c_str(), FILE_WRITE);
    if (!backupFile) {
        sourceFile.close();
        setLastError("Failed to create backup file");
        setBusy(false);
        return false;
    }
    
    const size_t bufferSize = 512;
    uint8_t buffer[bufferSize];
    size_t bytesRead;
    
    while ((bytesRead = sourceFile.read(buffer, bufferSize)) > 0) {
        if (backupFile.write(buffer, bytesRead) != bytesRead) {
            sourceFile.close();
            backupFile.close();
            setLastError("Failed to write to backup file");
            setBusy(false);
            return false;
        }
    }
    
    sourceFile.close();
    backupFile.close();
    
    // Si on dépasse le nombre max de versions, supprimer les plus anciennes
    if (backupFiles.size() >= maxVersions) {
        // Trier les versions
        struct VersionInfo {
            String filePath;
            int version;
        };
        
        std::vector<VersionInfo> sortedVersions;
        for (size_t i = 0; i < backupFiles.size(); i++) {
            sortedVersions.push_back({backupFiles[i], versionNumbers[i]});
        }
        
        // Trier par numéro de version (croissant)
        std::sort(sortedVersions.begin(), sortedVersions.end(), 
                 [](const VersionInfo& a, const VersionInfo& b) {
                     return a.version < b.version;
                 });
        
        // Supprimer les versions les plus anciennes jusqu'à ce qu'on soit en dessous de la limite
        int numToDelete = sortedVersions.size() + 1 - maxVersions; // +1 pour la nouvelle version créée
        for (int i = 0; i < numToDelete && i < (int)sortedVersions.size(); i++) {
            Serial.printf("Removing old backup version: %s\n", sortedVersions[i].filePath.c_str());
            LittleFS.remove(sortedVersions[i].filePath.c_str());
        }
    }
    
    Serial.printf("Created backup: %s (version %d)\n", backupPath.c_str(), newVersion);
    
    setBusy(false);
    return true;
} // createBackup

// Nouvelles méthodes ajoutées pour une meilleure gestion du système de fichiers
bool PLC_Persistence::checkFileSystemIntegrity() {
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    // Tentative de remontage du système de fichiers pour vérifier l'intégrité
    if (!LittleFS.begin(false)) {
        Serial.println("File system check: Failed to mount LittleFS, attempting recovery...");
        
        // Tenter de remonter avec l'option de formatage
        if (!LittleFS.begin(true)) {
            setLastError("File system integrity check failed: Cannot recover filesystem");
            Serial.println("File system integrity check failed: Cannot recover filesystem");
            setBusy(false);
            return false;
        }
        
        Serial.println("File system recovered through formatting. All data lost!");
        setBusy(false);
        return true;
    }
    
    Serial.println("File system integrity check passed");
    setBusy(false);
    return true;
}

bool PLC_Persistence::recoverFromBackup(const char* path) {
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    if (!isPathValid(path)) {
        setBusy(false);
        return false;
    }
    
    if (!beginFS()) {
        setBusy(false);
        return false;
    }
    
    // Construire le schéma de nommage des fichiers de backup
    String origPath(path);
    int lastSlash = origPath.lastIndexOf('/');
    int lastDot = origPath.lastIndexOf('.');
    
    String baseName, extension, dirPath;
    
    if (lastSlash >= 0) {
        dirPath = origPath.substring(0, lastSlash + 1);
    } else {
        dirPath = "/";
    }
    
    if (lastDot > lastSlash) {
        baseName = origPath.substring(lastSlash + 1, lastDot);
        extension = origPath.substring(lastDot);
    } else {
        baseName = origPath.substring(lastSlash + 1);
        extension = "";
    }
    
    // Rechercher la version de backup la plus récente
    int highestVersion = 0;
    String latestBackup = "";
    
    File root = LittleFS.open(dirPath.c_str());
    if (!root || !root.isDirectory()) {
        setLastError("Failed to open directory for backup recovery");
        if (root) root.close();
        setBusy(false);
        return false;
    }
    
    String versionPrefix = baseName + ".v";
    
    File file = root.openNextFile();
    while (file) {
        if (!file.isDirectory()) {
            String fileName = String(file.name());
            
            if (fileName.startsWith(dirPath + versionPrefix) && fileName.endsWith(extension)) {
                String versionStr = fileName;
                versionStr.replace(dirPath + versionPrefix, "");
                versionStr.replace(extension, "");
                
                int version = versionStr.toInt();
                if (version > highestVersion) {
                    highestVersion = version;
                    latestBackup = fileName;
                }
            }
        }
        file.close();
        file = root.openNextFile();
    }
    root.close();
    
    if (highestVersion == 0) {
        setLastError("No backup found for recovery");
        setBusy(false);
        return false;
    }
    
    // Supprimer le fichier corrompu si existant
    if (LittleFS.exists(path)) {
        LittleFS.remove(path);
    }
    
    // Copier le backup vers le fichier original
    File backupFile = LittleFS.open(latestBackup.c_str(), FILE_READ);
    if (!backupFile) {
        setLastError("Failed to open backup file");
        setBusy(false);
        return false;
    }
    
    File restoredFile = LittleFS.open(path, FILE_WRITE);
    if (!restoredFile) {
        backupFile.close();
        setLastError("Failed to create recovered file");
        setBusy(false);
        return false;
    }
    
    const size_t bufferSize = 512;
    uint8_t buffer[bufferSize];
    size_t bytesRead;
    
    while ((bytesRead = backupFile.read(buffer, bufferSize)) > 0) {
        if (restoredFile.write(buffer, bytesRead) != bytesRead) {
            backupFile.close();
            restoredFile.close();
            setLastError("Failed to write to recovered file");
            setBusy(false);
            return false;
        }
    }
    
    backupFile.close();
    restoredFile.close();
    
    Serial.printf("Successfully recovered %s from backup version %d\n", path, highestVersion);
    setBusy(false);
    return true;
}

bool PLC_Persistence::formatFileSystem() {
    if (!waitUntilAvailable()) {
        return false;
    }
    
    setBusy(true);
    
    // Démonter puis reformater le système de fichiers
    LittleFS.end();
    
    if (!LittleFS.begin(true)) { // true = formatter
        setLastError("Failed to format file system");
        setBusy(false);
        return false;
    }
    
    Serial.println("File system formatted successfully");
    setBusy(false);
    return true;
}

float PLC_Persistence::getFileSystemUsage() {
    if (!waitUntilAvailable()) {
        return -1.0f;
    }
    
    setBusy(true);
    
    if (!beginFS()) {
        setBusy(false);
        return -1.0f;
    }
    
    #ifdef ESP32
    size_t totalBytes = LittleFS.totalBytes();
    size_t usedBytes = LittleFS.usedBytes();
    #else
    FSInfo fs_info;
    LittleFS.info(fs_info);
    size_t totalBytes = fs_info.totalBytes;
    size_t usedBytes = fs_info.usedBytes;
    #endif
    
    float usagePercent = (float)usedBytes / totalBytes * 100.0f;
    
    setBusy(false);
    return usagePercent;
}

std::vector<String> PLC_Persistence::getFilteredFiles(const char* path, const char* pattern) {
    std::vector<String> result;
    
    if (!waitUntilAvailable()) {
        setLastError("Failed to acquire resource for getFilteredFiles");
        return result;
    }
    
    setBusy(true);
    
    if (!beginFS()) {
        setBusy(false);
        return result;
    }
    
    File root = LittleFS.open(path);
    if (!root) {
        setLastError("Failed to open directory");
        endFS();
        setBusy(false);
        return result;
    }

    if (!root.isDirectory()) {
        setLastError("Not a directory");
        root.close();
        endFS();
        setBusy(false);
        return result;
    }

    // Vérifier si on veut tous les fichiers
    bool getAllFiles = (strcmp(pattern, "*") == 0) || (strcmp(pattern, "*.*") == 0);
    
    String patternStr = String(pattern);
    if (patternStr.startsWith("*")) {
        patternStr = patternStr.substring(1);
    }

    File file = root.openNextFile();
    while (file) {
        if (!file.isDirectory()) {
            String fileName = String(file.name());
            if (getAllFiles || fileName.endsWith(patternStr)) {
                result.push_back(fileName);
            }
        }
        file.close();
        file = root.openNextFile();
    }

    root.close();
    endFS();
    setBusy(false);
    return result;
}

JsonDocument PLC_Persistence::getFilteredFilesAsJson(const char* path, const char* pattern) {
    JsonDocument doc;
    
    // Obtenir la liste des fichiers
    std::vector<String> files = getFilteredFiles(path, pattern);
    
    // Créer le tableau JSON
    JsonArray directoryArray = doc["Directory"].to<JsonArray>();
    
    // Ajouter chaque fichier au tableau JSON
    for(const String& fileName : files) {
        directoryArray.add(fileName);
    }
    
    return doc;
}