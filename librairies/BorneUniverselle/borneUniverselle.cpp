#include "BorneUniverselle.h"

bool BorneUniverselle::otaPending;
char  BorneUniverselle::ota_url[OTA_URL_SIZE];
std::map<unsigned char, WifiItem> BorneUniverselle::wifiItemsMapBu;
uint32_t  BorneUniverselle::wifiStartupTime = 0;
bool BorneUniverselle::wificonnected = false;
char  BorneUniverselle::currentNetworkId = -1;
unsigned char BorneUniverselle::nbWifiItems = 0;
char BorneUniverselle::urlTest[10];
AsyncWebSocketClient * BorneUniverselle::client;
char BorneUniverselle::name[NAME_LENGHT];
bool BorneUniverselle::isI2CInitialised = false;
bool BorneUniverselle::isRs485Initialised = false;
bool BorneUniverselle::isModbusInitialised = false;
HardwareSerial *BorneUniverselle::myRS485;
ModbusRTU *BorneUniverselle::modbus;
bool BorneUniverselle::isKinconyA8S = false;
bool BorneUniverselle::isLastMessageFatal = false;
bool BorneUniverselle::plcBroken = false;
bool BorneUniverselle::clientconnected = false;
bool BorneUniverselle::newClientConnected = false;

//std::list <NOTIF_MESSAGE*>  BorneUniverselle::notifMessagesList;
LinkedList <NOTIF_MESSAGE*> BorneUniverselle::notifMessagesList({});
//LinkedList <WEB_SOCKET_MESSAGE*> webSocketMessagesList;
std::map<uint32_t, Node *> BorneUniverselle::nodesMap;

BorneUniverselle::BorneUniverselle()
 : webSocketMessagesList(LinkedList<WEB_SOCKET_MESSAGE *>([](WEB_SOCKET_MESSAGE *c){ delete  c; }))
  // notifMessagesList(LinkedList <NOTIF_MESSAGE*>([](NOTIF_MESSAGE *c){delete c;}))
 {
     if (psramInit()){
        Serial.println(F("PSRAM is available !!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
        psRamAvailable = true;
    } else {
         Serial.println(F("PSRAM is not available !"));
    }

    Serial.println(F("Constructeur de BorneUniverselle"));
    File file = LittleFS.open("/config.json", FILE_READ);
 
    if (!file){
        Serial.println(F("Config file open error"));
        return;
    }

    JsonDocument configDoc;
    DeserializationError error = deserializeJson(configDoc, file);
    file.close();
    char buff[1000];

    if (error) {
        sprintf(buff, "%lu:: config file: deserializeJson() failed: ", millis());
        strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
        setPlcBroken(buff);
        return;
        } else {// json error
            if (configDoc.containsKey(CONFIG)){
                if (!parseConfig(configDoc, false)){
                    setPlcBroken("The config file is not good");
                   return;
                }
            } else {
                unableToFindKey((char *)"config.json file",(char *)TOSTRING(CONFIG) );
            }
        }
 
    nbTimeouts = 0;
    uint32_t heap_size = ESP.getHeapSize();
    uint32_t free_heap = ESP.getFreeHeap();
   
    Serial.printf("Heap size: %lu, Free heap. %lu\r\n", heap_size, free_heap);
    uint32_t totalPsRam = ESP.getPsramSize();
    uint32_t freePsRam = ESP.getFreePsram();

    Serial.printf("Total Ps-ram: %lu, free Ps-ram: %lu\r\n", totalPsRam,freePsRam);

    Serial.printf("End of BorneUniversel constuctor, nb nodes: %u\r\n", nodesMap.size());
}

bool BorneUniverselle::isPlcBroken(){
    return plcBroken;
}

void BorneUniverselle::setPlcBroken(const char *context){
    if (!plcBroken){
        Serial.printf("PLC is broken, context: %s\r\n", context);
        prepareMessage(ERROR, FATAL_MESSAGE);
        isLastMessageFatal = true;
    }
    plcBroken = true;
}

void BorneUniverselle::unableToFindKey(char *_context, char *_key){
    char message[256];
    sprintf(message, "unableToFindKey:: In context: %s, Unable to find key: %s\r\n", _context, _key);
    prepareMessage(ERROR, message);
    setPlcBroken(message);
}

void BorneUniverselle::refresh(){
    if ((isClientConnected() && client->queueIsFull()) || isWebSocketMessagesListMoreThanHalf()){
            return;
    }

    uint32_t start = millis();
    uint32_t lastCheck = millis();
    //Serial.printf("%u:: start Refresh\r\n", millis());
    std::map<uint32_t, Node *>::iterator it;
    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        if (PF8574BooleanInputNode::isInterrupt()){
            return;
        }
        //Serial.printf("Will refresh node key: %d\r\n", it->first);
        Node *node = it->second;
        if (node->getMode() == INPUT_MODE){
            InputNode *inputNode = (InputNode *)node;
            if (millis() - inputNode->getLastRefresh() < inputNode->getRefreshInterval()){
                //Serial.printf("On saute le node %s\r\n", node->getName());
                continue;
            } else {
                inputNode->setLastRefresh(millis());
            }
        }

        uint32_t hash;
        if (!node->refresh()){
            char mess[1024];
            hash = node->getHash();
            sprintf(mess, "refresh:: error on refresh node %lu:", hash);
            prepareMessage(WARNING, mess);
        }

        if (millis() - lastCheck > MAX_MODBUS_TRANSACTION_TIME){   
            // on a peut etre reçu un hearbeat
            //if (!heartbeatReceive && !webSocketMessagesList.empty()){
            if (!heartbeatReceive && !webSocketMessagesList.isEmpty()){
                if (showHeartbeatMessages){
                    Serial.println(F("Refresh is too long, will check Websocket message"));
                }
                handleWebSocketMessage();
            }

            checkHeartbeat();
            lastCheck = millis();
            yield();
        }

        if ((isClientConnected() && client->queueIsFull()) || isWebSocketMessagesListMoreThanHalf()){
            return;
        }
    } // for 

    if ( millis() - start > 1000){
        Serial.printf("%lu::Total refresh time: %lu (wait time included)\r\n", millis(), millis() - start);
    }
    //Serial.print("A");   
}

bool BorneUniverselle::isAllInputsReadOnce(){
    bool status = true;
    if (!allInputsReadOnce){
        std::map<uint32_t, Node *>::iterator it;
        for (it = nodesMap.begin(); it != nodesMap.end(); it++){
            Node *node = it->second;
            if (node->getMode() == INPUT_MODE){
                InputNode *inputNode = (InputNode *)node;
                if (inputNode->getLastRefresh() == 0){
                    status = false;
                    break;
                }
            }
        }
        if (status){
            allInputsReadOnce = true;
        }
    }

    return allInputsReadOnce;
}

void BorneUniverselle::refresHardwareInputs(){
    std::map<uint32_t, Node *>::iterator it;
    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        //Serial.printf("Will refresh node key: %d\r\n", it->first);
        Node *node = it->second;
        if (node->getMode() == INPUT_MODE && node->classType() == CLASS_PFC8574_BOOLEAN_INPUT_NODE){
            //InputNode *inputNode = (InputNode *)node;
            node->refresh();
        }
     }
}
 
bool BorneUniverselle::getWifiStatus(){
    return wificonnected;
}

void BorneUniverselle::setWifiConnected(bool status){
    wificonnected = status;
}

bool BorneUniverselle::isWifiConnectionTimeout(){
	if (!wificonnected && millis() - wifiStartupTime > TIMEOUT_WIFI){
		Serial.printf("%lu:: Wifi connection timeout\r\n", millis());
		return true;
	} else {
		return false;
	}
}

uint32_t  BorneUniverselle::getWifiStartupTime(){
	return wifiStartupTime;
}

WifiItem BorneUniverselle::getNextNetwork(){
	currentNetworkId += 1;
	
	if (currentNetworkId >= nbWifiItems){
		currentNetworkId = 0;
	}

	Serial.printf("Current wifi: %s, item: %d\r\n", wifiItemsMapBu[currentNetworkId].connectionName, currentNetworkId);
	return wifiItemsMapBu[currentNetworkId];	
}

bool BorneUniverselle::connectWifi(WifiItem currentWifi){
    WiFi.disconnect(true, true);
    Serial.printf("Try to connect to: %s, SSID: %s, PWD: %s\r\n", currentWifi.connectionName, currentWifi.SSID, currentWifi.PWD);
    Serial.flush();
	if (!currentWifi.dhcp){   
		if (!WiFi.config(currentWifi.ip, currentWifi.gateway, currentWifi.mask, currentWifi.dns, currentWifi.dns)) {
		  Serial.println(F("STA Failed to configure"));
			return false;
		} else {
			MyToolBox::printIPAddress(", ip", currentWifi.ip);
			MyToolBox::printIPAddress(", dns", currentWifi.dns);
			MyToolBox::printIPAddress(", gateway", currentWifi.gateway);
			MyToolBox::printIPAddress(", mask", currentWifi.mask, true);
		}
	} else {
		Serial.println(F("Wifi is with DHCP"));
	}

	WiFi.begin(currentWifi.SSID, currentWifi.PWD);
    wifiStartupTime = millis();
    return true;
}

unsigned char BorneUniverselle::getNbWifiItems(){
    Serial.printf("getNbWifiItems: %d\r\n", wifiItemsMapBu.size());
	return wifiItemsMapBu.size();
}

char *BorneUniverselle::getOTA_Url(){
   
	return urlTest;
}

void BorneUniverselle::setOTA_url(const char *url){
	//Serial.printf("New url for fimrware update will be saved in persistant parameters: %s\r\n", url);
	//saveParameters();
}

