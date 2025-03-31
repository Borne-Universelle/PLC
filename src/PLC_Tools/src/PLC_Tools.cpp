#include "PLC_Tools/PLC_Tools.h"

const char* PLC_Tools::REBOOT_LOG_FILE = "/reboot_log.json";
//bool PLC_Tools::wifiDisconnectedForMemory = false;
//uint32_t PLC_Tools::wifiDisconnectionTime = 0;
//uint32_t PLC_Tools::disconnectionCount = 0;

bool PLC_Tools::logReboot() {
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
  
    JsonDocument doc;
      
    bool fileExists = true;
 
    // Tenter de lire le fichier directement - une seule opération de lecture
    if (!persistence.readJsonFromFile(REBOOT_LOG_FILE, doc)) {
        // Si la lecture échoue, cela peut être parce que le fichier n'existe pas
        // ou pour d'autres raisons
        Serial.println(F("Could not read reboot log, creating new one"));
        doc.clear();
        doc.to<JsonArray>();
        fileExists = false;
    }
   
    JsonArray array = doc.as<JsonArray>();
    esp_reset_reason_t resetReason = esp_reset_reason();
    
    // On ignore les redémarrages normaux (power-on et reset externe) mais seulement
    // si le fichier existe déjà
    if ((resetReason == ESP_RST_POWERON || resetReason == ESP_RST_EXT) && fileExists) {
        return true;
    }
    
    // Si le tableau dépasse la taille maximale, on supprime les entrées les plus anciennes
    while (array.size() >= MAX_LOG_ENTRIES) {
        // Supprime le premier élément (le plus ancien)
        for (size_t i = 0; i < array.size() - 1; i++) {
            array[i] = array[i + 1];
        }
        array.remove(array.size() - 1);
    }
    
    // Ajoute la nouvelle entrée
    JsonObject entry = array.add<JsonObject>();
    entry["reason"] = getResetReason(resetReason);
        
    if (persistence.saveJsonToFile(REBOOT_LOG_FILE, doc)) {
        return true;
    } else {
        Serial.println(F("Failed to save reboot log"));
        return false;
    }
    return true;
}// logReboot

String PLC_Tools::getRebootLog() {
    String prettyLog  = "{}";
    Serial.printf("%lu::getRebootLog\r\n", millis());
 
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
  
     
    if (!persistence.fileExists(REBOOT_LOG_FILE)) {
        return prettyLog;
    }

    JsonDocument doc;
    if (!persistence.readJsonFromFile(REBOOT_LOG_FILE, doc)) {
        return prettyLog;
    }
   
    serializeJsonPretty(doc, prettyLog);
    return prettyLog;
}

bool PLC_Tools::clearRebootLog() {
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    return persistence.deleteFile(REBOOT_LOG_FILE);
}

String PLC_Tools::getResetReason(esp_reset_reason_t reason) {
    switch (reason) {
        case ESP_RST_UNKNOWN:    return "Unknown";
        case ESP_RST_POWERON:    return "Power-on";
        case ESP_RST_EXT:        return "External reset/button";
        case ESP_RST_SW:         return "Software reset";
        case ESP_RST_PANIC:      return "Kernel panic";
        case ESP_RST_INT_WDT:    return "Interrupt watchdog";
        case ESP_RST_TASK_WDT:   return "Task watchdog";
        case ESP_RST_WDT:        return "Other watchdog";
        case ESP_RST_DEEPSLEEP:  return "Deep sleep wake";
        case ESP_RST_BROWNOUT:   return "Brownout";
        case ESP_RST_SDIO:       return "SDIO";
        default:                 return "Unknown reason";
    }
}

void PLC_Tools::printBits(uint16_t nombre) {
    printf("Bits de %u (0x%04X): ", nombre, nombre);
    
    // Parcourir chaque bit, du plus significatif au moins significatif
    for (int i = 15; i >= 0; i--) {
        // Extraire le bit à la position i
        uint16_t bit = (nombre >> i) & 1;
        printf("%u", bit);
        
        // Ajouter un espace tous les 4 bits pour améliorer la lisibilité
        if (i % 4 == 0 && i > 0) {
            printf(" ");
        }
    }
    printf("\n");
}

void PLC_Tools::printJsonValue(const JsonVariant &value, int indent) {
    String indentStr = "";
    for (int i = 0; i < indent; i++) {
        indentStr += "  ";
    }

    if (value.is<JsonObject>()) {
        JsonObject obj = value.as<JsonObject>();
        Serial.println(indentStr + "{");
        for (JsonPair p : obj) {
            Serial.print(indentStr + "  \"" + p.key().c_str() + "\": ");
            printJsonValue(p.value(), indent + 1);
        }
        Serial.println(indentStr + "}");
    }
    else if (value.is<JsonArray>()) {
        JsonArray arr = value.as<JsonArray>();
        Serial.println(indentStr + "[");
        for (JsonVariant v : arr) {
            Serial.print(indentStr + "  ");
            printJsonValue(v, indent + 1);
        }
        Serial.println(indentStr + "]");
    }
    else if (value.is<const char*>()) {
        Serial.println("\"" + String(value.as<const char*>()) + "\"");
    }
    else if (value.is<bool>()) {
        Serial.println(value.as<bool>() ? "true" : "false");
    }
    else if (value.is<double>()) {
        // Vérifier si c'est un entier de grande taille
        double dValue = value.as<double>();
        if (dValue == floor(dValue) && dValue <= UINT32_MAX && dValue >= 0) {
            // C'est probablement un entier non signé
            Serial.println((uint32_t)dValue);
        } else {
            Serial.println(dValue);
        }
    }
    else if (value.is<float>()) {
        Serial.println(value.as<float>());
    }
    else if (value.is<int>()) {
        Serial.println(value.as<int>());
    }
    else if (value.isNull()) {
        Serial.println("null");
    }
    else {
        Serial.println("unknown type");
    }
}

