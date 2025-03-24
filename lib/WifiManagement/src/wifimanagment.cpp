#include "WifiManagement/wifimanagment.h"

volatile bool WifiManagment::wifiEnabled = false;
long  WifiManagment::wifiStartupTime = 0;
bool WifiManagment::wificonnected = false;
char  WifiManagment::currentNetworkId = 0;
unsigned char WifiManagment::nbWifiItems;
std::map<unsigned char, WifiItem> WifiManagment::wifiItemsMap;

WifiManagment::WifiManagment(unsigned char _nbWifiItems, char *_mapAsCharPtr){
	for (unsigned int i = 0; i < CHARS_SIZE; i++){
		mapAsCharPtr[i] = _mapAsCharPtr[i];
	}

	nbWifiItems = _nbWifiItems;
	
	Serial.printf("Nb wifi network read from eeprom: %d\r\n", nbWifiItems);
	
	if (nbWifiItems > 0 &&  nbWifiItems < NB_MAX_WIFI){
		parseCharsMap();
	}
}

unsigned char WifiManagment::addItem(const char *ssid, const char *pwd){
	// DHCP
	if (nbWifiItems == NB_MAX_WIFI){
		Serial.println(F("Le nombre réseaux wifi enregistré est déjà au maximum ! "));
	}
	
	return addItem(ssid, pwd, (const char *)"");
}

unsigned char  WifiManagment::addItem(const char *ssid, const char *pwd, const char* connexionName){
	IPAddress ip = IPAddress(0,0,0,0);
	return addItem(ssid, pwd, connexionName, ip, ip, ip, ip, true); 
}

unsigned char WifiManagment::addItem(const char *ssid, const char *pwd, const char *connexionName, IPAddress ip, IPAddress dns, IPAddress gateway, IPAddress mask, bool dhcp){
	WifiItem myItem;
	strcpy(myItem.SSID, ssid);
	strcpy(myItem.PWD, pwd);
	strcpy(myItem.connectionName, connexionName);

	myItem.ip = ip;
	myItem.dns = dns;
	myItem.gateway = gateway;
	myItem.mask = mask;
	myItem.dhcp = dhcp;
	wifiItemsMap[nbWifiItems++] = myItem; // add new network in the map
	Serial.printf("SSID: %s successfuly added, connexion name: %s", myItem.SSID, connexionName);
	if (myItem.dhcp){
		Serial.print(", dhcp");
	} else {
		printIPAddress((const char *)", ip", myItem.ip);
		printIPAddress(", dns", myItem.dns);
		printIPAddress(", gateway", myItem.gateway);
		printIPAddress(", mask", myItem.mask);
	}
	
	Serial.printf(", new nb network: %d\r\n", nbWifiItems);
	return nbWifiItems; 
}

unsigned char WifiManagment::getNbWifiItems(){
	//return wifiItemsMap.size();
	return nbWifiItems; 
}

void  WifiManagment::clearNbWifiItems(){
	Serial.println("Nb wifi = 0");
	nbWifiItems = 0;
}

char * WifiManagment::wifiMapstoCharPtr(){
	unsigned long index = 0;
	char *ptr = mapAsCharPtr;
	Serial.println("Convert the map into an chain");
	 for (std::map<unsigned char,WifiItem>::iterator it = wifiItemsMap.begin(); it != wifiItemsMap.end(); ++it){
		// SSID
		strcpy(ptr+index, it->second.SSID);
		Serial.printf("SSID: %s, ", it->second.SSID);
		index += strlen(it->second.SSID);
		index++;
		
		// PWD
		strcpy(ptr+index, it->second.PWD);
		Serial.printf("PWD: %s, ", it->second.PWD);
		index += strlen(it->second.PWD);
		index++;
		
		// CONNEXION_NAME
		strcpy(ptr+index, it->second.connectionName);
		Serial.printf("Connexion name: %s, ", it->second.connectionName);
		index += strlen(it->second.connectionName);
		index++;
		
		// ip
		converter conv;
		conv.ip = it->second.ip;
		strncpy(ptr + index, (char *)conv.bytes, sizeof(converter));
		
		index +=  sizeof(converter);	
		index++;
		
		// dns
		conv.ip = it->second.dns;
		strncpy(ptr + index, (char *)conv.bytes, sizeof(converter));
		index +=  sizeof(converter);
		index++;
		
		// gateway
		conv.ip = it->second.gateway;
		strncpy(ptr + index, (char *)conv.bytes, sizeof(converter));
		index +=  sizeof(converter);	
		index++;
		
		// mask
		conv.ip = it->second.mask;
		strncpy(ptr + index, (char *)conv.bytes, sizeof(converter));
		index +=  sizeof(converter);	
		index++;
		Serial.printf("index: %lu,", index);
		// dhcp ?
		printf(" dhcp: %s", it->second.dhcp ? "true" : "false"); 
		if (!it->second.dhcp){
			strncpy(ptr + index, "false", strlen("false")+1);
			index += strlen("false");
			printIPAddress("ip", it->second.ip);
			printIPAddress(", dns", it->second.dns);
			printIPAddress(", gateway", it->second.gateway);
			printIPAddress(", mask", it->second.mask);
		} else {
			strncpy(ptr + index, "true", strlen("true")+1);
			index += strlen("true");
			Serial.print(", DHCP");
		}
		
		index++;
		Serial.println();
	}
	
	Serial.printf("Size of map chain: %lu\r\n", index);
	/*
	for (unsigned long i = 0; i < index; i++){
		Serial.printf("%c %d ", ptr[i], ptr[i]);
	}
	*/
	return ptr;
}

