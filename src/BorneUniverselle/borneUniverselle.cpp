#include "BorneUniverselle/borneUniverselle.h"

bool BorneUniverselle::otaPending;
char  BorneUniverselle::ota_url[OTA_URL_SIZE];

char BorneUniverselle::defaultName[NAME_LENGHT] = "Borne Universelle";

BorneUniverselle* BorneUniverselle::mainInstance = nullptr;
SemaphoreHandle_t BorneUniverselle::instanceMutex = nullptr;

SemaphoreHandle_t BorneUniverselle::webSocketMutex = NULL;
SemaphoreHandle_t BorneUniverselle::notifMutex = NULL;

// Initialisation de la callback à nullptr
std::function<void()> BorneUniverselle::initialStateLoadedCallback = nullptr;

BorneUniverselle::BorneUniverselle(): myModbus(MyModbus::getInstance()) {
    Serial.printf("Start at %lu ms, tasks: %u, heap: %u, stack free: %u\n", millis(), uxTaskGetNumberOfTasks(), xPortGetFreeHeapSize(), uxTaskGetStackHighWaterMark(NULL) * 4);

    if (instanceMutex == nullptr) {
        instanceMutex = xSemaphoreCreateMutex();
    }
    
    if (instanceMutex != nullptr) {
        MutexGuard guard(instanceMutex, "instanceMutex", "BorneUniverselle constructor");
        if (guard.isAcquired() && mainInstance == nullptr) {
            mainInstance = this;
        }
    } else {
        setPlcBrokenImpl("BorneUniverselle:: unable to create the mutex instanceMutex");
    }

    Serial.println(F(BORNE_UNIVERSELLE_VERSION)); 

    webSocketMutex = xSemaphoreCreateMutex();
    
    if (webSocketMutex == NULL) {
        setPlcBrokenImpl("webSocketMutex was not created successfully");
        return;
    }
    
    notifMutex = xSemaphoreCreateMutex();
    
    if (notifMutex == NULL) {
        setPlcBrokenImpl("notifMutex was not created successfully");
        return;
    }
    
    myModbus.setMessageCallback(modbusMessageHandler); // callback for modbus messages
    PLC_Tools plcTools;
  
    if (!plcTools.logReboot()){
            setPlcBrokenImpl("Failed to log reboot");
        return;
    }   
   
    Serial.println(F("Reboot history"));
    Serial.println(F("*************"));

    Serial.println(plcTools.getRebootLog());
    
    Serial.println(F("End of reboot history"));
    Serial.println();
    Serial.println(F("BorneUniverselle constructor"));
   
    if (!plcTools.printDiagnosticFile()){
        setPlcBrokenImpl("Failed to print diagnostic file");
        return;
    }
        
    if (psramInit()){
        Serial.println(F("PSRAM is available !!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
        psRamAvailable = true;
    } else {
        psRamAvailable = false;
        Serial.println(F("PSRAM is not available !"));
    }

    PLC_Persistence& persistence = PLC_Persistence::getInstance();

    // Lecture du fichier JSON
    JsonDocument configDoc;
    if (!persistence.readJsonFromFile("/config.json", configDoc)) {
        setPlcBrokenImpl(persistence.getLastError());
        return;
    }

    if (configDoc[CONFIG].is<JsonArray>()){
        if (!parseConfig(configDoc, false)){
            setPlcBrokenImpl("The config file doesn't contain the key config");
            return;
        }
    } else {
        unableToFindKey((char *)"config.json file",(char *)TOSTRING(CONFIG) );
    }
 
    nbTimeouts = 0;

    //Serial.printf("Total Ps-ram: %lu, free Ps-ram: %lu\r\n", (long unsigned)totalPsRam, (long unsigned)freePsRam);

    if (getConfigVersion() >= 2){
        PLC_InterfaceMenu* menuInterface = new PLC_InterfaceMenu();
        Serial.println("Will parse the interface file");
        if (!menuInterface->parseFile(INTERFACE_PATH_FILE)){
            char buff[128];
            sprintf(buff, "Unable to parse the interface file with the path: %s\r\n", INTERFACE_PATH_FILE);
            delete menuInterface;
            setPlcBrokenImpl(buff);
            return;
        } else {
            Serial.println("Interface file parsed with success");
        }

        Serial.println("Loop on nodes to set node name from the interface file");
        for (const MenuNode& menuNode : *menuInterface) {  
            Serial.printf("MenuNode: %s in section %s, hash: %lu\r\n", menuNode.name.c_str(), menuNode.sectionName.c_str(), (long unsigned)menuNode.hash);
            Node *node = findNode("Loop on nodes to set node name from the interface file", menuNode.hash);
            if (node != nullptr) {
                if (node->setName(menuNode.name.c_str(), menuNode.sectionName.c_str())){
                    Serial.printf("Node name set: %s\r\n", node->getName());
                } else {
                    String fullName = String(menuNode.sectionName.c_str()) + "/" + String(menuNode.name.c_str());
                    char buff[128];
                    sprintf(buff, "Unable to set node name: %s \r\n", fullName.c_str());
                    setPlcBrokenImpl(buff);
                    return;
                }
            }

            if (isPlcBroken()){
                return;
            }
        }

        delete menuInterface;
    } else {
        Serial.printf("Config version: %2.2f\r\n", getConfigVersion());
    }

    // prepare heartbeat chain
    JsonDocument doc;
	doc[HEARTBEAT] 	= TRUE_J;
  	serializeJson(doc, hearbeatChain);

    auto files = persistence.getFilteredFiles("/", "*.*");

    Serial.println("List of files in the root directory:");
    for (const String& fileName : files) {
        Serial.println(fileName);  // Affiche juste le nom du fichier
    } 
    

    Serial.printf("End of BorneUniversel constuctor, nb nodes: %u\r\n", nodesMap.size());
}

void BorneUniverselle::modbusMessageHandler(uint8_t severity, const char* message) {
    BorneUniverselle::prepareMessage(severity, message);  
}

bool BorneUniverselle::isPlcBroken(){
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->isPlcBrokenImpl();
    } else {
        Serial.println("Pas d'instance BorneUniverselle !!!");
        return true;
    }
}
   
bool BorneUniverselle::isPlcBrokenImpl(){
    return plcBroken;
}

void BorneUniverselle::setPlcBroken(const char *context) {
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        instance->setPlcBrokenImpl(context);
    }
}

void BorneUniverselle::setPlcBrokenImpl(const char *context) {
    if (!plcBroken) {
        size_t len = strlen(context) + strlen("Plc is broken, context: ") + 10;
        char *text = (char *)malloc(len);
      
        if (text == nullptr) {
            Serial.println("setPlcBrokenImpl:: Unable to allocate memory for error message");
            return;
        }
     
        snprintf(text, len, "Plc is broken, context: %s", context);
        prepareMessage(ERROR, text);
        isLastMessageFatal = true;
        Serial.println(text);
          
        free(text);
      
    }
    plcBroken = true;
}

void BorneUniverselle::unableToFindKey(char *_context, char *_key){
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        instance->unableToFindKeyImpl(_context, _key);
    }
}

void BorneUniverselle::unableToFindKeyImpl(char *_context, char *_key){
    char message[256];
    sprintf(message, "unableToFindKey:: In context: %s, Unable to find key: %s\r\n", _context, _key);
    prepareMessage(ERROR, message);
    setPlcBrokenImpl(message);
}

void BorneUniverselle::setShowModbusMessages(bool status){
    showModbusMessages = status;
    // flag tous les nodes modbus pour afficher les messages
    std::map<uint32_t, Node *>::iterator it;
    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        Node *node = it->second;
        if (node->classType() >= FIRST_MODBUS_CLASS && node->classType() <= LAST_MODBUS_CLASS){
            node->setShowMessages(status);
        }
    }
}

bool BorneUniverselle::getModbusStatusMessages(){
    return showModbusMessages;
}

void BorneUniverselle::showMessage(Node *node, const char *text){
    if (showHeartbeatMessages && node->getShowMessages()){
        Serial.println(text);
    }
}

void BorneUniverselle::refresh(){
    if (isPlcBroken()){
        Serial.println("No refresh because PLC is broken !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            return;
    }

    //Serial.println("Refresh");
    //PLC_Tools plcTools;
    //plcTools.manageWiFiBasedOnMemory();

    uint32_t start = millis();
    uint32_t lastCheck = start;
    //Serial.printf("%lu:: start refresh\r\n", millis());
    std::map<uint32_t, Node *>::iterator it;
    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        if (PF8574BooleanInputNode::isInterrupt()){
            return;
        }
        //Serial.printf("Will refresh node key: %u\r\n", it->first);
        Node *node = it->second;
        if (node->getMode() == INPUT_MODE){
            InputNode *inputNode = (InputNode *)node;
            if (millis() - inputNode->getLastRefresh() < inputNode->getRefreshInterval()){
                char mess[256];
                snprintf(mess, sizeof(mess), "On saute le node %s\r\n", node->getName());
                showMessage(node, mess);
                vTaskDelay(pdMS_TO_TICKS(1));
                continue;
            } 
        }

        uint32_t hash;
        if (node->getShowMessages()){
            if ((node->classType() >= FIRST_MODBUS_CLASS && node->classType() <= LAST_MODBUS_CLASS) ){
               myModbus.setShowMessages(true);
            }  
        }

        bool e = node->refresh();
        
        myModbus.setShowMessages(false);

        if (!e){
            hash = node->getHash();
            char mess[256];
            snprintf(mess, sizeof(mess), "Refresh:: error on refresh node: %s with hash: %lu:", node->getName(), (long unsigned)hash);
            prepareMessage(WARNING, mess);
        }

        // test;
        if (millis() - start > 1000){
            Serial.printf("%lu::Refresh:: abnormal refresh time (more than 1 sec), aborting refresh process\r\n", millis());
            vTaskDelay(pdMS_TO_TICKS(1));
            return;
        }

        if (millis() - lastCheck > ABNORMAL_REFRESH_TIME){   
            Serial.printf("%lu::Refresh:: abnormal refresh time, refreshing watch dog\r\n", millis());
            lastCheck = millis();
            vTaskDelay(pdMS_TO_TICKS(10));
            // on a peut etre reçu un hearbeat   
            //Serial.printf("%lu::Refresh:: will call handleWebSocketMessage\r\n", millis());
            handleWebSocketMessage();  // handleWebSocketMessage appel checkHeartbeat
            //return;
        }
        //Serial.printf("%u:: Refresh: vTaskDelay\r\n", millis());
        vTaskDelay(pdMS_TO_TICKS(1));
    } // for 

    if ( millis() - start > 1000){
        Serial.printf("%lu::Total refresh time: %lu (wait time included)\r\n", millis(), millis() - start);
    }
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
                    //Serial.printf("isAllInputsReadOnce: at least node %s has not been read once\r\n", node->getName());
                    status = false;
                    break;
                }
            }
            vTaskDelay(pdMS_TO_TICKS(1));
        }
        if (status){
            allInputsReadOnce = true;
        }
    }

    return allInputsReadOnce;
}

void BorneUniverselle::refresHardwareInputs(){
    BorneUniverselle* instance = getInstance();
    if (instance) {
        instance->refresHardwareInputsImpl();
    }
}

