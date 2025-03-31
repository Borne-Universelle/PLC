#pragma once
#define ARDUINOJSON_ENABLE_COMMENTS 1
#include <vector>
#include <Arduino.h>
#include "ArduinoJson.h"
#include "PLC_Persistence/PLC_Persistence.h"
#include "BorneUniverselle/borneUniverselle.h"

// Json key
#define REASON  "reason"

#define DIAGNOSTIC_FILE          "/diagnostic.txt"  // Chemin du fichier de diagnostic
#define MEMORY_CHECK_INTERVAL   5000
#define MEMORY_THRESHOLD_LOW    100000
#define MEMORY_TRESHOLD_WITH_CLIENT 50000

using namespace ArduinoJson;

class PLC_Tools {

private:
    bool wifiDisconnectedForMemory;
    uint32_t wifiDisconnectionTime;
    uint32_t disconnectionCount;

    // Json On ne peur pas metttre les 2 fonctions dans le cpp
    static void printJsonValue(const JsonVariant &value, int indent = 0);

public:
    bool logReboot();
    String getRebootLog();
    bool clearRebootLog();
    static void setLastErrorMessage(const char* message);
    static void printBits(uint16_t value);
    void static logDiagnostic(const char* message);
    void manageWiFiBasedOnMemory();
    bool printDiagnosticFile();

    // File management
    static std::vector<String> getFilteredFiles(const char* path, const char* pattern);
    static JsonDocument getFilteredFilesAsJson(const char* path, const char* pattern);

    //Json
    static void printJsonObject(const JsonObject &obj) {
        Serial.println("JSON Object Content:");
        Serial.println("-----------------");
        printJsonValue(obj);
        Serial.println("-----------------");
    }
    
private:
    static String getResetReason(esp_reset_reason_t reason);
    static const char* REBOOT_LOG_FILE;
    static const size_t MAX_LOG_ENTRIES = 50;  // Maximum number of entries in the log file  
};