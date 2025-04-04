#ifndef BORNE_UNIVERSELLE_LIB_H
#define BORNE_UNIVERSELLE_LIB_H

#define ARDUINOJSON_ENABLE_COMMENTS 1

#include <ESPAsyncWebServer.h>
#include "ArduinoJson.h"
#include "WifiManagement/wifimanagment.h"
#include <map>
#include <list>
#include <memory>
#include <Wire.h>
#include <iostream>
#include "Node/Node.h"
#include "MyToolBox/MyToolBox.h" 
#include "PLC_CommonTypes/PLC_CommonTypes.h"
#include "PLC_InterfaceMenu/PLC_InterfaceMenu.h"
#include "PLC_Tools/PLC_Tools.h"
#include "MemoryMonitor/MemoryMonitor.h"
#include "MutexGuard/MutexGuard.h"
#include "PLC_Persistence/PLC_Persistence.h"
#include "MyModbus/MyModbus.h"


class Node;
//class MyModbus;

const char BORNE_UNIVERSELLE_VERSION[] PROGMEM = "Borne Universelle 2.2.0";

#define OTA_URL_SIZE	            80
//#define HEARTBEAT_DELAY           1500L
#define HEARTBEAT_DELAY             500L
#define HEARTHBEAT_TIMEOUT          1500L
#define ABNORMAL_REFRESH_TIME       500
#define JSON_CONFIG_SIZE            4000L
#define SOCKET_MESSAGE_MAX_SIZE     20000
#define MAX_MESSAGES_PENDING        WS_MAX_QUEUED_MESSAGES * 4
#define INTERFACE_PATH_FILE         "/interface.json"

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define NAME_LENGHT                 80
#define MAX_MESSAGE_LENGTH          200

// errors messages send to js

const char JSON_NOT_VALID[] PROGMEM = "JSON is not valid";
const char NO_NAME_KEY[] PROGMEM = "The key Name (project name) is not found";
//const char NO_HARDWARE_KEY_CONFIG[] PROGMEM = "The key hardware is not found in config file";
//const char NO_WIFI_KEY[] PROGMEM = "No config.Wifi key";
const char NO_CONFIG_KEY[] PROGMEM = "No config key";
const char WIFI_NAME_KEY_MISSING[] PROGMEM = "Wifi name ky missing";
const char NO_CHILDREN_KEY_CONFIG[] PROGMEM = "The key children is not found in config file";
const char MODBUS_NOT_INITIALISED[] PROGMEM = "PLC want to create modbus node but Modbus not initialised";



#define NB_DIGITAL_INPUTS           5
#define NB_ANALOG_INPUT             4
#define NB_DIGITAL_OUTPUTS          5
#define NB_ANALOG_OUTPUTS           4
#define MODBUS_ADDRESS_OFFSET       0
#define HARDWARE_FOLDER             "/hardware"
#define WEB_SOCKET_MESSAGE_MAX_SIZE 10000
#define WEB_SOCKET_MESSAGE_MAX_ENTRYS 100

// Json keys
#define PROJECT_TYPE_V0 "BorneUniverselle"
#define HEARTBEAT       "heartbeat"
#define TOO_MUCH_CLIENTS    "tooMuchClients"
#define TRUE_J            "true"
#define FALSE_J           "false"
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
#define TX_TEXT         "tx-text"
#define I2C             "I2C"
#define BU_SDA          "SDA"
#define BU_SCL             "SCL"
#define RX_ADDR         "rx_addr"
#define TX_ADDR         "tx_addr"
#define RS485           "RS485"
#define RX              "rx"
#define TX              "tx" 
#define SPEED           "speed"
#define MODBUS          "Modbus"
#define MODBUS_RTU      "ModbusRTU"
#define TIMEOUT         "timeout"
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
#define SAVE_FILE       "saveFile"
#define DIRECTORY       "directory"
#define FILTER          "filter"
#define PATH            "path"
#define DATA            "data"
#define INITIAL_STATE_LOADED    "initialStatesLoaded"

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
    size_t len; // 
    uint32_t timeOfOrigine;
    AsyncWebSocketClient *client;
};

