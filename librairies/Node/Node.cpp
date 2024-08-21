#include "Node.h"
#include "BorneUniverselle.h"

PCF8574 *PF8574BooleanInputNode:: pcfRx;
bool PF8574BooleanInputNode:: isPCF8574_Initialised = false;
bool PF8574BooleanInputNode:: pcfError = false;

PCF8574 *PF8574BooleanOutputNode:: pcfTx;
bool PF8574BooleanOutputNode:: isPCF8574_Initialised = false;
bool PF8574BooleanOutputNode:: pcfError = false;

ModbusRTU *MyModbus:: modbus;
uint32_t MyModbus:: lastTransaction;
Modbus::ResultCode MyModbus:: lastEvent;
uint32_t MyModbus::lastProblem;

Node::Node(char *name, char *parentName, uint32_t _hash, uint16_t webRefreshInterval){
    //Serial.println("constructeur Node");
    setName(name, parentName);
    lastChange = millis();
    char text[256];
    sprintf(text, "%s%s", name, parentName);
    hash = (~crc32_le((uint32_t)~(0xffffffff), (const uint8_t*)text, strlen(text)))^0xffffffFF;
    if (_hash != hash){
        Serial.printf("CRC32 updated. Text: %s, new hash: %lu, old %lu\r\n", text, hash, _hash);
    }
    setWebUpdateInterval(webRefreshInterval);
    mode = DEFAULT_MODE;
}

bool Node::setName(char *_name, char *_parentName){
    if ((strlen(_name) + strlen(_parentName))< NAME_LENGHT){
        sprintf(name, "%s/%s", _parentName, _name);
    } else {
        char mess[1024];
        sprintf(mess,  "Node::setName name (or parent name) too long %s/%s", _parentName, _name);
        BorneUniverselle::prepareMessage(ERROR, mess);
        BorneUniverselle::setPlcBroken(mess);
        return false;
    } 

    return true;
}

char * Node::getName(){
    return name;
}

uint32_t Node::getHash(){
    return hash;
}

uint32_t Node::getLastChange(){
    return lastChange;
}

void Node::setChangeEvent(){
    lastChange = millis();
}

bool Node::getIsChanged(){
    return updateNeeded;
}

void Node::clearIsChanged(){
    updateNeeded = false;
}

