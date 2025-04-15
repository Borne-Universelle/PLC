#include "Node/Node.h"

PCF8574 *PF8574BooleanInputNode:: pcfRx;
bool PF8574BooleanInputNode:: isPCF8574_Initialised = false;
bool PF8574BooleanInputNode:: pcfError = false;

PCF8574 *PF8574BooleanOutputNode:: pcfTx;
bool PF8574BooleanOutputNode:: isPCF8574_Initialised = false;
bool PF8574BooleanOutputNode:: pcfError = false;

Node::Node(char *name, char *parentName, uint16_t id,  uint32_t _hash, uint16_t webRefreshInterval){
    //Serial.println("constructeur Node");
    setName(name, parentName);
    lastChange = millis();
    char text[256];
    sprintf(text, "%d%s", id, parentName);
    hash = (~crc32_le((uint32_t)~(0xffffffff), (const uint8_t*)text, strlen(text)))^0xffffffFF;
    if (_hash != hash){
        Serial.printf("CRC32 updated. Text: %s, new hash: %lu, old %lu\r\n", text, (unsigned long)hash, (unsigned long)_hash);
    }
    setWebUpdateInterval(webRefreshInterval);
    mode = DEFAULT_MODE;
}

bool Node::setName(const char *_name, const char *_parentName){
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

void Node::setShowMessages(bool _showMessage){
    Serial.printf("Node:: show messages: %s for node: %s\r\n", _showMessage ? "true" : "false", getName());
    isShowMessage = _showMessage;
}

uint32_t Node::getHash(){
    if(isnan(hash)){
        Serial.printf("WARNING ! the node: %s is not initialised !!!!!!\r\n", name);
        BorneUniverselle::setPlcBroken(HASH_NOT_FOUND);
        return 0;
    }
    return hash;
}

uint32_t Node::getLastChange(){
    return lastChange;
}

uint32_t Node::getLastRefresh() {
     return lastRefresh; 
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

void Node::showMessage(const char *text){
    if (isShowMessage){
        Serial.printf("%lu:: %s\r\n", millis(), text);
    }
}  

bool Node::refresh(){
    uint32_t startTime = millis();
    if (tempDisabled) {
        // Vérifier si la période de désactivation est terminée
        if (millis() - disabledTime >= disableDuration) {
            tempDisabled = false;
            Serial.printf("%lu:: Réactivation du nœud %s après %lu ms de désactivation\n", (long unsigned int)millis(), getName(), (long unsigned int)disableDuration);
            
            // Réinitialiser le compteur d'erreurs avec une valeur non nulle
            // pour garder une "mémoire" des problèmes précédents
            consecutiveErrors = 1;
        } else {
            // Le nœud est toujours désactivé
            return true; // Simuler une réussite pour ne pas bloquer le système
        }
    }
    
    // Logique de rafraîchissement normale
    bool success = specificRefresh();
    
    if (!success) {
        char buff[256];
        consecutiveErrors++;
        snprintf(buff, 256, "%lu:: Nœud %s: erreur %d consécutive(s)\n", millis(), getName(), consecutiveErrors);
        showMessage(buff);
        
        // Désactiver temporairement après plusieurs erreurs consécutives
        if (consecutiveErrors >= 5) {
            tempDisabled = true;
            disabledTime = millis();
            
            // Stratégie de backoff exponentiel : doubler le temps de désactivation
            // à chaque série d'erreurs, mais plafonner à maxDisableDuration
            disableDuration = min(disableDuration * 2, maxDisableDuration);
            snprintf(buff, 256, "Désactivation temporaire du nœud %s pour %lu ms\n", getName(), (long unsigned int)disableDuration);
            BorneUniverselle::prepareMessage(ERROR, buff);
        }
        
        return false;
    } else {
        // Raffraichissement avec succès
        // Réduire progressivement le compteur d'erreurs en cas de succès
        if (consecutiveErrors > 0) {
            consecutiveErrors--;
        }
        
        // En cas de succès continu, réduire progressivement la durée de désactivation
        if (consecutiveErrors == 0 && disableDuration > 5000) {
            disableDuration /= 2;
        }

        setLastRefresh(millis());
        if (millis() - startTime > 150) {
            Serial.printf("%lu:: Node:: Refresh, warning: Long refresh time (%lu ms) for node %s\r\n", millis(), millis() - startTime, name);
        }
        
        return true;
    }
}

void Node::setLastRefresh(uint32_t lastUpdate){
    lastRefresh = lastUpdate;
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
        sprintf(buff, "parse descriptor for has node %lu: deserializeJson() failed: ", (long unsigned int)getHash());
        strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
        Serial.println(buff);
        return false;
    }

    if (!descriptor[ID].isNull()){
        descriptor.remove(ID);
    }

    //Serial.printf("Descriptor for node %lu\r\n: \r\n", (long unsigned int)getHash());
    //serializeJsonPretty(descriptor, Serial);
    //Serial.println();
    
#endif
    return true;
}


JsonDocument Node::getDescriptor(){
    return descriptor;
}

InputNode:: InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): Node(name, parentName, id, hash, webRefreshInterval){
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

OutputNode:: OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval): Node(name, parentName, id, hash, webRefreshInterval){
    // Serial.printf("Constructeur de la classe OutputNode for node: %s\r\n", getName());
    setMode(OUTPUT_MODE);
    // Serial.printf("End of constructeur de la classe OutputNode for node: %s, mode: %u\r\n", getName(), getMode());
}

