#include "Phytimpact.h"

Phytimpact::Phytimpact(){
    Serial.println(CONSTR_PHYTIMPACT);

    // on récupère des pointeurs sur les nodes intéressants depuis le container
    
    //physical inputs nodes
    eStopA                  = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_PHYTIMPACT, E_STOP_A);

    mesRelais               = (ModbusWriteMultipleCoilslNode *) BorneUniverselle::findNode(CONSTR_PHYTIMPACT, MES_RELAIS);

    maPile                  = (ModbusReadInputRegister *) BorneUniverselle::findNode(CONSTR_PHYTIMPACT, MA_PILE);

    logicalsInputs          = (ModbusReadMultipleInputsRegistersNode *) BorneUniverselle::findNode(CONSTR_PHYTIMPACT, LOGICALS_INPUTS);
    bit3 = logicalsInputs->getBit(2);

    time = millis();
 
   
   Serial.println("Fin du constructeur de la class RessortRoyal"); 
}

bool Phytimpact::logiqueExecutor(){ 
    long start = millis();
    if (PF8574BooleanInputNode::isInterrupt()){
        BorneUniverselle::refresHardwareInputs();
        // Serial.printf("Latency: %lu\r\n", millis() - PF8574BooleanInputNode::getTimeOfInterupt());
        PF8574BooleanInputNode::clearInterruptFlag();
    }

    /*

    if (millis() - time > 1000){
        Serial.println("Good");
        if (mesRelais->getValue(1)){
            mesRelais->setValue(false, 1);
        } else {
            mesRelais->setValue(true, 1);
        }

        time = millis();      
    }
    */

    if (maPile->getIsChanged()){
        Serial.printf("Ma pile: new value %u\r\n", maPile->getValue());
    }

    if (bit3->getIsChanged()){
        Serial.println("bit 3 value is changed");
    }

    if (bit3->isRisingEdge()){
        Serial.println("bit3 is now up");
    }

     if (bit3->isFallingEdge()){
        Serial.println("bit3 is now down");
    }



    return true;
}