void BorneUniverselle::saveParameters(JsonDocument configDoc){
    File file = LittleFS.open("/config.json", FILE_WRITE);
    if (!file) {
        Serial.println(F("Error opening file for writing"));
        return;
    }

    serializeJson(configDoc, file);
    
   // Serial.printf("config file saved: %s \r\n", serializeJson(configDoc, file) ? "with succes" : "WITH ERROR");
   Serial.println(F("Config file saved with success"));
}

void BorneUniverselle::setClientConnected(bool status, AsyncWebSocketClient *_client){
    clientconnected = status;
    if (status){
        client = _client;
        clientConnectedAt = millis();
        lastHeartbeatSend = 0; // pour forcer l'envoi d'un hearbeat
        Serial.printf("%lu:: WebSocket new connection %lu from %s\n", millis(), client->id(), client->remoteIP().toString().c_str()); 
         // First connection
        heartbeatTimeout = millis() + HEARTHBEAT_TIMEOUT;
        clientconnected = true; // Pour que la logique metier puisse capter la nouvelle connecxion
        newClientConnected = true;
        if (isLastMessageFatal){
            prepareMessage(ERROR, FATAL_MESSAGE);
        }

    } else {
        // client disconnected`
         Serial.printf("%lu:: Current client just disconnect\r\n", millis());
        if (client != nullptr){     
            // client->close();  // De temps en temp cela plante le EST
        }
        client = nullptr;
        while (!webSocketMessagesList.isEmpty()){
            WEB_SOCKET_MESSAGE *webSocketMessage = webSocketMessagesList.front();
            free(webSocketMessage->data);
            //delete webSocketMessage;
            //webSocketMessagesList.pop_front();
            webSocketMessagesList.remove(webSocketMessage);
        }

        while(!notifMessagesList.isEmpty()){
            NOTIF_MESSAGE *notif = notifMessagesList.front();
            free(notif->message);
            notifMessagesList.remove(notif);
        }
    }
}

void BorneUniverselle::closeActualConnection(AsyncWebSocketClient *newClient){
    client->close();
    delay(1000);
    Serial.println(F("Receive a new connection: close the actual and keep the new one"));
    client = newClient;
}

bool BorneUniverselle::isClientConnected(){
    return clientconnected;
}

void BorneUniverselle::sendHeartbeat(bool reset){
    JsonDocument doc;
	doc[HEARTBEAT] 	= TRUE_J;
	
 	char chain[256];
  	serializeJson(doc, chain);
    //Serial.println(chain);

    if (client != NULL && isClientConnected()){
        sendTextToClient(chain);
        lastHeartbeatSend = millis();
        // Serial.printf("nextHeartbeatToSend: %d\r\n", lastHeartbeatSend + HEARTBEAT_DELAY);
        if (reset && heartbeatReceive){
            heartbeatReceive = false;
        }
        
        if (showHeartbeatMessages){
            Serial.printf("%lu:: Heartbeat sent\r\n", millis());
        } 

        if  (heartbeatTimeout - millis() < 500 || millis() > heartbeatTimeout){
            Serial.printf("%lu:: Timeout update due to late hearbeat send\r\n", millis());
            heartbeatTimeout = millis() + HEARTHBEAT_TIMEOUT;
        }
    } else {
        Serial.println(F("Client is null !!!"));
    }
}

void BorneUniverselle::sendTextToClient(char *text){
    while (isClientConnected() && client != nullptr && client->queueIsFull()){
            yield();
    }

    if (isClientConnected()){
        client->text(text);
    } else {
        Serial.println("WARNING ! Try to send something to web client but no client is connected !");
    }
}

void BorneUniverselle::updateEarthbeatTimeout(){
    lastHearbeatReceive = millis();
    heartbeatTimeout = millis() + HEARTHBEAT_TIMEOUT;
    if (showHeartbeatMessages){
        Serial.printf("%lu:: Just receive a message from ws. New hertbeatTimeout: %lu\r\n", millis(), heartbeatTimeout);
     }
}

void BorneUniverselle::checkHeartbeat(){
    if (isClientConnected()){    
        if (heartbeatReceive){
            nbTimeouts = 0;
        }

        if (millis() - lastHeartbeatSend > HEARTBEAT_DELAY && millis() - lastHearbeatReceive > HEARTBEAT_DELAY){
            if (showHeartbeatMessages){
                Serial.println(F("It's time to send hearbeat"));
            }
            sendHeartbeat(true);
        }

        if (millis() - lastHearbeatReceive > HEARTBEAT_DELAY && millis() - lastHeartbeatSend > 150){
            if (showHeartbeatMessages){
                Serial.printf("%lu:: Hearthbeat not received after %lu [ms]\r\n", millis(), millis() - lastHearbeatReceive);
                sendHeartbeat();
            }    
        }

        if (millis() > heartbeatTimeout){
            nbTimeouts++;
            Serial.printf("%lu::Web socket timeout !!!\r\n", millis());
            setClientConnected(false, nullptr); 
        }
    } else {// client connected
        // Serial.println("client not connected");
    }
}

void BorneUniverselle::setShowHeartbeatMessages(bool status){
    showHeartbeatMessages = status;
}

void BorneUniverselle::sendMessage(){  
  	if (isClientConnected() && millis() - clientConnectedAt > 1000  && !notifMessagesList.isEmpty()){
        // One message at a time
        NOTIF_MESSAGE *notifMessage  = notifMessagesList.front(); // get last message
        JsonDocument doc;
        JsonObject notif            = doc["notification"].to<JsonObject>();
        notif[STATUS]               = 200;

        switch (notifMessage->severity){
            case ERROR:     notif[TYPE] = "error";
            break;

            case WARNING:   notif[TYPE] = "warning"; 
            break;

            case INFO:      notif[TYPE] = "info"; 
            break;

            case SUCCESS:   notif[TYPE] = "success"; 
        }

        notif[DESCRIPTION]  = notifMessage->message;
        uint16_t len = (measureJson(doc) + 1);
        char *chain = (char *)malloc(len);
        if (chain){
            serializeJson(doc, chain, len);
            //chain[len] = 0;
            sendTextToClient(chain);
            Serial.printf("Message sent: %s\r\n", chain); 
            free(chain);  
        } else {
            Serial.println(F("sendMessage:: malloc error"));
        }
        free(notifMessage->message);
        notifMessagesList.remove(notifMessage);
    } // client connected
}

void BorneUniverselle::tooMuchClients(AsyncWebSocketClient *_client){
    JsonDocument doc;
    doc[TOO_MUCH_CLIENTS] = true;
    char chain[256];
    serializeJson(doc, chain);
    Serial.printf("%lu:: Too much clients: %lu: will be closed...\r\n", millis(), _client->id());
    _client->text(chain);
    delay(100);
    _client->close();  
}


void BorneUniverselle::prepareMessage(uint8_t type, const char * text){
    bool error = false;
    // on discard les warning message si il n'y a pas de client connecté..
    if (!isClientConnected() && type == WARNING){
        return;
    }

    if (notifMessagesList.length() < MAX_MESSAGES_PENDING){ 
        NOTIF_MESSAGE *notif = new NOTIF_MESSAGE;
        notif->severity = type;
        notif->message  = (char *)malloc(strlen(text) + 1);

        if (notif->message){  
            strcpy(notif->message, text);
            notifMessagesList.add(notif);
            Serial.printf("%lu:: prepareMessage: %s pushed on the queue\r\n", millis(), text);
            if (notifMessagesList.length() > 1){
                Serial.printf("%lu:: prepareMessage:: There are %u notifications on the queue\r\n", millis(), notifMessagesList.length());
            }
        } else {
            error = true;
            Serial.printf("prepareMessage:: Unable to alloc memory for the message, message size: %d\r\n", strlen(text));
        }
    } else {
        error = true;
        Serial.println(F("prepareMessage:: the queue notifMessagesList is full !"));
    }

    if (error){
         //Serial.println("notifMessagesList error !!!!");
    }
}

bool BorneUniverselle::setName(const char *_name, bool check){
    bool status = false;
    if (strlen(_name) < NAME_LENGHT && strlen(_name) > 0 && !strstr(_name, " ")){
        Serial.printf("Name: %s\r\n", name);
        if (!check){
            strcpy(name, _name);
        }
        status = true;
    } else {
        char text[256];
        sprintf(text, "The name: ""%s"" is misconfigured (must be not to long and not contains space)", _name);
        prepareMessage(ERROR, text); 
        setPlcBroken(text);  
    }
    return status;
}

char *BorneUniverselle::getName(){
    return name;
}

bool BorneUniverselle::isWebSocketMessagesListMoreThanHalf(){
    if (webSocketMessagesList.length() > MAX_MESSAGES_PENDING / 2){
        Serial.println(F("webSocketMessagesList greather than half capacity"));
        return true;
    } else {
        return false;
    }
}

