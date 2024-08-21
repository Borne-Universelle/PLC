#ifndef WIFI_MANAGMENT_LIB_H
#define WIFI_MANAGMENT_LIB_H

#include <map>
#include "Arduino.h"
#include <WiFi.h>
#include "WiFiGeneric.h"
#include "esp_err.h"
#include "esp_event.h"
#include "esp_wifi.h"
#include <functional>
#include "WiFiType.h"
#include "IPAddress.h"
#include "esp_smartconfig.h"
#include "wifi_provisioning/manager.h"
#include <WiFiServer.h>

#define TIMEOUT_WIFI	60000L

#define THIERRY_SSID      "Ella"
#define THIERRY_WIFI_PWD  "Oceanne1"
#define THIERRY_NAME      "Thierry"
#define THIERRY_ADDRESS   IPAddress(192,168,1,222)
#define THIERRY_DNS       IPAddress(192,168,1,107)
#define THIERRY_GATEWAY   IPAddress(192,168,1,254)
#define THIERRY_MASK      IPAddress(255,255,255,0)

#define MATTHIEU_ADDRESS  IPAddress(192, 168, 1, 222)
#define MATTHIEU_SSID     "gccable.ca_FBBC-5G"
#define MATTHIEU_WIFI_PWD "hmogqjaimu"
#define MATTHIEU_GATEWAY  IPAddress(192, 168, 1, 1)
#define MATTHIEU_DNS      IPAddress(8, 8, 8, 8)
#define MATTHIEU_MASK     IPAddress(255, 255, 255, 0)

#define ALEXIS_SSID       "TELUSAFF7"
#define ALEXIS_WIFI_PWD   "h6vJ96UKmUr7"
#define ALEXIS_NAME       "Alexis"

#define ROUTER_ALEXIS_SSID	"dlink-FD70"
#define ROUTEUR_ALEXCI_PWD 	"yevvf68483"
#define ROUTEUR_ALEXIS_NAME "Routeur alexis"

#define CHRISTOPHE_SSID	  "CS maison"
#define CHRISTOPHE_WIFI_PWD	"maison%123"
#define CHRISTOPHE_NAME		"Saphari"

#define CHRISTOPHE_CELL_SSID	"IRTAG"
#define CHRISTOPHE_CELL_PWD		"IRTAG%123"
#define CHRISTOPHE_CELL_NAME	"Cellulaire Christophe"

#define MICHAEL_SSID		"BELL643"
#define MICHAEL_PWD			"F47227FE"
#define MICHAEL_NAME		"Michael"

#define NEREYDA_SSID		"Depa 72B"
#define NEREYDA_PWD			"72B20221"
#define NEREYDA_NAME		"NEREYDA"

// By Thierry !
// Il faut implémenter la fonction networkErase dans le programme ino:
/*
void ElfTrigger::wifiNetworksErase(){
	Serial.println("Laflamme::wifiNetworksErase: Will erase wifi network !!!");
	EEPROM.begin(sizeof(PERSISTANT_PARAMETERS));
	for (unsigned int i = 0; i < CHARS_SIZE + sizeof(unsigned char); i++) {
		EEPROM.write(i, 0);
	}
	EEPROM.commit();
	EEPROM.end();
	parameters.nbWifiItems = 0;
	Serial.printf("nb wifi: %d\r\n", parameters.nbWifiItems);
}

il faut aussi implémenter une fonction getNextNetwork qui test si le network est compatible avec le module
*/




#define WIFIMANAGMENT_VERSION "WIFIMANAGMENT_VERSION_1.0"

#define NB_MAX_WIFI	10
#define SSID_LENGHT	30
#define PWD_LENGHT	30
#define CONNEXION_NAME_LENGHT 80
#define CHARS_SIZE	400