BooleanInputNode:: BooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
    //Serial.println("Constructeur de la classe BooleanInputNode");
}

bool BooleanInputNode::specificRefresh(){
    showMessage( "specificRefresh for BooleanInputNode");
    bool val;
    bool succes = getNewValue(val);

    if (!succes){
        updateNeeded = false;
        return false;
    }
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
    return succes;
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

BooleanOutputNode::BooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval): OutputNode(name, parentName, id, hash, webRefreshInterval){
    // Serial.printf("Constructeur de la classe BooleanOutputNode for node %s\r\n", getName());
}

bool BooleanOutputNode:: specificRefresh(){
    showMessage("specificRefresh for BooleanOutputNode");
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
    //Serial.printf("BooleanOutputNode::setValue: %s\r\n", getName());
    if (_value != hideValue){
        Serial.printf("setValue: will update value for node %s, new value: %s, hash: %lu\r\n", getName(), _value ? "true" : "false", (unsigned long)getHash());
        updateNeeded = true;
        hideValue = _value;
       // Serial.printf("Node %s updated\r\n", getName());
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


Uint16InputNode::Uint16InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
}

uint16_t Uint16InputNode::getValue(){
    return hideValue;
}

bool Uint16InputNode::specificRefresh(){
    showMessage("specificRefresh for Uint16InputNode");

    uint16_t val;
    bool success = getNewValue(val);

    if (!success){
        updateNeeded = false;
        return false;
    }
    
    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: node: %s, new value: %u\r\n", millis(),  name, hideValue);   
    }
    return true;
}

Uint32InputNode::Uint32InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
}

uint32_t Uint32InputNode::getValue(){
    return hideValue;
}

bool Uint32InputNode::specificRefresh(){
    showMessage("specificRefresh for Uint32InputNode");
    uint32_t val;
    bool succes = getNewValue(val);
    if (!succes){
        updateNeeded = false;
        return false;
    }

    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: node: %s, new value: %lu\r\n", millis(),  name, (unsigned long)hideValue);   
    }
    return true;
}

FloatInputNode::FloatInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
}

float FloatInputNode::getValue(){
    return hideValue;
}

bool FloatInputNode::specificRefresh(){
    showMessage("specificRefresh for FloatInputNode");
    float val;
    bool succes = getNewValue(val);

    if (!succes){
        updateNeeded = false;
        return false;
    }

    if (val != hideValue){
        hideValue = val;
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: refresh FloatInputNode: %s, new value: %f\r\n", millis(),  name, hideValue);   
    }
    return true;
}

Uint16OutputNode::Uint16OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval): OutputNode(name, parentName, id, hash, webRefreshInterval){
}

bool Uint16OutputNode::specificRefresh(){
    showMessage("specificRefresh for Uint16OutputNode");
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
    Serial.printf("%lu::setValue for node: %s, with value: %u\r\n", (unsigned long)millis(), getName(), _value);
    if (_value != hideValue){
        updateNeeded = true;
        hideValue = _value;
    }
}