void BorneUniverselle::keepWebSocketMessage(void *_arg, unsigned char *_data, size_t _len, AsyncWebSocketClient *_client){
    long start = micros();

    if (!isClientConnected()){
        Serial.println(F("Discardind messages from client disconnected or timed out"));
        return; 
    }

    bool error = false;

    // On évite d'ajoouter un message incomplet...
    AwsFrameInfo *info = (AwsFrameInfo*)_arg;
    if (info->final && info->index == 0 && info->len == _len && info->opcode == WS_TEXT) {
        ;
    } else {
        Serial.println(F("Malformedweb socket message"));
        return;
    }

    if (webSocketMessagesList.length() < MAX_MESSAGES_PENDING){
        if (_len > 10 && _len < 1000){
            WEB_SOCKET_MESSAGE *webSocketMessage = new (WEB_SOCKET_MESSAGE);
            webSocketMessage->arg        = _arg;
            webSocketMessage->len        = _len;
            webSocketMessage->client     = _client;
            webSocketMessage->data       = (unsigned char *)malloc(_len + 1);
            if (webSocketMessage->data){
                memcpy(webSocketMessage->data, _data, _len);
                uint32_t freeMem = esp_get_minimum_free_heap_size();
                if (freeMem < 5000){
                    Serial.printf("Free memory warning: %lu\r\n", esp_get_minimum_free_heap_size());
                }
                webSocketMessagesList.add(webSocketMessage);
            } else {
                Serial.println(F("Memory allocation error for the webSocketMessage"));
                error = true; 
            }
        } else {
            Serial.println(F("Discarding strange message from websocket..."));
        }
    } else {
        error = true;
    }

    if (error){
        char message[256];
        sprintf(message, "%lu:: Error in adding webSocketMessage to the queue. Queue size: %u, current message size: %u\r\n", millis(), webSocketMessagesList.length(), _len);
        setPlcBroken(message);
    }
 
    long time = micros() - start;
    if (time > 250){
        Serial.printf("Keep done: %lu[us]\r\n", time); 
    } 

    if (webSocketMessagesList.length() > 1){
        Serial.printf("%lu:: There are now %u webMessages on the list\r\n", millis(), webSocketMessagesList.length());
    }
    yield();
}

bool BorneUniverselle::clientQueueIsFull(){
    if (!isClientConnected() || client == nullptr){
        return false;
    }
    return client->queueIsFull();
}

void BorneUniverselle::handleWebSocketMessage(){
    // Vient de loop

    uint32_t start = millis();
    WEB_SOCKET_MESSAGE *webSocketMessage;

    while (webSocketMessagesList.length()){
        if (PF8574BooleanInputNode::isInterrupt()){
            return;
        }

        updateEarthbeatTimeout();

        if ((!isClientConnected() || client == nullptr) || (isClientConnected() && client->queueIsFull()) || !isAllInputsReadOnce()){
            return;
        }

        webSocketMessage = webSocketMessagesList.front();
        
        JsonDocument socketDoc;
        DeserializationError error = deserializeJson(socketDoc, webSocketMessage->data);
        if (error) {
            char buff[256];
            sprintf(buff, "%lu:: handleWebSocketMessage: deserializeJson() failed: ", millis());
            strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
            Serial.println(buff);
            Serial.println();
            prepareMessage(ERROR, JSON_NOT_VALID);
            if (webSocketMessage->data != nullptr){
               free(webSocketMessage->data); 
            }
            webSocketMessagesList.remove(webSocketMessage);
            continue;
        } // json error  
    
        if (socketDoc.containsKey(HEARTBEAT)){
            heartbeatReceive = true;
            lastHearbeatReceive = millis();     
            if (showHeartbeatMessages){
                if (client == nullptr){
                    Serial.println(F("Client is null !"));
                } else {
                    Serial.printf("%lu:: Heartbeat from client id: %lu received, value: %s\r\n", millis(), client->id(), socketDoc[HEARTBEAT] ? "true": "false");
                }
            }
        } else  if (socketDoc.containsKey(CONFIG)){
            if (!BorneUniverselle::parseConfig(socketDoc)){
                Serial.println(F("Config is not valid !!!"));
            } else {
                Serial.println(F("Will update config and restart"));
                saveParameters(socketDoc);
                delay(1000);
                ESP.restart();
            } 
        } else if (socketDoc.containsKey(NOTIFY_STATES_CHANGED)){
                Serial.println(F("Receive a NOTIFY_STATES_CHANGED"));
                handleNodesChange(socketDoc);

        } else if (socketDoc.containsKey(GET_VALUE)){
                uint32_t hash = socketDoc[GET_VALUE];
                Serial.printf("Receive a get value for node: %lu\r\n", hash);
                handleGetValue(socketDoc[GET_VALUE]);
        } else if (socketDoc.containsKey(ALL_STATES_REQUEST)){
                Serial.println(F("Receive get all states request"));
                handleGetAllValues();
        } else {
                char buff[64];
                sprintf(buff, "Json root key received by web socket is unknow !");
                Serial.println(F("Json received:"));
                serializeJsonPretty(socketDoc, Serial);
                prepareMessage(ERROR, buff);
                Serial.flush();
                // for ever...
        }

        //cleanup:
        if (webSocketMessage->data != nullptr && isClientConnected()){
            free(webSocketMessage->data);
        }
        //delete webSocketMessage;
        webSocketMessagesList.remove(webSocketMessage);
        //Serial.printf("Free heap: %u\r\n", 	ESP.getFreeHeap());  
        yield();
        // Il faut envoyer des hearbeats de temps en temps autrement le socket se ferme..,.
        if (millis() - lastHeartbeatSend > 200 && webSocketMessagesList.length() > 4){
             sendHeartbeat();
        }
       
        checkHeartbeat();
        if (isClientConnected() && client->queueIsFull()){
            return;
        }
    } // while webSocketMessagesList

    if (millis() - start > 100){
                Serial.printf("handleWebSocketMessage:: duration: %lu\r\n", millis() - start);
    }
} // handleWebSocketMessage

void BorneUniverselle::handleGetAllValues(){
    notifyWebClient(true);
}

void BorneUniverselle::handleGetValue(uint32_t hash){
    Node *node = findNode("handleGetValue", hash);
    JsonDocument notifyDoc;
    JsonArray array = notifyDoc[NOTIFY_STATES_CHANGED].to<JsonArray>();
    JsonObject nodeObject = array.add<JsonObject>();
    addNodeToNodeObject(node, &nodeObject);
    if (getWifiStatus() && isClientConnected()){
        uint16_t size = measureJson(notifyDoc);
        char *chain = (char *)malloc(size + 10);
        if (chain){
            serializeJson(notifyDoc, chain, size);
            chain[size] = 0;  // 0 chain terminated is missing !!!!
            //Serial.println(chain);
            if (isClientConnected() && client != nullptr){
                serializeJsonPretty(notifyDoc, Serial);
                sendTextToClient(chain);  
            }
        } else {
            Serial.println(F("malloc failed on notify message"));
        }
        
        free(chain);
        Serial.println(F("End handleGetValue\r\n"));
    }
    checkHeartbeat();
}

bool BorneUniverselle::handleNodesChange(JsonDocument socketDoc){
    // On accepte tous les nodes virtuelles et les nodes output
    // Rappel on ne peux pas modifier une entrée, c'est le monde physique qui modifie une entrée !!!!
    uint32_t start = millis();
    //JsonObject root = socketDoc[NOTIFY_STATES_CHANGED];
    Serial.printf("%lu:: Web socket nodes change received\r\n", millis());
    serializeJsonPretty(socketDoc, Serial);
    
    char mess[128];
    for (JsonObject state : socketDoc["states"].as<JsonArray>()) {
         // is it a hardware input interrupt ?
        if (PF8574BooleanInputNode::isInterrupt()){
            return true;
        }     

        uint32_t hash = state[HASH];
        Node *node = findNode("handleNodesChange", hash);
        if (node == nullptr){
            return false;
        }

        // Serial.printf("Class type: %u\r\n", node->classType());
        if (node->classType() == CLASS_VIRTUAL_BOOLEAN_INPUT_NODE){
            VirtualBooleanInputNode *b = (VirtualBooleanInputNode*) node;
            b->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), b->getValue() ? "true" : "false");     
        } else if (node->classType() == CLASS_VIRTUAL_BOOLEAN_OUTPUT_NODE){
            VirtualBooleanOutputNode *b = (VirtualBooleanOutputNode *) node;
            b->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), b->getValue() ? "true" : "false");     
        } else if (node->classType() == CLASS_HW_BOOLEAN_OUTPUT_NODE){
            HardwareBooleanOutputNode *h = (HardwareBooleanOutputNode *) node;
            h->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), h->getValue() ? "true" : "false");   
        } else if (node->classType() == CLASS_PFC8574_BOOLEAN_OUTPUT_NODE){
            PF8574BooleanOutputNode *p = (PF8574BooleanOutputNode *) node;
            p->setValue(state[VALUE]);
            Serial.printf("Node: %s, new value: %s\r\n", node->getName(), p->getValue() ? "true" : "false"); 
        } else if (node->classType() == CLASS_MODBUS_WRITE_COIL_NODE){
            ModbusWriteCoilNode *m = (ModbusWriteCoilNode *)node;
            m->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), m->getValue() ? "true" : "false"); 
        } else if (node->classType() == CLASS_VIRTUAL_UINT32_INPUT_NODE){
           VirtualUint32InputNode *v = (VirtualUint32InputNode *)node;
           //Serial.printf("Received value: %d\r\n", state[VALUE].as<unsigned int>());
           v->setValue(state[VALUE].as<unsigned int>());
           Serial.printf("Node: %s new value: %lu\r\n", node->getName(), v->getValue());  
        } else if (node->classType() == CLASS_VIRTUAL_UINT32_OUTPUT_NODE){
           VirtualUint32OutputNode *v = (VirtualUint32OutputNode *)node;
           v->setValue(state[VALUE]);
           Serial.printf("Node: %s new value: %lu\r\n", node->getName(), v->getValue()); 
        } else if (node->classType() == CLASS_MODBUS_WRITEHOLDINGREGISTER){
            ModbusWriteHoldingRegister *w = (ModbusWriteHoldingRegister *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), w->getValue() ? "true" : "false"); 
        } else if (node->classType() == CLASS_MODBUS_WRITE_DOUBLE_HOLDING_REGISTER){
            ModbusWriteDoubleHoldingRegister *w = (ModbusWriteDoubleHoldingRegister *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), w->getValue() ? "true" : "false"); 
        } else if (node->classType() == CLASS_VIRTUAL_FLOAT_INPUT_NODE){
            VirtualFloatInputNode *w = (VirtualFloatInputNode *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %3.3f\r\n", node->getName(), w->getValue()); 
        } else if (node->classType() == CLASS_VIRTUAL_FLOAT_OUTPUT_NODE){
            VirtualFloatOutputNode *w = (VirtualFloatOutputNode *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %3.3f\r\n", node->getName(), w->getValue()); 
        } else {
            sprintf(mess, "handleNodesChange:: Unable to find class of node with hash: %lu, classType %d", hash, node->classType());
            setPlcBroken(mess);
        }
        yield();
    }

    Serial.println(F("End Web socket nodes change received\r\n"));

    if (millis() - start > 100){
        Serial.printf("Handle message time: %lu\r\n", millis() - start);
    }
    
    return true;
}

