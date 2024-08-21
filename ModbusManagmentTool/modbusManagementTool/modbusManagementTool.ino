#include <ModbusRTU.h>
#include "MyToolBox.h"

#define MAIN_VERSION        "1.1"
#define BUZZER                2
#define DEFAULT_SPEED       9600
#define DEFAULT_DEVICE        1
#define OFFSET                0
#define RX_ADDR             32
#define TX_ADDR             33

struct Device{
    char name[80];
    unsigned int readRegister;  // registre a lire
    unsigned int readFunction;  // modbus read function: 1 read coil, 2 read input status, read holding register
    unsigned int nbRegistersToRead;
    unsigned int addressRegister;   // registre ou ce trouve l'adresse du module
    unsigned int readVersion;   // registre ou ce trouve la version du logiciel
    unsigned int speedRegister;  // pour modifier la vitesse de la communication série
    unsigned int writeRegister;
};

Device waveShare8DIO{"WaveShare 8 DI/DO", 0, 2, 8, 0x4000, 0x8000, 0x2000, 0};
#define WAVESHARE_8DIO  0
Device waveShare8AI {"Waveshare 8 AI",    0, 4, 8, 0x4000, 0x8000, 0x2000, 0};
#define WAVESHARE_8AI   1
Device devices[10];
unsigned int NB_DEVICES = 2;
unsigned int indexDevice;

MyToolBox toolbox;
ModbusRTU mb;
HardwareSerial *myRS485;
uint16_t address = 1, speed = DEFAULT_SPEED;
uint32_t serialConfig = SERIAL_8N1;
bool success = false;

void showHelp(){
  //toolbox.clearScreen();
  Serial.println("Help");
  Serial.println(F("-----------"));  
  const char compile_date[] = __DATE__ " " __TIME__;  
  Serial.printf("ModbusManagementTool %s, compile time: %s\r\n", MAIN_VERSION, compile_date);
  Serial.println(F("Tapez 'A': Selectionner le module à modifier")); 
  Serial.println(F("Tapez 'B': Selectionner la vitesse de la liaison série actuelle du moduel"));
  Serial.println(F("Tapez 'C': Selectionner la config série"));
  Serial.println(F("Tapez 'D': Entrer l'adresse actuelle du module"));
  Serial.println(F("Tapez 'E': Lecture des données"));
  Serial.println(F("Tapez 'F': Chercher l'adresse du module"));
  Serial.println(F("Tapez 'G': Lire la version du logiciel"));
  Serial.println(F("Tapez 'H': Écrire la nouvelle adresse du module"));
  Serial.println(F("Tapez 'I': Configurer les entrées analogiques"));
  Serial.println(F("Tapez 'J': Modifier la vitesse de la liaison série du module"));
  Serial.println(F("Tapez 'K': Écriture des données"));
  Serial.println(F("Tapez '?': Imprimer le help"));
}


