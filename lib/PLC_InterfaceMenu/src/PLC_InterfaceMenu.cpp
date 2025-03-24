#include "PLC_InterfaceMenu/PLC_InterfaceMenu.h"

PLC_InterfaceMenu::PLC_InterfaceMenu() : nodes() {  // Initialisation explicite du vector
    Serial.println(F("PLC_InterfaceMenu initialized"));
}

PLC_InterfaceMenu::~PLC_InterfaceMenu() {
    nodes.clear();
}

bool PLC_InterfaceMenu::parseFile(const char* filePath) {
    nodes.clear();

    if (!LittleFS.begin()) {
        Serial.println(F("Erreur de montage LittleFS"));
        return false;
    }
    Serial.println(F("LittleFS monté avec succès"));
    
    File file = LittleFS.open(filePath, "r");
    if (!file) {
        Serial.printf("Failed to open %s\n", filePath);
        LittleFS.end();
        return false;
    }

    JsonDocument doc;
    DeserializationError error = deserializeJson(doc, file);
    file.close();
    LittleFS.end();
    
    if (error) {
        char buff[512];
        const char* errorMsg = error.c_str();
        
        Serial.println(F("JSON parsing error detected"));
        Serial.printf("Error code: %d\n", static_cast<int>(error.code()));
        
        if (errorMsg) {
            Serial.printf("Error message: %s\n", errorMsg);
            snprintf(buff, sizeof(buff), "%lu:: config file: deserializeJson() failed: %s", 
                    (unsigned long)millis(), errorMsg);
        } else {
            Serial.println(F("No error message available"));
            snprintf(buff, sizeof(buff), "%lu:: config file: deserializeJson() failed with unknown error", 
                    (unsigned long)millis());
        }
        return false;
    }

    Serial.println(F("JSON parsing successful - parsing nodes"));
    // Parcourir les pages
    JsonArray pages = doc[PAGES].as<JsonArray>();
    Serial.printf("Found %u pages\n", pages.size());



    for (JsonObject page : pages) {
        if (page[PAGE_NAME].isNull()){
            Serial.printf("PLC_InterfaceMenu::parseFile one of pages hasn't key %s\r\n", PAGE_NAME);
            return false;
        }
        String pageName = page[PAGE_NAME].as<String>();
        Serial.printf("Page: %s\n", pageName.c_str());

        if (!page[SECTIONS].is<JsonArray>()){
            Serial.printf("PLC_InterfaceMenu::page %s hasn't key %s\r\n", pageName.c_str(), SECTIONS);
            return false;
        }

        for (JsonObject section : page[SECTIONS].as<JsonArray>()) {
            if (section[SECTION_NAME].isNull()){
                Serial.printf("PLC_InterfaceMenu::parseSection one of sections of page %s hasn't key %s\r\n", SECTION_NAME, pageName.c_str());
                return false;
            }
            
            const char* sectionName = section[SECTION_NAME];
            Serial.printf("Will parse section: %s\n", sectionName);
            if (!parseSection(section)){
                return false;
            }
        }
    }
    return true;
}

bool PLC_InterfaceMenu::parseSection(JsonObject section) {
   
    const char* sectionName = section[SECTION_NAME];

    if (!section[NODES_LIST].as<JsonArray>()){
        Serial.printf("PLC_InterfaceMenu: section %s hasn't array key %s\r\n", sectionName, NODES_LIST);
        return false;
    }

    JsonArray nodesList = section[NODES_LIST].as<JsonArray>();
    Serial.printf("Found %d nodes in section %s\n", nodesList.size(), sectionName);


    for (JsonObject node : nodesList) {
        MenuNode menuNode;
        menuNode.presentInConfigFile = false;
        menuNode.sectionName = sectionName;

        if (!node[HASH_NAME].isNull()){
            menuNode.hash = node[HASH_NAME].as<uint32_t>();
        } else {
            Serial.printf("For section %s, one of nodes hasn't key hash\r\n", sectionName);
            return false;
        }

        if (!node[NODE_NAME].isNull()){
            menuNode.name = node["name"].as<const char*>();
        } else {
            Serial.printf("For section %s, hash %lu, the key %s doesn't exist\r\n", sectionName, menuNode.hash, NODE_NAME);
            return false;
        }
           
        nodes.push_back(menuNode);
    }

    return true;
}

MenuNode* PLC_InterfaceMenu::findNodeByHash(uint32_t hash) {
    for (auto& node : nodes) {
        if (node.hash == hash) {
            return &node;
        }
    }
    return nullptr;
}