uint8_t Node::getMode(){
    if (mode == DEFAULT_MODE){
        Serial.println("WARNING MODE WAS NOT SETTED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    return mode;
}

uint32_t Node::getWebUpdateInterval(){
    return webUpdateInterval;
}

uint32_t Node::getLastWebUpdate(){
    return lastWebUpdate;
}

void Node::setLastWebUpdate(uint32_t lastUpdate){
    lastWebUpdate = lastUpdate;
}

void Node::setWebUpdateInterval(uint16_t _interval){
    webUpdateInterval = _interval;
    // Serial.printf("Web refresh interval for node %s is %u\r\n", getName(), webUpdateInterval);
}

void Node::setMode(uint8_t _mode){
    //Serial.printf("Node::setMode for node: %s\r\n", getName());
    mode = _mode;
    char text[64];
    switch (mode){
        case DEFAULT_MODE: strcpy(text, "DEFAULT_MODE !!!!");
        break;

        case INPUT_MODE: strcpy(text, "INPUT_MODE");
        break;

        case OUTPUT_MODE: strcpy(text, "OUTPUT_MODE");
        break;

        default: strcpy(text, "NOT SETTED !!!!");
        break;
    }
    //Serial.printf("Node %s is a node: %s\r\n", getName(), text);
}

bool Node::setDescriptor(JsonDocument _descriptor){
#ifdef DESCRIPTOR_INCLUDED
    uint16_t docSize = measureJson(_descriptor);
    char *temp = (char *)malloc(docSize + 2);
    serializeJson(_descriptor, temp, docSize +2);
    temp[docSize] = 0;
    DeserializationError error = deserializeJson(descriptor, temp);
    if (error) {
        char buff[256];
        sprintf(buff, "parse descriptor for has node %lu: deserializeJson() failed: ", getHash());
        strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
        Serial.print(buff);
        return false;
    }

    if (descriptor.containsKey(ID)){
        descriptor.remove(ID);
    }

    /*
    Serial.printf("Descriptor for node %lu\r\n: \r\n", getHash());
    serializeJsonPretty(descriptor, Serial);
    Serial.println();
    */
#endif
    return true;
}


JsonDocument Node::getDescriptor(){
    return descriptor;
}

MyModbus::MyModbus(){
    lastTransaction = millis();
    lastEvent = Modbus::EX_SUCCESS;
}


void MyModbus::setModbus(ModbusRTU *_modbus){
    modbus = _modbus;
}

bool MyModbus::cbRead(Modbus::ResultCode event, uint16_t transactionId, void* data) { // Callback to monitor errors
    //Serial.printf("%u:: End cbRead for hash: %u\r\n", millis(), hash);
    lastTransaction = millis();
    MyModbus::printResultCode(event, transactionId);
    
    return true;
}

bool MyModbus::cbWrite(Modbus::ResultCode event, uint16_t transactionId, void* data){
    lastTransaction = millis();
    MyModbus::printResultCode(event, transactionId);
    return true;
}

Modbus::ResultCode MyModbus::getLastEvent(){
    return lastEvent;
}

void MyModbus::printResultCode(Modbus::ResultCode event, uint16_t transactionId){
    lastEvent = event;

    if (event == Modbus::EX_SUCCESS){
        return;
    }

    Serial.printf("\r\nTime between last modbus problem: %lu [s]!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n", (millis() - lastProblem)/1000);
    lastProblem = millis();

    char message[256];
    sprintf(message, "Modbus error: ");

    switch (event){
        case Modbus::EX_SUCCESS:  strcat(message, "Custom. No error");
        break;

        case Modbus::EX_ILLEGAL_FUNCTION: strcat(message, "Function Code not Supported");
        break;

        case Modbus::EX_ILLEGAL_ADDRESS:  strcat(message, "Output Address not exists");
        break;

        case Modbus::EX_ILLEGAL_VALUE:  strcat(message, "Output Value not in Range");
        break;

        case Modbus::EX_SLAVE_FAILURE:  strcat(message, "Slave or Master Device Fails to process request");
        break;

        case Modbus::EX_ACKNOWLEDGE:  strcat(message, "Not used, EX_ACKNOWLEDGE");
        break;

        case Modbus::EX_SLAVE_DEVICE_BUSY:strcat(message, "Not used, EX_SLAVE_DEVICE_BUSY");
        break;

        case Modbus::EX_MEMORY_PARITY_ERROR: strcat(message, "Not used, EX_MEMORY_PARITY_ERROR");
        break;

        case Modbus::EX_PATH_UNAVAILABLE: strcat(message, "Not used, EX_PATH_UNAVAILABLE");
        break;

        case Modbus::EX_DEVICE_FAILED_TO_RESPOND: strcat(message, "Not used, EX_DEVICE_FAILED_TO_RESPOND");
        break;

        case Modbus::EX_GENERAL_FAILURE:  strcat(message, "Custom. Unexpected master error");
        break;

        case Modbus::EX_DATA_MISMACH: strcat(message, "Custom. Inpud data size mismach");
        break;

        case Modbus::EX_UNEXPECTED_RESPONSE:  strcat(message, "Custom. Returned result doesn't mach transaction");
        break;

        case Modbus::EX_TIMEOUT: strcat(message, "Custom. Operation not finished within reasonable time");
        break;

        case Modbus::EX_CONNECTION_LOST: strcat(message, "Custom. Connection with device lost");
        break;

        case Modbus::EX_CANCEL: strcat(message, "Custom. Transaction/request canceled");
        break;

        case Modbus::EX_PASSTHROUGH:  strcat(message, "Custom. Raw callback. Indicate to normal processing on callback exit");
        break;

        case Modbus::EX_FORCE_PROCESS: strcat(message, "Custom. Raw callback. Indicate to force processing on callback exit");
        break;

        default:  strcat(message, "Unexpected event !!");
    }

    Serial.println(message);

    BorneUniverselle::prepareMessage(WARNING, message);
    // for ever...
    //Serial.printf("%u:: Planté avec une erreur Modbus !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r\n", millis());
    // while(1){}
}

void MyModbus::waitUntilModbusFree(){
    //uint32_t start = millis();
    while (millis() - lastTransaction < DELAY_TRANSACTION){
       // Serial.println("On attend");
        vTaskDelay(1);
    }
    //Serial.printf("Waiting time for free modbus: %u\r\n", millis() - start);
}

void MyModbus::waitEndTransaction(){
    uint32_t start = millis();
     while (modbus->slave()){
        modbus->task();
        vTaskDelay(1);
    }

    if (millis() - start > 100){
        Serial.printf("Waiting time for end of transaction: %lu\r\n", millis() - start);
    }
}

bool MyModbus::isModbusFree(){
    return (millis() - lastTransaction > DELAY_TRANSACTION);

}

InputNode:: InputNode(char *name, char *parentName, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): Node(name, parentName, hash, webRefreshInterval){
    //Serial.println("Constructeur de la classe InputNode");
    setMode(INPUT_MODE);
    setRefreshInterval(refreshInterval);
}

void InputNode::setRefreshInterval(uint16_t _interval){
    refreshInterval = _interval;
    //Serial.printf("InputNode::Refresh interval for node %s is %u\r\n", getName(), refreshInterval);
}

uint32_t InputNode::getRefreshInterval(){
    return refreshInterval;
}

uint32_t InputNode::getLastRefresh(){
    return lastRefresh;
}

void InputNode::setLastRefresh(uint32_t lastUpdate){
    lastRefresh = lastUpdate;
}

OutputNode:: OutputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval): Node(name, parentName, hash, webRefreshInterval){
    // Serial.printf("Constructeur de la classe OutputNode for node: %s\r\n", getName());
    setMode(OUTPUT_MODE);
    // Serial.printf("End of constructeur de la classe OutputNode for node: %s, mode: %u\r\n", getName(), getMode());
}

BooleanInputNode:: BooleanInputNode(char *name, char *parentName, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
    //Serial.println("Constructeur de la classe BooleanInputNode");
}

bool BooleanInputNode::refresh(){
    bool val = getNewValue();
    //Serial.printf("Input node: %s is %s, inverted: %s\r\n", name, val ? "true" : "false", inputInverted ? "true" : "false");
    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        if (val){
            Serial.printf("Input node: %s is up now\r\n", name);
            lastUp = lastChange;
            //Serial.printf("%u:: Node %s, last up\r\n", lastChange, getName());
        } else {
            lastDown = lastChange;
            //Serial.printf("%u:: Node %s, last down\r\n", lastChange, getName());
           Serial.printf("Input node: %s is down now\r\n", name);
        } 
        Serial.printf("%lu:: node: %s, new value: %s\r\n", millis(),  name, hideValue ? "true" : "false");   
    }
    return true;
}