void printResultCode (uint event){
  switch (event){
    case Modbus::EX_SUCCESS:  Serial.println("Custom. No error");
      break;

    case Modbus::EX_ILLEGAL_FUNCTION: Serial.println("Function Code not Supported");
      break;

    case Modbus::EX_ILLEGAL_ADDRESS:  Serial.println("Output Address not exists");
      break;

    case Modbus::EX_ILLEGAL_VALUE:  Serial.println("Output Value not in Range");
      break;

    case Modbus::EX_SLAVE_FAILURE:  Serial.println("Slave or Master Device Fails to process request");
      break;

    case Modbus::EX_ACKNOWLEDGE:  Serial.println("Not used, EX_ACKNOWLEDGE");
      break;

    case Modbus::EX_SLAVE_DEVICE_BUSY: Serial.println("Not used, EX_SLAVE_DEVICE_BUSY");
      break;

    case Modbus::EX_MEMORY_PARITY_ERROR: Serial.println("Not used, EX_MEMORY_PARITY_ERROR");
      break;

    case Modbus::EX_PATH_UNAVAILABLE: Serial.println("Not used, EX_PATH_UNAVAILABLE");
      break;

    case Modbus::EX_DEVICE_FAILED_TO_RESPOND: Serial.println("Not used, EX_DEVICE_FAILED_TO_RESPOND");
      break;

    case Modbus::EX_GENERAL_FAILURE:  Serial.println("Custom. Unexpected master error");
      break;

    case Modbus::EX_DATA_MISMACH: Serial.println("Custom. Inpud data size mismach");
      break;

    case Modbus::EX_UNEXPECTED_RESPONSE:  Serial.println("Custom. Returned result doesn't mach transaction");
      break;

    case Modbus::EX_TIMEOUT: Serial.println("Custom. Operation not finished within reasonable time");
      break;

    case Modbus::EX_CONNECTION_LOST: Serial.println("Custom. Connection with device lost");
      break;

    case Modbus::EX_CANCEL: Serial.println("Custom. Transaction/request canceled");
      break;

    case Modbus::EX_PASSTHROUGH:  Serial.println("Custom. Raw callback. Indicate to normal processing on callback exit");
      break;

    case Modbus::EX_FORCE_PROCESS: Serial.println("Custom. Raw callback. Indicate to force processing on callback exit");
      break;

    default:  Serial.println("Unexpected event !!");
  }
}

bool cbRead(Modbus::ResultCode event, uint16_t transactionId, void* data) { // Callback to monitor errors
  //Serial.println("cbRead");
  if (event != Modbus::EX_SUCCESS) {
    Serial.printf("Modbus error in transaction %d\r\n", transactionId);
    printResultCode(event);
    success = false;
  } else {
    //Serial.printf("Transaction %u succeed !\r\n", transactionId);
    success = true;
  }
  return true;
}

void readCoil(uint16_t address, uint16_t _register, bool *value, uint8_t nbRegs){
  while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }
  
  Serial.printf("Read coil, address: %u, register: %u, nb registers: %u\r\n", address, _register, nbRegs);
  mb.readCoil(address, _register, value, nbRegs, cbRead);
  long start = millis();
  while (mb.slave()){
    mb.task();
  }

  if (!success){
    return;
  }

  if (nbRegs == 1){
    Serial.printf("Valeur lue: %s, response time: %lu[ms]\r\n", value[0] ? "true": "false", millis() - start);
  } else {
    Serial.println("Valeurs luent: ");
    for (uint8_t i = 0; i < nbRegs; i++){
      Serial.printf("Input: %d, value %s\r\n", i, value[i] ? "true" : "false");
    }
  }
  Serial.println();
}

void writeCoil(uint16_t address, uint16_t _register, bool *values, uint8_t nbCoils){
  while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }

  Serial.printf("Write coils, address: %u, register: %u, nb coils: %u\r\n", address, _register, nbCoils);
  mb.writeCoil(address, _register, values, nbCoils, cbRead);
  long start = millis();
  while (mb.slave()){
    mb.task();
  }

  if (!success){
    return;
  } else {
    Serial.println("Write coils with success");
  }

  Serial.println(); 
}

void readHreg(uint16_t address, uint16_t _register, uint16_t *value, uint8_t nbRegs){
  while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }
  //Serial.printf("ReadHreg: addresse: %u, register: %u\r\n", address, _register);
  mb.readHreg(address, _register, value, nbRegs, cbRead);
  long start = millis();
  while (mb.slave()){
    mb.task();
  }

  if (!success){
    Serial.println("modbus error");
    return;
  }
  
  if (nbRegs == 1){
   Serial.printf("Valeur lue: %u\r\n",  value[0]);
  } else {
    Serial.printf("Valeur lue 1er registre: %0Xhex, valeur lue 2eme registre: %0Xhex, temps de réponse: %lu[ms]\r\n", value[0], value[1], millis() - start);
  }
}

