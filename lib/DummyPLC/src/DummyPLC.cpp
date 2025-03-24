#include "DummyPLC/DummyPLC.h"

DummyPLC::DummyPLC(){
    //Physicals boolean outputs
    //buzzer = new BooleanOutputNode("buzzer", BUZZER);
    //servoOn = new BooleanOutputNode("servoOn", SERVO_ON);
    
    //Boolean inputs
    //eStopA = new BooleanInputNode("eStopA", E_STOP_A);
    
    //Multiples write
    //mesRelais = new ModbusWriteMultipleCoilslNode("mesRelais", MES_RELAIS);
    
    //Multiple inputs
    //logicalsInputs = new ModbusReadMultipleInputsRegistersNode("logicalsInputs", LOGICALS_INPUTS);

    // Boolean output
    txButtonHold = (BooleanOutputNode *)BorneUniverselle::findNode("Constructeur DummyPLC", TX_BUTTON_HOLD);
    recette = (VirtualTextOutputNode *)BorneUniverselle::findNode("Constructeur DummyPLC", RECETTE);
    
    //bit1 = logicalsInputs->addBit("bit1", 0);
    //bit2 = logicalsInputs->addBit("bit2", 1);
    //bit3 = logicalsInputs->addBit("bit3", 2);
    //bit4 = logicalsInputs->addBit("bit4", 3);
    //bit5 = logicalsInputs->addBit("bit5", 4);
    //bit6 = logicalsInputs->addBit("bit6", 5);
    //bit7 = logicalsInputs->addBit("bit7", 6);
    //bit8 = logicalsInputs->addBit("bit8", 7);
    
    //maPile = new ModbusReadInputRegister("maPile", MA_PILE);
    
    //time = millis();
   BorneUniverselle::setInitialStateLoadedCallback([this]() {
        // Ce code est executé lorsque le js envoie le signal InitialStateLoaded
        this->initialStateLoadedHandler();
    });

    recette->setDescriptorCallback([this]() -> JsonDocument {
        // Ce code est executé lorsque le PLC a besoin de la valeur de ce node. Attention le document ne doit contenir que le descripteur
        return this->getDropDownDescriptorHandler();
    });

}

JsonDocument DummyPLC::getDropDownDescriptorHandler(){
    Serial.println("getDropDownDescriptorHandler");
    JsonDocument doc;

    doc[VALUE] = "Bonbons";

    JsonArray items = doc["items"].to<JsonArray>();
    items.add("Chocolat");
    items.add("Framboise");
    items.add("Pomme");
    return doc;
}

bool DummyPLC::logiqueExecutor(){
    if (txButtonHold->getValue()){
        Serial.println("logiqueExecutor::Button");
        for (unsigned int i = 0; i < 10; i++){
            char buffer[256];
            sprintf(buffer, "message %i\r\n", i);
            BorneUniverselle::prepareMessage(SUCCESS, buffer);
;
        }
    }
    return true;
}

void DummyPLC::InterruptHandling(){
    return;
}

// Implémentation de la méthode non statique
void DummyPLC::initialStateLoadedHandler() {
    Serial.println(F("DummyPLC::initialStateLoadedHandler: Initial state loaded!"));
}