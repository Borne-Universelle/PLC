#ifndef ALI_DRIVE_01_LIB_H
#define ALI_DRIVE_01_LIB_H

#include "BorneUniverselle.h"
#include "Node.h"
#include <EEPROM.h>

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)
#define CONSTR_RESSORT_ALI_DRIVE_01 "Constructeur classe Ali_drive_01"

// hash keys: Ce sont les hash qui sont indiqué dans le fichier de config.

// on the Kynconi card
#define BUZZER               291612745  

// jog
#define JOG                 1901155557  // switch
#define FWD                 3038859262              
#define RWD                 2418722016

#define SERVO_READY         2621527064
#define SERVO_ACTIVATED     1631903391
#define ZERO_SPEED          367886937
#define TARGET_AT_SPEED     1741042076
#define AT_TARGET           1587245951
#define SERVO_ALARM         2114280809 

#define USER_TARGET         1379310194
#define V_JOG_SPEED         2928208409
#define V_CYCLE_SPEED       351415074

#define ERROR_CODE          697471576
#define JOG_SPEED_READ      3535678209
#define POS_INDEX           3325507270
#define BUS_VOLTAGE         664140345
#define TEMP                1112918172
#define PR_SPEED            3999240224
#define TORQUE              3598461516 

#define CONTR_BY_COM        2790988353
#define POS_INDEX_CMD       2274742
#define SIM_INPUTS          222515872
#define JOG_SPEED           1805781600
#define POS_SPEED           953440734
#define TORQUE_CMD          1823404755  

#define STATUS_WORD         4159842635
#define PR1_CMD             4101404449
#define ACT_POS             3165098370
#define USER_POS            164186217
#define POS_COMD            23090457

#define TARGET              1264138999

class Ali_drive_01{
    public:
        Ali_drive_01();
        bool logiqueExecutor();

        static void InterruptHandling();

    private:
        //Physicals boolean outputs
        BooleanOutputNode *buzzer, *jog, *fwd, *rwd;
        BooleanOutputNode *servoReady, *servoActivated, *zeroSpeed, *targetAtSpeed, *atTarget, *servoAlarm;
        Uint32OutputNode *userTarget, *vJogSpeed, *vCycleSpeed;
        Uint16InputNode *errorCode, *jogSpeedRead, *posIndex, *busVoltage, *temp, *torque;
        Uint16OutputNode *contByCom, *posIndexCmd, *simInputs, *jogSpeed, *posSpeed, *torqueCmd; 
        Uint32InputNode *statusWord, *pr1Cmd, *actPos, *userPos, *posCmd; 
        Uint32OutputNode *target;

};

#endif