void readIsts(uint16_t address, uint16_t _register, bool *value, uint8_t nbRegs){
  while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }
  Serial.printf("readIsts: addresse: %u, register: %u\r\n", address, _register);
  mb.readIsts(address, _register, value, nbRegs, cbRead);
  long start = millis();
  while (mb.slave()){
    mb.task();
  }

  if (!success){
    Serial.println("modbus error");
    return;
  }
  
  if (nbRegs == 1){
    Serial.printf("Valeur lue: %s, response time: %lu[ms]\r\n", value[0] ? "true": "false", millis() - start);
  } else {
    Serial.println("Valeurs luent: ");
    for (uint8_t i = 0; i < nbRegs; i++){
      Serial.printf("Input: %d, value %s\r\n", i, value[i] ? "true" : "false");
    }
  }
}
void writeHreg(uint16_t address, uint16_t _register, uint16_t value){
   while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }

  //Serial.printf("writeHreg, address: %u, register: %u\r\n", address, _register);
  mb.writeHreg(address, _register, value, cbRead);

  while (mb.slave()){
    mb.task();
  }

  if (!success){
    Serial.println("modbus error");
    return;
  }
}
void writeHreg(uint16_t address, uint16_t _register, uint16_t *value, uint8_t nbRegs){
   while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }

  Serial.printf("writeHreg, address: %u, register: %u, nb register: %u\r\n", address, _register, nbRegs);
  uint16_t val = 2;
  mb.writeHreg(address, _register, val);

  while (mb.slave()){
    mb.task();
  }

  if (!success){
    Serial.println("modbus error");
    return;
  }
}

void readIreg(uint16_t address, uint16_t _register, uint16_t *values, uint8_t nbRegs){
  while (mb.slave()){
    Serial.println("En train de traiter une transaction");
    mb.task();
  }
  Serial.printf("ReadIreg: addresse: %u, register: %u, nb reg: %u\r\n", address, _register, nbRegs);
  mb.readIreg(address, _register, values, nbRegs, cbRead);
 
  while (mb.slave()){
    mb.task();
  }

  if (!success){
    Serial.println("modbus error");
    return;
  }
  
  if (nbRegs == 1){
   Serial.printf("Valeur lue: %u\r\n",  values[0]);
  } else {
    for (unsigned int i = 0; i < nbRegs; i++){
      Serial.printf("Valeur entrée: %u: %u\r\n", i, values[i]);
    }
  }
}


void setup() {
  pinMode(BUZZER, OUTPUT);
  digitalWrite(BUZZER, false);
  Serial.begin(115200);
  while(!Serial){
   ;
  }
  delay(1000);

  devices[0] = waveShare8DIO;
  devices[1] = waveShare8AI;
  Serial.println("Starting ModbusManagerTool");
  
  myRS485 = new HardwareSerial(1);
  myRS485->begin(DEFAULT_SPEED, SERIAL_8N1, RX_ADDR, TX_ADDR); // 8 bits de data no parity 2 stop bit 9600 bps
  
  mb.begin(myRS485);
  mb.master();
  toolbox.emptySerialIn();

  showHelp();
}

void printSelectedDevice(){
  Serial.print("Le device sélectionné est: ");
  Serial.println(devices[indexDevice].name); 
}

void printSerialConfig(int index){
  switch (serialConfig){
    case SERIAL_8N1: Serial.println("8 bits no parity 1 stop bit");
    
    break;

    case SERIAL_8N2:    Serial.println("8 bits no parity 2 stop bits");
    break;

    case SERIAL_8E1:    Serial.println("8 bits parity even 1 stop bit");
    break;

    case SERIAL_8E2:   Serial.println("8 bits parity even 2 stop bits");
  }
}