bool BooleanInputNode::getValue(){
    return hideValue;
}

uint32_t BooleanInputNode::getLastDown(){
    return lastDown;
}

uint32_t BooleanInputNode::getLastUp(){
    return lastUp;
}

bool BooleanInputNode::isRisingEdge(){
    return hideValue && getIsChanged();
}

bool BooleanInputNode::isFallingEdge(){
    return !hideValue && getIsChanged();
}

bool BooleanInputNode::isUpFrom(uint32_t time){
    return hideValue && (millis() - lastChange > time);
}

bool BooleanInputNode::isDownFrom(uint32_t time){
    return !hideValue && (millis() - lastChange > time);
}  

BooleanOutputNode::BooleanOutputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval): OutputNode(name, parentName, hash, webRefreshInterval){
    // Serial.printf("Constructeur de la classe BooleanOutputNode for node %s\r\n", getName());
}

bool BooleanOutputNode:: refresh(){
    //Serial.printf("Refresh node %u\r\n", getHash());
    if (updateNeeded){
        if (!setNewValue(hideValue)){
            return false;
        }

        lastChange = millis();
        updateNeeded = false; 
        if (hideValue){
            lastUp = lastChange;
        } else {
            lastDown = lastChange;
        }

        //Serial.printf("%lu:: OutputNode::node: %s, new value: %s\r\n", millis(),  name, hideValue ? "up": "down");   
    }
    return true;
}