Uint32OutputNode::Uint32OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash,  uint16_t webRefreshInterval): OutputNode(name, parentName, id, hash,  webRefreshInterval){
}

bool Uint32OutputNode::specificRefresh(){
    showMessage("specificRefresh for Uint32OutputNode");
    if (updateNeeded){
        if (!setNewValue(hideValue)){
           return false;
        }

        lastChange = millis();
        updateNeeded = false;
        Serial.printf("%lu:: Uint32OutputNode::node: %s, new value: %lu\r\n", millis(),  name, (unsigned long)hideValue);     
    }
    return true;
}

void Uint32OutputNode::setValue(uint32_t _value){
    Serial.printf("%lu: %s: %lu\r\n", (long unsigned int)millis(), getName(), (long unsigned int)_value);
    if (_value != hideValue){
        updateNeeded = true;
        hideValue = _value;
    }
}

uint32_t Uint32OutputNode::getValue(){
    return hideValue;
}

FloatOutputNode::FloatOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash,  uint16_t webRefreshInterval): OutputNode(name, parentName, id, hash,  webRefreshInterval){
}

bool FloatOutputNode::specificRefresh(){
    showMessage("specificRefresh for FloatOutputNode");
    if (updateNeeded){
        if (!setNewValue(hideValue)){
           return false;
        }

        lastChange = millis();
        updateNeeded = false;
        // Serial.printf("%lu:: refresh (clear updateNeeded) FloatOutputNode::node: %s, new value: %f\r\n", millis(),  name, hideValue);     
    }
    return true;
}

float FloatOutputNode::getValue(){
    return hideValue;
}

void FloatOutputNode::setValue(float _value){
    Serial.printf("%lu::setValue for node: %s, with value: %.2f\r\n", (unsigned long)millis(), getName(), _value);
    if (_value != hideValue){
        updateNeeded = true;
        hideValue = _value;
    }
}

TextInputNode::TextInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval): InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
    hideValue[0] = 0;
}

char * TextInputNode::getValue(){
    Serial.printf("TextInputNode::getValue() hideValue: %s\r\n", hideValue);
    return hideValue;
}

bool TextInputNode::specificRefresh(){
    showMessage("specificRefresh for TextInputNode");
    char *val = (char *)malloc(MAX_TEXT_SIZE);
    bool succes = getNewValue(val);
    //Serial.printf("Refresh: getNewValue: %s\r\n", val);
    if (!succes){
        updateNeeded = false;
        return false;
    }

    if (strcmp(val, hideValue)){
        Serial.println("Refresh: value is different");
        strcpy(hideValue, val);
        updateNeeded = true;
        lastChange = millis();
        Serial.printf("%lu:: node: %s, new value: %s\r\n", millis(),  name, hideValue);   
    }
    return true;
}

TextOutputNode::TextOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash,  uint16_t webRefreshInterval): OutputNode(name, parentName, id, hash,  webRefreshInterval){
    hideValue[0] = 0;
}

bool TextOutputNode::specificRefresh(){
    showMessage("specificRefresh for TextOutputNode");
    if (updateNeeded){
        if (!setNewValue(hideValue)){
           return false;
        }

        lastChange = millis();
        updateNeeded = false;
        //Serial.printf("%lu:: TextOutputNode::node: %s, new value: %s\r\n", millis(),  name, hideValue);     
    }
    return true;
}

char * TextOutputNode::getValue(){
    return hideValue;
}

void TextOutputNode::setValue(const char * _value){
    Serial.printf("%lu::setValue for node: %s, with value: %s\r\n", (unsigned long)millis(), getName(), _value);
    if (strcmp(_value, hideValue)){
        updateNeeded = true;
        strcpy(hideValue, _value);
    }
}

HardwareBooleanInputNode::HardwareBooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t _pin, bool _inputInverted, uint16_t refreshInterval, uint16_t webRefreshInterval): BooleanInputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
    //Serial.println("Constructeur de HardwareBoolanInputNode");
    pin = _pin;
    inputInverted = _inputInverted;
    Serial.printf("Pin %d will be set as input\r\n", pin);
    pinMode(pin, INPUT_PULLUP);
    //Serial.println("Fin du constructeur HardwareBooleanInputNode");
}