void BorneUniverselle::refresHardwareInputsImpl(){
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
    if (status){
        IPAddress ip = WiFi.localIP();
        Serial.printf("WiFi connected, IP address: %d.%d.%d.%d, level: %d [dB]\r\n", ip[0], ip[1], ip[2], ip[3], WiFi.RSSI());
    } else {
        Serial.println(F("Wifi disconnected"));
    }
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
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->connectWifiImpl(currentWifi);
    } else {
        return false;
    }
}

bool BorneUniverselle::connectWifiImpl(WifiItem currentWifi){
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
    WiFi.setHostname(BorneUniverselle::getName());
	WiFi.begin(currentWifi.SSID, currentWifi.PWD);
    wifiStartupTime = millis();
    return true;
}

unsigned char BorneUniverselle::getNbWifiItems(){
    //Serial.printf("getNbWifiItems: %d\r\n", wifiItemsMapBu.size());
	return wifiItemsMapBu.size();

}      

void BorneUniverselle::setOTA_url(const char *url){
	Serial.printf("New url for fimrware update will be saved in persistant parameters: %s\r\n", url);
	//saveParameters();
}

bool BorneUniverselle::saveParameters(const JsonDocument &configDoc) {
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    if (persistence.saveJsonToFile("/config.json", configDoc)) {
        Serial.println(F("Config file saved with success"));
        return true;
    } else {
        Serial.println(F("Error saving config file"));
        Serial.println(persistence.getLastError());
        return false;
    }
}


void BorneUniverselle::setClientConnected(bool status, AsyncWebSocketClient *_client) {
    // Gestion du webSocketMutex
    MutexGuard webSocketguard(webSocketMutex, "webSocketMutex", __FUNCTION__); 
    if (!webSocketguard.isAcquired()) {
        setPlcBroken("setClientConnected:: unable to acquire the mutex");
        return;
    }

    // Gestion des webSocket messages
    clientconnected = status;
    if (status) {
        client = _client;
        clientConnectedAt = millis();
        lastHeartbeatSend = 0;
        heartbeatTimeout = millis() + HEARTHBEAT_TIMEOUT;
        newClientConnected = true;
    } else {
        AsyncWebSocketClient* tmpClient = client;
        client = nullptr;  // Set to null BEFORE trying to close
        
        if (tmpClient != nullptr) {
            // Check if the client is still in a valid state
            if (tmpClient->status() == WS_CONNECTED) {
                tmpClient->close();
            }
        }
        
        newClientConnected = false;
        webSocketMessagesList.clear();
        Serial.println("setClientConnected:: after a client disconnection, the list webSocketMessagesList is cleared");
    }

    // Gestion du notifMutex
    MutexGuard notifGuard(notifMutex, "notifMutex",  __FUNCTION__) ; 
    if (!notifGuard.isAcquired()) {
        setPlcBroken("setClientConnected:: unable to acquire the mutex notifyMutex");
        return;
    }

    // Nettoyage des notifications
    if (!status) {
        notifMessagesList.clear();
        Serial.println("setClientConnected:: after a client disconnection, the list notifMessagesList is cleared");
    }
}

bool BorneUniverselle::isClientConnected() {
    MutexGuard webSocketGuard(webSocketMutex, "webSocketMutex", "isClientConnected");
    if (!webSocketGuard.isAcquired()) {
        // Si on ne peut pas acquérir le mutex, par prudence on considère
        // qu'aucun client n'est connecté
        setPlcBrokenImpl("isClientConnected:: unable to acquire the mutex");
        return false;
    }
    
    // Maintenant que nous avons le mutex, on peut accéder en toute sécurité
    // à la variable clientconnected ainsi qu'au pointeur client
    bool isConnected = clientconnected && (client != nullptr);
    
    return isConnected;
}

void BorneUniverselle::sendHeartbeat(bool reset){
    if (sendTextToClient(hearbeatChain)){
        lastHeartbeatSend = millis();
        if (showHeartbeatMessages){
            Serial.printf("nextHeartbeatToSend: %lu\r\n", lastHeartbeatSend + HEARTBEAT_DELAY);
        }
    } else {
        Serial.println("sendHeartbeat: unable to send text to client");
        heartbeatReceive = false;
        return;
    }

    if (reset && heartbeatReceive){
        heartbeatReceive = false;
    }
    
    if (showHeartbeatMessages){
        Serial.printf("%lu:: Heartbeat sent\r\n", millis());
    } 

    if  (millis() > heartbeatTimeout){
        Serial.printf("%lu:: late hearbeat send\r\n", millis());
    } 
    heartbeatTimeout = millis() + HEARTHBEAT_TIMEOUT;
}
bool BorneUniverselle::sendTextToClient(char *text){
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->sendTextToClientImpl(text);
    } 
    return false;
}

bool BorneUniverselle::sendTextToClientImpl(char *text){
    const uint32_t QUEUE_TIMEOUT_MS = 100; // 0.1 seconde
    uint32_t startTime = millis();

    if (strlen(text) > SOCKET_MESSAGE_MAX_SIZE){
        char buff[128];
        sprintf(buff, "Try to send more than %u bytes to the web socket\r\n", SOCKET_MESSAGE_MAX_SIZE);
        Serial.println(buff);
        return false;
    }

    MutexGuard guard(webSocketMutex, "webSocketMutex", __FUNCTION__); 
    if (!guard.isAcquired()) {
        setPlcBrokenImpl("sendTextToClientImpl:: unable to acquire the mutex webSocketMutex");
        return false;
    }

    // Vérification complète de l'état du client une fois le mutex acquis
    if (client == nullptr || !clientconnected || client->status() != WS_CONNECTED) {
        Serial.printf("%lu:: Client not available for message sending\r\n", millis());
        return false;
    }

    // Attendre que la queue se libère avec un timeout
    while (client->queueIsFull()) {
        if (millis() - startTime > QUEUE_TIMEOUT_MS) {
            Serial.println(F("WebSocket queue full timeout - message dropped"));
            return false;
        }
        
        vTaskDelay(pdMS_TO_TICKS(10));
        
        // Re-vérifier l'état du client après le délai
        if (client == nullptr || client->status() != WS_CONNECTED) {
            Serial.printf("%lu:: Client disconnected during queue wait\r\n", millis());
            return false;
        }
    }
   
    client->text(text);
    return true;
} 

void BorneUniverselle::updateEarthbeatTimeout(){
    lastHearbeatReceive = millis();
    heartbeatTimeout = millis() + HEARTHBEAT_TIMEOUT;
    if (showHeartbeatMessages){
        Serial.printf("%lu:: Just receive a message from ws. New hertbeatTimeout: %lu\r\n", millis(), (unsigned long)heartbeatTimeout);
     }
}

void BorneUniverselle::checkHeartbeat(){
    if (isClientConnected()){    
        if (heartbeatReceive){
            nbTimeouts = 0;
        }

        if (millis() - lastHeartbeatSend > HEARTBEAT_DELAY){
            if (showHeartbeatMessages){
                Serial.println(F("It's time to send hearbeat"));
            }
            sendHeartbeat(true);
        }

        if (millis() - lastHearbeatReceive > HEARTBEAT_DELAY && millis() - lastHeartbeatSend > 100){
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
        //Serial.println("client not connected");
    }
}

void BorneUniverselle::setShowHeartbeatMessages(bool status){
    showHeartbeatMessages = status;
}

bool BorneUniverselle::sendMessage() { 
    if (!isClientConnected() || notifMessagesList.empty()) {
        return true;
    }
    
    static uint32_t lastMessageTime = 0;
    const uint32_t MIN_MESSAGE_INTERVAL = 500; // 500ms minimum entre messages
    
    // Vérifier si assez de temps s'est écoulé depuis le dernier message
    if (millis() - lastMessageTime < MIN_MESSAGE_INTERVAL) {
        return true; // On reportera l'envoi au prochain appel
    }

     // Le MutexGuard assurera la libération du mutex à la sortie de la fonction
    MutexGuard guard(notifMutex, "notifMutex", __FUNCTION__);
    if (!guard.isAcquired()) {
        setPlcBrokenImpl("sendMessage: unable to acquire the mutex");
        return false;
    }

    if (notifMessagesList.empty()) {
        return true;
    }
    NOTIF_MESSAGE *notifMessage = notifMessagesList.front().get();

    if (!notifMessage) {
        Serial.println(F("BorneUniverselle::sendMessage, invalid notification message"));
        notifMessagesList.pop_front();
        return false;
    }

        // Vérification supplémentaire du message
    if (!notifMessage->message) {
        Serial.println(F("BorneUniverselle::sendMessage, invalid message content"));
        notifMessagesList.pop_front();
        return false;
    }

    JsonDocument doc;
    JsonObject notif = doc["notification"].to<JsonObject>();
    notif[STATUS] = 200;

    switch (notifMessage->severity) {
        case ERROR:     notif[TYPE] = "error"; break;
        case WARNING:   notif[TYPE] = "warning"; break;
        case INFO:      notif[TYPE] = "info"; break;
        case SUCCESS:   notif[TYPE] = "success"; break;
    }

    size_t msgLen = strlen(notifMessage->message);

    if (msgLen > MAX_MESSAGE_LENGTH) {
        Serial.printf("BorneUniverselle::sendMessage, message too long (%d chars), truncating\r\n", msgLen);
        char tempMessage[MAX_MESSAGE_LENGTH + 1];  // Buffer sur la pile
    
        // Copier en limitant à MAX_MESSAGE_LENGTH caractères
        strncpy(tempMessage, notifMessage->message, MAX_MESSAGE_LENGTH);
        tempMessage[MAX_MESSAGE_LENGTH] = '\0';  // S'assurer que la chaîne est terminée
    
        notif[DESCRIPTION] = tempMessage;
    } else {
        notif[DESCRIPTION] = notifMessage->message;
    }

    uint16_t len = measureJson(doc) + 1;
    
    char *chain = (char *)malloc(len);
    if (!chain) {
        // notifMessagesList.remove(notifMessage);
        setPlcBroken("BorneUniverselle::sendMessage, failed to allocate memory for Json message");
        return false;
    }

    serializeJson(doc, chain, len);

    bool success = sendTextToClient(chain);
    
    if (success){
        lastMessageTime = millis();
        notifMessagesList.pop_front();
    } else {
        Serial.println("SendMessage: unable to send text to client"); 
    }

    free(chain);
    return true;
}

void BorneUniverselle::tooMuchClients(AsyncWebSocketClient *_client){
    if (!_client) {
        Serial.println(F("Invalid client pointer in tooMuchClients"));
        return;
    }

    JsonDocument doc;
    doc[TOO_MUCH_CLIENTS] = true;
    char chain[256];
    serializeJson(doc, chain);
    Serial.printf("%lu:: Too much clients: %lu: will be closed...\r\n", millis(), (unsigned long)_client->id());

    // Envoi du message et fermeture
    if (_client->status() == WS_CONNECTED) {
        _client->text(chain);
        vTaskDelay(pdMS_TO_TICKS(100));  // Utiliser vTaskDelay au lieu de delay
        _client->close();
    }
}

BorneUniverselle* BorneUniverselle::getInstance() {
    if (instanceMutex == nullptr) {
        return nullptr;
    }
    
    BorneUniverselle* instance = nullptr;
    MutexGuard guard(instanceMutex, "instanceMutex", "getInstance");
    if (guard.isAcquired()) {
        instance = mainInstance;
    }
    return instance;
}

void BorneUniverselle::prepareMessage(uint8_t type, const char *text){
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        instance->prepareMessageImpl(type, text);
    } 
}