bool BorneUniverselle::parseConfig( JsonDocument doc,bool check){
    bool status = true;
    //Serial.println("Will parse config");

    if (doc.containsKey(NAME)){
        String name = doc[NAME]; // project name
        if (!setName(name.c_str(), check)){
           status = false; 
        }
    } else {
       prepareMessage(ERROR, NO_NAME_KEY);         //         "The key Name is not found"
       status = false;
    }

    if (status){
        status = parseWifis(doc, check);
        if (!status && !check){
            wifiParsedOk = false;
        }
    }

    if (status){
        //Serial.println ("Wifi's parsed");
        status = parseHardwares(doc, check);
    }

    return status;
}

bool BorneUniverselle::getIsWifiParsedOk(){
    return wifiParsedOk;
}

bool BorneUniverselle:: parseWifis(JsonDocument doc, bool check){
    for (JsonObject item : doc[CONFIG].as<JsonArray>()) {
        if (item.containsKey(WIFI)){
            for (JsonObject wifiItem : item[WIFI].as<JsonArray>()) {
                const char *ssid, *pwd, *name;
                char message[800];
                if (wifiItem.containsKey(NAME)){
                    name = wifiItem[NAME];
                    sprintf(message, "Wifi name: %s\r\n", name);
                } else {
                    strcat(message, "parseWifis:: One of wifi as not key name");
                    prepareMessage(ERROR, message);
                    return false;
                }

                if (wifiItem.containsKey(SSID_)){
                    ssid = wifiItem[SSID_];
                } else {
                    sprintf(message, "parseWifis:: Wifi: %s doesn't contains ssid key", name);
                    prepareMessage(ERROR, message);
                    return false;
                }

                if (wifiItem.containsKey(PWD_)){
                    pwd = wifiItem[PWD_];
                } else {
                    sprintf(message, "parseWifis:: Wifi: %s doesn't contains pwd key", name);
                    prepareMessage(ERROR, message);
                    return false;
                }

                bool dhcp = true;
                if (wifiItem.containsKey(DHCP)){
                    if (wifiItem[DHCP] == true){
                        Serial.println(F("Item with dhcp"));
                        dhcp = true;
                        if (!check){
                            addWifiItem2(ssid, pwd, name, dhcp);
                        }
                    } else {
                        dhcp = false;
                        IPAddress ipAddress, dns, gateway, mask;
                        Serial.println(F("Fixed address"));
                        if (wifiItem.containsKey(IP)){
                            const char *ipChar = wifiItem[IP];
                            String ipString = String(ipChar);
                            ipAddress.fromString(ipString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains ip key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                        if (wifiItem.containsKey(DNS_)){
                            const char *dnsChar = wifiItem[DNS_];
                            String dnsString = String(dnsChar);
                            dns.fromString(dnsString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains dns key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                        if (wifiItem.containsKey(GATEWAY_)){
                            const char *gatewayChar = wifiItem[GATEWAY_];
                            String gatewayString = String(gatewayChar);
                            gateway.fromString(gatewayString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains gateway key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                        if (wifiItem.containsKey(MASK_)){
                            const char *maskChar = wifiItem[MASK_];
                            String maskString = String(maskChar);
                            mask.fromString(maskString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains mask key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                        if (!check){
                            addWifiItem(ssid, pwd, name, ipAddress, dns, gateway, mask, dhcp);
                        }
                    }    
                    
                } else {
                    prepareMessage(ERROR, "parseWifis:::: Wifi: %s doesn't contains DHCP key");
                    return false;
                }
            }
        } else {
            if (item.containsKey(PARAMETERS)){
                JsonObject params = item[PARAMETERS];
                if (params.containsKey(OTA_URL)){
                    strcpy(ota_url, params[OTA_URL]);
                    Serial.printf("ota_url: %s\r\n", ota_url);
                }
            }
        }
    }
    return true;
}

unsigned char BorneUniverselle::addWifiItem2(const char *ssid, const char *pwd, const char *connexionName, bool dhcp){
    WifiItem myItem;
	strcpy(myItem.SSID, ssid);
	strcpy(myItem.PWD, pwd);
	strcpy(myItem.connectionName, connexionName);
    myItem.dhcp = dhcp;
    wifiItemsMapBu[nbWifiItems++] = myItem; // add new network in the map
    Serial.printf("New nb network: %d\r\n", nbWifiItems);
	return nbWifiItems; 
}

unsigned char BorneUniverselle::addWifiItem(const char *ssid, const char *pwd, const char *connexionName, IPAddress ip, IPAddress dns, IPAddress gateway, IPAddress mask, bool dhcp){
	WifiItem myItem;
	strcpy(myItem.SSID, ssid);
	strcpy(myItem.PWD, pwd);
	strcpy(myItem.connectionName, connexionName);

	myItem.ip = ip;
	myItem.dns = dns;
	myItem.gateway = gateway;
	myItem.mask = mask;
	myItem.dhcp = dhcp;
	wifiItemsMapBu[nbWifiItems++] = myItem; // add new network in the map
	Serial.printf("SSID: %s successfuly added, connexion name: %s", myItem.SSID, connexionName);
	if (myItem.dhcp){
		Serial.print(", dhcp");
	} else {
		MyToolBox::printIPAddress(" ip", myItem.ip);
		MyToolBox::printIPAddress(", dns", myItem.dns);
		MyToolBox::printIPAddress(", gateway", myItem.gateway);
		MyToolBox::printIPAddress(", mask", myItem.mask);
	}
	
	Serial.printf(" New nb network: %d\r\n", nbWifiItems);
	return nbWifiItems; 
}

void  BorneUniverselle::eraseWifis(){
    wifiItemsMapBu.clear();
}

bool BorneUniverselle::parseHardwares(JsonDocument doc, bool check){
    bool needToSaveConfig = false;
    char buff[1000];
    //Serial.println("parseHardwares");

    // Est-ce que l'on a un hardware ?
    if (!doc.containsKey(CHILDREN)){
        prepareMessage(ERROR, NO_CHILDREN_KEY_CONFIG);
        return false;
    }

    //Serial.println("Children parsing");

    for (JsonObject children : doc[CHILDREN].as<JsonArray>()) {
        char sectionName[128], hardware[80], type[80], text[200];
        if (!children.containsKey(NAME)){
            sprintf(buff, "parseHardwares:: Section ? doesn't contains key %s", NAME);
            prepareMessage(ERROR, buff);
            return false;
        }

        strcpy(sectionName, children[NAME]);
        Serial.printf("Section name: %s\r\n", sectionName);
           
        if (!children.containsKey(HARDWARE)){
            sprintf(text, "parseHardwares:: Section %s doesnt contains key hardware", name);
            prepareMessage(ERROR, text);
            return false;
        }
        strcpy(hardware, children[HARDWARE]);
        Serial.printf("hardware: %s\r\n", hardware);
        char fileName[250];

        if (!children.containsKey(TYPE)){
            sprintf(buff, "parseHardwares:: Section %s doesnt contains key type", name);
            Serial.println(buff);
            prepareMessage(ERROR, buff);
            return false;
        }
        strcpy(type, children[TYPE]);  // type du fichier de conf
        Serial.printf("type: %s\r\n", type);

        // no descriptor file for virtual nodes!
        if (!strcmp(hardware, VIRTUAL)){
            for (JsonObject c : children[CHILDREN].as<JsonArray>()) {
                if (!c.containsKey(NAME)){
                    sprintf(buff, "parseHardwares:: sub section %s doesnt contains key %s from config file", name, NAME);
                    prepareMessage(ERROR, buff);
                    return false;  
                }

                char nodeName[128];
                strcpy(nodeName, c[NAME]);
                //Serial.printf("node name: %s\r\n", nodeName);
                uint32_t hash, hashLocal;

                if (!c.containsKey(HASH)){
                    Serial.printf("Hash key note found for node name: %s\r\n", nodeName);
                    return false;
                } else {
                    hash = c[HASH].as<unsigned int>();
                    hashLocal = hash;
                    //Serial.printf("Node name: %s, hash found: %lu \r\n", nodeName, hash);
                }

                JsonDocument descriptor;
                descriptor.set(c);


                if (!createVirtualNode(nodeName, sectionName, type,  &hashLocal, descriptor, check)){
                    sprintf(buff, "Error on creating virtual node");
                    prepareMessage(ERROR, buff);
                    return false;
                }

                if (hash != hashLocal){
                    if (!c.containsKey(HASH)){
                        //Serial.println("Will add hash...");
                        // Add object
                        //JsonObject hashObject = c.createNestedObject(HASH);
                        JsonObject hashObject;
                        hashObject[HASH] = hash;
                        c.set(hashObject);
                        //JsonObject hashObject = c.to<JsonObject>();
                        
                        //Serial.println("Hash added");
                    } 

                    c[HASH] = hashLocal;
                    hash = hashLocal;
                    //Serial.println("Hash updated");
                    needToSaveConfig = true;
                } else {
                    //Serial.println("Hash is corresponding VIRTUAL NODE");
                }
            } // boucle sur la section de nodes virtuels
     
            continue;  // on a créer les node de cette section, on passe a la section suivante
        }  // virtual nodes

        // check if corresponding json file exist
        sprintf(fileName, "%s/%s.json", HARDWARE_FOLDER, hardware);
        File file = LittleFS.open(fileName, FILE_READ);

        if (strstr(fileName, "A8S") && !isKinconyA8S){
            Serial.println(F("Card is an Kincony A8S, pin 2 must be set after go ip"));
            isKinconyA8S = true;
        } 
 
        if (!file || file.size() == 0){ 
            sprintf(buff, "parseHardwares:: Unable to open file: %s\r\n", fileName);
            prepareMessage(ERROR, buff);
            return false;
        }

        //Serial.printf("File : %s read with success, size: %d\r\n", fileName, file.size());

        JsonDocument nodesDoc; // The hardware document
        DeserializationError error = deserializeJson(nodesDoc, file);

        if (error) {
            sprintf(buff, "parseHardwares: file %s: deserializeJson() failed: ", fileName);
            strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
            prepareMessage(ERROR, buff);
            return false;
        }

        if (!nodesDoc.containsKey(HARDWARE)){
            sprintf(buff,"parseHardwares:: Key: %s not found", HARDWARE);
            prepareMessage(ERROR, buff);
            return false;
        }

        if (strcmp(nodesDoc[HARDWARE], hardware)){
            sprintf(buff, "parseHardwares:: Hardware from config file doesn't match with hardware file: %s", hardware);
            prepareMessage(ERROR, buff);
            return false;
        }

        // Serial.println("Hardware match");
        if (!i2cInit(nodesDoc) || ! modbusInit(nodesDoc)){
            return false;
        }
    
        //Serial.println("Lectures des sections du hardware");

        if (!nodesDoc.containsKey(type)){
            sprintf(buff, "Hardware file doesnt contains key %s", type);
            prepareMessage(ERROR, buff);
            return false;
        }

        if (!children.containsKey(CHILDREN)){
            sprintf(buff, "parseHardwares:: section %s doesnt contains key %s from config file", name, CHILDREN);
            prepareMessage(ERROR, buff);
            return false; 
        }

        for (JsonObject c : children[CHILDREN].as<JsonArray>()) {
            if (!c.containsKey(NAME)){
                sprintf(buff, "parseHardwares:: sub section doesnt contains key %s from config file", NAME);
                prepareMessage(ERROR, buff);
                return false;  
            }

            char nodeName[128];
            uint32_t hash = 0, hashLocal;
            strcpy(nodeName, c[NAME]);
            //Serial.printf("node name: %s\r\n", nodeName);

            if (!c.containsKey(HASH)){
               //Serial.printf("Hash key not found for node name: %s\r\n", nodeName);
            } else {
                hash = c[HASH].as<unsigned int>();
                hashLocal = hash;
                //Serial.printf("Node name: %s, hash found: %lu\r\n", nodeName, hash);
            }

            if (!c.containsKey(ID)){
                sprintf(buff, "parseHardwares:: node %s has no key %s", nodeName, ID);
                prepareMessage(ERROR, buff);
                return false;  
            }

            uint8_t addr = c[ID].as<int>();
            //Serial.printf("Will search for id %d from config, type: %s\r\n", addr, type);

            bool found = false;
            for (JsonObject hardSection : nodesDoc[type].as<JsonArray>()) {
                if (!hardSection.containsKey(ID)){
                    sprintf(buff, "parseHardwares:: Hardware file key %s has no key id", fileName);
                    prepareMessage(ERROR, buff);
                    return false; 
                }

                //Serial.printf("type confirm: %s\r\n", type);

                uint8_t id = hardSection[ID].as<int>();
                //Serial.printf("Hardware node id: %d\r\n", id);

                if (addr == id){ 
                    //Serial.println("Find correspondig id <-> addr");
                    // on doit créer le node mais avec le bon type. On cherche le node creator !

                    uint16_t webRefreshInterval = 0;
                    if (c.containsKey(WEB_UPDATE_INTERVAL)){
                        webRefreshInterval = c[WEB_UPDATE_INTERVAL];  
                    } 

                     uint16_t refreshInterval = 0;
                    if (c.containsKey(REFRESH_INTERVAL)){
                        refreshInterval = c[REFRESH_INTERVAL];
                        //Serial.printf("Refreh interval: %u\r\n", refreshInterval);
                    } 

                    JsonDocument descriptor;
                    descriptor.set(c);
                    
                    if (!strcmp(type, RX_BOOL) || !strcmp(type, PF8574_RX_BOOL)){
                        if (!createRxBoolNode(nodeName, sectionName, &hashLocal, nodesDoc, hardSection, type, refreshInterval, webRefreshInterval, descriptor, check)){
                            sprintf(buff, "parseHardwares:: Error on creating RxBoolNode with file %s\r\n", fileName);
                            prepareMessage(ERROR, buff);
                            return false;
                        }
                        found = true;
                    }  else  if (!strcmp(type, TX_BOOL) || !strcmp(type, PF8574_TX_BOOL)){
                            if (!createTxBoolNode(nodeName, sectionName, &hashLocal, nodesDoc, hardSection, type, webRefreshInterval, descriptor, check)){
                                sprintf(buff, "parseHardwares:: Error on creating TxBoolNode with file %s\r\n", fileName);
                                prepareMessage(ERROR, buff);
                                return false;
                            }
                            found = true; 
                    } else if (!strcmp(type, MODBUS_READ_COIL) || !strcmp(type, MODBUS_WRITE_COIL) || !strcmp(type, MODBUS_READ_HOLDING_REGISTER) ||
                               !strcmp(type, MODBUS_WRITE_HOLDING_REGISTER) || !strcmp(type, MODBUS_READ_DOUBLE_HOLDING_REGISTER) || !strcmp(type, MODBUS_WRITE_DOUBLE_HOLDING_REGISTER) ||
                               !strcmp(type, MODBUS_READ_INPUT_REGISTER) || !strcmp(type, MODBUS_WRITE_MULTIPLE_COILS) || !strcmp(type, MODBUS_READ_MULTIPLE_INPUTS_STATUS)){
                        //Serial.println("Modbus");
                        if (children.containsKey(ADDRESS)){
                            uint16_t slaveAddress = children[ADDRESS];
                            
                            //Serial.printf("Modbus slave address: %u\r\n", slaveAddress);
                            if (!createModbusNode(nodeName, sectionName, &hashLocal, slaveAddress, nodesDoc, hardSection, type, refreshInterval, webRefreshInterval, descriptor, check)){
                                sprintf(buff, "parseHardwares:: Error on creating Modbus node with file %s\r\n", fileName);
                                prepareMessage(ERROR, buff);
                            }
                            found = true; 
                        } else {
                            sprintf(buff, "parseHardwares:: Section doesn't contains key %s\r\n", ADDRESS);
                            prepareMessage(ERROR, buff);
                        }
                    } else {
                            sprintf(buff, "parseHardwares:: Unable to match type %s\r\n", type);
                            prepareMessage(ERROR, buff);
                        }  
                    break;
                } 
            } // loop on hardware

            //Serial.println("fin de la sous section du fichier de config");
            if (found){
                //Serial.printf("Found !! hash lu: %u, hash produced: %u\r\n", hash, hashLocal);
                if (hash != hashLocal){
                    Serial.println(F("Must save the file with new hash"));
                    if (!c.containsKey(HASH)){
                        // Add object
                        JsonObject hashObject;
                        c.set(hashObject);
                    } 

                    c[HASH] = hashLocal;
                    hash = hashLocal;
                    Serial.println(F("Hash updated"));
                    needToSaveConfig = true;
                }
            } else {
                    sprintf(buff, "parseHardwares:: Unable to find coresponding id to %d\r\n", addr);
                    prepareMessage(ERROR, buff);
                    return false; 
            }   
                     
        } //Serial.println("fin de la section du fichier de config"); 
    } // loop on children from config filecreateRxBoolNode

    if (needToSaveConfig){
        saveParameters(doc);
        ESP.restart();
    }
    return true;
 // setHardware
}

bool BorneUniverselle::createModbusNode(char *nodeName, char *sectionName, uint32_t *hash, uint16_t slaveAddress, JsonDocument contextDoc,
                                     JsonObject hardSection, char *type, uint16_t refreshInterval,  uint16_t webRefreshInterval, JsonDocument descriptor, bool check){
    Node *node;
    uint16_t offset;
    char message[256];
    int8_t registersOffset = 0;

    if (contextDoc.containsKey(REGISTERS_OFFSET)){
        registersOffset = contextDoc[REGISTERS_OFFSET];
        // Serial.printf("Registers offset: %d\r\n", registersOffset);
    }

    if (hardSection.containsKey(OFFSET)){
        offset = hardSection[OFFSET];
        //Serial.printf("Offset: %u\r\n", offset);
    } else {
        sprintf(message, "createModbusNode::modbus hardware file doesn't contains key %s\r\n", OFFSET);
        prepareMessage(ERROR, message);
        return false; 
    }

    offset += registersOffset;

    if (!strcmp(type, MODBUS_READ_COIL)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusReadCoilNode));
            node = new (a) ModbusReadCoilNode(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval,  webRefreshInterval);
        } else {
            node = new ModbusReadCoilNode(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval,  webRefreshInterval);
        }
        Serial.printf("Node %s created with succes with type ModbusReadCoilNode, hash: %lu, address: %d, offset: %d, refresh interval: %u, web refresh interval %u\r\n", node->getName(), *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_WRITE_COIL)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusWriteCoilNode));
            node = new (a) ModbusWriteCoilNode(nodeName, sectionName, *hash, slaveAddress, offset, webRefreshInterval);
        } else {
            node = new ModbusWriteCoilNode(nodeName, sectionName, *hash, slaveAddress, offset, webRefreshInterval);
        }
        Serial.printf("Node %s created with succes with type ModbusReadCoilNode, hash: %lu, address: %d, offset: %d\r\n", nodeName, *hash, slaveAddress, offset);
    } else if (!strcmp(type, MODBUS_WRITE_MULTIPLE_COILS)){
        uint8_t nbValues = 1;
        if (hardSection.containsKey(NB_VALUES)){
            nbValues = hardSection[NB_VALUES];
            Serial.printf("createModbusNode:: nbValues: %d\r\n", nbValues);
        } else {
            char texte[250];
            sprintf(texte, "Unable to find key: %s on section %s\r\n", NB_VALUES, MODBUS_WRITE_MULTIPLE_COILS);
            setPlcBroken(texte);
        }

        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusWriteMultipleCoilslNode));
            node = new (a) ModbusWriteMultipleCoilslNode(nodeName, sectionName, *hash, slaveAddress, offset, nbValues, webRefreshInterval);
        } else {
             node = new ModbusWriteMultipleCoilslNode(nodeName, sectionName, *hash, slaveAddress, offset, nbValues, webRefreshInterval);
        }

        Serial.printf("Node %s created with succes with type ModbusWriteMultipleCoilslNode, hash: %lu, address: %d, offset: %d\r\n", nodeName, *hash, slaveAddress, offset); 
    } else if (!strcmp(type, MODBUS_READ_HOLDING_REGISTER)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusReadHoldingRegister));
            node = new (a) ModbusReadHoldingRegister(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
        } else {
            node = new ModbusReadHoldingRegister(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
        }
        Serial.printf("Node %s created with succes with type ModbusReadHoldingRegister, hash: %lu, address: %d, offset: %d, refresh interval: %u, web refresh interval %u\r\n", node->getName(), *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_WRITE_HOLDING_REGISTER)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusWriteHoldingRegister));
            node = new (a) ModbusWriteHoldingRegister(nodeName, sectionName, *hash, slaveAddress, offset, webRefreshInterval);
        } else {
            node = new ModbusWriteHoldingRegister(nodeName, sectionName, *hash, slaveAddress, offset, webRefreshInterval);
        }
        Serial.printf("Node %s created with succes with type ModbusWriteHoldingRegister, hash: %lu, address: %u, offset: %d\r\n", nodeName, *hash, slaveAddress, offset);
    } else if (!strcmp(type, MODBUS_READ_DOUBLE_HOLDING_REGISTER)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusReadDoubleHoldingRegisters));
            node = new (a) ModbusReadDoubleHoldingRegisters(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval,  webRefreshInterval);
        } else {
            node = new ModbusReadDoubleHoldingRegisters(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval,  webRefreshInterval);
        }
        Serial.printf("Node %s created with succes with type ModbusReadDoubleHoldingRegisters, hash: %lu, address: %u, offset: %d, refresh interval: %u, web refresh interval %u\r\n", node->getName(), *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_WRITE_DOUBLE_HOLDING_REGISTER)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusWriteDoubleHoldingRegister));
            node = new (a) ModbusWriteDoubleHoldingRegister(nodeName, sectionName, *hash, slaveAddress, offset, webRefreshInterval);
        } else {
            node = new ModbusWriteDoubleHoldingRegister(nodeName, sectionName, *hash, slaveAddress, offset, webRefreshInterval);
        }
        Serial.printf("Node %s created with succes with type ModbusWriteDoubleHoldingRegister, hash: %lu, address: %u, offset: %d\r\n", nodeName, *hash, slaveAddress, offset);
    } else if (!strcmp(type, MODBUS_READ_INPUT_REGISTER)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusReadInputRegister));
            node = new (a) ModbusReadInputRegister(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
        } else {
            node = new ModbusReadInputRegister(nodeName, sectionName, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
        } 
        Serial.printf("Node %s created with succes with type ModbusReadInputRegister, hash: %lu, address: %u, offset: %u, refresh interval: %u, web refresh interval %u\r\n", nodeName, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_READ_MULTIPLE_INPUTS_STATUS)){
        uint8_t nbValues = 1;
        if (hardSection.containsKey(NB_VALUES)){
            nbValues = hardSection[NB_VALUES];
            Serial.printf("createModbusNode:: nbValues: %d\r\n", nbValues);
        } else {
            char texte[250];
            sprintf(texte, "Unable to find key: %s on section %s\r\n", NB_VALUES, MODBUS_WRITE_MULTIPLE_COILS);
            setPlcBroken(texte);
        } 
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(ModbusReadMultipleInputsRegistersNode));
            node = new (a) ModbusReadMultipleInputsRegistersNode(nodeName, sectionName, *hash, slaveAddress, offset, nbValues, refreshInterval, webRefreshInterval);
        } else {         
            node = new ModbusReadMultipleInputsRegistersNode(nodeName, sectionName, *hash, slaveAddress, offset, nbValues, refreshInterval, webRefreshInterval);
        }
    } else {
        sprintf(message, "createModbusNode:: Unable to identifiy node type with class %s\r\n", type);
        prepareMessage(ERROR, message);
        return false;
    }

    node->setDescriptor(descriptor);
    *hash = node->getHash();

   if (!check){
         nodesMap.insert(std::make_pair(node->getHash(), node));
    }
    
    return true;
}