bool BooleanOutputNode::getValue(){
    return hideValue;
}

void BooleanOutputNode::setValue(bool _value){
    //Serial.println("BooleanOutputNode::setValue");
    if (_value != hideValue){
        //Serial.printf("Will set updateNeeded to true for node %s, new value: %s\r\n", getName(), _value ? "true" : "false");
        updateNeeded = true;
        hideValue = _value;
        //Serial.printf("Node %u: %s updated\r\n", getHash(), getName());
    } else {
        //Serial.printf("Node %u: %s no change\r\n", getHash(), getName());
    }
}

uint32_t BooleanOutputNode::getLastDown(){
    return lastDown;
}

uint32_t BooleanOutputNode::getLastUp(){
    return lastUp;
}


Uint16InputNode::Uint16InputNode(char *name, char *parentName, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
}

uint16_t Uint16InputNode::getValue(){
    return hideValue;
}

bool Uint16InputNode::refresh(){
    //Serial.printf("On refresh, intervale: %d, elapsed time: %u\r\n", refreshInterval, millis() - lastRefresh);
    uint16_t val = getNewValue();
    
    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: node: %s, new value: %u\r\n", millis(),  name, hideValue);   
    }
    return true;
}

Uint32InputNode::Uint32InputNode(char *name, char *parentName, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
}

uint32_t Uint32InputNode::getValue(){
    return hideValue;
}

bool Uint32InputNode::refresh(){
    uint32_t val = getNewValue();

    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: node: %s, new value: %lu\r\n", millis(),  name, hideValue);   
    }
    return true;
}

FloatInputNode::FloatInputNode(char *name, char *parentName, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
}

float FloatInputNode::getValue(){
    return hideValue;
}

bool FloatInputNode::refresh(){
    float val = getNewValue();

    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: node: %s, new value: %f\r\n", millis(),  name, hideValue);   
    }
    return true;
}

Uint16OutputNode::Uint16OutputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval): OutputNode(name, parentName, hash, webRefreshInterval){
}

bool Uint16OutputNode::refresh(){
    if (updateNeeded){
        if (!setNewValue(hideValue)){
            return false;
        }

        lastChange = millis();
        updateNeeded = false;
        Serial.printf("%lu:: Uint16OutputNode::node: %s, new value: %u\r\n", millis(),  name, hideValue);  
    } 
    return true;
}

uint16_t Uint16OutputNode::getValue(){
    return hideValue;
}

void Uint16OutputNode::setValue(uint16_t _value){
    if (_value != hideValue){
        updateNeeded = true;
        hideValue = _value;
    }
}

Uint32OutputNode::Uint32OutputNode(char *name, char *parentName, uint32_t hash,  uint16_t webRefreshInterval): OutputNode(name, parentName, hash,  webRefreshInterval){
}

bool Uint32OutputNode::refresh(){
    if (updateNeeded){
        if (!setNewValue(hideValue)){
           return false;
        }

        lastChange = millis();
        updateNeeded = false;
        Serial.printf("%lu:: Uint32OutputNode::node: %s, new value: %lu\r\n", millis(),  name, hideValue);     
    }
    return true;
}

void Uint32OutputNode::setValue(uint32_t _value){
    Serial.printf("Uint32OutputNode:: setValue for node: %s\r\n", getName());
    if (_value != hideValue){
        updateNeeded = true;
        hideValue = _value;
    }
}

uint32_t Uint32OutputNode::getValue(){
    return hideValue;
}

FloatOutputNode::FloatOutputNode(char *name, char *parentName, uint32_t hash,  uint16_t webRefreshInterval): OutputNode(name, parentName, hash,  webRefreshInterval){
}