void BorneUniverselle::prepareMessageImpl(uint8_t type, const char * text){
    // Protection contre les pointeurs nuls ou textes vides
    if (!text || !*text) {
        Serial.println(F("Empty message discarded"));
        return;
    }

    // on discard les warning messages si il n'y a pas de client connecté..
    if (!isClientConnected()){
        char safeMessage[MAX_MESSAGE_LENGTH + 1];
        strncpy(safeMessage, text, MAX_MESSAGE_LENGTH);
        safeMessage[MAX_MESSAGE_LENGTH] = '\0';

        if (strlen(text) > MAX_MESSAGE_LENGTH) {
            Serial.printf("prepareMessage:: message too long (%d chars), truncating\r\n", strlen(text));
        }
    
        switch (type) {
            case ERROR:     Serial.printf("%lu:: ERROR: %s\r\n", millis(), safeMessage);
                            break;

            case WARNING:   Serial.printf("%lu:: WARNING: %s\r\n", millis(), safeMessage);
                            break;

            case INFO:      Serial.printf("%lu:: INFO: %s\r\n", millis(), safeMessage);
                            break;

            case SUCCESS:   Serial.printf("%lu:: SUCCESS: %s\r\n", millis(), safeMessage);
                            break;

            default:        type = ERROR; // Default to ERROR if type is unknown,
                            break;
        }
        
        return;
    }

    MutexGuard guard(notifMutex, "notifyMutex", __FUNCTION__); // Le MutexGuard assurera la libération du mutex à la sortie de la fonction
    if (!guard.isAcquired()) {
        setPlcBroken("prepareMessageImpl:: unable to acquire the mutex notifyMutes");
        return;
    }

    if (notifMessagesList.size() >= MAX_MESSAGES_PENDING) {
        Serial.println(F("Notification queue full, dropping oldest message"));
        notifMessagesList.pop_front();
    }

    // Calcul de la longueur finale
    size_t messageLength = strlen(text);
    size_t finalLength = messageLength < MAX_MESSAGE_LENGTH ? messageLength : MAX_MESSAGE_LENGTH - 1;

    auto notif = std::unique_ptr<NOTIF_MESSAGE, NotifMessageDeleter>(new NOTIF_MESSAGE());
    notif->message = static_cast<char*>(malloc(finalLength + 1));
    if (!notif->message) {
        return;
    }

    notif->severity = type;
    strncpy(notif->message, text, finalLength);
    notif->message[finalLength] = '\0';
    notifMessagesList.push_back(std::move(notif));

    // Logging si le message a été tronqué
    if (messageLength > MAX_MESSAGE_LENGTH) {
        Serial.printf("Message truncated from %u to %u characters\n", messageLength, MAX_MESSAGE_LENGTH);
    }

    if (notifMessagesList.size() > MAX_MESSAGES_PENDING / 2) {
        Serial.printf("%lu:: prepareMessage:: There are %u / %u notifications on the queue\r\n", millis(), notifMessagesList.size(), MAX_MESSAGES_PENDING);
    }
}

bool BorneUniverselle::setName(const char *_name, bool check) {
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->setNameImpl(_name, check);
    } else {
        // Comportement de secours si pas d'instance disponible
        Serial.println("ERROR: Cannot set name, no BorneUniverselle instance");
        return false;
    }
}

bool BorneUniverselle::setNameImpl(const char *_name, bool check){
    bool status = false;
    if (strlen(_name) < NAME_LENGHT && strlen(_name) > 0 && !strstr(_name, " ")){
        Serial.printf("Project name: %s\r\n", _name);
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
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->getNameImpl();
    } else {
        // Comportement de secours si pas d'instance disponible
        Serial.println("WARNING: No BorneUniverselle instance available for getName()");
        return defaultName; // Retourne la variable statique comme avant
    }
}

char *BorneUniverselle::getNameImpl(){
    return name;
}

bool BorneUniverselle::isWebSocketMessagesListMoreThanHalf() { 
    if (!isClientConnected()){
        return false;
    }

    MutexGuard guard(webSocketMutex, "webSocketMutex", __FUNCTION__);
    
    if (!guard.isAcquired()) {
        setPlcBroken("isWebSocketMessagesListMoreThanHalf:: unable to acquire webSocketMutex");
        return true; // Par sécurité, on retourne true pour indiquer que la liste est "pleine"
    }

    bool isMoreThanHalf = webSocketMessagesList.size() > MAX_MESSAGES_PENDING / 2;

    if (isMoreThanHalf) {
        Serial.println(F("isWebSocketMessagesList greater than half capacity"));
    }

    return isMoreThanHalf;
}
    
void BorneUniverselle::handleWebSocket(void *_arg, unsigned char *_data, size_t _len, AsyncWebSocketClient *_client){
    // Vérifie simplement que c'est un message texte
    AwsFrameInfo *info = (AwsFrameInfo*)_arg;
    if (info->opcode != WS_TEXT) {
        Serial.println(F("Not a text message"));
        return;
    }

    if (_len < 10 || _len > WEB_SOCKET_MESSAGE_MAX_SIZE) { 
        Serial.printf("handleWebSocket:: webSocketMessage size out of bounds: %u [bytes]\r\n", _len);
        return;
    }  

    // Message complet en une seule frame
    if (info->final && info->index == 0 && info->len == _len && info->opcode == WS_TEXT) {
        keepWebSocketMessage((const char *)_data, _arg, _len, _client);
        return;
    }

    // Premier fragment
    if (info->index == 0) {
        messageBuffer = "";
        expectedSize = info->len;
        Serial.printf("handleWebSocket:: start collecting message, expected size: %u\n", expectedSize);
    }

    // Ajouter le fragment
    messageBuffer += String((char*)_data, _len);

   // Si on a tout reçu - Correction ici
   if (info->final && (info->index + _len) == info->len) {
        Serial.println("handleWebSocket: processing complete reassembled message");
        keepWebSocketMessage(messageBuffer.c_str(), _arg, messageBuffer.length(), _client);
        messageBuffer = ""; // Nettoyer
    } else {
        Serial.println("handleWebSocket:: collecting more data");
    }
} // handleWebSocket

void BorneUniverselle::keepWebSocketMessage(const char *data, void *arg, size_t len, AsyncWebSocketClient *_client) {
    if (isPlcBroken()){
        if (!noPLC_BrokenMessage){
            Serial.println(F("Because the PLC is broken, we don't read the websocket message"));
            noPLC_BrokenMessage = true;
        }
        return;
    }

    if (!isClientConnected()) {
        Serial.println(F("Discarding messages from client disconnected or timed out"));
        return; 
    }

    long start = millis();
    // Add yield to prevent watchdog timeout
    vTaskDelay(pdMS_TO_TICKS(1));

    MutexGuard webSocketGuard(webSocketMutex, "webSocketMutex", __FUNCTION__);
    if (!webSocketGuard.isAcquired()) {
        setPlcBroken("keepWebSocketMessage:: unable to acquire the webSocket mutex");
        return;
    }

     //Limite la taille de la queue en enlevant les messages les plus vieux
     uint16_t webSocketMessageLength;
     while ((webSocketMessageLength = webSocketMessagesList.size()) > MAX_MESSAGES_PENDING) {
         webSocketMessagesList.remove(webSocketMessagesList.front());
         Serial.println("Oldest webSocketMessage removed because queue is full");
     }
   
    // Copie des données
    unsigned char* dataCopy = (unsigned char*)malloc(len + 1);
    if (!dataCopy) {
        Serial.println(F("Memory allocation error for websocket message copy"));
        setPlcBroken("Memory allocation error for websocket message copy");
        return;
    }

    memcpy(dataCopy, data, len);
    dataCopy[len] = 0;  // Ajouter le zéro terminal

    auto webSocketMessage = std::unique_ptr<WEB_SOCKET_MESSAGE, WebSocketMessageDeleter>(new WEB_SOCKET_MESSAGE());
    webSocketMessage->arg = arg;
    webSocketMessage->len = len;
    webSocketMessage->client = _client;
    webSocketMessage->data = dataCopy;
    webSocketMessage->timeOfOrigine = millis();
    webSocketMessagesList.push_back(std::move(webSocketMessage));

    if (millis() - start > 100){
        Serial.printf("Time to add one element on the webSocketMessageList: %lu[ms]\r\n", millis() - start); 
    } 

    if (webSocketMessagesList.size() > 1){
        Serial.printf("%lu:: There are now %u webMessages on the list (to be processed)\r\n", millis(), webSocketMessageLength);
    }
} //keepWebSocketMessage

bool BorneUniverselle::clientQueueIsFull() {
    MutexGuard guard(webSocketMutex, "webSocketMutex", __FUNCTION__);
    if (!guard.isAcquired()) {
        setPlcBroken("clientQueueIsFull:: unable to acquire webSocket mutex");
        return true; // Par sécurité, on retourne true pour indiquer que la liste est "pleine"
    }

    // Vérification après acquisition du mutex
    if (client == nullptr) {
        return false;  // Pas de client connecté
    }
    
    // Vérifier si le client est toujours dans un état valide
    if (client->status() != WS_CONNECTED) {
        Serial.println(F("Client not in connected state in clientQueueIsFull"));
        return false; 
    }
    
    // Maintenant on peut vérifier la file d'attente
    bool isFull = client->queueIsFull();
    if (isFull) {
        Serial.printf("%lu:: Client queue is full\n", millis());
        vTaskDelay(pdMS_TO_TICKS(1));
    }

    return isFull;
}

void BorneUniverselle::handleWebSocketMessage() {
    // Vient de loop mais aussi de refresh
    static uint32_t lastMessageTime = 0;
    if (!isAllInputsReadOnce()){
        if (millis() - lastMessageTime > 5000){
            //Serial.println("handleWebSocketMessage: not all inputs are read");
            lastMessageTime = millis();
        }
    }

    while ( true) {
        if (PF8574BooleanInputNode::isInterrupt()) {
            return;
        }

        if (!isClientConnected()) {
            //Serial.println(F("handleWebSocketMessage: client is not connected"));
            return;
        }

        vTaskDelay(pdMS_TO_TICKS(1));
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
        WEB_SOCKET_MESSAGE workingMessage = {0}; // Initialisation à zéro
#pragma GCC diagnostic pop
        WEB_SOCKET_MESSAGE *webSocketMessageOrig = nullptr;
        bool messageExtracted = false;

        {   
            MutexGuard webSocketGuard(webSocketMutex, "webSocketMutex", __FUNCTION__);
            if (!webSocketGuard.isAcquired()) {
                setPlcBroken("handleWebSocketMessage:: unable to acquire the webSocket Mutex");
                return;
            }

            if (webSocketMessagesList.empty()) {
                return;
            }

            // on extrait le 1er message de la liste
            webSocketMessageOrig = webSocketMessagesList.front().get();
            if (!webSocketMessageOrig) {
            
                Serial.println("handleWebSocketMessage:: webSocketMessage Null !!");
                continue;
            }
        
       
            workingMessage.data = (uint8_t*)malloc(webSocketMessageOrig->len + 1);
            if (!workingMessage.data) {
                setPlcBroken("handleWebSocketMessage: failed to allocate memory for working message");
                return;
            }

            workingMessage.len = webSocketMessageOrig->len;
            memcpy(workingMessage.data, webSocketMessageOrig->data, webSocketMessageOrig->len);
            workingMessage.data[webSocketMessageOrig->len] = 0;  // Ajouter le zéro terminal
            workingMessage.timeOfOrigine = webSocketMessageOrig->timeOfOrigine;
            workingMessage.client = webSocketMessageOrig->client;

            messageExtracted = true;
        } // Fin du mutex

        // Si l'extraction a échoué, continuer la boucle
        if (!messageExtracted) {
            continue;
        }

        uint32_t processStart = millis();
        vTaskDelay(pdMS_TO_TICKS(1));
        bool success = processMessage(&workingMessage);
        vTaskDelay(pdMS_TO_TICKS(1));

        if (success) {
            MutexGuard webSocketProtGuard(webSocketMutex, "webSocketMutex", __FUNCTION__);
            if (webSocketProtGuard.isAcquired()) {
                if (!webSocketMessagesList.empty()) {
                    webSocketMessagesList.pop_front();
                }
            } else {
                setPlcBroken("handleWebSocketMessage:: unable to acquire webSocket mutex");
            } 
        }

        if (workingMessage.data) {
            free(workingMessage.data);
            workingMessage.data = nullptr;
        }

        if (millis() - processStart > 100) {
            Serial.printf("handleWebSocketMessage:: message processing duration: %lu, message: %s\r\n", 
                millis() - processStart, workingMessage.data);
        }
        
        checkHeartbeat();
    } // while
} // handleWebSocketMessage