bool HardwareBooleanInputNode::getNewValue(bool& value){
    char text[256];
    sprintf(text, "HardwareBooleanInputNode::getNewValue() for node: %s, pin: %u, inverted: %s", name, pin, inputInverted ? "true" : "false");
    showMessage(text);
    value = inputInverted ? !digitalRead(pin) : digitalRead(pin);
    return true; // Pas d'erreur possible....
}

bool PF8574BooleanInputNode::interruptFlag = false;
long PF8574BooleanInputNode::timeOfInterrupt;

PF8574BooleanInputNode::PF8574BooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t  i2cAddr, uint8_t _pin, uint16_t refreshInterval, uint16_t webRefreshInterval): BooleanInputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval){
    pin = _pin;
    if (!isPCF8574_Initialised){
        pcfRx = new PCF8574(i2cAddr);
        if (!pcfRx->begin()){
            BorneUniverselle::setPlcBroken(PFC_INIT_ERROR); //THIERRY

        }    
    }

     // add interrupt
    attachInterrupt(14, PF8574BooleanInputNode::interruptHandler, FALLING); // Désactivé le 7 décembre pour test
    Serial.printf("PF8574BooleanInputNode::RefreshInterval for node %s is %u\r\n", getName(), refreshInterval);
}

void IRAM_ATTR PF8574BooleanInputNode::interruptHandler(){
    interruptFlag = true;
    timeOfInterrupt = millis();
   // int x = pcfRx->read8();
}

bool PF8574BooleanInputNode::isInterrupt(){
    return interruptFlag;
}

bool PF8574BooleanInputNode::getNewValue(bool& value){
    char text[256];
    sprintf(text, "PF8574BooleanInputNode::getNewValue() for node: %s, pin: %u", name, pin);
    value = !pcfRx->read(pin); // Les entrées sont inversées !
    return true; // Pas d'erreur possible....
}

ModbusReadCoilNode::ModbusReadCoilNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval, uint16_t webRefreshInterval):
    BooleanInputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval),  myModbus(MyModbus::getInstance()){  // Initialisation de notre membre myModbus

    // Initialisation des membres de la classe
    address = _address;
    offset = _offset;
   
    // Log pour debug
    Serial.printf("Constructor of ReadCoil, slave address: %u, register: %u\r\n", _address, _offset);
}

bool ModbusReadCoilNode::getNewValue(bool &value){
    char text[256];
    sprintf(text, "ModbusReadCoilNode:: getNewValue for node name: %s, address: %d, register %d", name, address, offset);
    showMessage(text);
   
    myModbus.waitUntilModbusFree();
    myModbus.getModbus()->readCoil(address, offset, &value, 1, MyModbus::cbRead);
    myModbus.waitEndTransaction();

    if (myModbus.getLastEvent() != Modbus::EX_SUCCESS) {
        Serial.printf("%lu::ModbusReadCoilNode::getNewValue for node: name: %s, address: %d, register %d. Transaction error, return hideValue\r\n", millis(), name, address, offset);
        return false; // erreur modbus
    }
    return true;    
}

ModbusReadHoldingRegister::ModbusReadHoldingRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval):
    Uint16InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval), myModbus(MyModbus::getInstance()){
    //Serial.printf("Constructor of ModbusReadHoldingRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusReadHoldingRegister::getNewValue(uint16_t& value){
    char text[256];
    sprintf(text, "ModbusReadHoldingRegister::getNewValue for node name: %s, address: %d, register %d", name, address, offset);
    showMessage(text);

    myModbus.waitUntilModbusFree();
    //Serial.printf("Will read Holding register at address: %u for node name: %s, hash %u, register %u\r\n", address, getName(), getHash(), offset);

    sprintf(text, "ModbusReadHoldingRegister::getNewValues, sart transaction for hash: %lu, name: %s, address: %u, offset: %u", (long unsigned int)getHash(), getName(), address, offset);
    showMessage(text);
    myModbus.getModbus()->readHreg(address, offset, &value, 1, MyModbus::cbRead);
    myModbus.waitEndTransaction();

    if (myModbus.getLastEvent() != Modbus::EX_SUCCESS) {
        Serial.printf("%lu:: ModbusReadHoldingRegister::getNewValue for node: name: %s, address: %d, register %d. Transaction error, return hideValue\r\n", millis(), name, address, offset);
        return false;
    }
    return true;
}

