#ifndef FORMACA_LIB_H
#define FORMACA_LIB_H

#include "BorneUniverselle.h"
#include "Node.h"
#include <EEPROM.h>

//#define DEBUG

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define CONSTR_PHYTIMPACT          "Constructeur de la classe Phytimpact"

// hash keys: Ce sont les hash qui sont indiqué dans le fichier de config.
#define BUZZER                  291612745                               

// Physicals boolean inputs
#define E_STOP_A                3037871547

#define MES_RELAIS              2970727646
#define LOGICALS_INPUTS         1325627534
#define MA_PILE                 320969636

class Phytimpact{
    public:
        Phytimpact();
        bool logiqueExecutor();

        static void InterruptHandling();

    private:
        //Physicals boolean outputs
        BooleanOutputNode *buzzer,  *servoOn;

        ModbusReadInputRegister *maPile;
        
        // Boolean  inputs
        BooleanInputNode *eStopA;

        //Multiples write
        ModbusWriteMultipleCoilslNode *mesRelais;


        // Multiple inputs
        ModbusReadMultipleInputsRegistersNode *logicalsInputs;

        ModbusReadMultipleInputsRegistersNode::Bit *bit1, *bit2, *bit3, *bit4, *bit5, *bit6, *bit7, *bit8;

        uint32_t time;


};
#endif