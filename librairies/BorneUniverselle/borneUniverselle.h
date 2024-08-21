#ifndef BORNE_UNIVERSELLE_LIB_H
#define BORNE_UNIVERSELLE_LIB_H

#include <ESPAsyncWebServer.h>
#include <ModbusRTU.h>
#define ARDUINOJSON_ENABLE_COMMENTS 1
#include "ArduinoJson.h"

#include <ModbusRTU.h>
#include "MyToolBox.h"
#include "wifimanagment.h"
#include <map>	
#include <LittleFS.h>
#include "Node.h"
#include <Wire.h>
#include <iostream>


//#define DESCRIPTOR_INCLUDED // permet de traiter le descriptor dans les message par le websocket

#define OTA_URL_SIZE	            80
//#define HEARTBEAT_DELAY         1500L
#define HEARTBEAT_DELAY         500L
#define HEARTHBEAT_TIMEOUT      1500L
#define JSON_CONFIG_SIZE        4000L
#define MESSAGE_SIZE            20000
#define MAX_MESSAGES_PENDING    100

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define NAME_LENGHT                 80

// errors messages send to js
#define JSON_NOT_VALID              "JSON is not valid"
#define NO_NAME_KEY                 "The key Name (project name) is not found"
#define NO_HARDWARE_KEY_CONFIG      "The key hardware is not found in config file"
#define NO_WIFI_KEY                 "No config.Wifi key"
#define NO_CONFIG_KEY               "No config key"
#define WIFI_NAME_KEY_MISSING       "Wifi name ky missing"
#define NO_CHILDREN_KEY_CONFIG      "The key children is not found in config file"


#define NB_DIGITAL_INPUTS           5
#define NB_ANALOG_INPUT             4
#define NB_DIGITAL_OUTPUTS          5
#define NB_ANALOG_OUTPUTS           4
#define MODBUS_ADDRESS_OFFSET       0
#define HARDWARE_FOLDER             "/hardware"

// message severity
#define ERROR                       0
#define WARNING                     1
#define INFO                        2
#define SUCCESS                     3

// Json keys
#define HEARTBEAT       "heartbeat"
#define TOO_MUCH_CLIENTS    "tooMuchClients"
#define TRUE_J            "true"
#define FALSE_J           "false"
//#define INPUT_CHANGE    "intputChange_"  
//#define OUTPUT_CHANGE_  "outputchange_"
#define CONFIG          "config"
#define DESCRIPTION     "desc"
#define NAME            "name"
#define HARDWARE        "hardware"
#define WIFI            "Wifi"
#define SSID_           "ssid"
#define PWD_            "pwd"
#define IP              "ip"
#define DHCP            "dhcp"
#define DNS_            "dns"
#define GATEWAY_        "gateway"
#define MASK_           "mask"
#define PARAMETERS      "parameters"
#define OTA_URL         "ota_url"
#define STATUS          "status"
#define TAG             "tag"
#define CHILDREN        "children"
#define TYPE            "type"
#define ID              "id"
#define PIN             "pin"
#define ADDR            "addr"
#define INPUTS_INVERTED "inputsInverted"
#define HASH            "hash"
#define VALUE           "value"
#define NOTIFY_STATES_CHANGED    "states"
#define VIRTUAL         "virtual"
#define RX_BOOL         "rx-bool"
#define TX_BOOL         "tx-bool"
#define PF8574_RX_BOOL  "PF8574_rx-bool"
#define PF8574_TX_BOOL  "PF8574_tx-bool"
#define RX_UINT16       "rx-uint16"
#define TX_UINT16       "tx-uint16"
#define RX_UINT32       "rx-uint32"
#define TX_UINT32       "tx-uint32"
#define TX_FLOAT        "tx-float"
#define RX_FLOAT        "rx-float"
#define I2C             "I2C"
#define SDA             "SDA"
#define SCL             "SCL"
#define RX_ADDR         "rx_addr"
#define TX_ADDR         "tx_addr"
#define RS485           "RS485"
#define RX              "rx"
#define TX              "tx" 
#define SPEED           "speed"
#define MODBUS_READ_COIL "ModbusReadCoil"
#define MODBUS_WRITE_COIL "ModbusWriteCoil"
#define MODBUS_READ_HOLDING_REGISTER    "ModbusReadHoldingRegister"
#define MODBUS_WRITE_HOLDING_REGISTER   "ModbusWriteHoldingRegister"
#define MODBUS_READ_INPUT_REGISTER      "ModbusReadInputRegister"
#define MODBUS_READ_MULTIPLE_INPUTS_STATUS "ModbusReadMultipleInputsStatus"
#define MODBUS_READ_DOUBLE_HOLDING_REGISTER "ModbusReadDobbleHoldingRegister"
#define MODBUS_WRITE_DOUBLE_HOLDING_REGISTER "ModbusWriteDobbleHoldingRegister"
#define MODBUS_WRITE_MULTIPLE_COILS  "ModbusWriteMultipleCoils" // function 0F (15)
#define NB_VALUES       "nb_values"
#define ADDRESS         "address"
#define OFFSET          "offset"
#define REGISTERS_OFFSET    "registersOffset" 
#define REFRESH_INTERVAL    "refreshInterval"
#define WEB_UPDATE_INTERVAL "webUpdateInterval" 
#define ALL_STATES_REQUEST "allStatesRequest"  
#define FATAL_MESSAGE   "PLC IS BROKEN !!!!"
#define GET_VALUE       "get"
#define DESCRIPTOR      "descriptor"
#define GET_DESCRIPTOR  "get_descriptor"

