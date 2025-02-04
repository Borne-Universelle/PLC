#pragma once

#include <string>
#include <vector>
#include <ArduinoJson.h>
#include <LittleFS.h>

// Json keys
#define PAGES           "pages"
#define PAGE            "page"
#define PAGE_NAME       "PageName"
#define SECTIONS        "sections"
#define SECTION_NAME    "SectionName"
#define NODES_LIST      "NodesList"
#define NODE_NAME       "name"
#define HASH_NAME       "hash"

struct MenuNode {
    uint32_t hash;
    std::string name;
    std::string sectionName;
    bool presentInConfigFile;
};

class PLC_InterfaceMenu {
public:
    PLC_InterfaceMenu();
    virtual ~PLC_InterfaceMenu();
    bool parseFile(const char* jsonContent);
    MenuNode* findNodeByHash(uint32_t hash);

private:
    std::vector<MenuNode> nodes;
    bool parseSection(JsonObject section);
    
};