bool BorneUniverselle::processMessage(WEB_SOCKET_MESSAGE *webSocketMessage) {
    // processMessage doit retrouner fausx si on veux garder le message dans la liste.

    //Serial.printf("Message data start: %.50s\n", (char*)webSocketMessage->data);

    JsonDocument socketDoc;
    DeserializationError error = deserializeJson(socketDoc, (const char*)webSocketMessage->data);

    if (error) {
        char buff[256];
        sprintf(buff, "%lu:: processMessage: deserializeJson() failed: ", millis());
        strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
        Serial.println(buff);
        Serial.printf("Raw message length: %u, raw data: %.50s\n", strlen((char *)webSocketMessage->data), (char*)webSocketMessage->data);
        prepareMessage(ERROR, JSON_NOT_VALID);
        return true;
    }

    //Serial.printf("Data pointer après deserialisation: %p\n", webSocketMessage->data);
     
    updateEarthbeatTimeout(); // n'importe que message compte comme un heartbeat reçu
    
    if (!socketDoc[HEARTBEAT].isNull()){
        heartbeatReceive = true;
        lastHearbeatReceive = millis();     
        if (showHeartbeatMessages && client != nullptr){
            Serial.printf("%lu:: Heartbeat from client id: %lu received, value: %s\r\n", millis(), (unsigned long)client->id(), socketDoc[HEARTBEAT] ? "true": "false");   
        }
    } else if (!socketDoc[CONFIG].isNull()){
        if (!BorneUniverselle::parseConfig(socketDoc)){
            Serial.println(F("Config is not valid !!!"));
        } else {
            Serial.println(F("BorneUniverselle::processMessage:: Will update config and restart"));
            saveParameters(socketDoc);
            delay(1000);
            ESP.restart();
        } 
    } else if (!socketDoc[NOTIFY_STATES_CHANGED].isNull()){
            //Serial.println(F("BorneUniverselle::processMessage: receive a NOTIFY_STATES_CHANGED"));
            handleNodesChange(socketDoc);
    } else if (!socketDoc[GET_VALUE].isNull()){
            uint32_t hash = socketDoc[GET_VALUE];
            Serial.printf("%lu::BorneUniverselle::processMessage: receive a get value for node: %lu\r\n", millis(), (unsigned long)hash);
            if (!handleGetValue(socketDoc[GET_VALUE])){
                return false;
            }
    } else if (!socketDoc[ALL_STATES_REQUEST].isNull()){
            Serial.println(F("BorneUniverselle::processMessage: receive get all states request"));
            if (!handleGetAllValues()){
                return false;
            }
    } else  if (!socketDoc[DIRECTORY].isNull()){
            Serial.println(F("BorneUniverselle::processMessage: receive a directory request"));
            handleDirectoryRequest(socketDoc);
    } else if (!socketDoc[SAVE_FILE].isNull()){
            Serial.println(F("BorneUniverselle::processMessage: receive a set save file request"));
            handleSaveFile(socketDoc); 
    } else if (!socketDoc[INITIAL_STATE_LOADED].isNull()){
            Serial.println(F("BorneUniverselle::processMessage: initial state loaded"));
            if (initialStateLoadedCallback) {
                // Appel de la callback
                initialStateLoadedCallback();
            }
    } else {
            String out1, out2;
            out1 = "Json root key received by web socket is unknow !, json received: ";
            serializeJsonPretty(socketDoc, out2);
            out1 = out1 + out2;
            prepareMessage(ERROR, out1.c_str());
    }
    return true;
} // processMeSSAGE

// Implémentation de la méthode pour enregistrer la callback
void BorneUniverselle::setInitialStateLoadedCallback(std::function<void()> callback) {
    initialStateLoadedCallback = callback;
}

bool BorneUniverselle::handleSaveFile(JsonDocument& socketDoc) {
    const char* path = socketDoc["saveFile"][0][PATH]; // "/interface.json"
    const char* data = socketDoc["saveFile"][0][DATA]; // "le contenu du fichier à enregistrer"

    if (!path || !data) {
        Serial.println("handleSaveFile:: path or data empty!");
        return false;
    }

    // Valider le chemin (cette validation est maintenant intégrée dans PLC_Persistence)
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    
    Serial.printf("BorneUniverselle::handleSaveFile: path: %s, data length: %u\r\n", path, strlen(data));

    if (persistence.saveToFile(path, data)) {
        char buff[256];
        sprintf(buff, "File: %s saved with success\r\n", path);
        prepareMessage(SUCCESS, buff);
        return true;
    } else {
        char buff[256]; 
        sprintf(buff, "BorneUniverselle::handleSaveFile:: %s\r\n", persistence.getLastError());
        prepareMessage(ERROR, buff);
        return false;
    }
}

void BorneUniverselle::handleDirectoryRequest(JsonDocument& socketDoc){
    Serial.println(F("BorneUniverselle::handleDirectoryRequest"));
    if (socketDoc[FILTER].isNull()){
        Serial.printf("BorneUniverselle::handleDirectoryRequest: %s key is missing\r\n", FILTER);
      return; 
    }

    String filter = socketDoc[FILTER];
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    JsonDocument doc = persistence.getFilteredFilesAsJson("/", filter.c_str());
    serializeJson(doc, Serial);
    uint32_t size = measureJson(doc);
    char *chain = (char *)malloc(size + 10);
    if (chain){
        serializeJson(doc, chain, size);
        chain[size] = 0;  // 0 chain terminated is missing !!!!
        //Serial.println(chain);
        if (isClientConnected() && client != nullptr){
            //serializeJsonPretty(notifyDoc, Serial);
            sendTextToClient(chain);  
        }
    } else {
        Serial.println(F("malloc failed on notify message"));
    }
}

bool BorneUniverselle::handleGetAllValues(){
    if (!isAllInputsReadOnce()){
        Serial.printf("%lu::handleGetAllValues:: isAllInputsReadOnce is false\r\n", millis());
        return false; // on veux garder le message
    }

    return notifyWebClient(true);
}

bool BorneUniverselle::handleGetValue(uint32_t hash){
    // La fonction doit retrourner false pour garder l'événement sur la pile
    Node *node = findNode("handleGetValue", hash);
    if (node == nullptr){
        return true;// node not found, on veux supprimer ce message (de toute façon on va avoir plc broken...)
    }

    if (!isAllInputsReadOnce()){
        Serial.println("handleGetValue: isAllInputsRead once is false");
        return false; // on veux garder le message
    }

    JsonDocument notifyDoc;
    JsonArray array = notifyDoc[NOTIFY_STATES_CHANGED].to<JsonArray>();
    JsonObject nodeObject = array.add<JsonObject>();
    bool success = addNodeToNodeObject(node, &nodeObject);
    if (!success){
        return false; // on supprime ma requête
    }
 
    uint32_t size = measureJson(notifyDoc);
    char *chain = (char *)malloc(size + 10);
    if (chain){
        serializeJson(notifyDoc, chain, size);
        chain[size] = 0;  // 0 chain terminated is missing !!!!
        //Serial.println(chain);
   
            //serializeJsonPretty(notifyDoc, Serial);
        bool success =  sendTextToClient(chain); 
        free(chain); 

        if (!success){
            Serial.println(F("Unable to send message to client"));
            return false; // on garde le message
        } else {
            //Serial.println(F("handleGetAllValues: end"));
        }     
    } else {
        Serial.println(F("handleGetValue:: malloc failed on notify message"));
        return true; // on supprime le message
    }
    return true;
} // handleGetValue

bool BorneUniverselle::handleNodesChange(JsonDocument& socketDoc){
    // On accepte tous les nodes virtuelles et les nodes output
    // Rappel on ne peux pas modifier une entrée, c'est le monde physique qui modifie une entrée !!!!
    uint32_t start = millis();
  
    Serial.printf("%lu:: handleNodesChange: Web socket nodes change received. ", millis());
    //serializeJsonPretty(socketDoc, Serial);
    
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
           Serial.printf("Node: %s new value: %lu\r\n", node->getName(), (unsigned long)v->getValue());  
        } else if (node->classType() == CLASS_VIRTUAL_UINT32_OUTPUT_NODE){
           VirtualUint32OutputNode *v = (VirtualUint32OutputNode *)node;
           v->setValue(state[VALUE]);
           Serial.printf("Node: %s new value: %lu\r\n", node->getName(), (unsigned long)v->getValue()); 
        } else if (node->classType() == CLASS_MODBUS_WRITEHOLDINGREGISTER){
            ModbusWriteHoldingRegister *w = (ModbusWriteHoldingRegister *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), w->getValue() ? "true" : "false"); 
        } else if (node->classType() == CLASS_MODBUS_WRITE_DOUBLE_HOLDING_REGISTER){
            ModbusWriteDoubleHoldingRegister *w = (ModbusWriteDoubleHoldingRegister *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), w->getValue() ? "true" : "false"); 
        } else if (node->classType() == CLASS_VIRTUAL_FLOAT_INPUT_NODE){
            VirtualFloatInputNode *k = (VirtualFloatInputNode *)node;
            k->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %3.3f\r\n", node->getName(), k->getValue()); 
        } else if (node->classType() == CLASS_VIRTUAL_FLOAT_OUTPUT_NODE){
            VirtualFloatOutputNode *w = (VirtualFloatOutputNode *)node;
            w->setValue(state[VALUE]);
            Serial.printf("Node: %s new value: %3.3f\r\n", node->getName(), w->getValue()); 
        } else if (node->classType() == CLASS_VIRTUAL_TEXT_INPUT_NODE){
            VirtualTextInputNode *t = (VirtualTextInputNode *)node;
            const char *text = state[VALUE];
            t->setValue(text);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), t->getValue()); 
        } else if (node->classType() == CLASS_VIRTUAL_TEXT_OUTPUT_NODE){
            VirtualTextOutputNode *w = (VirtualTextOutputNode *)node;
            const char *text = state[VALUE];
            w->setValue(text);
            Serial.printf("Node: %s new value: %s\r\n", node->getName(), w->getValue());
        } else {
            sprintf(mess, "handleNodesChange:: Unable to find class of node with hash: %lu, classType %d", (unsigned long)hash, node->classType());
            setPlcBroken(mess);
            return false;
        }
        yield();
    }

    Serial.println(F("End Web socket nodes change received\r\n"));

    if (millis() - start > 100){
        Serial.printf("Handle message time: %lu\r\n", millis() - start);
    }
    
    return true;
}

