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
#include "Edmg.h"

#define MAIN_VERSION "Version 1.1"
#define OTA_STARTED "HTTP update process started"
#define OTA_FINISHED "HTTP update process finished"

BorneUniverselle *bu;
EDMG *edmg;
MyToolBox toolbox;
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");

#define BEEP 2

long start;

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
  Serial.println("Tapez sur 'D' pour afficher pour envoyer un message de test");
  Serial.println("Tapez sur 'E' pour envoyer tous les états");
  Serial.println("Tapez sur 'Z' pour afficher les heartbeat messages");
}

void showHeartbeatMessages(){
  Serial.println("Voullez vous montrez les messages heartbeat [Y/N] ?");
  bu->setShowHeartbeatMessages(toolbox.yes_or_no() ? true : false);
}

void commandInterpretor(char car){
  switch (car){
    case 'A':     bu->eraseWifis();
      break;

    case 'B':     bu->forceReplaceConfig();
      break;

    case 'C':     bu->printConfigFile();
      break;

    case 'D':     BorneUniverselle::prepareMessage(WARNING, "Message de test");
      break;

    case 'E':     bu->setAllStatesRequest();
      break;

    case 'Z':     showHeartbeatMessages();
      break;

    case '?':     showHelp();
      break;

    case '\n':
     break;

    default:      Serial.printf("Command interrpretor: Key: %c not attributed !!\r\n", car);
  }
}

void firmwareUpdate(){
  while (!bu->getWifiStatus()){
      Serial.println("wifi not connected");
      delay(500);
  }
  delay(500);
  Serial.printf("Firmware update at url: %s\r\n", bu->getOTA_Url());
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

void WiFiStationConnected(WiFiEvent_t event, WiFiEventInfo_t info){
  Serial.printf("%lu:: Connected to AP successfully, SSID: %s, level: %d [dB]\r\n", millis(), WiFi.SSID().c_str(), WiFi.RSSI());
}


void WiFiStationDisconnected(WiFiEvent_t event, WiFiEventInfo_t info){
  bu->setWifiConnected(false);  
  Serial.println(F("Disconnected from WiFi"));
  server.end();
  if (Serial.available()){
        commandInterpretor(Serial.read());
  }
  connectToNextNetwork();
}

void turnOffBuzzer(){
   pinMode(BEEP, OUTPUT); 
    digitalWrite(BEEP, false);
}

void WiFiGotIP(WiFiEvent_t event, WiFiEventInfo_t info){
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
  server.begin();
  Serial.println("Web server started !");
  
} // WiFiGotIP

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
  switch (type) {
    case WS_EVT_CONNECT:
      // nouvelle connexion.. 
          Serial.printf("%lu:: WebSocket new connection %u from %s\n", millis(), client->id(), client->remoteIP().toString().c_str()); 
          if (bu->isClientConnected()){
            tooMuchClients(client);
          } else {
            bu->setClientConnected(true, client);
            if (!bu->isAutomateBroken()){
               bu->setSendAllStates();
            }
          }
    break;
   
    case WS_EVT_DISCONNECT: 
           Serial.printf("%lu:: client %u is disconnected, will remove it\r\n", millis(), client->id());
           bu->setClientConnected(false, NULL);         
    break;
    
    case WS_EVT_DATA:
      bu->handleWebSocketMessage(arg, data, len, client);
    break;
    
    case WS_EVT_PONG:
      Serial.println("WebSocket ping request");
    break;
      
    case WS_EVT_ERROR:
   // AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len 
      char eventTypeText[100];
      char dataText[2000];
     
      switch (type){
        case WS_EVT_CONNECT:  strcpy(eventTypeText, "WS_EVT_CONNECT");
          break; 

        case WS_EVT_DISCONNECT: strcpy(eventTypeText, "WS_EVT_DISCONNECT");
          break;

        case WS_EVT_PONG: strcpy(eventTypeText, "WS_EVT_PONG");strcpy(eventTypeText, "WS_EVT_PONG");
          break;

        case WS_EVT_ERROR: strcpy(eventTypeText, "WS_EVT_ERROR");
          break;

        case WS_EVT_DATA: strcpy(eventTypeText, "WS_EVT_DATA");
          break;
      }
      if (len > 1999){
        len = 1999;
      }
      strncpy(dataText, (char *)data, len);
      Serial.printf("%lu:: WebSocket error received from client: %u, event type: %s, data: %s\r\n", millis(), client->id(), eventTypeText, dataText);
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

  Serial.println("Starting EDMG....");
  
  // Begin LittleFS
  if (!LittleFS.begin()){
    Serial.println("An Error has occurred while mounting LittleFS");
    while (1){
    }
  } // for ever...
  File file = LittleFS.open("/", "r");

  Serial.println("Will start BorneUniverselle library...");
  bu = new BorneUniverselle();

  if (!bu->isAutomateBroken()){
    edmg = new EDMG();
  }

  //----------------------------------------------------WIFI
      
  Serial.printf("Default ota url: %s\r\n", bu->getOTA_Url());
  //WiFi.onEvent(WiFiStationConnected, SYSTEM_EVENT_STA_CONNECTED); // version 1
  WiFi.onEvent(WiFiStationConnected, ARDUINO_EVENT_WIFI_STA_CONNECTED); // version 2.0x
 // WiFi.onEvent(WiFiGotIP, SYSTEM_EVENT_STA_GOT_IP); // version 1
  WiFi.onEvent(WiFiGotIP, ARDUINO_EVENT_WIFI_STA_GOT_IP); // version 2.0x
//  WiFi.onEvent(WiFiStationDisconnected, SYSTEM_EVENT_STA_DISCONNECTED); // version 1
  WiFi.onEvent(WiFiStationDisconnected, ARDUINO_EVENT_WIFI_STA_DISCONNECTED); //version 2.0x

// OTA 
//  httpUpdate.onStart(update_started);
//  httpUpdate.onEnd(update_finished);
//  httpUpdate.onProgress(update_progress);
 // httpUpdate.onError(update_error);
 if (bu->getIsWifiParsedOk()){
    connectToNextNetwork();
 } 
 
 //-----------------------------------------------------SERVER   
 ws.onEvent(onWsEvent); // web socket handler
 ws.enable(true);
 server.addHandler(&ws); // register the handler

 //server.serveStatic("/", LittleFS, "/static").setDefaultFile("index.html");
 server.serveStatic("/", LittleFS, "/").setDefaultFile("index.html");
 //server.serveStatic("/config", LittleFS, "/config.json").setCacheControl("max-age=30");
 Serial.println(F("Server static no cache"));
 
 server.onNotFound(notFound);

 MyToolBox::emptySerialIn();
 
 //showHelp();
}  // setup

void loop() {
  if (Serial.available()){
        commandInterpretor(Serial.read());
  }
  // check if it is time to send heartbeat
  bu->checkHeartbeat();
  if (!bu->isAutomateBroken()){
    bu->refresh();
    bu->handleNodesChange(); // notification de changement de l'interface web
    if (!edmg->logiqueExecutor()){
      bu->setAutomateBroken();
    }
    bu->notifyWebClient(); // notify only changed nodes
  }
  bu->sendMessage();
}