void  PLC_Tools::logDiagnostic(const char* message) {
    // Obtenir l'instance de PLC_Persistence
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    
    // Format: timestamp, mémoire libre, message
    char logEntry[256];
    snprintf(logEntry, sizeof(logEntry), "[%lu] Available memory: %lu - %s\n", 
             millis(), ESP.getFreeHeap(), message);
    
    // Lire le fichier existant
    String existingLog;
    bool fileExists = persistence.fileExists(DIAGNOSTIC_FILE);
    
    if (fileExists) {
      persistence.readFile(DIAGNOSTIC_FILE, existingLog);
      
      // Limiter la taille du fichier (garder les dernières 4KB)
      if (existingLog.length() > 16384) {
        existingLog = existingLog.substring(existingLog.length() - 3500);
        // Trouver le premier saut de ligne pour avoir un début propre
        int firstNewline = existingLog.indexOf('\n');
        if (firstNewline >= 0) {
          existingLog = existingLog.substring(firstNewline + 1);
        }
      }
    }
    
    // Ajouter la nouvelle entrée
    existingLog += logEntry;
    
    // Sauvegarder le fichier mis à jour
    persistence.saveToFile(DIAGNOSTIC_FILE, existingLog);
    
    // Également afficher sur la console série
    Serial.print(logEntry);
}

bool PLC_Tools::printDiagnosticFile() { 
    Serial.println();
    Serial.println("============ JOURNAL DE DIAGNOSTIC WIFI/MÉMOIRE ============");
    
    // Obtenir l'instance de PLC_Persistence
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    
    // Vérifier si le fichier existe
    if (!persistence.fileExists(DIAGNOSTIC_FILE)) {
      Serial.println("Fichier de diagnostic non trouvé");
      return true;
    }
    
    // Lire le contenu du fichier
    String fileContent;
    bool success = persistence.readFile(DIAGNOSTIC_FILE, fileContent);
    
    if (!success) {
      Serial.println("Erreur lors de la lecture du fichier de diagnostic");
      Serial.printf("Détail: %s\n", persistence.getLastError());
      return false;
    }
    
    // Afficher des statistiques sur le fichier
    Serial.printf("Taille du fichier: %u octets\n", fileContent.length());
    
    // Compter le nombre d'entrées (lignes)
    int numEntries = 0;
    int index = 0;
    while ((index = fileContent.indexOf('\n', index) + 1) > 0) {
      numEntries++;
    }
    Serial.printf("Nombre d'entrées: %d\n\n", numEntries);
    
    // Imprimer le contenu du fichier
    Serial.println(fileContent);
    
    Serial.println("============= FIN DU JOURNAL DE DIAGNOSTIC =============");
    return true;
  }

void  PLC_Tools::manageWiFiBasedOnMemory() {
    static uint32_t lastMemoryCheck = 0;
    
    // Vérifier la mémoire périodiquement
    if (millis() - lastMemoryCheck < MEMORY_CHECK_INTERVAL) {
      return;
    }
    
    lastMemoryCheck = millis();
    uint32_t freeHeap = ESP.getFreeHeap();
    
    // Cas 1: WiFi connecté mais mémoire trop basse -> déconnecter
    if ((BorneUniverselle::isClientConnected() && freeHeap < MEMORY_TRESHOLD_WITH_CLIENT) || freeHeap < MEMORY_THRESHOLD_LOW) {
      char diagnosticMsg[128];
      snprintf(diagnosticMsg, sizeof(diagnosticMsg), 
               "%lu:: Déconnecxion du Wifi volontaire numéro: %lu, mémoire critique: %lu bytes\r\n", millis(), ++disconnectionCount, freeHeap);
      logDiagnostic(diagnosticMsg);
      
      // Sauvegarder l'état actuel
      wifiDisconnectedForMemory = true;
      wifiDisconnectionTime = millis();
      
      // Déconnecter le WiFi
      WiFi.disconnect(true);
      // WiFi.mode(WIFI_OFF);
      
      // Forcer la récupération mémoire
      void* tempBuffer = malloc(10000);
      if (tempBuffer) free(tempBuffer);
      
      // Vérifier l'amélioration immédiate
      snprintf(diagnosticMsg, sizeof(diagnosticMsg), 
               "Après déconnexion: %lu bytes disponibles", 
               ESP.getFreeHeap());
      logDiagnostic(diagnosticMsg);
      return;
    }
  }  