bool BorneUniverselle::i2cInit(JsonDocument contextDoc){
    char buff[128];
    if (contextDoc.containsKey(I2C)){
        if (!isI2CInitialised){
            uint8_t sda, scl;
            if (contextDoc[I2C].containsKey(SDA)){
                sda =  contextDoc[I2C][SDA];
                //Serial.printf("SDA: %d\r\n", sda);
                if (contextDoc[I2C].containsKey(SCL)){
                    scl = contextDoc[I2C][SCL];
                    Wire.begin(sda, scl);
                    //Serial.println("I2c bus initialised");
                } else {
                    sprintf(buff, "initI2C:: Unable to find key %s", SCL);
                    prepareMessage(ERROR, buff);
                    return false; 
                } 
            }  else {
                sprintf(buff, "InitI2C:: Unable to find key %s", SDA);
                prepareMessage(ERROR, buff);
                return false;
            } 
            Wire.begin(sda, scl);
            isI2CInitialised = true;
        }
    }
    return true;
}

bool BorneUniverselle::RS485Init(JsonDocument contextDoc){
    if (isRs485Initialised){
        return true;
    }

    if (contextDoc.containsKey(RS485)){
        uint8_t rxPin, txPin;
        uint16_t speed;
        uint32_t config;
        if (contextDoc[RS485].containsKey(RX)){
            rxPin = contextDoc[RS485][RX];
            if (contextDoc[RS485].containsKey(TX)){
                txPin = contextDoc[RS485][TX];
                if (contextDoc[RS485].containsKey(SPEED)){
                    speed = contextDoc[RS485][SPEED];
                    if (contextDoc[RS485].containsKey(CONFIG)){
                        if (!strcmp(contextDoc[RS485][CONFIG], "SERIAL_8N1")){
                            config = SERIAL_8N1;
                        } else if (!strcmp(contextDoc[RS485][CONFIG], "SERIAL_8N2")){
                            config = SERIAL_8N2;
                        } else  if (!strcmp(contextDoc[RS485][CONFIG], "SERIAL_8E1")){
                            config = SERIAL_8E1;
                        } else if (!strcmp(contextDoc[RS485][CONFIG], "SERIAL_8E2")){
                            config = SERIAL_8E2;
                        } else {
                            prepareMessage(ERROR, "RS485Init:: unrecognised protocol");
                            return false;
                        }

                        Serial.printf("RS485 speed: %d, rx pin: %d, tx pin: %d config: %lu\r\n", speed, rxPin, txPin, config);
                        myRS485 = new HardwareSerial(1);
                        myRS485->setRxBufferSize(128);
                        myRS485->begin(speed, config, rxPin, txPin);
                        //myRS485->setTimeout(1);
                        isRs485Initialised = true;
                        //Serial.println("RS485 bus is initialised");
                    }   
                } else {
                  prepareMessage(ERROR, "RS485Init::Unable to find key speed");  
                }
            } else {
                prepareMessage(ERROR, "RS485Init::Unable to find key tx");
            }
        } else {
            prepareMessage(ERROR, "RS485Init::Unable to find key rx");
        }
    }
    
    return isRs485Initialised;
}

