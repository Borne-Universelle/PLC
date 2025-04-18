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
#include "DummyPLC.h"

// #define CONFIG_ASYNC_TCP_USE_WDT 0

#define MAIN_VERSION "Version 1"
#define OTA_STARTED "HTTP update process started"
#define OTA_FINISHED "HTTP update process finished"

BorneUniverselle *bu;
DummyPLC *dummyPLC;
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
  Serial.println("Tapez sur 'D' pour envoyer un message de test");
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

    case 'C':     bu->printConfigFile();
      break;

    case 'D':     BorneUniverselle::prepareMessage(WARNING, "Message de test");
      break;

    case 'E':     bu->notifyWebClient(true);
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

//WiFiEvent_t event, WiFiEventInfo_t info){
void WiFiStationConnected(){
  Serial.printf("%lu:: Connected to AP successfully, SSID: %s, level: %d [dB]\r\n", millis(), WiFi.SSID().c_str(), WiFi.RSSI());
}

//void WiFiStationDisconnected(WiFiEvent_t event, WiFiEventInfo_t info){
void WiFiStationDisconnected(){
  bu->setWifiConnected(false);  
  Serial.println(F("Disconnected from WiFi"));
  //server.end();
  if (Serial.available()){
        commandInterpretor(Serial.read());
  }
  connectToNextNetwork();
}

void turnOffBuzzer(){
   pinMode(BEEP, OUTPUT); 
    digitalWrite(BEEP, false);
}


//void WiFiGotIP(WiFiEvent_t event, WiFiEventInfo_t info){
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
      Serial.println("Connect !!!");
          if (bu->isClientConnected()){
            // tooMuchClients(client);
            bu->closeActualConnection(client);
          } else {
            bu->setClientConnected(true, client);
          }
    break;
   
    case WS_EVT_DISCONNECT: 
           Serial.printf("%lu:: client %lu is disconnected, will remove it\r\n", millis(), client->id());
           bu->setClientConnected(false, NULL);         
    break;
    
    case WS_EVT_DATA:
      bu->keepWebSocketMessage(arg, data, len, client);
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
      Serial.printf("%lu:: WebSocket error received from client: %lu, event type: %s, data: %s\r\n", millis(), client->id(), eventTypeText, dataText);
      client->close();
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

  Serial.println("Starting TestOnglets....");
  
  // Begin LittleFS
  if (!LittleFS.begin()){
    Serial.println("An Error has occurred while mounting LittleFS");
    while (1){
    }
  } // for ever...
  File file = LittleFS.open("/", "r");

  bu = new BorneUniverselle();

  if (!bu->isPlcBroken()){
    dummyPLC = new DummyPLC();
  }

  //----------------------------------------------------WIFI

 WiFi.onEvent([](arduino_event_t *event) {
    WiFiStationConnected();
  }, WiFiEvent_t::ARDUINO_EVENT_WIFI_STA_CONNECTED); // Version 3.x

  //  WiFi.onEvent(WiFiGotIP, SYSTEM_EVENT_STA_GOT_IP); // version 1
  // WiFi.onEvent(WiFiGotIP, ARDUINO_EVENT_WIFI_STA_GOT_IP); // version 2.0x
  WiFi.onEvent([](arduino_event_t *event) {
    WiFiGotIP();
  }, WiFiEvent_t::ARDUINO_EVENT_WIFI_STA_GOT_IP);

  //  WiFi.onEvent(WiFiStationDisconnected, SYSTEM_EVENT_STA_DISCONNECTED); // version 1
  //WiFi.onEvent(WiFiStationDisconnected, ARDUINO_EVENT_WIFI_STA_DISCONNECTED); //version 2.0x
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
    if (!bu->clientQueueIsFull()){
      bu->refresh();
    }
    
    bu->handleWebSocketMessage();

    if (!bu->clientQueueIsFull() && !bu->isWebSocketMessagesListMoreThanHalf()){ // C'est la queue du serveur et la queue des message récupéré
        if (bu->isAllInputsReadOnce()){
             if (!dummyPLC->logiqueExecutor()){
                bu->setPlcBroken("LogicalExecutor");
             }
             bu->notifyWebClient(); // notify only changed nodes
        } else {
            Serial.println("Not calling logic executor beacause automate is not fully intialised\r\n");
        }     
     } // Queues ok
    }

  bu->sendMessage();
  ws.cleanupClients();
  if (millis() - start > 1500){
    Serial.printf("Lopp time: %lu\r\n", millis() - start);
  }
}