ModbusReadDoubleHoldingRegisters::ModbusReadDoubleHoldingRegisters(char *name, char *parentName, uint16_t id, uint32_t _hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval):
    Uint32InputNode(name, parentName, id, _hash, refreshInterval, webRefreshInterval), myModbus(MyModbus::getInstance()){
    // Serial.printf("Constructor of ModbusReadDobbleRegisters, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset  = _offset;
}

bool ModbusReadDoubleHoldingRegisters::getNewValue(uint32_t& uint32Value){
    uint16_t value[2];
    #define TEXT_SIZE   512
    char text[TEXT_SIZE];
    sprintf(text, "ModbusReadDoubleHoldingRegisters::getNewValue for node name: %s, address: %d, register %d", name, address, offset);
    showMessage(text);
   
    myModbus.waitUntilModbusFree();
    sprintf(text, "%lu:: Start transaction for hash: %lu, name: %s, address: %u, offset: %u\r\n", millis(), (long unsigned int)getHash(), getName(), address, offset);
    showMessage(text);
    myModbus.getModbus()->readHreg(address, offset, value, 2, MyModbus::cbRead);
    myModbus.waitEndTransaction();
    
    if (myModbus.getLastEvent() != Modbus::EX_SUCCESS) {
        snprintf(text, TEXT_SIZE, "%lu:: ModbusReadDoubleHoldingRegisters::getNewValue() for node name: %s, type: %s, address: %d, register %d. Transaction error, return hideValue\r\n", millis(), name, "ModbusReadDoubleHoldingRegisters", address, offset);
        showMessage(text);
        return false;
    }

    uint32Value = value[1];
    uint32Value = uint32Value << 16;
    uint32Value += value[0];
    //Serial.printf("Node %s, Valeur lue 1er registre: %u, valeur lue 2eme registre: %u, valeur lue comme uin32: %u, valeur lue comme int32: %d\r\n", getName(), value[0], value[1], uint32Value, (int)uint32Value);
    return true;
}

ModbusReadInputRegister::ModbusReadInputRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t refreshInterval,  uint16_t webRefreshInterval):
    Uint16InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval), myModbus(MyModbus::getInstance()){
    // Serial.printf("Constructor of ModbusReadInputRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusReadInputRegister::getNewValue(uint16_t& value){
    char text[256];
    sprintf(text, "ModbusReadInputRegister::getNewValue for node name: %s, address: %d, register %d", name, address, offset);
    showMessage(text);

    myModbus.waitUntilModbusFree();
    sprintf(text, "%lu:: ModbusReadInputRegister::getNewValue, start transaction for hash: %lu, name: %s, address: %u, offset: %u", millis(), (long unsigned int)getHash(), getName(), address, offset);
    showMessage(text);
    myModbus.getModbus()->readIreg(address, offset, &value, 1, myModbus.cbRead);
    // Serial.printf("Transaction initiée for node %s\r\n", getName());
    myModbus.waitEndTransaction();
    // Serial.printf("Transaction terminée for node %s\r\n", getName());

    if (myModbus.getLastEvent() != Modbus::EX_SUCCESS) {
        Serial.printf("ModbusReadInputRegister::getNewValue for node name: %s, address: %d, register %d. Transaction error, return hideValue\r\n\r\n", name, address, offset);
        return false;
    }

    // Serial.printf("Node name: %s, hash: %lu, addresse: %u, offset: %u, valeur lue: %u\r\n", getName(), getHash(), address, offset, value);
    return true;
}

HardwareBooleanOutputNode::HardwareBooleanOutputNode(char *name, char *parentName,  uint16_t id, uint32_t hash, uint8_t _pin, uint16_t webRefreshInterval): BooleanOutputNode(name, parentName, id, hash, webRefreshInterval){
    //Serial.printf("Constructeur de HardwareBoolanOutputNode, hash: %u\r\n", hash);
    pin = _pin;
    Serial.printf("Will set pin %d as output\r\n", pin);
    pinMode(pin, OUTPUT);
}