void commandInterpretor(char car){
  switch (car){
    case 'A':     {
                    bool goodChoice = false;
                    while (!goodChoice){
                       Serial.println("\r\nSelectionnez le module approprié: ");
                       for (unsigned int i = 0; i < NB_DEVICES; i++){
                        Serial.printf("%i -> %s, \r\n", i, devices[i].name);
                       }
                       Serial.println();
                       indexDevice = toolbox.readDigitalValue();
                       if (indexDevice < NB_DEVICES){
                            goodChoice = true;
                       }
                    }
                    printSelectedDevice();
                  }
    break;
    case 'B':     {
                    bool goodChoice = false;
                    int index;
                    while (!goodChoice){
                      Serial.println("Quelle est la vitesse actuelle du module ? [0]: 4800, [1]: 9600, [2]: 19200, [3]: 38400, [4]: 57600");
                      index = toolbox.readDigitalValue();
                      if (index < 5){
                        goodChoice = true;
                      }
                
                      switch (index){
                        case 0: speed = 4800;
                        break;

                        case 1: speed = 9600;
                        break;

                        case 2: speed = 19200;
                        break;

                        case 3: speed = 38400;
                        break;

                        case 4: speed = 57600;
                        break;

                        default: Serial.println("Le choix de la vitesse n'est pas cohérant");
                      }
                    }    
                   
                    Serial.printf("La vitesse actuelle est désormais: %d\r\n", speed);
                 
                    myRS485->begin(speed, SERIAL_8N2, RX_ADDR, TX_ADDR); // 8 bits de data no parity 2 stop bit 9600 bps
                  }
      break;

    case 'C':     {
                    bool goodChoice = false;
                    int index;
                    while (!goodChoice){
                      Serial.println("Quelle est la config série actuelle: [1]: 8 bits no parity 1 stop bit, [2] 8 bits no parity 2 stop bits, [3]: 8 bits parity even 1 stop bits, [4]; 8 bits parity even, 2 stop bits ?");
                      index = toolbox.readDigitalValue();
                      if (index > 0 && index < 5){
                        goodChoice = true;
                      }
                
                      switch (index){
                        case 1: serialConfig = SERIAL_8N1;
                        break;

                        case 2: serialConfig = SERIAL_8N2;
                        break;

                        case 3: serialConfig = SERIAL_8E1;
                        break;

                        case 4: serialConfig = SERIAL_8E2;
                        break;

                        default: Serial.println("La config série est incohérente"); 
                      }
                   }
                   Serial.printf("La config série est: ");
                   printSerialConfig(index);
              }

     break;            

    case 'D':     {
                    bool goodChoice = false;
                    while (!goodChoice){
                      Serial.println("Quelle est l'adresse actuelle de la carte modbus ?");
                      address = MyToolBox::readDigitalValue();
                      if (address > 0 && address < 255){
                        goodChoice = true;
                      }
                    }
                      
                    Serial.printf("L'adresse actuelle de la carte modbus est: %d\r\n", address);
    break;
                  }

    case 'E':     {
                    Serial.printf("Lecture du (ou des)) registre(s) %d a l'adresse %d, à la vitesse %d \r\n", devices[indexDevice].readRegister, address, speed);
                    bool booleanValue[8];
                    uint16_t values[8];
                    uint32_t start = millis();
                    switch (devices[indexDevice].readFunction){ 
                        case 1: readCoil(address, devices[indexDevice].readRegister, booleanValue, devices[indexDevice].nbRegistersToRead);
                        break;

                        case 2: readIsts(address, devices[indexDevice].readRegister, booleanValue, devices[indexDevice].nbRegistersToRead);
                        break;

                        case 4: 
                                   for (unsigned int i = 0; i < 100; i++){
                                    readIreg(address, devices[indexDevice].readRegister, values, devices[indexDevice].nbRegistersToRead);
                                    Serial.printf("Address: %u, offset: %u, nbRegs: %u\r\n", address, devices[indexDevice].readRegister, devices[indexDevice].nbRegistersToRead);
                                   }
                        break;

                        default: Serial.printf("Unsupported read function: %u\r\n", devices[indexDevice].readFunction);
                    }  
                    if (success){
                      Serial.printf("Délais d'acquisition: %lu\r\n", millis() - start);
                    }
                }
    break;

    case 'F':   {
                  // La librairie ne fonctionne pas avec l'adresse broadcast
                  Serial.println("Trouver l'adresse du module. Il faudra faire un reset de l'ESP");
                  uint16_t value;
                  
                  for (unsigned int i = 1; i < 255; i++){
                    readHreg(i, devices[indexDevice].addressRegister, &value, 1);
                    if (success){
                      address = i;
                      Serial.printf("L'adresse selectionnée est maintenant la: %u\r\n", address);
                      break;
                    }
                  }
                }
    break;

    case 'G':     Serial.println("Lecture de la version du logiciel");
                  uint16_t value[2];
                  readHreg(address, devices[indexDevice].readVersion, value, 1);
    break;

    case 'H':     {
                    Serial.println("Saisir la nouvelle adresse du module");
                    uint16_t newAddress = MyToolBox::readDigitalValue();
                    Serial.printf("Voulez vous vraiment définir la nouvelle adresse a %d ? [Y/N]\r\n", newAddress);
                    if (MyToolBox::yes_or_no()){
                      writeHreg(address, devices[indexDevice].addressRegister, newAddress); 
                      address = newAddress;
                      Serial.printf("L'adresse selectionnée est maintenant la: %u\r\n", address);
                    } else {
                      Serial.println("Abandon");
                    }
                  }
    break;

    case 'I':     {
                    if (indexDevice == WAVESHARE_8DIO){
                      Serial.println("Rien a configurer pour le module WaveShare 8 DIO");
                      return;
                    }
                
                    Serial.println("Quelle entrée voulez vous modifier ? [0..8]");
                    uint16_t newRegister = MyToolBox::readDigitalValue() + 0x1000;
                    uint16_t value;
                    readHreg(address, newRegister, &value, 1);
                    Serial.println("Quelle valeur voulez vous mettre: 0 -> 0..5 V, 1 -> 1..5 V, 2 -> 0..20 mA, 3 -> 4..20 mA, 4 -> 0..4096");
                    uint8_t newValue = MyToolBox::readDigitalValue();
                    writeHreg(address, newRegister, newValue);
                    
                  }
    break;

    case 'J':     {
                    Serial.println("modification de la vitesse de communication");
                    Serial.println("Lecture de la vitesse actuelle");
                    uint16_t newSpeed;
                    readHreg(address, devices[indexDevice].speedRegister, &newSpeed, 1);
                    if (!success){
                      return;
                    }

                    Serial.println("Quelle vitesse voulez vous mettre: [0]: 4800, [1]: 9600, [2]: 19200, [3]: 38400, [4]: 57600");
                    newSpeed =  MyToolBox::readDigitalValue();
                    if (newSpeed < 5){
                      writeHreg(address, devices[indexDevice].speedRegister, newSpeed);
                      switch (newSpeed){
                        case 0:  myRS485->begin(4800, serialConfig, RX_ADDR, TX_ADDR); 
                          break;

                        case 1: myRS485->begin(9600, serialConfig, RX_ADDR, TX_ADDR); 
                          break;

                        case 2: myRS485->begin(19200, serialConfig, RX_ADDR, TX_ADDR); 
                          break;

                        case 3: myRS485->begin(38400, serialConfig, RX_ADDR, TX_ADDR); 
                          break;

                        case 4: myRS485->begin(57600, serialConfig, RX_ADDR, TX_ADDR); 
                          break;
                      }
                    }
                  }
    break;

    case 'K':     {
                     Serial.println("Écriture de données test");
                     if (indexDevice == WAVESHARE_8AI){
                        Serial.println("Rien a configurer pour le module WaveShare 8AI");
                        return;
                    }
                    const uint8_t NB_RELAIS = 8;
                    bool values[NB_RELAIS];
                    for (unsigned int i = 0; i < NB_RELAIS; i++){
                       values[i] = true;
                    }
                    Serial.println("On va coller tous les relais");
                    writeCoil(address, devices[indexDevice].writeRegister, values, NB_RELAIS);
                  }
    break;

    case '?':    showHelp();
    break;
                
    default:     Serial.println("La selection ne correspond a rien de cohérent, retente ta chance !!!");
                  break;
  }
}

void loop() {
  if (Serial.available()){
        commandInterpretor(Serial.read());
        toolbox.emptySerialIn();
        Serial.println();
        showHelp();
        
  }  
}