bool BorneUniverselle::parseConfig( JsonDocument& doc,bool check){
    bool status = true;
    projectVersion = 0;
    Serial.println("Will parse config");

    if (!doc[NAME].isNull()){
        String name = doc[NAME]; // project name
        if (!setName(name.c_str(), check)){
           status = false; 
        }
    } else {
       prepareMessage(ERROR, NO_NAME_KEY);         //         "The key Name is not found"
       status = false;
    }

    if (!doc[TYPE].isNull()){
        if (doc[TYPE].is<const char*>() || doc[TYPE].is<String>()) {
            if (!strcmp(doc[TYPE], PROJECT_TYPE_V0)){
                prepareMessage(ERROR, "The project type is not BorneUniverselle");
                status = false;
            } else {
                projectVersion = 0;
            }
        }

        if (doc[TYPE].is<int>() || doc[TYPE].is<float>()) {
               projectVersion = doc[TYPE];
        }   
    } else {
        prepareMessage(ERROR, "The key type is not found");
        status = false;
    }

    if (status && !check) {
        PLC_Persistence& persistence = PLC_Persistence::getInstance();
        
        if (persistence.fileExists("/config.json")) {
            if (persistence.createBackup("/config.json")) {
                Serial.println(F("Created backup of config.json before applying changes"));
            } else {
                Serial.println(F("Warning: Failed to create backup of config.json"));
                // Continuer malgré l'échec de la sauvegarde
            }
        }
    }

    if (status){
        Serial.printf("Project version: %2.2f\r\n", projectVersion);
        status = parseWifis(doc, check);
        if (!status && !check){
            wifiParsedOk = false;
        }
    }

    if (status){
        //Serial.println ("Wifi's parsed");
        status = parseHardwares(doc, check, projectVersion);
    }

    return status;
}

bool BorneUniverselle::getIsWifiParsedOk(){
    return wifiParsedOk;
}

bool BorneUniverselle:: parseWifis(JsonDocument& doc, bool check){
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->parseWifisImpl(doc, check);
    } else {
        return false;
    }
}

