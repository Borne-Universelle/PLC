#include "DummyPLC.h"

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
        this->initialStateLoadedHandler();
    });
}

bool DummyPLC::logiqueExecutor(){
    return true;
}

void DummyPLC::InterruptHandling(){
    return;
}

// Implémentation de la méthode non statique
void DummyPLC::initialStateLoadedHandler() {
    Serial.println(F("DummyPLC::initialStateLoadedHandler: Initial state loaded!"));
}