std::map<unsigned char,WifiItem>::iterator WifiManagment::findWifiItemByName(WifiItem myItem){
	std::map<unsigned char,WifiItem>::iterator it;
	
	for (it = wifiItemsMap.begin(); it != wifiItemsMap.end(); ++it){
		if (strcmp(it->second.connectionName, myItem.connectionName)){
			return it;
		}
	}
	
	Serial.printf("Unable to find connexion: %s\r\n", myItem.connectionName);
	return it;
}

bool WifiManagment::modifycurrentWifiConnection(WifiItem myItem){
	std::map<unsigned char,WifiItem>::iterator it = findWifiItemByName(myItem);

	if (it == wifiItemsMap.end()){
		return false;
	}

	if (myItem.dhcp != it->second.dhcp){
		if (myItem.dhcp){
			it->second.dhcp = myItem.dhcp;
			Serial.println("DHCP will be activated for this connexion");
			return true;
		} else {
			IPAddress ip = myItem.ip;
			if (ip[0] == 0 && ip[1] == 0 && ip[2] == 0 && ip[3] == 0){
				Serial.println("DHCP is deactivated and ip is not consistant !");
				return false;
			}
		}
	}
	
	Serial.println("Modify ip: current ip: "); printIPAddress(it->second.connectionName, it->second.ip, true);
	Serial.println("New addresse: "); printIPAddress(it->second.connectionName, myItem.ip, true);
	it->second.ip = myItem.ip;

	return true;	
}

void WifiManagment::parseCharsMap(){
	unsigned char itemId = 0;
	char *ptr = mapAsCharPtr;
	Serial.printf("Parsing chain, nb items: %d\r\n", nbWifiItems);
	
	unsigned char l = 0;
	unsigned long index = 0;
	char ssid[SSID_LENGHT];
	char pwd[PWD_LENGHT];
	char connexionName[CONNEXION_NAME_LENGHT];
	
	while (itemId < nbWifiItems){
		//Serial.printf("itemId: %d, ", itemId);
		
		l = 0;
		while (ptr[index] != 0  && l < SSID_LENGHT){
			ssid[l++] = ptr[index++];
		}
		ssid[l] = 0;
		//Serial.printf("SSID: %s, ", ssid);
		index++;
		
		l = 0;
		while (ptr[index] != 0  && l < PWD_LENGHT){
			pwd[l++] = ptr[index++];
		}
		pwd[l] = 0;
		//Serial.printf("PWD: %s, ", pwd);
		index++;
		
		l = 0;
		while (ptr[index] != 0 && l < CONNEXION_NAME_LENGHT){
			connexionName[l++] = ptr[index++];
		}
		connexionName[l] = 0;
		//Serial.printf("connexion name: %s, SSID: %s\r\n", connexionName, ssid);

		index++;
		
		converter conv;
		strncpy((char *)conv.bytes, ptr+index, sizeof(converter));
		index +=  sizeof(converter);
		IPAddress ip = IPAddress(conv.ip);
		index++;
		//printIPAddress("ip", ip);
		
		strncpy((char *)conv.bytes, ptr+index, sizeof(converter));
		index +=  sizeof(converter);
		IPAddress dns = IPAddress(conv.ip);
		index++;
		//printIPAddress(", dns", dns);
		
		strncpy((char *)conv.bytes, ptr+index, sizeof(converter));
		index +=  sizeof(converter);
		IPAddress gateway = IPAddress(conv.ip);
		index++;
		//printIPAddress(", gateway", gateway);

		strncpy((char *)conv.bytes, ptr+index, sizeof(converter));
		index +=  sizeof(converter);
		IPAddress mask = IPAddress(conv.ip);
		index++;
		//printIPAddress(", mask", mask);
		
		WifiItem myItem;
		
		if (!strncmp(ptr + index, "true", strlen("true"))){
			myItem.dhcp = true;
			index += strlen("true");
			//Serial.println(" DHCP");
		} else {
			if (!strncmp(ptr + index, "false", strlen("false"))){
				myItem.dhcp = false;
				index += strlen("false");
			//	Serial.println(" fixed ip");
			} else {
				Serial.println("ERREUR DHCP !!!!!!");
			}
		}
		index++;
		
		strcpy(myItem.SSID, ssid);
		strcpy(myItem.PWD, pwd);
		strcpy(myItem.connectionName, connexionName);
		myItem.ip = ip;
		myItem.dns = dns;
		myItem.gateway = gateway;
		myItem.mask = mask;
		
		strcpy(wifiItemsMap[itemId].connectionName, myItem.connectionName); // add new network in the map
		wifiItemsMap[itemId].dhcp 		= myItem.dhcp;
		wifiItemsMap[itemId].dns		= myItem.dns;
		wifiItemsMap[itemId].gateway 	= myItem.gateway;
		wifiItemsMap[itemId].ip			= myItem.ip;
		wifiItemsMap[itemId].mask		= myItem.mask;
		strcpy(wifiItemsMap[itemId].PWD, myItem.PWD);
		strcpy(wifiItemsMap[itemId].SSID, myItem.SSID);

		itemId++;
	}

	for (uint8_t i = 0; i < nbWifiItems; i++){
		Serial.printf("%s\r\n", wifiItemsMap[i].connectionName);
	}
}