bool BorneUniverselle:: parseWifisImpl(JsonDocument& doc, bool check){
    for (JsonObject item : doc[CONFIG].as<JsonArray>()) {
        if (!item[WIFI].isNull()){
            for (JsonObject wifiItem : item[WIFI].as<JsonArray>()) {
                const char *ssid, *pwd, *name;
                char message[800];
               // if (wifiItem.containsKey(NAME)){
                if (!wifiItem[NAME].isNull()){
                    name = wifiItem[NAME];
                    sprintf(message, "Wifi name: %s\r\n", name);
                } else {
                    strcat(message, "parseWifis:: One of wifi as not key name");
                    prepareMessage(ERROR, message);
                    return false;
                }

                if (!wifiItem[SSID_].isNull()){
                    ssid = wifiItem[SSID_];
                } else {
                    sprintf(message, "parseWifis:: Wifi: %s doesn't contains ssid key", name);
                    prepareMessage(ERROR, message);
                    return false;
                }

                if (!wifiItem[PWD_].isNull()){
                    pwd = wifiItem[PWD_];
                } else {
                    sprintf(message, "parseWifis:: Wifi: %s doesn't contains pwd key", name);
                    prepareMessage(ERROR, message);
                    return false;
                }

                bool dhcp = true;
                 if (!wifiItem[DHCP].isNull()){
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
                        if (!wifiItem[IP].isNull()){
                            const char *ipChar = wifiItem[IP];
                            String ipString = String(ipChar);
                            ipAddress.fromString(ipString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains ip key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                        if (!wifiItem[DNS_].isNull()){
                            const char *dnsChar = wifiItem[DNS_];
                            String dnsString = String(dnsChar);
                            dns.fromString(dnsString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains dns key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                        if (!wifiItem[GATEWAY_].isNull()){
                            const char *gatewayChar = wifiItem[GATEWAY_];
                            String gatewayString = String(gatewayChar);
                            gateway.fromString(gatewayString);
                        } else {
                            sprintf(message, "parseWifis:: Wifi: %s doesn't contains gateway key", name);
                            prepareMessage(ERROR, message);
                            return false;
                        }

                         if (!wifiItem[MASK_].isNull()){
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
            if (!item[PARAMETERS].isNull()){
                JsonObject params = item[PARAMETERS];    
                if (!params[OTA_URL].isNull()){
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

bool BorneUniverselle::parseHardwares(JsonDocument& doc, bool check, float projectVersion){
    bool needToSaveConfig = false;
    char buff[1000];
    //Serial.println("parseHardwares");

    // Est-ce que l'on a un hardware ?
    if (doc[CHILDREN].isNull()){
        setPlcBroken(NO_CHILDREN_KEY_CONFIG);
        return false;
    }

    //Serial.println("Children parsing");

    for (JsonObject children : doc[CHILDREN].as<JsonArray>()) {
        char sectionName[128], hardware[80], type[80], text[200];
        if (children[NAME].isNull()){
            sprintf(buff, "parseHardwares:: Section ? doesn't contains key %s", NAME);
            prepareMessage(ERROR, buff);
            return false;
        }

        strcpy(sectionName, children[NAME]);
        Serial.printf("Section name: %s\r\n", sectionName);
           
        if (children[HARDWARE].isNull()){
            sprintf(text, "parseHardwares:: Section %s doesnt contains key hardware", name);
            setPlcBroken(text);
            return false;
        }
        strcpy(hardware, children[HARDWARE]);
        Serial.printf("hardware: %s\r\n", hardware);
        char fileName[250];

        if (children[TYPE].isNull()){
            sprintf(buff, "parseHardwares:: Section %s doesnt contains key type", name);
            Serial.println(buff);
            setPlcBroken(buff);
            return false;
        }
        strcpy(type, children[TYPE]);  // type du fichier de conf
        Serial.printf("type: %s\r\n", type);

        // no descriptor file for virtual nodes!
        if (!strcmp(hardware, VIRTUAL)){
            for (JsonObject c : children[CHILDREN].as<JsonArray>()) {
                char nodeName[128];
                if (c[NAME].isNull()){
                    sprintf(buff, "parseHardwares:: sub section %s doesnt contains key %s from config file", name, NAME);
                    setPlcBroken(buff);
                    return false;  
                }
                strcpy(nodeName, c[NAME]);
               
                //Serial.printf("node name: %s\r\n", nodeName);
                uint32_t hash, hashLocal;

                if (c[HASH].isNull()){
                    Serial.printf("Hash key note found for node name: %s\r\n", nodeName);
                    return false;
                } else {
                    hash = c[HASH].as<unsigned int>();
                    hashLocal = hash;   
                }

                if (c[ID].isNull()){
                    sprintf(buff, "parseHardwares:: node %s has no key %s", nodeName, ID);
                    prepareMessage(ERROR, buff);
                return false;  
                }
                uint8_t addr = c[ID].as<int>();

                JsonDocument descriptor;
                descriptor.set(c);


                if (!createVirtualNode(nodeName, sectionName, addr, type,  &hashLocal, descriptor, check)){
                    sprintf(buff, "Error on creating virtual node");
                    prepareMessage(ERROR, buff);
                    return false;
                }

                if (hash != hashLocal){
                    if (c[HASH].isNull()){
                        JsonObject hashObject;
                        hashObject[HASH] = hash;
                        c.set(hashObject);
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
        JsonDocument nodesDoc; // The hardware document
        PLC_Persistence& persistence = PLC_Persistence::getInstance();
        if (!persistence.readJsonFromFile(fileName, nodesDoc)) {
            setPlcBroken(persistence.getLastError());
            return false;
        }
        
        if (strstr(fileName, "A8S") && !isKinconyA8S){
            Serial.println(F("Card is an Kincony A8S, pin 2 must be set after go ip"));
            isKinconyA8S = true;
        } 
        

        if (nodesDoc[HARDWARE].isNull()){
            sprintf(buff,"parseHardwares:: Key: %s not found", HARDWARE);
            prepareMessage(ERROR, buff);
            return false;
        }

        if (strcmp(nodesDoc[HARDWARE], hardware)){
            sprintf(buff, "parseHardwares:: Hardware from config file doesn't match with hardware file: %s", hardware);
            prepareMessage(ERROR, buff);
            return false;
        }

        // Serial.println("Hardware match")

        if (i2cInit(nodesDoc)){
            Serial.println(F("Bus I2C initialized"));
        } 


        if (modbusInit(nodesDoc)){
            Serial.println(F("Modbus initialized"));
        }
    
        //Serial.println("Lectures des sections du hardware");

        if (nodesDoc[type].isNull()){
            sprintf(buff, "Hardware file doesnt contains key %s", type);
            prepareMessage(ERROR, buff);
            return false;
        }

        if (children[CHILDREN].isNull()){
            sprintf(buff, "parseHardwares:: section %s doesnt contains key %s from config file", name, CHILDREN);
            setPlcBroken(buff);
            return false; 
        }

        for (JsonObject c : children[CHILDREN].as<JsonArray>()) {
            char nodeName[128];
            if (c[NAME].isNull()){
                sprintf(buff, "parseHardwares:: sub section doesnt contains key %s from config file", NAME);
                prepareMessage(ERROR, buff);
                PLC_Tools::printJsonObject(c);
                return false;  
            }
            strcpy(nodeName, c[NAME]);
        
            uint32_t hash = 0, hashLocal;
            //Serial.printf("node name: %s\r\n", nodeName);

            //if (!c.containsKey(HASH)){
            if (c[HASH].isNull()){
               //Serial.printf("Hash key not found for node name: %s\r\n", nodeName);
            } else {
                hash = c[HASH].as<unsigned int>();
                hashLocal = hash;
                //Serial.printf("Node name: %s, hash found: %lu\r\n", nodeName, hash);
            }

            //if (!c.containsKey(ID)){
            if (c[ID].isNull()){
                sprintf(buff, "parseHardwares:: node %s has no key %s", nodeName, ID);
                prepareMessage(ERROR, buff);
                return false;  
            }

            uint8_t addr = c[ID].as<int>();

            bool found = false;
            for (JsonObject hardSection : nodesDoc[type].as<JsonArray>()) {
                //if (!hardSection.containsKey(ID)){
                if (hardSection[ID].isNull()){
                    sprintf(buff, "parseHardwares:: Hardware file key %s has no key id", fileName);
                    prepareMessage(ERROR, buff);
                    return false; 
                }

                //Serial.printf("type confirm: %s\r\n", type);

                uint8_t id = hardSection[ID].as<int>();
                //Serial.printf("Hardware node id: %d\r\n", id);

                if (addr == id){ 
                    //Serial.println("Find correspondig id <-> addr");
                    // on doit créer le node avec le bon type. On cherche le node creator !

                    uint16_t webRefreshInterval = 0;
                    //if (c.containsKey(WEB_UPDATE_INTERVAL)){
                    if (!c[WEB_UPDATE_INTERVAL].isNull()){
                        webRefreshInterval = c[WEB_UPDATE_INTERVAL];  
                    } 

                     uint16_t refreshInterval = 0;
                    //if (c.containsKey(REFRESH_INTERVAL)){
                    if (!c[REFRESH_INTERVAL].isNull()){
                        refreshInterval = c[REFRESH_INTERVAL];
                        //Serial.printf("Refreh interval: %u\r\n", refreshInterval);
                    } 

                    JsonDocument descriptor;
                    descriptor.set(c);
                    
                    if (!strcmp(type, RX_BOOL) || !strcmp(type, PF8574_RX_BOOL)){
                        if (!createRxBoolNode(nodeName, sectionName, addr, &hashLocal, nodesDoc, hardSection, type, refreshInterval, webRefreshInterval, descriptor, check)){
                            sprintf(buff, "parseHardwares:: Error on creating RxBoolNode with file %s\r\n", fileName);
                            prepareMessage(ERROR, buff);
                            return false;
                        }
                        found = true;
                    }  else  if (!strcmp(type, TX_BOOL) || !strcmp(type, PF8574_TX_BOOL)){
                            if (!createTxBoolNode(nodeName, sectionName, addr, &hashLocal, nodesDoc, hardSection, type, webRefreshInterval, descriptor, check)){
                                sprintf(buff, "parseHardwares:: Error on creating TxBoolNode with file %s\r\n", fileName);
                                prepareMessage(ERROR, buff);
                                return false;
                            }
                            found = true; 
                    } else if (!strcmp(type, MODBUS_READ_COIL) || !strcmp(type, MODBUS_WRITE_COIL) || !strcmp(type, MODBUS_READ_HOLDING_REGISTER) ||
                               !strcmp(type, MODBUS_WRITE_HOLDING_REGISTER) || !strcmp(type, MODBUS_READ_DOUBLE_HOLDING_REGISTER) || !strcmp(type, MODBUS_WRITE_DOUBLE_HOLDING_REGISTER) ||
                               !strcmp(type, MODBUS_READ_INPUT_REGISTER) || !strcmp(type, MODBUS_WRITE_MULTIPLE_COILS) || !strcmp(type, MODBUS_READ_MULTIPLE_INPUTS_STATUS)){
                                //Serial.println("Modbus");
                                //if (children.containsKey(ADDRESS)){
                                if (!children[ADDRESS].isNull()){
                                    uint16_t slaveAddress = children[ADDRESS];
                            
                                    //Serial.printf("Modbus slave address: %u\r\n", slaveAddress);
                                    if (!createModbusNode(nodeName, sectionName, addr, &hashLocal, slaveAddress, nodesDoc, hardSection, type, refreshInterval, webRefreshInterval, descriptor, check)){
                                        sprintf(buff, "parseHardwares:: Error on creating Modbus node with file %s\r\n", fileName);
                                        prepareMessage(ERROR, buff);
                                    }
                                    found = true; 
                                } else {
                                    sprintf(buff, "parseHardwares:: Section doesn't contains key %s\r\n", ADDRESS);
                                    prepareMessage(ERROR, buff);
                                    return false;
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
                    //if (!c.containsKey(HASH)){
                    if (c[HASH].isNull()){
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
        Serial.println(F("Need to save config file"));
        saveParameters(doc);
        ESP.restart();
    }
    return true;
 // setHardware
}

bool BorneUniverselle::createModbusNode(char *nodeName, char *sectionName, uint16_t id, uint32_t *hash, uint16_t slaveAddress, JsonDocument& contextDoc,
                                     JsonObject hardSection, char *type, uint16_t refreshInterval,  uint16_t webRefreshInterval, JsonDocument& descriptor, bool check){
    
    if (!isModbusInitialised){
        prepareMessage(ERROR, MODBUS_NOT_INITIALISED);
        return false;
    }
    
    Node *node;
    uint16_t offset;
    char message[256];
    int8_t registersOffset = 0;

    //if (contextDoc.containsKey(REGISTERS_OFFSET)){
    if (!contextDoc[REGISTERS_OFFSET].isNull()){
        registersOffset = contextDoc[REGISTERS_OFFSET];
        // Serial.printf("Registers offset: %d\r\n", registersOffset);
    }

    //if (hardSection.containsKey(OFFSET)){
    if (!hardSection[OFFSET].isNull()){
        offset = hardSection[OFFSET];
        //Serial.printf("Offset: %u\r\n", offset);
    } else {
        sprintf(message, "createModbusNode::modbus hardware file doesn't contains key %s\r\n", OFFSET);
        prepareMessage(ERROR, message);
        return false; 
    }

    offset += registersOffset;

    if (!strcmp(type, MODBUS_READ_COIL)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusReadCoilNode));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusReadCoilNode(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusReadCoilNode(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusReadCoilNode");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusReadCoilNode(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusReadCoilNode");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusReadCoilNode, hash: %lu, address: %d, offset: %d, refresh interval: %u, web refresh interval %u\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_WRITE_COIL)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusWriteCoilNode));
            if (a != nullptr) {
                node = new (a) ModbusWriteCoilNode(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
            } else {
                // Gestion du cas où ps_malloc échoue
                node = new (std::nothrow) ModbusWriteCoilNode(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                   setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteCoilNode");
                   return false;
                }
            }
        } else {
            node = new (std::nothrow) ModbusWriteCoilNode(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
            if (node == nullptr) {
                setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteCoilNode");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusReadCoilNode, hash: %lu, address: %d, offset: %d\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset);
    } else if (!strcmp(type, MODBUS_WRITE_MULTIPLE_COILS)){
        uint8_t nbValues = 1;
        //if (hardSection.containsKey(NB_VALUES)){
        if (!hardSection[NB_VALUES].isNull()){
            nbValues = hardSection[NB_VALUES];
            Serial.printf("createModbusNode:: nbValues: %d\r\n", nbValues);
        } else {
            char texte[250];
            sprintf(texte, "Unable to find key: %s on section %s\r\n", NB_VALUES, MODBUS_WRITE_MULTIPLE_COILS);
            setPlcBroken(texte);
        }

        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusWriteMultipleCoilslNode));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusWriteMultipleCoilslNode(nodeName, sectionName, id, *hash, slaveAddress, offset, nbValues, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusWriteMultipleCoilslNode(nodeName, sectionName, id, *hash, slaveAddress, offset, nbValues, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteMultipleCoilslNode");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusWriteMultipleCoilslNode(nodeName, sectionName, id, *hash, slaveAddress, offset, nbValues, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteMultipleCoilslNode");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusWriteMultipleCoilslNode, hash: %lu, address: %d, offset: %d\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset); 
    } else if (!strcmp(type, MODBUS_READ_HOLDING_REGISTER)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusReadHoldingRegister));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusReadHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusReadHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusReadHoldingRegister");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusReadHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusReadHoldingRegister");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusReadHoldingRegister, hash: %lu, address: %d, offset: %d, refresh interval: %u, web refresh interval %u\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_WRITE_HOLDING_REGISTER)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusWriteHoldingRegister));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusWriteHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusWriteHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteHoldingRegister");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusWriteHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteHoldingRegister");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusWriteHoldingRegister, hash: %lu, address: %u, offset: %d\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset);
    } else if (!strcmp(type, MODBUS_READ_DOUBLE_HOLDING_REGISTER)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusReadDoubleHoldingRegisters));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusReadDoubleHoldingRegisters(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusReadDoubleHoldingRegisters(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusReadDoubleHoldingRegisters");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusReadDoubleHoldingRegisters(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusReadDoubleHoldingRegisters");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusReadDoubleHoldingRegisters, hash: %lu, address: %u, offset: %d, refresh interval: %u, web refresh interval %u\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_WRITE_DOUBLE_HOLDING_REGISTER)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusWriteDoubleHoldingRegister));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusWriteDoubleHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusWriteDoubleHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteDoubleHoldingRegister");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusWriteDoubleHoldingRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusWriteDoubleHoldingRegister");
                return false;
            }
        }
        Serial.printf("Node %s created with succes with type ModbusWriteDoubleHoldingRegister, hash: %lu, address: %u, offset: %d\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset);
    } else if (!strcmp(type, MODBUS_READ_INPUT_REGISTER)){
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusReadInputRegister));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusReadInputRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusReadInputRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusReadInputRegister");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusReadInputRegister(nodeName, sectionName, id, *hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusReadInputRegister");
                return false;
            }
        } 
        Serial.printf("Node %s created with succes with type ModbusReadInputRegister, hash: %lu, address: %u, offset: %u, refresh interval: %u, web refresh interval %u\r\n", node->getName(), (unsigned long)*hash, slaveAddress, offset, refreshInterval, webRefreshInterval);
    } else if (!strcmp(type, MODBUS_READ_MULTIPLE_INPUTS_STATUS)){
        uint8_t nbValues = 1;
        //if (hardSection.containsKey(NB_VALUES)){
        if (!hardSection[NB_VALUES].isNull()){
            nbValues = hardSection[NB_VALUES];
            Serial.printf("createModbusNode:: nbValues: %d\r\n", nbValues);
        } else {
            char texte[250];
            sprintf(texte, "Unable to find key: %s on section %s\r\n", NB_VALUES, MODBUS_WRITE_MULTIPLE_COILS);
            setPlcBroken(texte);
        } 
        if (psRamAvailable) {
            void* a = ps_malloc(sizeof(ModbusReadMultipleInputsRegistersNode));
            if (a != nullptr) {
                // Utiliser le placement new avec la mémoire PSRAM allouée
                node = new (a) ModbusReadMultipleInputsRegistersNode(nodeName, sectionName, id, (unsigned long)*hash, slaveAddress, offset, nbValues, refreshInterval, webRefreshInterval);
            } else {
                // Fallback sur l'allocation mémoire standard avec gestion d'erreur
                node = new (std::nothrow) ModbusReadMultipleInputsRegistersNode(nodeName, sectionName, id, (unsigned long)*hash, slaveAddress, offset, nbValues, refreshInterval, webRefreshInterval);
                if (node == nullptr) {
                    // Gestion de l'échec d'allocation
                    setPlcBroken("Erreur d'allocation mémoire pour ModbusReadMultipleInputsRegistersNode");
                    return false;
                }
            }
        } else {
            // Allocation mémoire standard avec gestion d'erreur
            node = new (std::nothrow) ModbusReadMultipleInputsRegistersNode(nodeName, sectionName, id, (unsigned long)*hash, slaveAddress, offset, nbValues, refreshInterval, webRefreshInterval);
            if (node == nullptr) {
                // Gestion de l'échec d'allocation
                setPlcBroken("Erreur d'allocation mémoire pour ModbusReadMultipleInputsRegistersNode");
                return false;
            }
        }
    } else {
        sprintf(message, "createModbusNode:: Unable to identifiy node type with class %s\r\n", type);
        prepareMessage(ERROR, message);
        return false;
    }

    node->setDescriptor(descriptor);
    *hash = node->getHash();

   if (!check){
        auto result = nodesMap.insert(std::make_pair(node->getHash(), node));
        if (!result.second) {
            // L'insertion a échoué car le hash existe déjà
            char errMsg[128];
            sprintf(errMsg, "Hash collision detected for node %s, hash: %lu", 
                    node->getName(), (unsigned long)node->getHash());
            setPlcBroken(errMsg);
        }
    }  
    return true;
}

