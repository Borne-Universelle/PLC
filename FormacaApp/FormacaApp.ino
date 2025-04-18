#include "MyToolBox.h"
#include <ESPAsyncWebServer.h>
#include <LittleFS.h>
#include <ESPmDNS.h>
#include <map>
#include <vector>
#include "esp_wifi.h"
#include <WiFi.h>
//#include <Arduino_ESP32_OTA.h>
#include <HTTPClient.h>
#include <HTTPUpdate.h>
#include "borneUniverselle.h"
#include "wifimanagment.h"
#include "Formaca.h"

// #define CONFIG_ASYNC_TCP_USE_WDT 0

#define MAIN_VERSION "Version 2.3"
#define OTA_STARTED "HTTP update process started"
#define OTA_FINISHED "HTTP update process finished"

BorneUniverselle *bu;
Formaca *formaca;
MyToolBox toolbox;
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");

#define BEEP 2

long start;
bool memoryMonitorBool = false;

void connectToNextNetwork(){  
  Serial.println("Will get next wifi network");
  if (bu->isWifiConnectionTimeout()){
    Serial.println("Wifi connection timeout");
  }
  bool criterionOK = false;
  WifiItem currentWifi;

  while (!criterionOK){
      currentWifi = bu->getNextNetwork();
      criterionOK = true;
   }
  bu->connectWifi(currentWifi);
}

void modifyLogs(){
  while (Serial.available()){
     Serial.read();
  }

  Serial.println("Logs");
  Serial.println("----");
  Serial.println("A: Activer les logs hearbeat");
  Serial.println("B: Désactiver les logs hearbeat");
  Serial.println("C: Activer les logs modbus");
  Serial.println("D: Désactiver les logs modbus");
  Serial.println("E: Moniteur de la mémoire");
  Serial.println("-----------------------------");
  Serial.println("Tapez sur une lettre...");

  while (!Serial.available()){
    delay(100);
  }
        
  char car = Serial.read();
  switch (car){
    case 'A':     bu->setShowHeartbeatMessages(true);
      break;

    case 'B':     bu->setShowHeartbeatMessages(false);
      break;

    case 'C':     bu->setShowModbusMessages(true);
      break;

    case 'D':     bu->setShowModbusMessages(false);
      break;

    case 'E':     MemoryMonitor::printStats("MemoryMonitor");
      break;

    case 'G':     modifyLogs();
      break;

    default:      Serial.printf("Command interrpretor: Key: %c not attributed !!\r\n", car);
  }  
}