void WifiManagment:: printIPAddress(const char *name, IPAddress ip, bool ret){
	Serial.printf("%s: %d.%d.%d.%d", name, ip[0], ip[1], ip[2], ip[3]);
	if (ret){
		Serial.println();
	}
}

WifiItem WifiManagment::getNextNetwork(){
	Serial.println("Will get next wifi");
	currentNetworkId += 1;
	
	if (currentNetworkId >= nbWifiItems){
		currentNetworkId = 0;
	}

	Serial.printf("Current wifi: %s, item: %d\r\n", wifiItemsMap[currentNetworkId].connectionName, currentNetworkId);
	return wifiItemsMap[currentNetworkId];	
}

bool WifiManagment::connectWifi(WifiItem currentWifi){
	WiFi.disconnect(true, true);
	Serial.printf("Will try to connect to: %s, SSID: %s, PWD: %s, DHCP: %s\r\n", currentWifi.connectionName, currentWifi.SSID, currentWifi.PWD, currentWifi.dhcp == true ? "YES" : "NO");
	
	if (!currentWifi.dhcp){
		if (!WiFi.config(currentWifi.ip, currentWifi.gateway, currentWifi.mask, currentWifi.dns, currentWifi.dns)) {
		  Serial.println("STA Failed to configure");
			return false;
		} else {
			printIPAddress(", ip", currentWifi.ip);
			printIPAddress(", dns", currentWifi.dns);
			printIPAddress(", gateway", currentWifi.gateway);
			printIPAddress(", mask", currentWifi.mask, true);
		}
	} else {
		Serial.println("Wifi is with DHCP");
	}

	WiFi.begin(currentWifi.SSID, currentWifi.PWD);
	return true;
}	

void WifiManagment::displayRegistredNetworks(){
	Serial.printf("WifiManagment::displayRegistredNetworks Nb registred networks: %d\r\n", nbWifiItems);
	for (std::map<unsigned char,WifiItem>::iterator it = wifiItemsMap.begin(); it != wifiItemsMap.end(); ++it){
		Serial.println(it->second.connectionName);
	}
}

void WifiManagment::showIpAddress(){
  if (WiFi.status() == WL_CONNECTED){
    Serial.printf("Le WIFI est connecté au point d'accès, le nom du réseau wifi est: %s, le niveau de réception: %d dB\r\n", WiFi.SSID().c_str(), WiFi.RSSI()); 
    Serial.printf("L'adresse mDNS est: %s.local\r\n", WiFi.getHostname());
    byte mac[6];
    WiFi.macAddress(mac);
    Serial.printf("Addresse ip du module: %s, mac address: %02X:%02X:%02X:%02X:%02X:%02X\r\n", WiFi.localIP().toString().c_str(), mac[5], mac[4], mac[3], mac[2], mac[1], mac[0]);
  } else {
    Serial.println(F("Le WIFI n'est pas connecté au point d'accès !!"));
  }
} // showIpAddress

void WifiManagment::setWifiConnected(bool status){
	if (wificonnected && !status){
		wifiStartupTime = millis(); // Dans le cas de la perte du wifi on réarme le watchdog 
	}
	wificonnected = status;
	Serial.printf("New Wifi connection status: %s\r\n", status ? "connected" : "disconnected");
}

bool WifiManagment::getWifiStatus(){
	return wificonnected;
}