bool BorneUniverselle::modbusInit(JsonDocument contextDoc){
    if (isModbusInitialised){
        return true;
    }
    
    if (!isRs485Initialised){
        if (!RS485Init(contextDoc)){
            prepareMessage(ERROR, "modbusInit:: unable to initalise RS485 bus");
            return false;
        }
    } 
    
    modbus = new ModbusRTU();
    if (!modbus->begin(myRS485)){
        prepareMessage(ERROR, "modbusInit:: unable to initalise Modbus");
        return false;
    }
    modbus->master();

    MyModbus::setModbus(modbus);
    isModbusInitialised = true;
    //Serial.println("Modbus initialised");   
    return true;
}

bool BorneUniverselle::createRxBoolNode(char *name,  char *parentName, uint32_t *hash, JsonDocument contextDoc, JsonObject hardSection, char * type, uint16_t refreshInterval, uint16_t webRefreshInterval,
                                        JsonDocument descriptor, bool check){
    // Cree un input node boolean hardware
    char buff[256];

    //Serial.println("createRxBoolNode");
    uint8_t pin;
    if (hardSection.containsKey(PIN)){
        pin = hardSection[PIN].as<int>();
    } else {
        sprintf(buff, "createRxBoolNode:: Unable to find key %s in hardware file for section %s", PIN, parentName);
        prepareMessage(ERROR, buff);

        return false;
    }

    Node *node;
    if (!strcmp(type, RX_BOOL)){
        //Serial.println("type RX_BOOL");
        bool inputsInverted = false;
        if (contextDoc.containsKey(INPUTS_INVERTED)){
            inputsInverted = contextDoc[INPUTS_INVERTED];
        }

        if (psRamAvailable){
            void * a = ps_malloc(sizeof(HardwareBooleanInputNode));
            node = new (a) HardwareBooleanInputNode(name, parentName, *hash, pin, inputsInverted, refreshInterval, webRefreshInterval); 
        } else {
            node = new HardwareBooleanInputNode(name, parentName, *hash, pin, inputsInverted, refreshInterval, webRefreshInterval);
        }
        
        Serial.printf("Node %s created with succes (ESP32 pin %d), with type HardwareBooleanInputNode and hash: %lu, refresh interval: %u, web refresh interval: %u\r\n", name, pin, *hash, refreshInterval, webRefreshInterval);
    } else  if (!strcmp(type, PF8574_RX_BOOL)){
        //Serial.println("type PF8574");
        if (isI2CInitialised){
            if (contextDoc[I2C].containsKey(RX_ADDR)){
                uint8_t i2cAddr = contextDoc[I2C][RX_ADDR];
                if (psRamAvailable){
                    void * a = ps_malloc(sizeof(PF8574BooleanInputNode));
                    node = new (a) PF8574BooleanInputNode(name, parentName, *hash, i2cAddr, pin, refreshInterval, webRefreshInterval);
                } else {
                    node = new PF8574BooleanInputNode(name, parentName, *hash, i2cAddr, pin, refreshInterval, webRefreshInterval);
                }
                Serial.printf("Node %s created with succes with type PF8574BooleanInputNode and hash: %lu, refresh interval: %u, web refresh interval: %u\r\n", name, *hash, refreshInterval, webRefreshInterval);
            } else {
                sprintf(buff, "createRxBoolNode:: Unable to find key %s in hardware file for section %s", RX_ADDR, parentName);
                prepareMessage(ERROR, buff);
                return false;
            }
        }   else {
            sprintf(buff, "createRxBoolNode:: Use PF8574, but I2Cbus is not initialised");
            prepareMessage(ERROR, buff);
            return false;
        } 

    } else {
        sprintf(buff, "createRxBoolNode:: Unable to match type  %s from config with type for hardware file.\r\n", type);
        prepareMessage(ERROR, buff);
        return false;
    }

    node->setDescriptor(descriptor);  //THIERRY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    *hash = node->getHash();

    if (!check){
        nodesMap.insert(std::make_pair(node->getHash(), node));
    }
    return true;
}