bool FloatOutputNode::refresh(){
    if (updateNeeded){
        if (!setNewValue(hideValue)){
           return false;
        }

        lastChange = millis();
        updateNeeded = false;
        Serial.printf("%lu:: FloatOutputNode::node: %s, new value: %f\r\n", millis(),  name, hideValue);     
    }
    return true;
}

float FloatOutputNode::getValue(){
    return hideValue;
}

void FloatOutputNode::setValue(float _value){
    //Serial.printf("FloatOutputNode:: setValue for node: %s\r\n", getName());
    if (_value != hideValue){
        updateNeeded = true;
        hideValue = _value;
    }
}

HardwareBooleanInputNode::HardwareBooleanInputNode(char *name, char *parentName,  uint32_t hash, uint8_t _pin, bool _inputInverted, uint16_t refreshInterval, uint16_t webRefreshInterval): BooleanInputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
    //Serial.println("Constructeur de HardwareBoolanInputNode");
    pin = _pin;
    inputInverted = _inputInverted;
    Serial.printf("Pin %d will be set as input\r\n", pin);
    pinMode(pin, INPUT_PULLUP);
    //Serial.println("Fin du constructeur HardwareBooleanInputNode");
}

bool HardwareBooleanInputNode::getNewValue(){
    return inputInverted ? !digitalRead(pin) : digitalRead(pin);
}

bool PF8574BooleanInputNode::interruptFlag = false;
long PF8574BooleanInputNode::timeOfInterrupt;

PF8574BooleanInputNode::PF8574BooleanInputNode(char *name, char *parentName, uint32_t hash, uint8_t  i2cAddr, uint8_t _pin, uint16_t refreshInterval, uint16_t webRefreshInterval): BooleanInputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
    pin = _pin;
    if (!isPCF8574_Initialised){
        pcfRx = new PCF8574(i2cAddr);
        if (!pcfRx->begin()){
            BorneUniverselle::prepareMessage(ERROR, PFC_INIT_ERROR);
            BorneUniverselle::setPlcBroken(PFC_INIT_ERROR);
        }    
    }

     // add interrupt
    attachInterrupt(14, PF8574BooleanInputNode::interruptHandler, FALLING);
    //Serial.printf("PF8574BooleanInputNode::RefreshInterval for node %s is %u\r\n", getName(), refreshInterval);
}

void IRAM_ATTR PF8574BooleanInputNode::interruptHandler(){
    interruptFlag = true;
    timeOfInterrupt = millis();
   // int x = pcfRx->read8();
}

bool PF8574BooleanInputNode::isInterrupt(){
    return interruptFlag;
}

bool PF8574BooleanInputNode::getNewValue(){
    //Serial.printf("Node %s, pin %u, new state: %s\r\n", name, pin, hideValue? "true" : "false");
    return !pcfRx->read(pin); // Les entrées sont inversées !
}

ModbusReadCoilNode::ModbusReadCoilNode(char *name, char *parentName, uint32_t _hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval): BooleanInputNode(name, parentName, _hash, refreshInterval, webRefreshInterval){
    //Serial.printf("Constructor of ReadCoil, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset  = _offset;
}

bool ModbusReadCoilNode::getNewValue(){
    bool value;
   
    waitUntilModbusFree();

    modbus->readCoil(address, offset, &value, 1, cbRead);
    //Serial.printf("Transaction %u initiée\r\n", transactionId);
    waitEndTransaction();
    if (getLastEvent() != Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusReadCoilNode", address, offset);
        return hideValue;
    }
    //Serial.printf("Node %u, Valeur lue: %s\r\n", getHash(), value ? "true" : "false");
    return value;
}