/*
#define WIFI_INIT_CONFIG_DEFAULT(){    
			.event_handler = &esp_event_send,
			.osi_funcs = &g_wifi_osi_funcs,
			.wpa_crypto_funcs = g_wifi_default_wpa_crypto_funcs,
			.static_rx_buf_num = CONFIG_ESP32_WIFI_STATIC_RX_BUFFER_NUM,
			.dynamic_rx_buf_num = CONFIG_ESP32_WIFI_DYNAMIC_RX_BUFFER_NUM,
			.tx_buf_type = CONFIG_ESP32_WIFI_TX_BUFFER_TYPE,
			.static_tx_buf_num = WIFI_STATIC_TX_BUFFER_NUM,
			.dynamic_tx_buf_num = WIFI_DYNAMIC_TX_BUFFER_NUM,
			.csi_enable = WIFI_CSI_ENABLED,
			.ampdu_rx_enable = WIFI_AMPDU_RX_ENABLED,
			.ampdu_tx_enable = WIFI_AMPDU_TX_ENABLED,
			.nvs_enable = WIFI_NVS_ENABLED,
			.nano_enable = WIFI_NANO_FORMAT_ENABLED,
			.tx_ba_win = WIFI_DEFAULT_TX_BA_WIN,
			.rx_ba_win = WIFI_DEFAULT_RX_BA_WIN,
			.wifi_task_core_id = WIFI_TASK_CORE_ID,
			.magic = WIFI_INIT_CONFIG_MAGIC
};

*/
// Aucune idée pour quoi cet enum n'est pas accessible !!!!!!!!!!!!!
#if ESP_ARDUINO_VERSION < 2
	typedef enum {
		ARDUINO_EVENT_WIFI_READY = 0,
		ARDUINO_EVENT_WIFI_SCAN_DONE,
		ARDUINO_EVENT_WIFI_STA_START,
		ARDUINO_EVENT_WIFI_STA_STOP,
		ARDUINO_EVENT_WIFI_STA_CONNECTED,
		ARDUINO_EVENT_WIFI_STA_DISCONNECTED,
		ARDUINO_EVENT_WIFI_STA_AUTHMODE_CHANGE,
		ARDUINO_EVENT_WIFI_STA_GOT_IP,
		ARDUINO_EVENT_WIFI_STA_GOT_IP6,
		ARDUINO_EVENT_WIFI_STA_LOST_IP,
		ARDUINO_EVENT_WIFI_AP_START,
		ARDUINO_EVENT_WIFI_AP_STOP,
		ARDUINO_EVENT_WIFI_AP_STACONNECTED,
		ARDUINO_EVENT_WIFI_AP_STADISCONNECTED,
		ARDUINO_EVENT_WIFI_AP_STAIPASSIGNED,
		ARDUINO_EVENT_WIFI_AP_PROBEREQRECVED,
		ARDUINO_EVENT_WIFI_AP_GOT_IP6,
		ARDUINO_EVENT_WIFI_FTM_REPORT,
		ARDUINO_EVENT_ETH_START,
		ARDUINO_EVENT_ETH_STOP,
		ARDUINO_EVENT_ETH_CONNECTED,
		ARDUINO_EVENT_ETH_DISCONNECTED,
		ARDUINO_EVENT_ETH_GOT_IP,
		ARDUINO_EVENT_ETH_GOT_IP6,
		ARDUINO_EVENT_WPS_ER_SUCCESS,
		ARDUINO_EVENT_WPS_ER_FAILED,
		ARDUINO_EVENT_WPS_ER_TIMEOUT,
		ARDUINO_EVENT_WPS_ER_PIN,
		ARDUINO_EVENT_WPS_ER_PBC_OVERLAP,
		ARDUINO_EVENT_SC_SCAN_DONE,
		ARDUINO_EVENT_SC_FOUND_CHANNEL,
		ARDUINO_EVENT_SC_GOT_SSID_PSWD,
		ARDUINO_EVENT_SC_SEND_ACK_DONE,
		ARDUINO_EVENT_PROV_INIT,
		ARDUINO_EVENT_PROV_DEINIT,
		ARDUINO_EVENT_PROV_START,
		ARDUINO_EVENT_PROV_END,
		ARDUINO_EVENT_PROV_CRED_RECV,
		ARDUINO_EVENT_PROV_CRED_FAIL,
		ARDUINO_EVENT_PROV_CRED_SUCCESS,
		ARDUINO_EVENT_MAX
	} arduino_event_id_t;
#endif

typedef union{
    uint32_t ip;
    uint8_t bytes[4];
} converter;

struct WifiItem {
    char SSID[SSID_LENGHT];
	char PWD[PWD_LENGHT];
	char connectionName[CONNEXION_NAME_LENGHT];
	IPAddress ip;
	IPAddress dns;
	IPAddress gateway;
	IPAddress mask;
	bool dhcp;
};

class WifiManagment{
	public:
		WifiManagment(unsigned char _nbWifiItems, char *);
		unsigned char addItem(const char *ssid, const char *pwd); // Pour compatibilité seulement
		unsigned char addItem(const char *ssid, const char *pwd, const char* connexionName); // DHCP
		unsigned char addItem(const char *ssid, const char *pwd, const char* connexionName, IPAddress ip, IPAddress dns, IPAddress gateway, IPAddress mask, bool dhcp = true);
		char *wifiMapstoCharPtr(); // convert maps as char chain
		void parseCharsMap();  // parse the chain and populate map
		static WifiItem getNextNetwork();
		static bool connectWifi(WifiItem item);
		void displayRegistredNetworks();
		static void showIpAddress();
		static void printIPAddress(const char *name, IPAddress ip, bool ret = false);
		static void printWifiEvent(WiFiEvent_t event);
		unsigned char getNbWifiItems();
		void clearNbWifiItems();
		static void setWifiConnected(bool status);
		bool getWifiStatus();
		static void enableWifi(bool status);
		static bool isWifiEnabled();
		long getWifiStartupTime();
		static bool isWifiConnectionTimeout();
		bool modifycurrentWifiConnection(WifiItem item);
		std::map<unsigned char,WifiItem>::iterator findWifiItemByName(WifiItem myItem);
	
	
	private:
		static std::map<unsigned char, WifiItem> wifiItemsMap;
		
		static unsigned char nbWifiItems;
		static char currentNetworkId;
		char mapAsCharPtr[CHARS_SIZE];
		static bool wificonnected;
		static volatile bool wifiEnabled;
		static long wifiStartupTime;
	
};
#endif