bool HardwareBooleanOutputNode::setNewValue(bool newValue){
    char text[256];
    sprintf(text, "HardwareBooleanOutputNode::setNewValue for node: %s, pin: %u, new value: %s", name, pin, newValue ? "true" : "false");
    showMessage(text);
    digitalWrite(pin, newValue);
    return true;
}

PF8574BooleanOutputNode::PF8574BooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t  i2cAddr, uint8_t _pin, uint16_t webRefreshInterval): BooleanOutputNode(name, parentName, id, hash, webRefreshInterval){
   // Serial.printf("Constructeur de la classe PF8574BooleanOutputNode, hash: %u\r\n", hash);
    pin = _pin;
    if (!isPCF8574_Initialised){
        pcfTx = new PCF8574(i2cAddr);
        if (!pcfTx->begin()){
            BorneUniverselle::setPlcBroken(PFC_INIT_ERROR);   // THIERRY
        }
    }
    // Serial.println("Fin du constructeur de la classe PF8574BooleanOutputNode");
}

bool PF8574BooleanOutputNode::setNewValue(bool newValue){
    char text[256];
    sprintf(text, "PF8574BooleanOutputNode::setNewValue for node: %s, pin: %u, new value: %s", name, pin, newValue ? "true" : "false"); 
    showMessage(text);
    pcfTx->write(pin, !newValue); // sorties inversées !
    return true;
}

ModbusWriteCoilNode::ModbusWriteCoilNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t webRefreshInterval):
    BooleanOutputNode(name, parentName, id, hash, webRefreshInterval), myModbus(MyModbus::getInstance()){
    // Serial.printf("Constructor of WriteCoil, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusWriteCoilNode::setNewValue(bool newValue){
    char text[256];
    sprintf(text, "ModbusWriteCoilNode::setNewValue for node: %s, address: %d, register %d, new value: %s", name, address, offset, newValue ? "true" : "false");
    showMessage(text);
    myModbus.waitUntilModbusFree();
    
    myModbus.getModbus()->writeCoil(address, offset, newValue, MyModbus::cbWrite);
    //Serial.printf("Transaction %u initiée\r\n", transactionId);
    myModbus.waitEndTransaction();

    if (myModbus.getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("%lu:: ModbusWriteCoilNode::setNewValue for node name: %s, type: %s, address: %d, register %d. Transaction error, return hideValue\r\n\r\n", millis(), name, "ModbusWriteCoilNode", address, offset);
        return false;
    }
    return true;
}                                                                                                                                                                                      
                            
ModbusWriteMultipleCoilslNode::ModbusWriteMultipleCoilslNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint8_t _nbValues, uint16_t webRefreshInterval):
    OutputNode(name, parentName, id, hash, webRefreshInterval), myModbus(MyModbus::getInstance()){
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

bool ModbusWriteMultipleCoilslNode::specificRefresh(){
    showMessage("specificRefresh for ModbusWriteMultipleCoilslNode");
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
    char text[256];
    sprintf(text, "ModbusWriteMultipleCoilslNode::setNewValues for node: %s, address: %d, register %d", name, address, offset);
    showMessage(text);

    for (uint8_t i = 0; i < nbValues; i++){
        values[i] = hideValues[i];
    }

    myModbus.waitUntilModbusFree(); 
    myModbus.getModbus()->writeCoil(address, offset, values, nbValues, myModbus.cbWrite);
    myModbus.waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    if (myModbus.getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("%lu:: ModbusWriteMultipleCoilslNode::setNewValues() for node name: %s, address: %d, register %d. Transaction error, return hideValue\r\n", millis(), name, address, offset);
        return false;
    }
    return true;
}

bool ModbusWriteMultipleCoilslNode::setValue(bool val, uint8_t id){
    if (id < nbValues){
        if (val != hideValues[id]){
            hideValues[id] = val;
            updateNeeded = true;
            Serial.printf("ModbusWriteMultipleCoilslNode::setValue, for node %s, will set bit %d to %s\r\n", getName(), id, val ? "true": "false");
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
                Serial.printf("ModbusWriteMultipleCoilslNode:setValuer,  for node %s, will set bit %d to %s\r\n", getName(), i, vals[i] ? "true": "false");
                updateNeeded = true;
            }
        }
    } else {
        Serial.printf("ModbusWriteMultipleCoilslNode::setValues: Warning nb values < id !, nbValues. %d\r\n", nbValues); 
        return false;
    }
    return true;
}

