#include "PLC_Tools.h"
const char* PLC_Tools::REBOOT_LOG_FILE = "/reboot_log.json";

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
}// logReboot

String PLC_Tools::getRebootLog() {
    Serial.printf("%lu::getRebootLog\r\n", millis());
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    
    if (!persistence.fileExists(REBOOT_LOG_FILE)) {
        return "{}";
    }

    JsonDocument doc;
    if (!persistence.readJsonFromFile(REBOOT_LOG_FILE, doc)) {
        return "{}";
    }

    String prettyLog;
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
    