struct HARDWARE_ITEM{
    uint8_t id;
    uint8_t pin;
    bool direction; // if true -> output
};

struct HARDWARE_MODEL{
    uint8_t nbInputs;
    uint8_t nbOutputs;
    HARDWARE_ITEM nodes[32];
    char name[NAME_LENGHT];
};

struct WEB_SOCKET_MESSAGE{
    void * arg;
    uint8_t *data;
    size_t len;
    AsyncWebSocketClient *client;
};

struct NOTIF_MESSAGE{
    uint8_t severity;
    char *message;
};

class BorneUniverselle{
	public:

        BorneUniverselle();
        static bool setName(const char *name, bool check = true);
        char *getName();
		
        static char *getOTA_Url();
        
        static bool isWifiConnectionTimeout();
        static WifiItem getNextNetwork();

        unsigned char getNbWifiItems();
        void setOTA_url(const char *url);
        void handleWebSocketMessage();
        void checkHeartbeat();
        void updateEarthbeatTimeout();
        void setClientConnected(bool status, AsyncWebSocketClient *client);
        bool clientQueueIsFull();
        void setShowHeartbeatMessages(bool status);
        static bool isClientConnected();
        bool getWifiStatus();
        uint32_t getWifiStartupTime();
        void setWifiConnected(bool status);
        static bool connectWifi(WifiItem item); 
        void eraseWifis();
        void refresh();
        static Node *findNode(const char *context, uint32_t hash);
        bool notifyWebClient(bool all = false);
        static void prepareMessage(uint8_t type, const char *text); // send message to web socket
        static bool getIsKinconyA8S();
        void printConfigFile();
        void sendMessage();
        bool isPlcBroken();
        static void setPlcBroken(const char *context);
        void tooMuchClients(AsyncWebSocketClient *client);
        void closeActualConnection(AsyncWebSocketClient *newClient);
        bool handleNodesChange(JsonDocument socketDoc);
        bool getIsWifiParsedOk();
        void keepWebSocketMessage(void *arg, uint8_t *data, size_t len,  AsyncWebSocketClient *client);
        void clearInputschanged(); // if no client connected
        static void refresHardwareInputs();
        bool isWebSocketMessagesListMoreThanHalf();
        bool isAllInputsReadOnce();
        static void sendTextToClient(char *text);
        static bool isNewClientConnected();
        static void clearNewClientConnected();

