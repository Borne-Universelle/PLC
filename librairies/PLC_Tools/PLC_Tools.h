#pragma once
#define ARDUINOJSON_ENABLE_COMMENTS 1
#include <vector>
#include <Arduino.h>
#include <LittleFS.h>
#include "ArduinoJson.h"
#include "esp_system.h"
#include "PLC_Persistence.h"

// Json key
#define REASON  "reason"

using namespace ArduinoJson;

class PLC_Tools {

private:
    // Json On ne peur pas metttre les 2 fonctions dans le cpp
    static void printJsonValue(const JsonVariant &value, int indent = 0) {
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

public:
    static bool logReboot();
    static String getRebootLog();
    static bool clearRebootLog();
    static void setLastErrorMessage(const char* message);
    static void printBits(uint16_t value);

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