ModbusReadMultipleInputsRegistersNode::ModbusReadMultipleInputsRegistersNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint8_t _nbValues, uint16_t refreshInterval,  uint16_t webRefreshInterval):
    InputNode(name, parentName, id, hash, refreshInterval, webRefreshInterval), myModbus(MyModbus::getInstance()) {
    address = _address;
    offset = _offset;
    nbValues = _nbValues;
    Serial.printf("ModbusReadMultipleInputsRegistersNode:: constructor, nbValues: %d\r\n", nbValues);
    
    bits = new Bit[nbValues];
}

bool ModbusReadMultipleInputsRegistersNode::specificRefresh(){
    char text[256];
    sprintf(text, "ModbusReadMultipleInputsRegistersNode::specificRefresh for node: name: %s, address: %d, register %d", name, address, offset);
    showMessage(text);
    bool *values = new bool[nbValues];
    bool succes = getNewValues(values);
    if (!succes){
        updateNeeded = false;
        return false;
    }

    for (uint8_t i = 0; i < nbValues; i++){
        if (values[i] != bits[i].getValue()){
            updateNeeded = true;
            lastChange = millis(); // il y a aussi un lastChange pour chaque bit
            Serial.printf("Node: %s, bit %d as changed, now %s\r\n", getName(), i, values[i] ? "true" : "false");
            bits[i].setValue(values[i]); // copy new values
        } 
    }
    return true;
}

 bool ModbusReadMultipleInputsRegistersNode::getNewValues(bool values[]){
    char text[256];
    sprintf(text, "%lu:: ModbusReadMultipleInputsRegistersNode::Bit *ModbusReadMultipleInputsRegistersNode::getNewValues for node name: %s, address: %d, register %d", millis(), name, address, offset);
    showMessage(text);
    
    myModbus.waitUntilModbusFree();
    

    myModbus.getModbus()->readIsts(address, offset, values, nbValues, myModbus.cbRead);
 
    myModbus.waitEndTransaction();
    if (myModbus.getLastEvent() != Modbus::EX_SUCCESS){
        Serial.printf("ModbusReadMultipleInputsRegistersNode::Bit *ModbusReadMultipleInputsRegistersNode::getNewValues for node name: %s, address: %d, register %d. Transaction error, return hideValue\r\n\r\n", name, address, offset);
        return false; // return old values
    }

    for (uint8_t i = 0; i < nbValues; i++){
        // Serial.printf("%lu:: bit: %d\r\n", millis(), i);
        if (values[i] != bits[i].getValue()){
            updateNeeded = true;
            lastChange = millis();
            Serial.printf("Node: %s, bit %d as changed, now %s\r\n", getName(), i, values[i] ? "true" : "false");
            bits[i].setValue(values[i]); // copy new values
        } 
    }
    return true;
}

ModbusWriteHoldingRegister::ModbusWriteHoldingRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset, uint16_t webRefreshInterval):
    Uint16OutputNode(name, parentName, id, hash, webRefreshInterval), myModbus(MyModbus::getInstance()){
    // Serial.printf("Constructor of ModbusWriteHoldingRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusWriteHoldingRegister::setNewValue(uint16_t newValue){
    char text[200]; // Adjust size as needed
    sprintf(text, "ModbusWriteHoldingRegister::setNewValue,  value: %d, address: %d, register: %d", newValue, address, offset); // Adjust fields as needed
    showMessage(text);
    myModbus.waitUntilModbusFree();

    //Serial.printf("%u:: Start transaction for hash: %u\r\n", millis(), getHash());
    myModbus.getModbus()->writeHreg(address, offset, newValue, myModbus.cbWrite);
    myModbus.waitEndTransaction();
    //Serial.printf("%u:: End transaction for hash: %u\r\n", millis(), getHash());
    if (myModbus.getLastEvent() !=  Modbus::EX_SUCCESS){
        Serial.printf("%lu:: ModbusWriteHoldingRegister::setNewValue for node name: %s, address: %d, register %d. Transaction error, return hideValue\r\n\r\n", millis(), name, address, offset);
        return false;
    }
    return true;
}