bool BorneUniverselle::createTxBoolNode(char *name, char *parentName, uint32_t *hash, JsonDocument contextDoc, JsonObject hardSection, char * type, uint16_t webRefreshInterval, JsonDocument descriptor, bool check){
    // Cree un input node boolean hardware
    uint8_t pin;
    char buff[128];
    if (hardSection.containsKey(PIN)){
        pin = hardSection[PIN].as<int>();
    } else {
        sprintf(buff, "createTxBoolNode:: Unable to find key %s in hardware file for section %s, web refresh interval: %u", PIN, parentName, webRefreshInterval);
        prepareMessage(ERROR, buff);
        return false;
    }

    Node *node;
    if (!strcmp(type, TX_BOOL)){
        //Serial.println("type TX bool"); 
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(HardwareBooleanOutputNode));
            node = new (a) HardwareBooleanOutputNode(name, parentName, *hash, pin, webRefreshInterval);
        } else {  
            node = new HardwareBooleanOutputNode(name, parentName, *hash, pin, webRefreshInterval);
        }

        Serial.printf("Node %s created with succes (ESP32 pin %d) with type HardwareBooleanOutputNode and hash: %lu\r\n", name, pin, *hash); 
    } else if (!strcmp(type, PF8574_TX_BOOL)){
        //Serial.println("type PF8574");
        if (isI2CInitialised){
            if (contextDoc[I2C].containsKey(TX_ADDR)){
                uint8_t i2cAddr = contextDoc[I2C][TX_ADDR];

                if (psRamAvailable){
                    void * a = ps_malloc(sizeof(PF8574BooleanOutputNode));
                    node = new (a) PF8574BooleanOutputNode(name, parentName, *hash, i2cAddr, pin, webRefreshInterval);
                } else {
                    node = new PF8574BooleanOutputNode(name, parentName, *hash, i2cAddr, pin, webRefreshInterval);
                }

                Serial.printf("Node %s created with succes with type PF8574BooleanOutputNode and hash: %lu\r\n", name, *hash); 
            } else {
                sprintf(buff, "createTxBoolNode:: Unable to find key %s in hardware file for section %s, web refresh interval: %u", TX_ADDR, parentName, webRefreshInterval);
                prepareMessage(ERROR, buff);
                return false;
            }    
        } else {
            sprintf(buff, "createTxBoolNode:: Use PF8574, but I2Cbus is not initialised");
            prepareMessage(ERROR, buff);
            return false;
        }    
    } else {
        sprintf(buff, "createTxBoolNode:: Unable to match type  %s from config with type for hardware file.\r\n", type);
        prepareMessage(ERROR, buff);
        return false;
    }

    node->setDescriptor(descriptor);
    *hash = node->getHash();

    //Serial.printf("Node %s, pin %d created with succes with type BooleanOutputNode, hash: %u\r\n", name, pin, *hash);
    if (!check){
         nodesMap.insert(std::make_pair(node->getHash(), node));
    }
    //Serial.println("createTxBoolNode");
    return true;
}

bool BorneUniverselle::createVirtualNode(char *name, char *sectionName, char *type, uint32_t *hash, JsonDocument descriptor, bool check){
    char buff[128];
    bool found = false;
    //Serial.printf("createVirtualNode section: %s,  node name: %s, \r\n", sectionName, name);
    Node *node;
    // No web refresh interval constraint...
    if (!strcmp(type, RX_BOOL)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualBooleanInputNode));
            node = new (a) VirtualBooleanInputNode(name, sectionName, *hash, 0);    
        } else {
            node = new VirtualBooleanInputNode(name, sectionName, *hash, 0);
        }
        Serial.printf("Node %s created (VirtualBooleanInputNode) with succes, hash: %lu\r\n", node->getName(), node->getHash());
        found = true;
    } else if (!strcmp(type, TX_BOOL)) {
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualBooleanOutputNode));
            node = new (a) VirtualBooleanOutputNode(name, sectionName, *hash, 0);
        } else {
            node = new VirtualBooleanOutputNode(name, sectionName, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualBooleanOutputNode) with succes, hash: %lu\r\n", node->getName(), node->getHash());
        found = true;
    } else if (!strcmp(type, RX_UINT32)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualUint32InputNode));
            node = new (a) VirtualUint32InputNode(name, sectionName, *hash, 0);
        } else {
            node = new VirtualUint32InputNode(name, sectionName, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualUint32InputNode) with succes, hash: %lu\r\n", node->getName(), node->getHash());
        found = true;
    } else if (!strcmp(type, TX_UINT32)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualUint32OutputNode));
            node = new (a) VirtualUint32OutputNode(name, sectionName, *hash, 0);
        } else {
            node = new VirtualUint32OutputNode(name, sectionName, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualUint32OutputNode) with succes, hash: %lu\r\n", node->getName(), node->getHash());
        found = true;
    } else if (!strcmp(type, TX_FLOAT)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualFloatOutputNode));
            node = new (a) VirtualFloatOutputNode(name, sectionName, *hash, 0); 
        } else {
            node = new VirtualFloatOutputNode(name, sectionName, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualFloatOutputNode) with succes, hash: %lu\r\n", node->getName(), node->getHash());
        found = true;
    } else {
        sprintf(buff, "createVirtualNode:: Unable to create virtual node %s/%s with type %s", sectionName, name, type);
        prepareMessage(ERROR, buff);
        setPlcBroken(buff);
    }

    *hash = node->getHash();
    node->setDescriptor(descriptor);

    if (found && !check){
       nodesMap.insert(std::make_pair(node->getHash(), node)); 
    }
    return true;
}

bool BorneUniverselle::getIsKinconyA8S(){
    return isKinconyA8S;
}