struct NOTIF_MESSAGE{
    uint8_t severity;
    char *message;
};

// Suppresseur personnalisé pour NOTIF_MESSAGE
struct NotifMessageDeleter {
    void operator()(NOTIF_MESSAGE* m) const {
        if (m) {
            if (m->message) {
                free(m->message);
                m->message = nullptr;
            }
            delete m;
        }
    }
};

// Suppresseur personnalisé pour WEB_SOCKET_MESSAGE
struct WebSocketMessageDeleter {
    void operator()(WEB_SOCKET_MESSAGE* c) const {
        if (c) {
            if (c->data) {
                free(c->data);
                c->data = nullptr;
            }
            delete c;
        }
    }
};

using NotifMessagePtr = std::unique_ptr<NOTIF_MESSAGE, NotifMessageDeleter>;
using WebSocketMessagePtr = std::unique_ptr<WEB_SOCKET_MESSAGE, WebSocketMessageDeleter>;

class BorneUniverselle{
	public:
        BorneUniverselle(); 
        static BorneUniverselle* getInstance();
        bool setName(const char *name, bool check = true);
        bool setNameImpl(const char *name, bool check = true);
        char *getName();
        char *getNameImpl();
        
        bool isWifiConnectionTimeout();
        WifiItem getNextNetwork();

        unsigned char getNbWifiItems();
        void setOTA_url(const char *url);
        void handleWebSocketMessage();
        void checkHeartbeat();
        void updateEarthbeatTimeout();
        void setClientConnected(bool status, AsyncWebSocketClient *client);
        bool clientQueueIsFull();
        void setShowHeartbeatMessages(bool status);
        bool isClientConnected();
        bool getWifiStatus();
        uint32_t getWifiStartupTime();
        void setWifiConnected(bool status);
        bool connectWifi(WifiItem item); 
        bool connectWifiImpl(WifiItem item); 
        void eraseWifis();
        void refresh();
        static Node *findNode(const char *context, uint32_t hash);
        Node *findNodeImpl(const char *context, uint32_t hash);
        bool notifyWebClient(bool all = false);
        static void prepareMessage(uint8_t type, const char *text); // send message to web socket
        void prepareMessageImpl(uint8_t type, const char * text);
        bool getIsKinconyA8S();
        void printConfigFile();
        bool sendMessage();
        static bool isPlcBroken();
        bool isPlcBrokenImpl();
        void setPlcBrokenImpl(const char *context);  
        static void setPlcBroken(const char *context);
        void tooMuchClients(AsyncWebSocketClient *client);
        bool handleNodesChange(JsonDocument& socketDoc);
        void handleDirectoryRequest(JsonDocument& socketDoc);
        bool handleSaveFile(JsonDocument& socketDoc);
        bool getIsWifiParsedOk();
        void handleWebSocket(void *_arg, unsigned char *_data, size_t _len, AsyncWebSocketClient *_client);
        void clearInputschanged(); // if no client connected
        static void refresHardwareInputs();
        void refresHardwareInputsImpl();
        bool isWebSocketMessagesListMoreThanHalf();
        bool isAllInputsReadOnce();
        bool sendTextToClientImpl(char *text);
        static bool sendTextToClient(char *text);
        float getConfigVersion(){
            return projectVersion;
        };
        void setShowModbusMessages(bool status);
        bool getModbusStatusMessages();
        void showMessage(Node *node, const char *text);
        static void modbusMessageHandler(uint8_t severity, const char* message);
        static void setInitialStateLoadedCallback(std::function<void()> callback);

        char name[NAME_LENGHT];
        static char defaultName[NAME_LENGHT];
        static char ota_url[OTA_URL_SIZE];
        uint32_t  wifiStartupTime = 0;
        char currentNetworkId = -1;
        unsigned char nbWifiItems = 0;
        bool showModbusMessages = false;
	
		std::map<unsigned char, WifiItem> wifiItemsMapBu;

		bool wifiParsedOk = true;
		static bool otaPending;
        bool wificonnected = false;

