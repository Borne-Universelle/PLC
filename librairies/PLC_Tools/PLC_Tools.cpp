#include "PLC_Tools.h"
const char* PLC_Tools::REBOOT_LOG_FILE = "/reboot_log.json";

JsonDocument PLC_Tools::getFilteredFilesAsJson(const char* path, const char* pattern) {
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

std::vector<String> PLC_Tools::getFilteredFiles(const char* path, const char* pattern) {
    std::vector<String> result;
    
    if (!LittleFS.begin()) {
        Serial.println(F("Failed to mount filesystem"));
        return result;
    }
    
    File root = LittleFS.open(path);
    if (!root) {
        Serial.printf("Failed to open directory: %s\n", path);
        LittleFS.end();
        return result;
    }

    if (!root.isDirectory()) {
        Serial.printf("Not a directory: %s\n", path);
        root.close();
        LittleFS.end();
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
    LittleFS.end();
    return result;
}

void PLC_Tools::logReboot() {
    if (!LittleFS.begin()) {
        Serial.println(F("Failed to mount filesystem for reboot log"));
        return;
    }

    JsonDocument doc;
    
    File file = LittleFS.open(REBOOT_LOG_FILE, "r");
    if (file) {
        DeserializationError error = deserializeJson(doc, file);
        if (error) {
            Serial.println(F("Failed to parse reboot log"));
            doc.clear();
            doc.to<JsonArray>();
        }
        file.close();
    } else {
        doc.to<JsonArray>();
    }

    JsonArray array = doc.as<JsonArray>();
    esp_reset_reason_t resetReason = esp_reset_reason();
    
    // On ignore les redémarrages normaux (power-on et reset externe)
    if (resetReason == ESP_RST_POWERON || resetReason == ESP_RST_EXT) {
        file.close();
        LittleFS.end();
        return;
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
        
    file = LittleFS.open(REBOOT_LOG_FILE, "w");
    if (!file) {
        Serial.println(F("Failed to open reboot log for writing"));
        LittleFS.end();
        return;
    }
    
    serializeJson(doc, file);
    file.close();
    LittleFS.end();
}// logReboot

String PLC_Tools::getRebootLog() {
    if (!LittleFS.begin()) {
        return "{}";
    }

    File file = LittleFS.open(REBOOT_LOG_FILE, "r");
    if (!file) {
        LittleFS.end();
        return "{}";
    }

    JsonDocument doc;
    DeserializationError error = deserializeJson(doc, file);
    file.close();
    LittleFS.end();

    if (error) {
        return "{}";
    }

    String prettyLog;
    serializeJsonPretty(doc, prettyLog);
    return prettyLog;
}

bool PLC_Tools::clearRebootLog() {
    if (!LittleFS.begin()) {
        return false;
    }
    
    bool success = LittleFS.remove(REBOOT_LOG_FILE);
    LittleFS.end();
    return success;
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