bool BorneUniverselle::notifyWebClient(bool sendAllStates){
    // if all nodes = true -> send all nodes
    // if all nodes = false -> send only changed nodes

    if (!isClientConnected()){
        // Serial.println("No client connected -> don't send changes !");
        clearInputschanged();
        return true;
    }

    uint32_t start = millis();
    //Serial.printf("%u:: start notifyWebClient\r\n", millis());
    bool hasTosend = false;
    //char mess[1024];
    //Serial.println("Notify web client");
   
    JsonDocument notifyDoc;
    JsonArray array = notifyDoc[NOTIFY_STATES_CHANGED].to<JsonArray>();

    std::map<uint32_t, Node *>::iterator it;
    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        if (PF8574BooleanInputNode::isInterrupt()){
            return true; 
        }
        Node *node = it->second;
        if (node->getIsChanged() || sendAllStates){
            //Serial.printf("Node %s has changed\r\n", node->getName());
            // On limite le refresh du client web
            if (!sendAllStates){
                if (millis() - node->getLastWebUpdate() < node->getWebUpdateInterval()){
                    // Serial.printf("On saute un web notify pour le node: %s, web update intervalle: %u\r\n", node->getName(), node->getWebUpdateInterval());
                    continue;
                }
                node->setLastWebUpdate(millis());   
            }
        
            hasTosend = true;
            if (node->getMode() == DEFAULT_MODE){
                char message[128];
                sprintf(message, "Node %s is not input and not output !!!\r\n", node->getName());
                setPlcBroken(message);
                return false;
            }
          
            JsonObject nodeObject = array.add<JsonObject>();
            if (!addNodeToNodeObject(node, &nodeObject)){
                return false;
            }

            if (node->getMode() == INPUT_MODE){
                if (node->getIsChanged()){
                    //Serial.printf("Node %s change will be cleared\r\n", node->getName());
                    node->clearIsChanged();
                }
               
            } 

            //Serial.printf("Will notify for node: %s\r\n", node->getName());
        }
        yield();
    } 

    if (hasTosend){
        //Serial.println("notifyWebClient: Message that will be send: \r\n" );
        //serializeJsonPretty(notifyDoc, Serial);
        //Serial.println();
        if (getWifiStatus() && isClientConnected()){
            uint16_t size = measureJson(notifyDoc);
            if (size > 20000){
                char message[64];
                strcpy(message,  "Json notify states is too long !!");
                prepareMessage(ERROR, message);
                setPlcBroken(message);
                return false;
            } else {
               // Serial.printf("Document size: %u\r\n", size);
            }

            char *chain = (char *)malloc(size + 10);
            if (chain){
                serializeJson(notifyDoc, chain, size);
                chain[size] = 0;  // 0 chain terminated is missing !!!!
                // Serial.printf("Will display notify message, size: %u\r\n", strlen(chain));
                serializeJsonPretty(notifyDoc, Serial);
                Serial.println();
                if (isClientConnected() && client != nullptr){
                    sendTextToClient(chain);
                }
            } else {
                Serial.println(F("malloc failed on notify message"));
            }
            
            free(chain);
            Serial.println(F("End web notify\r\n"));
        }

        if (millis() - start > 300){ 
            Serial.printf("\r\n%lu:: End notifyWebClient: duration: %lu\r\n", millis(), millis() - start);
        }
    }
    return true;
} // notifyWebClient

bool BorneUniverselle::addNodeToNodeObject(Node *node, JsonObject *nodeObject){
    uint32_t hash = node->getHash();

    JsonDocument descriptorDoc = node->getDescriptor();

#ifdef DESCRIPTOR_INCLUDED
    (*nodeObject)[DESCRIPTOR] = descriptorDoc;
#endif

    (*nodeObject)[HASH] = hash;

    if (node->classType() == CLASS_HW_BOOLEAN_INPUT_NODE || node->classType() == CLASS_PFC8574_BOOLEAN_INPUT_NODE ||
        node->classType() == CLASS_VIRTUAL_BOOLEAN_INPUT_NODE || node->classType() == CLASS_MODBUS_READ_COIL){
        BooleanInputNode *b = (BooleanInputNode*) node;
        (*nodeObject)[VALUE] = b->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = b->getValue(); 
#endif  
        Serial.printf("%lu:: Node notify: %s new value: %s\r\n", millis(), node->getName(), b->getValue() ? "true" : "false");    
    } else  if (node->classType() == CLASS_HW_BOOLEAN_OUTPUT_NODE || node->classType() == CLASS_PFC8574_BOOLEAN_OUTPUT_NODE || node->classType() == CLASS_VIRTUAL_BOOLEAN_OUTPUT_NODE ||
        node->classType() == CLASS_MODBUS_WRITE_COIL_NODE){
        BooleanOutputNode *b = (BooleanOutputNode*) node;
        (*nodeObject)[VALUE] = b->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = b->getValue(); 
#endif 
        Serial.printf("%lu:: Node notify: %s new value: %s\r\n", millis(), node->getName(), b->getValue() ? "true" : "false");
    } else if (node->classType() == CLASS_MODBUS_READHOLDINGREGISTER || node->classType() == CLASS_MODBUS_READINPUTREGISTER){
        Uint16InputNode *u = (Uint16InputNode*) node;
        (*nodeObject)[VALUE] = u->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = u->getValue(); 
#endif 
        Serial.printf("%lu:: Node notify: %s new value: %u\r\n", millis(), node->getName(), u->getValue());
    } else if (node ->classType() == CLASS_MODBUS_WRITEHOLDINGREGISTER){
        Uint16OutputNode *w = (Uint16OutputNode*) node;
        (*nodeObject)[VALUE] = w->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = w->getValue();
#endif  
        Serial.printf("%lu:: Node notify: %s new value: %u\r\n", millis(), node->getName(), w->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_UINT32_INPUT_NODE || node->classType() == CLASS_MODBUS_READ_DOUBLE_INPUTREGISTER || node->classType() == CLASS_MODBUS_READ_DOUBLE_HOLDING_REGISTER){
        Uint32InputNode *v = (Uint32InputNode*) node;
        (*nodeObject)[VALUE] = v->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = v->getValue(); 
#endif 
        Serial.printf("%lu:: Node notify: %s new value: %lu\r\n", millis(), node->getName(), v->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_UINT32_OUTPUT_NODE || node->classType() == CLASS_MODBUS_WRITE_DOUBLE_INPUTREGISTER || node->classType() == CLASS_MODBUS_WRITE_DOUBLE_HOLDING_REGISTER) {
        Uint32OutputNode *u = (Uint32OutputNode *) node;
        (*nodeObject)[VALUE] = u->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = u->getValue();  
#endif
        Serial.printf("%lu:: Node notify: %s new value: %3.3f\r\n", millis(), node->getName(), (double)u->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_FLOAT_OUTPUT_NODE) {
        FloatOutputNode *u = (FloatOutputNode *) node;
        (*nodeObject)[VALUE] = u->getValue();
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = u->getValue();  
#endif
        Serial.printf("%lu:: Node notify: %s new value: %3.3f\r\n", millis(), node->getName(), u->getValue());
    } else if (node->classType() == CLASS_MODBUS_WRITE_MULTIPLE_COILS){
        ModbusWriteMultipleCoilslNode *m = (ModbusWriteMultipleCoilslNode *) node;
        char text[32];
        uint8_t z;
        for (z = 0; z < m->getNbValues(); z++){
            if (m->getValue(z)){
               text[z] = '1';
            } else {
                 text[z] = '0';
            }
        }
   
        text[m->getNbValues()] = 0;
        (*nodeObject)[VALUE] = text;
        Serial.printf("node: %s is a ModbusWriteMultipleCoilslNode, it can be represented as a unique number. The 'value': %s is all binary bits converted to an texte\r\n", node->getName(), text);
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = text;  
#endif
    } else if (node->classType() == CLASS_MODBUS_READ_MULTIPLE_INPUTS_STATUS){  
        ModbusReadMultipleInputsRegistersNode *t = (ModbusReadMultipleInputsRegistersNode *) node;
        char text[32];
        uint8_t z;
        for (z = 0; z < t->getNbValues(); z++){
            if (t->bits[z].getValue()){
               text[z] = '1';
            } else {
                 text[z] = '0';
            }
        }
        text[t->getNbValues()] = 0;
        (*nodeObject)[VALUE] = text;
        Serial.printf("node: %s is a ModbusReadMultipleInputsRegistersNode, it can be represented as a unique number. The 'value': %s is all binary bits converted to an texte\r\n", node->getName(), text);  
#ifdef DESCRIPTOR_INCLUDED
        (*nodeObject)[DESCRIPTOR][VALUE] = text;  
#endif             
    } else {
        char buff[256];
        sprintf(buff, "notifyWebClient:: Unable to find node class from node: %s with class type: %u\r\n", node->getName(), node->classType());
        prepareMessage(WARNING, buff);
        setPlcBroken(buff);
        return false;
    }

    checkHeartbeat();
    return true;
}

bool BorneUniverselle::isNewClientConnected(){
    return newClientConnected;
}

void BorneUniverselle::clearNewClientConnected(){
   newClientConnected = false;
}

void BorneUniverselle::clearInputschanged(){
    std::map<uint32_t, Node *>::iterator it;

    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        Node *node = it->second;
 
        if (node->getMode() == INPUT_MODE){
            if (node->getIsChanged()){
                //Serial.printf("Node %s change will be cleared\r\n", node->getName());
                node->clearIsChanged();
            }
        } 
    }
} // if no client connected

Node *BorneUniverselle::findNode(const char *context, uint32_t hash){
    auto iter =  nodesMap.find(hash);

    if (iter != nodesMap.end()){
        return nodesMap.at(hash);
    } else {
        char text[128];
        sprintf(text, "findNode:: Searching for node with hash: %lu, with context: %s but not found !\r\n", hash, context);
        prepareMessage(ERROR, text);
        setPlcBroken(text);
        return nullptr;
    }  
}

void BorneUniverselle::printConfigFile(){
    File file = LittleFS.open("/config.json", FILE_READ);
 
    if (!file){
        Serial.println("Config file open error");
        return;
    }

    JsonDocument configDoc;
    DeserializationError error = deserializeJson(configDoc, file);
    file.close();

    if (error) {
        char buff[1000];
        sprintf(buff, "%lu:: config file: deserializeJson() failed: ", millis());
        strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
        Serial.println(buff);
        return;
    }

    serializeJsonPretty(configDoc, Serial);
}