        bool heartbeatReceive = false;
        uint32_t lastHearbeatReceive = 0, lastHeartbeatSend = 0;
        uint8_t nbTimeouts = 0;
        bool clientconnected = false;
        bool showHeartbeatMessages = false;
         AsyncWebSocketClient *client = nullptr;
        uint32_t heartbeatTimeout = 0;

        bool inputsCache[NB_DIGITAL_INPUTS] = {0};

        std::map<std::string, int> m;
        std::map<uint32_t, Node *> nodesMap;

       // static bool setHardware(JsonDocument& doc, const char *, bool check = true);
        void sendHeartbeat(bool reset = false);
        bool i2cInit(JsonDocument& contextDoc);
        bool RS485Init(JsonDocument& contextDoc);
        bool modbusInit(JsonDocument& contextDoc);
        void unableToFindKeyImpl(char *context, char *key);
        void unableToFindKey(char *context, char *key);
        bool createRxBoolNode(char *name, char *parentName, uint16_t id, uint32_t *hash, JsonDocument& contextDoc, JsonObject hardSection, char *type, uint16_t refreshInterval, uint16_t webRefreshInterval, JsonDocument& descriptor, bool check); // c'est ici que l'on créé les nodes !
        bool createTxBoolNode(char *name, char *parentName, uint16_t id, uint32_t *hash, JsonDocument& contextDoc, JsonObject hardSection, char *type, uint16_t webRefreshInterval, JsonDocument& descriptor, bool check);
        bool createVirtualNode(char *name, char *sectionName, uint16_t id, char *type, uint32_t *hash, JsonDocument& descriptor, bool check);
        bool createModbusNode(char *nodeName, char *sectionName, uint16_t id, uint32_t *hash, uint16_t slaveAddress, JsonDocument& contextDoc,
                                     JsonObject hardSection, char *type, uint16_t refreshInterval,  uint16_t webRefreshInterval, JsonDocument& descriptor, bool check);
        // void modbusTask();
        bool parseConfig(JsonDocument& doc, bool check = true);
        static bool parseWifis(JsonDocument& doc, bool check);
        bool parseWifisImpl(JsonDocument& doc, bool check);
        bool parseHardwares(JsonDocument& doc, bool check, float version);
        uint8_t addWifiItem(const char *ssid, const char *pwd, const char *connexionName, IPAddress ip, IPAddress dns, IPAddress gateway, IPAddress mask, bool dhcp);
        uint8_t addWifiItem2(const char *ssid, const char *pwd, const char *connexionName, bool dhcp);
        bool saveParameters(const JsonDocument &configDoc);
        bool handleGetValue(uint32_t hash);
        bool handleGetAllValues();
        bool addNodeToNodeObject(Node *node, JsonObject *nodeObject);
        bool processMessage(WEB_SOCKET_MESSAGE *webSocketMessage);
        bool isI2CInitialised = false, isRs485Initialised = false, isModbusInitialised = false;
        HardwareSerial *myRS485 = nullptr;
        MyModbus& myModbus; // singleton 
        bool isKinconyA8S = true;
        bool plcBroken = false;
        uint32_t clientConnectedAt;
        bool isLastMessageFatal;
        static SemaphoreHandle_t webSocketMutex;
        std::list<NotifMessagePtr> notifMessagesList;
        std::list<WebSocketMessagePtr> webSocketMessagesList;
        static SemaphoreHandle_t notifMutex;
        bool allInputsReadOnce = false;
        bool psRamAvailable = false;
        bool newClientConnected = false;
        float projectVersion = 0;
        bool noPLC_BrokenMessage = false;

        static const uint8_t MAX_MUTEX_ATTEMPTS = 10;  // Nb max de tentatives pour acquérir le mutex

           // Callback enregistrée
        static std::function<void()> initialStateLoadedCallback;
        char hearbeatChain[256];

        String messageBuffer; // buffer pour la réception de message du web socket en plusieurs morceaux
        size_t expectedSize = 0;
        void keepWebSocketMessage(const char *data, void *arg, size_t len, AsyncWebSocketClient *_client);


    private:
        void addCustomDescriptor(Node *Node, JsonObject *nodeObject);
        static BorneUniverselle* mainInstance;
        static SemaphoreHandle_t instanceMutex;
        
};
#endif