bool BorneUniverselle::i2cInit(JsonDocument& contextDoc){
    char buff[128];
    // if (contextDoc.containsKey(I2C)){
    if (!contextDoc[I2C].isNull()){
        if (!isI2CInitialised){
            uint8_t sda, scl;
            if (!contextDoc[I2C][BU_SDA].isNull()){
                sda =  contextDoc[I2C][BU_SDA];
                if (!contextDoc[I2C][BU_SCL].isNull()){
                    scl = contextDoc[I2C][BU_SCL];
                    Wire.begin(sda, scl);
                    //Serial.println("I2c bus initialised");
                } else {
                    sprintf(buff, "initI2C:: Unable to find key %s", BU_SCL);
                    prepareMessage(ERROR, buff);
                    return false; 
                } 
            }  else {
                sprintf(buff, "InitI2C:: Unable to find key %s", BU_SDA);
                prepareMessage(ERROR, buff);
                return false;
            } 
            Wire.begin(sda, scl);
            isI2CInitialised = true;
        }
        Serial.println("I2C bus is initialised");
        return true;
    } 
    Serial.printf("i2cInit:: key %s is missing\r\n", I2C);
    return false;
}

bool BorneUniverselle::RS485Init(JsonDocument& contextDoc) {
  
    if (isRs485Initialised) {
        return true;
    }
  
    isRs485Initialised = false;

    if (contextDoc[RS485].isNull()) {
        setPlcBroken("RS485Init:: No RS485 key or null");
        return false;
    }
   
    JsonObject rs485 = contextDoc[RS485];
    if (rs485[RX].isNull()) {
        setPlcBroken("RS485Init:: Unable to find key rx");
        return false;
    }
    if (rs485[TX].isNull()) {
        setPlcBroken("RS485Init:: Unable to find key tx");
        return false;
    }
    if (rs485[SPEED].isNull()) {
        setPlcBroken("RS485Init:: Unable to find key speed");
        return false;
    }
    if (rs485[CONFIG].isNull()) {
        setPlcBroken("RS485Init:: Unable to find key config");
        return false;
    }

    uint8_t rxPin = rs485[RX];
    uint8_t txPin = rs485[TX];
    uint16_t speed = rs485[SPEED];
    uint32_t config;

    const char* configStr = rs485[CONFIG];
    if (!strcmp(configStr, "SERIAL_8N1")) {
        config = SERIAL_8N1;
    } else if (!strcmp(configStr, "SERIAL_8N2")) {
        config = SERIAL_8N2;
    } else if (!strcmp(configStr, "SERIAL_8E1")) {
        config = SERIAL_8E1;
    } else if (!strcmp(configStr, "SERIAL_8E2")) {
        config = SERIAL_8E2;
    } else {
        setPlcBroken("RS485Init:: Unrecognised protocol");
        return false;
    }

    Serial.printf("RS485 speed: %d, rx pin: %d, tx pin: %d\r\n", speed, rxPin, txPin);

    if (myRS485 != nullptr) {
        delete myRS485;
    }

    myRS485 = new HardwareSerial(1);
   
    myRS485->setRxBufferSize(256);
    myRS485->begin(speed, config, rxPin, txPin);  // THIERRY

    if (!myRS485->availableForWrite()) {
        setPlcBroken("RS485Init:: Failed to initialize HardwareSerial");
        delete myRS485;
        myRS485 = nullptr;
        return false;
    }

    isRs485Initialised = true;
    Serial.println("RS485 bus is initialised");
    return true;
}

bool BorneUniverselle::modbusInit(JsonDocument& contextDoc){
    if (isModbusInitialised){
        return true;
    }

    Serial.println("Try to initialise Modbus");
    
    if (!isRs485Initialised){
        if (!RS485Init(contextDoc)){
            prepareMessage(ERROR, "modbusInit:: unable to initalise RS485 bus");
            return false;
        }
    } 
    
    if (contextDoc[MODBUS].isNull()){
        char buff[128];
        sprintf(buff, "Unable to find key %s in context file", MODBUS);
        prepareMessage(ERROR, buff);
        return false;
    }

    if (!contextDoc[MODBUS][TIMEOUT].isNull()){
        uint16_t timeout = contextDoc[MODBUS][TIMEOUT];
        Serial.printf("Modbus RTU timeout: %u\r\n", timeout);
        myModbus.setTimeout(timeout);
    } else {
        myModbus.setTimeout(DEFAULT_TIMEOUT);
    }

    ModbusRTU *modbus = new ModbusRTU();
    if (!modbus->begin(myRS485)){
        prepareMessage(ERROR, "modbusInit:: unable to initalise Modbus");
        return false;
    }
    modbus->master();

    myModbus.setModbus(modbus);
    
    isModbusInitialised = true;
    Serial.println("Modbus initialised"); 
    
    return true;
}