    private:
        static char name[NAME_LENGHT];
        static char ota_url[OTA_URL_SIZE];
        static uint32_t  wifiStartupTime;
        static char  currentNetworkId;
        static unsigned char nbWifiItems;
	
		static std::map<unsigned char, WifiItem> wifiItemsMapBu;

		bool wifiParsedOk = true;
		static bool otaPending;
        static bool wificonnected;

        bool heartbeatReceive;
        uint32_t lastHearbeatReceive = 0, lastHeartbeatSend = 0;
        uint8_t nbTimeouts;
        static bool clientconnected;
        bool showHeartbeatMessages = false;
        static AsyncWebSocketClient *client;
        uint32_t heartbeatTimeout = 0;

        bool inputsCache[NB_DIGITAL_INPUTS] = {0};

        static char urlTest[10];
        //std::map<std::string, int> m;
        static std::map<uint32_t, Node *> nodesMap;

        static bool setHardware(JsonDocument doc, const char *, bool check = true);
        void sendHeartbeat(bool reset = false);
        static bool i2cInit(JsonDocument contextDoc);
        static bool RS485Init(JsonDocument contextDoc);
        static bool modbusInit(JsonDocument contextDoc);
        static void unableToFindKey(char *context, char *key);
        bool createRxBoolNode(char *name, char *parentName, uint32_t *hash, JsonDocument contextDoc, JsonObject hardSection, char *type, uint16_t refreshInterval, uint16_t webRefreshInterval, JsonDocument descriptor, bool check); // c'est ici que l'on créé les nodes !
        bool createTxBoolNode(char *name, char *parentName, uint32_t *hash, JsonDocument contextDoc, JsonObject hardSection, char *type, uint16_t webRefreshInterval, JsonDocument descriptor, bool check);
        bool createVirtualNode(char *name, char *sectionName, char *type, uint32_t *hash, JsonDocument descriptor, bool check);
        bool createModbusNode(char *nodeName, char *sectionName, uint32_t *hash, uint16_t slaveAddress, JsonDocument contextDoc,
                                     JsonObject hardSection, char *type, uint16_t refreshInterval,  uint16_t webRefreshInterval, JsonDocument descriptor, bool check);
        void modbusTask();
        bool parseConfig(JsonDocument doc, bool check = true);
        static bool parseWifis(JsonDocument doc, bool check);
        bool parseHardwares(JsonDocument doc, bool check);
        static uint8_t addWifiItem(const char *ssid, const char *pwd, const char *connexionName, IPAddress ip, IPAddress dns, IPAddress gateway, IPAddress mask, bool dhcp);
        static uint8_t addWifiItem2(const char *ssid, const char *pwd, const char *connexionName, bool dhcp);
        void saveParameters(JsonDocument configDoc);
        void handleGetValue(uint32_t hash);
        void handleGetAllValues();
        bool addNodeToNodeObject(Node *node, JsonObject *nodeObject);
        static bool isI2CInitialised, isRs485Initialised, isModbusInitialised;
        static HardwareSerial *myRS485;
        static ModbusRTU *modbus; 
        static bool isKinconyA8S;
        static bool plcBroken;
        uint32_t clientConnectedAt;
        static bool isLastMessageFatal;
        //std::list <WEB_SOCKET_MESSAGE *> webSocketMessagesList; 
        LinkedList <WEB_SOCKET_MESSAGE *> webSocketMessagesList;
        //static std::list <NOTIF_MESSAGE*> notifMessagesList;
        static LinkedList <NOTIF_MESSAGE *> notifMessagesList;
        bool allInputsReadOnce = false;
        bool psRamAvailable = false;
        static bool newClientConnected;
};
#endif