void WifiManagment::enableWifi(bool status){
	Serial.printf("WifiManagment::enableWifi, status: %s, wifienabled: %s\r\n", status ? "true" : "false", wifiEnabled ? "true" : "false");
	if (status && !wifiEnabled){	
		setCpuFrequencyMhz(240);
		Serial.flush();
		Serial.println("Will set wifi mode to WIFI_STA");
		WiFi.mode(WIFI_STA);
		wifiEnabled = true;
		wifiStartupTime = millis();
		Serial.printf("%lu:: Wifi is now ENABLED\r\n", millis());
		//delay(1000);
	}

	if (!status && wifiEnabled){
		WiFi.disconnect(true, true);
		wifiEnabled = false;
		WiFi.mode(WIFI_OFF);
		Serial.println("Wifi is now DISABLED");
	}
	Serial.flush();
}

bool WifiManagment::isWifiConnectionTimeout(){
	if (!wificonnected && millis() - wifiStartupTime > TIMEOUT_WIFI){
		Serial.printf("%lu:: Wifi connection timeout\r\n", millis());
		return true;
	} else {
		return false;
	}
}

long  WifiManagment::getWifiStartupTime(){
	return wifiStartupTime;
}

bool WifiManagment::isWifiEnabled(){
	return wifiEnabled;
}

void WifiManagment::printWifiEvent(WiFiEvent_t event) {
    switch (event) {
        case ARDUINO_EVENT_WIFI_READY: 
            Serial.println("WiFi interface ready");
            break;
        case ARDUINO_EVENT_WIFI_SCAN_DONE:
            Serial.println("Completed scan for access points");
            break;
        case ARDUINO_EVENT_WIFI_STA_START:
            Serial.println("WiFi client started");
            break;
        case ARDUINO_EVENT_WIFI_STA_STOP:
            Serial.println("WiFi clients stopped");
            break;
        case ARDUINO_EVENT_WIFI_STA_CONNECTED:
            Serial.println("Connected to access point");
            break;
        case ARDUINO_EVENT_WIFI_STA_DISCONNECTED:
            Serial.println("Disconnected from WiFi access point");
            break;
        case ARDUINO_EVENT_WIFI_STA_AUTHMODE_CHANGE:
            Serial.println("Authentication mode of access point has changed");
            break;
        case ARDUINO_EVENT_WIFI_STA_GOT_IP:
            Serial.print("Obtained IP address: ");
            Serial.println(WiFi.localIP());
            break;
        case ARDUINO_EVENT_WIFI_STA_LOST_IP:
            Serial.println("Lost IP address and IP address is reset to 0");
            break;
        case ARDUINO_EVENT_WPS_ER_SUCCESS:
            Serial.println("WiFi Protected Setup (WPS): succeeded in enrollee mode");
            break;
        case ARDUINO_EVENT_WPS_ER_FAILED:
            Serial.println("WiFi Protected Setup (WPS): failed in enrollee mode");
            break;
        case ARDUINO_EVENT_WPS_ER_TIMEOUT:
            Serial.println("WiFi Protected Setup (WPS): timeout in enrollee mode");
            break;
        /*case ARDUINO_EVENT_WPS_ER_PIN:
            Serial.println("WiFi Protected Setup (WPS): pin code in enrollee mode");
            break;
		*/
        case ARDUINO_EVENT_WIFI_AP_START:
            Serial.println("WiFi access point started");
            break;
        case ARDUINO_EVENT_WIFI_AP_STOP:
            Serial.println("WiFi access point  stopped");
            break;
        case ARDUINO_EVENT_WIFI_AP_STACONNECTED:
            Serial.println("Client connected");
            break;
        case ARDUINO_EVENT_WIFI_AP_STADISCONNECTED:
            Serial.println("Client disconnected");
            break;
        case ARDUINO_EVENT_WIFI_AP_STAIPASSIGNED:
            Serial.println("Assigned IP address to client");
            break;
        case ARDUINO_EVENT_WIFI_AP_PROBEREQRECVED:
            Serial.println("Received probe request");
            break;
        case ARDUINO_EVENT_WIFI_AP_GOT_IP6:
            Serial.println("AP IPv6 is preferred");
            break;
        case ARDUINO_EVENT_WIFI_STA_GOT_IP6:
            Serial.println("STA IPv6 is preferred");
            break;
        case ARDUINO_EVENT_ETH_GOT_IP6:
            Serial.println("Ethernet IPv6 is preferred");
            break;
        case ARDUINO_EVENT_ETH_START:
            Serial.println("Ethernet started");
            break;
        case ARDUINO_EVENT_ETH_STOP:
            Serial.println("Ethernet stopped");
            break;
        case ARDUINO_EVENT_ETH_CONNECTED:
            Serial.println("Ethernet connected");
            break;
        case ARDUINO_EVENT_ETH_DISCONNECTED:
            Serial.println("Ethernet disconnected");
            break;
        case ARDUINO_EVENT_ETH_GOT_IP:
            Serial.println("Obtained IP address");
            break;
        default: break;
    }
}