ModbusReadHoldingRegister::ModbusReadHoldingRegister(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval): Uint16InputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
    Serial.printf("Constructor of ModbusReadHoldingRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

uint16_t ModbusReadHoldingRegister::getNewValue(){
    // Serial.printf("Node name: %s, type: %s, address: %d, register %d\r\n", name, "ModbusReadHoldingRegister", address, offset);
    uint16_t value;
   
    waitUntilModbusFree();
    //Serial.printf("Will read Holding register at address: %u for node name: %s, hash %u, register %u\r\n", address, getName(), getHash(), offset);

    //Serial.printf("%u:: Start transaction for hash: %u, name: %s, address: %u, offset: %u\r\n", millis(), getHash(), getName(), address, offset);
    modbus->readHreg(address, offset, &value, 1, cbRead);
    waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    if (getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusReadHoldingRegister", address, offset);
        return hideValue;
    }
    //Serial.printf("Node %s, Valeur lue: %u\r\n", getName(), value);
    return value;
}

ModbusReadDoubleHoldingRegisters::ModbusReadDoubleHoldingRegisters(char *name, char *parentName, uint32_t _hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval): Uint32InputNode(name, parentName, _hash, refreshInterval, webRefreshInterval){
    // Serial.printf("Constructor of ModbusReadDobbleRegisters, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset  = _offset;
}

uint32_t ModbusReadDoubleHoldingRegisters::getNewValue(){
    uint16_t value[2];
    uint32_t uint32Value;
    
    waitUntilModbusFree();
 
    modbus->readHreg(address, offset, value, 2, cbRead);
    waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    if (getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusReadDoubleHoldingRegisters", address, offset);
        return hideValue;
    }

    uint32Value = value[1];
    uint32Value = uint32Value << 16;
    uint32Value += value[0];
    //Serial.printf("Node %s, Valeur lue 1er registre: %u, valeur lue 2eme registre: %u, valeur lue comme uin32: %u, valeur lue comme int32: %d\r\n", getName(), value[0], value[1], uint32Value, (int)uint32Value);
    return uint32Value;
}

ModbusReadInputRegister::ModbusReadInputRegister(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval): Uint16InputNode(name, parentName, hash, refreshInterval, webRefreshInterval){
    // Serial.printf("Constructor of ModbusReadInputRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

uint16_t ModbusReadInputRegister::getNewValue(){
    uint16_t value;
   
    waitUntilModbusFree();

    modbus->readIreg(address, offset, &value, 1, cbWrite);
    //Serial.printf("Transaction initiée for node %s\r\n", getName());
    waitEndTransaction();

    if (getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusReadInputRegister", address, offset);
        return hideValue;
    }

    //Serial.printf("Node name: %s, hash: %lu, addresse: %u, offset: %u, valeur lue: %u\r\n", getName(), getHash(), address, offset, value);
    return value;
}

HardwareBooleanOutputNode::HardwareBooleanOutputNode(char *name, char *parentName,  uint32_t hash, uint8_t _pin, uint16_t webRefreshInterval): BooleanOutputNode(name, parentName, hash, webRefreshInterval){
    //Serial.printf("Constructeur de HardwareBoolanOutputNode, hash: %u\r\n", hash);
    pin = _pin;
    Serial.printf("Will set pin %d as output\r\n", pin);
    pinMode(pin, OUTPUT);
}

bool HardwareBooleanOutputNode::setNewValue(bool newValue){
    //Serial.printf("Will set pin %d to new value: %s\r\n", pin, newValue ? "true": "false");
    digitalWrite(pin, newValue);
    return true;
}

PF8574BooleanOutputNode::PF8574BooleanOutputNode(char *name, char *parentName, uint32_t hash, uint8_t  i2cAddr, uint8_t _pin, uint16_t webRefreshInterval): BooleanOutputNode(name, parentName, hash, webRefreshInterval){
   // Serial.printf("Constructeur de la classe PF8574BooleanOutputNode, hash: %u\r\n", hash);
    pin = _pin;
    if (!isPCF8574_Initialised){
        pcfTx = new PCF8574(i2cAddr);
        if (!pcfTx->begin()){
            BorneUniverselle::prepareMessage(ERROR, PFC_INIT_ERROR);
            BorneUniverselle::setPlcBroken(PFC_INIT_ERROR);
        }
    }
    // Serial.println("Fin du constructeur de la classe PF8574BooleanOutputNode");
}

bool PF8574BooleanOutputNode::setNewValue(bool newValue){
    //Serial.printf("PF8574BooleanOutputNode::setNewValue, new value: %s\r\n", newValue ? "true": "false");
    pcfTx->write(pin, !newValue); // sorties inversées !
    return true;
}

ModbusWriteCoilNode::ModbusWriteCoilNode(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t webRefreshInterval): BooleanOutputNode(name, parentName, hash, webRefreshInterval){
    // Serial.printf("Constructor of WriteCoil, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusWriteCoilNode::setNewValue(bool newValue){
    waitUntilModbusFree();
    
    modbus->writeCoil(address, offset, newValue, cbWrite);
    //Serial.printf("Transaction %u initiée\r\n", transactionId);
    waitEndTransaction();

    if (getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusWriteCoilNode", address, offset);
        return false;
    }
    return true;
}                                                                                                                                                                                      
                            
ModbusWriteMultipleCoilslNode::ModbusWriteMultipleCoilslNode(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset, uint8_t _nbValues, uint16_t webRefreshInterval): OutputNode(name, parentName, hash, webRefreshInterval){
    address = _address;
    offset = _offset;
    nbValues = _nbValues;
    //Serial.printf("ModbusWriteMultipleCoilslNode:: constructor nbValues: %d\r\n", nbValues);
    values = new bool(nbValues);
    hideValues = new bool(nbValues);

    for (uint8_t i = 0; i < nbValues; i++){
        values[i] = false;
        hideValues[i] = false;
    }
}

bool ModbusWriteMultipleCoilslNode::refresh(){
    if (updateNeeded){
        if (!setNewValues()){
            return false;
        }

        lastChange = millis();
        updateNeeded = false;      
    }

    return true;
}

uint8_t ModbusWriteMultipleCoilslNode::getNbValues(){
    return nbValues;
}

bool ModbusWriteMultipleCoilslNode::getValue(uint8_t id){
    return values[id];
}

bool ModbusWriteMultipleCoilslNode::setNewValues(){
    for (uint8_t i = 0; i < nbValues; i++){
        values[i] = hideValues[i];
    }

    waitUntilModbusFree(); 
    modbus->writeCoil(address, offset, values, nbValues, cbWrite);
    waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    if (getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusWriteHoldingRegister", address, offset);
        return false;
    }
    return true;
}

bool ModbusWriteMultipleCoilslNode::setValue(bool val, uint8_t id){
    if (id < nbValues){
        if (val != hideValues[id]){
            hideValues[id] = val;
            updateNeeded = true;
            Serial.printf("For node %s, will set bit %d to %s\r\n", getName(), id, val ? "true": "false");
        }
    } else {
        Serial.printf("ModbusWriteMultipleCoilslNode::setValue: Warning nb values < id !, nbValues: %d\r\n", nbValues);
        return false;
    }
    return true;
}

bool ModbusWriteMultipleCoilslNode::setValues(bool *vals, uint8_t _nbValues){
    if (_nbValues < nbValues){
        for (uint8_t i = 0; i < _nbValues; i++){
            if (vals[i] != hideValues[i]){
                hideValues[i] = vals[i];
                Serial.printf("For node %s, will set bit %d to %s\r\n", getName(), i, vals[i] ? "true": "false");
                updateNeeded = true;
            }
        }
    } else {
        Serial.printf("ModbusWriteMultipleCoilslNode::setValues: Warning nb values < id !, nbValues. %d\r\n", nbValues); 
        return false;
    }
    return true;
}

ModbusReadMultipleInputsRegistersNode::ModbusReadMultipleInputsRegistersNode(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset, uint8_t _nbValues, uint16_t refreshInterval,  uint16_t webRefreshInterval): InputNode(name, parentName, hash, refreshInterval, webRefreshInterval) {
    address = _address;
    offset = _offset;
    nbValues = _nbValues;
    
    bits = new Bit[nbValues];
}

bool ModbusReadMultipleInputsRegistersNode::refresh(){
    getNewValues();
    return true;
}

ModbusReadMultipleInputsRegistersNode::Bit *ModbusReadMultipleInputsRegistersNode::getNewValues(){
    waitUntilModbusFree();
    bool *values = new bool[nbValues];

    modbus->readIsts(address, offset, values, nbValues, cbRead);
 
    waitEndTransaction();
    if (getLastEvent() != Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusReadCoilNode", address, offset);
    }

    for (uint8_t i = 0; i < nbValues; i++){
        // Serial.printf("%lu:: bit: %d\r\n", millis(), i);
        if (values[i] != bits[i].getValue()){
            updateNeeded = true;
            lastChange = millis();
            Serial.printf("Node: %s, bit %d as changed, now %s\r\n", getName(), i, values[i] ? "true" : "false");
        }
        bits[i].setValue(values[i]); // copy new values
    }
  
    delete [] values;
    return bits;
}

ModbusWriteHoldingRegister::ModbusWriteHoldingRegister(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t webRefreshInterval): Uint16OutputNode(name, parentName, hash, webRefreshInterval){
    // Serial.printf("Constructor of ModbusWriteHoldingRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusWriteHoldingRegister::setNewValue(uint16_t newValue){
    waitUntilModbusFree();

    //Serial.printf("%u:: Start transaction for hash: %u\r\n", millis(), getHash());
    modbus->writeHreg(address, offset, newValue, cbWrite);
    waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    if (getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusWriteHoldingRegister", address, offset);
        return false;
    }
    return true;
}

ModbusWriteDoubleHoldingRegister::ModbusWriteDoubleHoldingRegister(char *name, char *parentName, uint32_t hash, uint16_t _address, uint16_t _offset,  uint16_t webRefreshInterval): Uint32OutputNode(name, parentName, hash, webRefreshInterval){
    // Serial.printf("Constructor of ModbusWriteDobbleHoldingRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusWriteDoubleHoldingRegister::setNewValue(uint32_t newValue){
    waitUntilModbusFree();

    //Serial.printf("Received value: %u or value 0x%08x\r\n", newValue, newValue);

    uint16_t values[2];
    values[1] = newValue >> 16;
    values[0] = newValue & 0x0000FFFF;

    //Serial.printf("Value 1: 0x%08X\r\n", values[1]);
    //Serial.printf("Value 0:0x%08X\r\n", values[0]);

    //Serial.printf("%u:: Start transaction for hash: %u\r\n", millis(), getHash());
    modbus->writeHreg(address, offset, values, 2, cbWrite);
    waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    //Serial.printf("Transaction %u initiée\r\n", transactionId);
    if (getLastEvent() !=  Modbus::EX_SUCCESS){
       Serial.printf("Node name: %s, type: %s, address: %d, register %d. Because of transaction error, return hideValue\r\n\r\n", name, "ModbusWriteDoubleHoldingRegister", address, offset);
        return false;
    }
    return true;  
}

VirtualBooleanInputNode::VirtualBooleanInputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval):BooleanInputNode(name, parentName, hash, 0, webRefreshInterval){

}

void VirtualBooleanInputNode::setValue(bool _value){
    if (hideValue != _value){
        updateNeeded = true;
    }
    newValue = _value;
}

VirtualUint32InputNode::VirtualUint32InputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval):Uint32InputNode(name, parentName, hash, 0, webRefreshInterval){

}

void VirtualUint32InputNode::setValue(uint32_t _value){
    if (hideValue != _value){
        updateNeeded = true;
    }
    newValue = _value;
}

VirtualFloatInputNode::VirtualFloatInputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval):FloatInputNode(name, parentName, hash, 0, webRefreshInterval){

}

void VirtualFloatInputNode::setValue(float _value){
    if (hideValue != _value){
        updateNeeded = true;
    }
    newValue = _value;
}


VirtualBooleanOutputNode::VirtualBooleanOutputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval):BooleanOutputNode(name, parentName, hash, webRefreshInterval){

}

VirtualUint32OutputNode::VirtualUint32OutputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval):Uint32OutputNode(name, parentName, hash, webRefreshInterval){
}

VirtualFloatOutputNode::VirtualFloatOutputNode(char *name, char *parentName, uint32_t hash, uint16_t webRefreshInterval):FloatOutputNode(name, parentName, hash, webRefreshInterval){
}
