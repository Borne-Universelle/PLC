#ifndef RENDER_TOOLS_H
#define  RENDER_TOOLS_H

#include "Arduino.h"
#include "Node.h"
#include "borneUniverselle.h"
#define ARDUINOJSON_ENABLE_COMMENTS 1
#include "ArduinoJson.h"

// Visual Indicator keys
#define MAX                         "max"
#define MIN                         "min"

class Render{
    public:
        Render(Node *_node){
            node = _node;
            // Serial.printf("Node name: %s\r\n", node->getName());
            states = doc[NOTIFY_STATES_CHANGED].add<JsonObject>();
            states[HASH] = node->getHash();
           
            descriptor = states[DESCRIPTOR].to<JsonObject>();
        }

        /// @brief 
        /// @param name 
        /// @param value 
        void addProperty(const char *name, uint32_t value){
             descriptor[name] = value;
        }

        void addProperties(JsonDocument doc){
            //JsonObject items = descriptor.add<JsonArray>();
            JsonArray items = descriptor["items"].to<JsonArray>();
            for (JsonObject recette : doc["recettes"].as<JsonArray>()) {
                //items.add(recette);
                items.add(recette["name"]);
            }
        }

        void sendJson(){
            uint16_t size = measureJson(doc);
            char *chain = (char *)malloc(size + 10);

            serializeJson(doc, chain, size);
            chain[size] = 0; 
            Serial.println("Document to send to the socket:");
            // serializeJsonPretty(doc, Serial);
            Serial.println();
            BorneUniverselle::sendTextToClient(chain);
            free(chain);
        }

    private:
        Node *node;
        JsonDocument doc;
        JsonObject descriptor, states;
};

class VisualIndicator: public Render{
    public:
        VisualIndicator(Node *node);
        /// @brief 
        /// @param maxValue 
        void setMaxValue(uint32_t maxValue){ 
            addProperty(MAX, maxValue);
            sendJson();
        }

        void setMinValue(uint32_t minValue){ 
            addProperty(MIN, minValue);
            sendJson();
        }
    
    private:

};

class DropDown: public Render{
    public:
        DropDown(Node *node);

        /* JsonDocument attendu:
        {
            "recettes": [ 
                "chocolat", "fraise"
            ]
        }
        */

        void setItems(JsonDocument doc){
            Serial.println("Received document:");
            // serializeJsonPretty(doc, Serial);
            addProperties(doc);
            sendJson();
        }
        

};
#endif