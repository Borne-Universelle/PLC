#pragma once

#include <vector>
#include <Arduino.h>
#include <LittleFS.h>
#include "ArduinoJson.h"
#include "esp_system.h"

// Json key
#define REASON  "reason"

class PLC_Tools {
public:
    static void logReboot();
    static String getRebootLog();
    static bool clearRebootLog();
    static void setLastErrorMessage(const char* message);

    // File management
    static std::vector<String> getFilteredFiles(const char* path, const char* pattern);
    static JsonDocument getFilteredFilesAsJson(const char* path, const char* pattern);
    
private:
    static String getResetReason(esp_reset_reason_t reason);
    static const char* REBOOT_LOG_FILE;
    static const size_t MAX_LOG_ENTRIES = 50;  // Maximum number of entries in the log file
};