void showHelp(){
  toolbox.clearScreen();
  Serial.println("Help");
  Serial.println(F("-----------"));  
  const char compile_date[] = __DATE__ " " __TIME__;  
  Serial.printf("Version du firmware: %s, date de compilation: %s\r\n", MAIN_VERSION, compile_date);
  
  if (bu->getWifiStatus()){
    WifiManagment::showIpAddress();
  } else {
    Serial.println("ATTENTION LE MODULE N'EST PAS CONNECTE AU WIFI !!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
  Serial.println("Tapez sur 'A' ou 'a' pour effacer les réseaux wifi");
  Serial.println("Tapez sur 'B' pour forcer la copie du JSON par défaut dans la config");
  Serial.println("Tapez sur 'C' pour imprimer le fichier de config");
  Serial.println("Tapez sur 'D' pour envoyer un message de test");
  Serial.println("Tapez sur 'E' pour notifier le client web");
  Serial.println("Tapez sur 'F' pour imprimer le fichier de persistance");
  Serial.println("Tapez sur 'G' pour afficher la mémoire de manière cyclique");
  Serial.println("Tapez sur 'Y' pour faire un reset"),
  Serial.println("Tapez sur 'Z' pour modifier les logs");
  Serial.println("Tapez sur '?' pour afficher l'aide");
}

void commandInterpretor(char car){
  switch (car){
    case 'A':     bu->eraseWifis();
      break;

    case 'C':     bu->printConfigFile();
      break;

    case 'D':     BorneUniverselle::prepareMessage(WARNING, "Message de test");
      break;

    case 'E':     bu->notifyWebClient(true);
      break;

    case 'F':     Formaca::printPersistance();
      break;

    case 'G':     memoryMonitorBool = true;

    case 'Y':     Serial.println("ESP32 will reset");
                  ESP.restart();
      break;       

    case 'Z':     modifyLogs();
      break;

    case '?':     showHelp();
      break;

    case '\n':
     break;

    default:      Serial.printf("Command interrpretor: Key: %c not attributed !!\r\n", car);
  }
}

void firmwareUpdate(){
  WiFiClient client;
  httpUpdate.rebootOnUpdate(false);
  t_httpUpdate_return ret = httpUpdate.update(client,  bu->getOTA_Url());
  
  switch (ret) {
      case HTTP_UPDATE_FAILED:
        Serial.printf("HTTP_UPDATE_FAILED Error (%d): %s\n", httpUpdate.getLastError(), httpUpdate.getLastErrorString().c_str());
        break;

      case HTTP_UPDATE_NO_UPDATES:
        Serial.println("HTTP_UPDATE_NO_UPDATES");
        break;

      case HTTP_UPDATE_OK:
        Serial.println("HTTP_UPDATE_OK");
        break;
  }
}

void turnOffBuzzer(){
   pinMode(BEEP, OUTPUT); 
    digitalWrite(BEEP, false);
}

//void WiFiStationConnected(WiFiEvent_t event, WiFiEventInfo_t info){
void WiFiStationConnected(){
  Serial.printf("%lu:: Connected to AP successfully, SSID: %s, level: %d [dB]\r\n", millis(), WiFi.SSID().c_str(), WiFi.RSSI());
}

//void WiFiGotIP(WiFiEvent_t event, WiFiEventInfo_t info){ // version 1 & 2
void WiFiGotIP(){
  if (BorneUniverselle::getIsKinconyA8S()){
    turnOffBuzzer();
  }
  
  IPAddress ip = WiFi.localIP();
  Serial.printf("WiFi connected, IP address: %d.%d.%d.%d, level: %d [dB]\r\n", ip[0], ip[1], ip[2], ip[3], WiFi.RSSI());
  bu->setWifiConnected(true);
  if (!MDNS.begin(bu->getName())) {
        Serial.println("Error setting up MDNS responder!");
        while(1) {
            delay(1000);
        }
  }
    
  // Add service to MDNS-SD
   MDNS.addService("http", "tcp", 80);
   Serial.printf("mDNS responder started: address is: %s.local\r\n", bu->getName());
   if (!LittleFS.begin()) {
     Serial.println(F("Erreur de montage LittleFS"));
     return;
   }
   Serial.println(F("LittleFS monté avec succès"));
 
   server.begin();  // Test Thierry
   Serial.println("Web server started !");
} // WiFiGotIP

void WiFiStationDisconnected(){
//void WiFiStationDisconnected(WiFiEvent_t event, WiFiEventInfo_t info){
  bu->setWifiConnected(false);  
  Serial.println(F("Disconnected from WiFi"));
  //server.end();
  if (Serial.available()){
        commandInterpretor(Serial.read());
  }
  connectToNextNetwork();
}

void update_started() {
  Serial.println(OTA_STARTED);
}

void update_finished() {
  Serial.println(OTA_FINISHED);
}

void update_progress(int cur, int total) {
  Serial.printf("CALLBACK:  HTTP update process at %d of %d bytes...\n", cur, total);
}

void update_error(int err) {
  Serial.printf("CALLBACK:  HTTP update fatal error code %d\n", err);
  char buffer[40];
  sprintf(buffer, "error %d", err);
}

void tooMuchClients(AsyncWebSocketClient *client){
  bu->tooMuchClients(client);
}

void onWsEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len) {
  char eventTypeText[100];
 
  switch (type) {
    case WS_EVT_CONNECT:
      // nouvelle connexion.. 
      Serial.println("onWsEvent::Connect !!!");
      if (bu->isClientConnected()){
          tooMuchClients(client);
        bu->setClientConnected(false, client);
      } else {
        bu->setClientConnected(true, client);
      }
    break;
   
    case WS_EVT_DISCONNECT: 
           Serial.printf("%lu:: client %lu is disconnected, will remove it\r\n", millis(), (unsigned long)client->id());
           bu->setClientConnected(false, NULL);         
    break;
    
    case WS_EVT_DATA:
      bu->handleWebSocket(arg, data, len, client);
    break;
    
    case WS_EVT_PONG:
      Serial.println("WebSocket ping request");
    break;
      
    case WS_EVT_ERROR:
       if (len > 1999){
        len = 1999;
        Serial.println("Data too long, will be truncated");
      }

      char *dataText = (char *)malloc(len + 1);
      if (!dataText) {
        bu->setPlcBroken("Memory allocation error for websocket message copy");
        return;
      }

      strncpy(dataText, (char *)data, len);
      Serial.printf("%lu:: WebSocket error received from client: %lu, event type: %s, data: %s\r\n", millis(), (unsigned long)client->id(), eventTypeText, dataText);
      client->close();
      free(dataText);
    break;
  } // switch
}

void notFound(AsyncWebServerRequest *request) {
    char buff[200];
    sprintf(buff, "%lu:: Page not found !, requested url: %s\r\n", millis(), request->url().c_str());
    Serial.printf(buff);
    request->send(404, "text/plain", "Not found");
}

void setup(){
  Serial.begin(115200);
  while(!Serial){
   ;
  }
  delay(1000);

  Serial.println();Serial.println();Serial.println();

  Serial.println("Starting Formaca....");

  Serial.println("Will start BorneUniverselle library...");
  bu = new BorneUniverselle();

  if (!bu->isPlcBroken()){
    formaca = new Formaca();
  }

  WiFi.onEvent([](arduino_event_t *event) {
    WiFiStationConnected();
  }, WiFiEvent_t::ARDUINO_EVENT_WIFI_STA_CONNECTED); // Version 3.x


  WiFi.onEvent([](arduino_event_t *event) {
    WiFiGotIP();
  }, WiFiEvent_t::ARDUINO_EVENT_WIFI_STA_GOT_IP);

 
  WiFi.onEvent([](arduino_event_t *event) {
    WiFiStationDisconnected();    
  }, WiFiEvent_t::ARDUINO_EVENT_WIFI_STA_DISCONNECTED);

// OTA 
//  httpUpdate.onStart(update_started);
//  httpUpdate.onEnd(update_finished);
//  httpUpdate.onProgress(update_progress);
 // httpUpdate.onError(update_error);
 if (bu->getIsWifiParsedOk()){
    connectToNextNetwork();
 } else {
  Serial.println("Not starting wifi because config is not correct !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  
 }
 
 //-----------------------------------------------------SERVER   
 ws.onEvent(onWsEvent); // web socket handler
 ws.enable(true);
 server.addHandler(&ws); // register the handler

 server.serveStatic("/", LittleFS, "/static").setDefaultFile("index.html");
 server.serveStatic("/", LittleFS, "/").setDefaultFile("index.html");
 server.serveStatic("/config", LittleFS, "/config.json").setCacheControl("max-age=30");
 Serial.println(F("Server static no cache"));
 
 server.onNotFound(notFound);

 MyToolBox::emptySerialIn();
 
 //showHelp();
}  // setup

void loop() {
  long start = millis();
  
  if (Serial.available()){
        commandInterpretor(Serial.read());
  }
  
  // check if it is time to send heartbeat
  bu->checkHeartbeat();

  if (!bu->isPlcBroken()){
    bu->refresh(); 
    bu->handleWebSocketMessage();
    if (bu->isAllInputsReadOnce()){
      if (!formaca->logiqueExecutor()){
        bu->setPlcBroken("LogicalExecutor");
      }
    }
  } else {
    if (!bu->isPlcBroken()){
      Serial.println("Not calling logic executor beacause automate is not fully intialised\r\n");
    }
  }

  bu->notifyWebClient(); // notify only changed nodes        
   
  if (!bu->sendMessage()){
    Serial.println("Unable to send a message to the client");
  }

  ws.cleanupClients();
  if (millis() - start > 1500){
    Serial.printf("Lopp time: %lu\r\n", millis() - start);
  }
  
  MemoryMonitor::trackStats();

  if (memoryMonitorBool){
    MemoryMonitor::printStats("MemoryMonitor");
  }
}
