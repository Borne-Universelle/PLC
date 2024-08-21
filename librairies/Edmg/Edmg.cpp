#include "Edmg.h"

EDMG::EDMG(){
    Serial.println(CONSTR_EDMG);

    // on récupère des pointeurs sur les nodes intéressants depuis le container
    
    Node *buzzerNode = BorneUniverselle::findNode(CONSTR_EDMG, BUZZER);
    if (buzzerNode != nullptr){
        buzzer = ((BooleanOutputNode*)buzzerNode);
        buzzer->setValue(false);
    }


    Node *input1Node = BorneUniverselle::findNode(CONSTR_EDMG, INPUT_1);
    if (input1Node != nullptr){
        input_1 =  ((BooleanInputNode*)input1Node);
    }

    Node *input2Node = BorneUniverselle::findNode(CONSTR_EDMG, INPUT_2);
    if (input2Node != nullptr){
        input_2 =  ((BooleanInputNode*)input2Node);
    }

    Node *output1Node = BorneUniverselle::findNode(CONSTR_EDMG, OUTPUT_1);
    if (output1Node != nullptr){
        output_1 =  ((BooleanOutputNode*)output1Node);
    }

    Node *output2Node = BorneUniverselle::findNode(CONSTR_EDMG, OUTPUT_2);
    if (output2Node != nullptr){
        output_2 =  ((BooleanOutputNode*)output2Node);
    }

    Node *output3Node = BorneUniverselle::findNode(CONSTR_EDMG, OUTPUT_3);
    if (output3Node != nullptr){
        output_3 =  ((BooleanOutputNode*)output3Node);
    }

    Node *output4Node = BorneUniverselle::findNode(CONSTR_EDMG, OUTPUT_4);
    if (output4Node != nullptr){
        output_4 =  ((BooleanOutputNode*)output4Node);
    }

    Node *output5Node = BorneUniverselle::findNode(CONSTR_EDMG, OUTPUT_5);
    if (output5Node != nullptr){
        output_5 =  ((BooleanOutputNode*)output5Node);
    }

    Node *modbusErrorNode = BorneUniverselle::findNode(CONSTR_EDMG, MODBUS_ERROR);
    if (modbusErrorNode != nullptr){
        modbusError =  ((BooleanOutputNode*)modbusErrorNode);
        Serial.printf("Node modbusError, hash: %u\r\n", modbusError->getHash());
    }
    
   Serial.println("Fin du constructeur de la class EDMG");
}

bool EDMG::logiqueExecutor(){ 
    //Serial.println("Will get last event");
    if (MyModbus::getLastEvent() != Modbus::EX_SUCCESS){
        //Serial.printf("Modbus error hash: %u\r\n", modbusError->getHash());
        BorneUniverselle::prepareMessage(WARNING, "Modbus error !!!");
        modbusError->setValue(true);
    } else {
        modbusError->setValue(false);
        //Serial.printf("Modbus succes hash: %u\r\n", modbusError->getHash());    
        if (input_1->getValue()){ 
            output_1->setValue(true);
            output_2->setValue(true);
            output_3->setValue(true);
            output_4->setValue(true);
            output_5->setValue(true);
        }

        if (input_2->getValue()){
            output_1->setValue(false);
            output_2->setValue(false);
            output_3->setValue(false);
            output_4->setValue(false);
            output_5->setValue(false);
        }
    }

    return true;
}