bool BorneUniverselle::createRxBoolNode(char *name,  char *parentName, uint16_t id, uint32_t *hash, JsonDocument& contextDoc, JsonObject hardSection, char * type, uint16_t refreshInterval, uint16_t webRefreshInterval,
                                        JsonDocument& descriptor, bool check){
    // Cree un input node boolean hardware
    char buff[256];

    //Serial.println("createRxBoolNode");
    uint8_t pin;
    //if (hardSection.containsKey(PIN)){
    if (!hardSection[PIN].isNull()){
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
        //if (contextDoc.containsKey(INPUTS_INVERTED)){
        if (!contextDoc[INPUTS_INVERTED].isNull()){
            inputsInverted = contextDoc[INPUTS_INVERTED];
        }

        if (psRamAvailable){
            void * a = ps_malloc(sizeof(HardwareBooleanInputNode));
            node = new (a) HardwareBooleanInputNode(name, parentName, id, *hash, pin, inputsInverted, refreshInterval, webRefreshInterval); 
        } else {
            node = new HardwareBooleanInputNode(name, parentName, id, *hash, pin, inputsInverted, refreshInterval, webRefreshInterval);
        }
        
        Serial.printf("Node %s created with succes (ESP32 pin %d), with type HardwareBooleanInputNode and hash: %lu, refresh interval: %u, web refresh interval: %u\r\n", node->getName(), pin, (unsigned long)*hash, refreshInterval, webRefreshInterval);
    } else  if (!strcmp(type, PF8574_RX_BOOL)){
        //Serial.println("type PF8574");
        if (isI2CInitialised){
            //if (contextDoc[I2C].containsKey(RX_ADDR)){
            if (!contextDoc[I2C][RX_ADDR].isNull()){
                uint8_t i2cAddr = contextDoc[I2C][RX_ADDR];
                if (psRamAvailable){
                    void * a = ps_malloc(sizeof(PF8574BooleanInputNode));
                    node = new (a) PF8574BooleanInputNode(name, parentName, id, *hash, i2cAddr, pin, refreshInterval, webRefreshInterval);
                } else {
                    node = new PF8574BooleanInputNode(name, parentName, id, *hash, i2cAddr, pin, refreshInterval, webRefreshInterval);
                }
                Serial.printf("Node %s created with succes with type PF8574BooleanInputNode and hash: %lu, refresh interval: %u, web refresh interval: %u\r\n", node->getName(), (unsigned long)*hash, refreshInterval, webRefreshInterval);
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

bool BorneUniverselle::createTxBoolNode(char *name, char *parentName, uint16_t id,  uint32_t *hash, JsonDocument& contextDoc, JsonObject hardSection, char * type, uint16_t webRefreshInterval, JsonDocument& descriptor, bool check){
    // Cree un input node boolean hardware
    uint8_t pin;
    char buff[128];
    //if (hardSection.containsKey(PIN)){
    if (!hardSection[PIN].isNull()){
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
            node = new (a) HardwareBooleanOutputNode(name, parentName, id, *hash, pin, webRefreshInterval);
        } else {  
            node = new HardwareBooleanOutputNode(name, parentName, id, *hash, pin, webRefreshInterval);
        }

        Serial.printf("Node %s created with succes (ESP32 pin %d) with type HardwareBooleanOutputNode and hash: %lu\r\n", node->getName(), pin, (unsigned long)*hash); 
    } else if (!strcmp(type, PF8574_TX_BOOL)){
        //Serial.println("type PF8574");
        if (isI2CInitialised){
            //if (contextDoc[I2C].containsKey(TX_ADDR)){
            if (!contextDoc[I2C][TX_ADDR].isNull()){
                uint8_t i2cAddr = contextDoc[I2C][TX_ADDR];

                if (psRamAvailable){
                    void * a = ps_malloc(sizeof(PF8574BooleanOutputNode));
                    node = new (a) PF8574BooleanOutputNode(name, parentName, id, *hash, i2cAddr, pin, webRefreshInterval);
                } else {
                    node = new PF8574BooleanOutputNode(name, parentName, id, *hash, i2cAddr, pin, webRefreshInterval);
                }

                Serial.printf("Node %s created with succes with type PF8574BooleanOutputNode and hash: %lu\r\n", node->getName(), (unsigned long)*hash); 
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

bool BorneUniverselle::createVirtualNode(char *name, char *sectionName, uint16_t id, char *type, uint32_t *hash, JsonDocument& descriptor, bool check){
    char buff[128];
    bool found = false;
    //Serial.printf("createVirtualNode section: %s,  node name: %s, \r\n", sectionName, name);
    Node *node;
    // No web refresh interval constraint...
    if (!strcmp(type, RX_BOOL)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualBooleanInputNode));
            node = new (a) VirtualBooleanInputNode(name, sectionName, id, *hash, 0);    
        } else {
            node = new VirtualBooleanInputNode(name, sectionName, id, *hash, 0);
        }
        Serial.printf("Node %s created (VirtualBooleanInputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else if (!strcmp(type, TX_BOOL)) {
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualBooleanOutputNode));
            node = new (a) VirtualBooleanOutputNode(name, sectionName, id, *hash, 0);
        } else {
            node = new VirtualBooleanOutputNode(name, sectionName, id, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualBooleanOutputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else if (!strcmp(type, RX_UINT32)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualUint32InputNode));
            node = new (a) VirtualUint32InputNode(name, sectionName, id, *hash, 0);
        } else {
            node = new VirtualUint32InputNode(name, sectionName, id, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualUint32InputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else if (!strcmp(type, TX_UINT32)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualUint32OutputNode));
            node = new (a) VirtualUint32OutputNode(name, sectionName, id, *hash, 0);
        } else {
            node = new VirtualUint32OutputNode(name, sectionName, id, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualUint32OutputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else if (!strcmp(type, TX_FLOAT)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualFloatOutputNode));
            node = new (a) VirtualFloatOutputNode(name, sectionName, id, *hash, 0); 
        } else {
            node = new VirtualFloatOutputNode(name, sectionName, id, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualFloatOutputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else if (!strcmp(type, RX_FLOAT)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualFloatInputNode));
            node = new (a) VirtualFloatInputNode(name, sectionName, id, *hash, 0); 
        } else {
            node = new VirtualFloatInputNode(name, sectionName, id, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualFloatInputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else if (!strcmp(type, TX_TEXT)){
        if (psRamAvailable){
            void * a = ps_malloc(sizeof(VirtualTextOutputNode));
            node = new (a) VirtualTextOutputNode(name, sectionName, id, *hash, 0); 
        } else {
            node = new VirtualTextOutputNode(name, sectionName, id, *hash, 0);
        }
        
        Serial.printf("Node %s created (VirtualTextOutputNode) with succes, hash: %lu\r\n", node->getName(), (unsigned long)node->getHash());
        found = true;
    } else {
        sprintf(buff, "createVirtualNode:: Unable to create virtual node %s/%s with type %s", sectionName, name, type);
        prepareMessage(ERROR, buff);
        setPlcBroken(buff);
        return false;
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
    if (clientQueueIsFull()){
        // Serial.println("No client connected or client queue full");
        clearInputschanged();
        return true;
    }

    uint32_t start = millis();
    uint32_t lastCheck = millis();
    //Serial.printf("%u:: start notifyWebClient\r\n", millis());
    bool hasTosend = false;
    //Serial.println("Notify web client");
   
    JsonDocument notifyDoc;
    JsonArray array = notifyDoc[NOTIFY_STATES_CHANGED].to<JsonArray>();

    std::map<uint32_t, Node *>::iterator it;
    for (it = nodesMap.begin(); it != nodesMap.end(); it++){
        if (PF8574BooleanInputNode::isInterrupt()){
            return true; 
        }

        // Si on a plus de client on ne lui envoi plus rien
        if (!isClientConnected()){
            return false;
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

        if (millis() - lastCheck > ABNORMAL_REFRESH_TIME){   
            //Serial.printf("%lu::Refresh:: will check heartbeat and Websocket message\r\n", millis());
            checkHeartbeat();
            lastCheck = millis();
            vTaskDelay(pdMS_TO_TICKS(10)); // Délai plus approprié que yield()
        }
    } 

    if (hasTosend){
        //Serial.println("notifyWebClient: Message that will be send: \r\n" );
        //serializeJsonPretty(notifyDoc, Serial);
        //Serial.println();
       
        size_t size = measureJson(notifyDoc) + 32;
        if (size > SOCKET_MESSAGE_MAX_SIZE){
            char message[64];
            strcpy(message,  "Json notify states is too long !!");
            prepareMessage(ERROR, message);
            setPlcBroken(message);
            return false;
        } else {
            // Serial.printf("Document size: %u\r\n", size);
        }

        char *chain = (char *)malloc(size);
        if (chain){
            size_t effectiveSize = serializeJson(notifyDoc, chain, size);
            if (effectiveSize >= size){
                Serial.println("notifyWebClient:: effective size > evaluated size");
                free (chain);
                return true; // on décharge ce message car on ne peux pas le traiter
            }

            chain[effectiveSize] = 0;  // 0 chain terminated is missing !!!!
            // Serial.printf("Will display notify message, size: %u\r\n", strlen(chain));
            //serializeJsonPretty(notifyDoc, Serial);
            bool success = sendTextToClient(chain);

            if (!success){
                Serial.println(F("notifyWebClient: Failed to send to client"));
                free(chain);
                return false;
            }
        } else {
            Serial.println(F("notifyWebClient:malloc failed on notify message"));
        }
        
        free(chain);
        //Serial.printf("%lu:: notifyWebClient: End web notify\r\n", millis());
        
        if (millis() - start > 300){ 
            Serial.printf("\r\n%lu:: End notifyWebClient %s: duration: %lu\r\n", millis(), sendAllStates ? "all states": "on state", millis() - start);
        }
    }
    //Serial.printf("%lu:: notifyWebClient: End web notify\r\n", millis());
    return true;
} // notifyWebClient


bool BorneUniverselle::addNodeToNodeObject(Node *node, JsonObject *nodeObject){
    uint32_t hash = node->getHash();
    //Serial.printf("addNodeToNodeObject: node: %s, hash: %lu\r\n", node->getName(), hash);


    (*nodeObject)[HASH] = hash;

    if (node->classType() == CLASS_HW_BOOLEAN_INPUT_NODE || node->classType() == CLASS_PFC8574_BOOLEAN_INPUT_NODE ||
        node->classType() == CLASS_VIRTUAL_BOOLEAN_INPUT_NODE || node->classType() == CLASS_MODBUS_READ_COIL){
        BooleanInputNode *b = (BooleanInputNode*) node;
        (*nodeObject)[VALUE] = b->getValue();
 
        Serial.printf("%lu:: Node notify: %s new value: %s\r\n", millis(), node->getName(), b->getValue() ? "true" : "false");    
    } else  if (node->classType() == CLASS_HW_BOOLEAN_OUTPUT_NODE || node->classType() == CLASS_PFC8574_BOOLEAN_OUTPUT_NODE || node->classType() == CLASS_VIRTUAL_BOOLEAN_OUTPUT_NODE ||
        node->classType() == CLASS_MODBUS_WRITE_COIL_NODE){
        BooleanOutputNode *b = (BooleanOutputNode*) node;
        (*nodeObject)[VALUE] = b->getValue();

        Serial.printf("%lu:: Node notify: %s new value: %s\r\n", millis(), node->getName(), b->getValue() ? "true" : "false");
    } else if (node->classType() == CLASS_MODBUS_READHOLDINGREGISTER || node->classType() == CLASS_MODBUS_READINPUTREGISTER){
        Uint16InputNode *u = (Uint16InputNode*) node;
        (*nodeObject)[VALUE] = u->getValue();
 
        Serial.printf("%lu:: Node notify (Uint16InputNode): %s new value: %u\r\n", millis(), node->getName(), u->getValue());
    } else if (node ->classType() == CLASS_MODBUS_WRITEHOLDINGREGISTER){
        Uint16OutputNode *w = (Uint16OutputNode*) node;
        (*nodeObject)[VALUE] = w->getValue();
 
        Serial.printf("%lu:: Node notify (Uint16OutputNode): %s new value: %u\r\n", millis(), node->getName(), w->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_UINT32_INPUT_NODE || node->classType() == CLASS_MODBUS_READ_DOUBLE_INPUTREGISTER || node->classType() == CLASS_MODBUS_READ_DOUBLE_HOLDING_REGISTER){
        Uint32InputNode *v = (Uint32InputNode*) node;
        (*nodeObject)[VALUE] = v->getValue();
        Serial.printf("%lu:: Node notify: %s (Uint32InputNode) new value: %lu\r\n", millis(), node->getName(), (unsigned long)v->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_UINT32_OUTPUT_NODE || node->classType() == CLASS_MODBUS_WRITE_DOUBLE_INPUTREGISTER || node->classType() == CLASS_MODBUS_WRITE_DOUBLE_HOLDING_REGISTER) {
        Uint32OutputNode *u = (Uint32OutputNode *) node;
        (*nodeObject)[VALUE] = u->getValue();

        Serial.printf("%lu:: Node notify (uint32 output): %s new value: %lu\r\n", millis(), node->getName(), (unsigned long)u->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_FLOAT_OUTPUT_NODE) {
        FloatOutputNode *u = (FloatOutputNode *) node;
        (*nodeObject)[VALUE] = u->getValue();

        Serial.printf("%lu:: Node notify (float output): %s new value: %.3f\r\n", millis(), node->getName(), u->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_FLOAT_INPUT_NODE) {
        FloatInputNode *i = (FloatInputNode *) node;
        (*nodeObject)[VALUE] = i->getValue();

        Serial.printf("%lu:: Node notify (float input): %s new value: %.3f\r\n", millis(), node->getName(), i->getValue());
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
    } else if (node->classType() == CLASS_VIRTUAL_TEXT_INPUT_NODE){
        VirtualTextInputNode *t = (VirtualTextInputNode *) node;
        (*nodeObject)[VALUE] = t->getValue(); 
        Serial.printf("%lu:: Node notify: %s new value: %s\r\n", millis(), node->getName(), t->getValue());
    } else if (node->classType() == CLASS_VIRTUAL_TEXT_OUTPUT_NODE) {
        VirtualTextOutputNode *v = (VirtualTextOutputNode *) node;
       // (*nodeObject)[VALUE] = v->getValue();  // Pour l'instant on ne notifie pas l'interface car cela reset le composant
        Serial.printf("%lu:: Node notify: %s new value: %s\r\n", millis(), node->getName(), v->getValue());
    } else {
        char buff[256];
        sprintf(buff, "addNodeToJsonObject:: Unable to find node class from node: %s with class type: %u\r\n", node->getName(), node->classType());
        prepareMessage(WARNING, buff);
        setPlcBroken(buff);
        return false;
    }

    if (node->descriptorCallback) {
        Serial.printf("Node %s with hash %lu has a descriptor callback\r\n", node->getName(), (long unsigned int)node->getHash());
        addCustomDescriptor(node, nodeObject);
    }

    checkHeartbeat();
    return true;
}

void BorneUniverselle::addCustomDescriptor(Node *node, JsonObject *nodeObject) {
    //Serial.printf("has from node: %lu, hash from nodeObject: %lu\r\n", (long unsigned int)node->getHash(), (*nodeObject)[HASH].as<uint32_t>());
    // Appeler la callback pour récupérer le descripteur personnalisé
    JsonDocument customDescriptor = node->descriptorCallback();
    
    // Si le document n'est pas vide, l'ajouter au nodeObject
    if (!customDescriptor.isNull()) {

        if (!customDescriptor[VALUE].isNull()) {
            // Supprimer la clé hash du descripteur personnalisé
            Serial.println("Custom descriptor contains a key 'value', will superside it with nodeObject value");
            (*nodeObject)[VALUE] = customDescriptor[VALUE];
            // Supprimer la clé "value" du descripteur pour éviter la duplication
            customDescriptor.remove("value");
        
        }
        // Vérifier si nodeObject a déjà une clé descriptor
        if (!(*nodeObject)[DESCRIPTOR].isNull()) {
            // Récupérer l'objet descriptor existant
            JsonObject existingDescriptor = (*nodeObject)[DESCRIPTOR].as<JsonObject>();
            // Fusionner le nouveau descripteur avec l'existant
            // Copier toutes les paires clé-valeur de customDescriptor dans existingDescriptor
            for (JsonPair p : customDescriptor.as<JsonObject>()) {
                existingDescriptor[p.key().c_str()] = p.value();
            }
        } else {
            // Si pas de descriptor existant, ajouter simplement le nouveau
            Serial.println("No descriptor key found in nodeObject, will add custom descriptor");
            (*nodeObject)[DESCRIPTOR] = customDescriptor;
        }
        
        // Serial.printf("%lu:: Added custom descriptor to node: %s, with hash: %lu\r\n", millis(), node->getName(), (long unsigned int)node->getHash());
    } else {
        Serial.printf("%lu:: Custom descriptor is null for node: %s\r\n", millis(), node->getName());
    }

    //Serial.printf("After descriptorcallback from node: %lu, hash from nodeObject: %lu\r\n", (long unsigned int)node->getHash(), (*nodeObject)[HASH].as<uint32_t>());

    PLC_Tools::printJsonObject(*nodeObject);
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
    BorneUniverselle* instance = getInstance();
    if (instance != nullptr) {
        return instance->findNodeImpl(context, hash);
    } else {
        // Cas où aucune instance n'est disponible
        char text[256];
        snprintf(text, sizeof(text), "findNode:: No instance available. Searching for node with hash: %lu, with context: %s", (unsigned long)hash, context);
        Serial.println(text);
        return nullptr;
    }
}

Node *BorneUniverselle::findNodeImpl(const char *context, uint32_t hash) {
    auto iter = nodesMap.find(hash);

    if (iter != nodesMap.end()) {
        return iter->second;
    } else {
        char text[256];
        snprintf(text, sizeof(text), "findNodeImpl:: Searching for node with hash: %lu, with context: %s but not found!", (unsigned long)hash, context);
        setPlcBroken(text);
        return nullptr;
    }
}

void BorneUniverselle::printConfigFile(){
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    
    JsonDocument configDoc;
    if (!persistence.readJsonFromFile("/config.json", configDoc)) {
      Serial.printf("Config file open error: %s\n", persistence.getLastError());
      setPlcBroken(persistence.getLastError());
      return;
    }
    
    serializeJsonPretty(configDoc, Serial);
  }
    