ModbusWriteDoubleHoldingRegister::ModbusWriteDoubleHoldingRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t _address, uint16_t _offset,  uint16_t webRefreshInterval):
    Uint32OutputNode(name, parentName, id, hash, webRefreshInterval), myModbus(MyModbus::getInstance()){
    // Serial.printf("Constructor of ModbusWriteDobbleHoldingRegister, slave addresse: %u, offset: %u\r\n", _address, _offset);
    address = _address;
    offset = _offset;
}

bool ModbusWriteDoubleHoldingRegister::setNewValue(uint32_t newValue){
    char text[200]; // Adjust size as needed
    sprintf(text, "%lu:: ModbusWriteHoldingRegister::setNewValue,  value: %lu, address: %d, register: %d", millis(), (long unsigned int)newValue, address, offset); // Adjust fields as needed
    showMessage(text);
    
    myModbus.waitUntilModbusFree();

    uint16_t values[2];
    values[1] = newValue >> 16;
    values[0] = newValue & 0x0000FFFF;

    sprintf(text, "Value 1: 0x%08X, value 0: 0x%08x\r\n", values[1], values[0]);
    showMessage(text);
    myModbus.getModbus()->writeHreg(address, offset, values, 2, myModbus.cbWrite);
    myModbus.waitEndTransaction();
  
    if (myModbus.getLastEvent() !=  Modbus::EX_SUCCESS){
       Serial.printf("%lu:: ModbusWriteDoubleHoldingRegister::setNewValue for node name: %s, address: %d, register %d. Transaction error, return hideValue\r\n\r\n", millis(), name, address, offset);
        return false;
    }
    return true;  
}

VirtualBooleanInputNode::VirtualBooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):BooleanInputNode(name, parentName, id, hash, 0, webRefreshInterval){

}

void VirtualBooleanInputNode::setValue(bool _value){
    if (hideValue != _value){
        updateNeeded = true;
        hideValue = _value;
    }
 
}

VirtualUint32InputNode::VirtualUint32InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):Uint32InputNode(name, parentName, id, hash, 0, webRefreshInterval){

}

void VirtualUint32InputNode::setValue(uint32_t _value){
    if (hideValue != _value){
        updateNeeded = true;
        hideValue = _value;
    }
}

VirtualFloatInputNode::VirtualFloatInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):FloatInputNode(name, parentName, id, hash, 0, webRefreshInterval){

}

void VirtualFloatInputNode::setValue(float _value){
    if (hideValue != _value){
        hideValue = _value;
        updateNeeded = true;
        //Serial.printf("VirtualFloatInputNode::setValue:: %.2f\r\n", _value);
    }
}


VirtualBooleanOutputNode::VirtualBooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):BooleanOutputNode(name, parentName, id, hash, webRefreshInterval){
}

VirtualUint32OutputNode::VirtualUint32OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):Uint32OutputNode(name, parentName, id, hash, webRefreshInterval){
}

VirtualFloatOutputNode::VirtualFloatOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):FloatOutputNode(name, parentName, id, hash, webRefreshInterval){
}

VirtualTextInputNode::VirtualTextInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):TextInputNode(name, parentName, id, hash, 0, webRefreshInterval){
    hideValue[0] = 0;
}

void VirtualTextInputNode::setValue(const char *text){
    Serial.printf("%lu::VirtualTextInputNode::setValue for node %s, value: %s\r\n", (unsigned long)millis, getName(), text);
    if (strcmp(text, hideValue)){
        updateNeeded = true;
        strcpy(hideValue, text);
        //Serial.printf("%lu::VirtualTextInputNode::setValue for node %s\r\n", (unsigned long)millis(), getName());
    }
}

VirtualTextOutputNode::VirtualTextOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval):TextOutputNode(name, parentName, id, hash, webRefreshInterval){
}


