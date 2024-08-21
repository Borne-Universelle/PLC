#include "BorneUniverselle.h"
#include "Node.h"
#include <LittleFS.h>
#include "RenderTools.h"

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define DELAY_INIT 100 // 100ms
#define CONSTR_FORMACA "Formaca"

#ifndef FORMACA01_H
#define FORMACA01_H

#define BUZZER 291612745
#define ESTOPA 3037871547
#define CAPTEUR_PRESSION_AIR 4188971739
#define STARTCYCLE 2799774631
#define SERVOON 814574035
#define GOHOME 2997355725
#define ALARMSRESET 6472957
#define JOG 3917490492
#define FWD 3697777386
#define RWD 1143003751
#define GO_POS_PARK 1870762650
#define SERVOREADY 2621527064
#define SERVOACTIVATED 1631903391
#define ZEROSPEED 367886937
#define TARGETSPEEDRATED 2641471820
#define ATTARGET 1587245951
#define SERVOALARM 2114280809
#define ABSOLUTE_POS_LOST 3102308124
#define BATTERYALARM 3279613467
#define MULTIPLETURNSOVERFLOW 1686859766
#define PUUOVERFLOW 2918759982
#define ABSOLUTECOORDONATENOTSET    3208586081
#define HOMEDONE                    365447618
#define MODBUSERROR                 2051383628
#define DRIVEINITIALISED            124264916
#define USER_TARGET_A               1297504599
#define USER_TARGET_B               2092843978
#define V_JOG_SPEED                 553984527
#define VCYCLE_SPEED                2842387093
#define TORQUE_CTRL                 3237558477

#define OVERALL_LENGTH              283223379
#define PARK_OFFSET                 217690474 // distance entre le morceau de bois brute et le poussoir lorsque le poussoir est au repos.
#define ZERO_OFFSET                 2904975329
#define BLADES_SPACING              209169414


#define NB_CYCLES_VOULUS 927380989
#define NB_CYCLES_FAIT 3836082885
#define CHOIX_RECETTE 1596686534
#define STATUS 377854433
#define ABSOLUTE_COORDONATE_SYSTEM_STATUS 3997433423
#define ALARMS 4256228255
#define TRIGGER_READ 398410701
#define JOG_SPEED_READ 3519725700
#define AUX_FUNCTION 2007447512
#define TRIGGER 1429083291
#define JOG_SPEED 2800637332
#define POSITION 3574303952
#define TORQUE 1932120116
#define TARGET_A_READ 1738444368
#define TARGET_B_READ 1314273954
#define PR_SPEED_READ 1829651207
#define TARGET_A 2454344301
#define TARGET_B 3358289165
#define PR1_SPEED 3831064525
#define PR2_SPEED 762150080

#define IMMEDIATE_STOP           685018269
#define ALARM_RESET              6472957        // relais de reset des alarms
#define FREE_RUN                 1256861844        // Marche en roue libre
#define NB_CYCLES_CLEAR          922671543


// Software defines
#define NOMINAL_TORQUE         100
#define JOG_TORQUE              10
#define CONFIG_FILE_NAME        "/Formaca.json"


// Machine define
#define BLADE_TICKNESS          0.5


struct RECETTE{
	float longlength;  // length in inch of the lon
    float shortLength;
    char name[80];
};

// Json key
#define MACHINE_RESP    "Formaca scie"
#define MACHINE         "machine" 
#define OVERALL__LENGHT "overall length"
#define PARK__OFFSET    "park offset"
#define ZERO__OFFSET    "zero offset"
#define BLADES__SPACING  "blades spacing"
#define RECETTES        "recettes"
#define LONG_LENGTH     "longLength"
#define SHORT_LENGTH    "shortLength"

struct PERSISTANT_PARAMETERS{
    char machineName[80];
    float overAllLenght;
    float parkOffset;
    float zeroOffset;
    float bladesSpacing;
    RECETTE recettes[100];
    uint8_t nbRecettes;
};

class Formaca {
public:
    Formaca();
    bool logiqueExecutor();

private: 
    static void InterruptHandling();
    void displayAlarmsAndStatus();
    void driveInitialisation();
    void saveDriveParameters();
    void setCycleSpeed(uint8_t cycleSpeed);
    bool setNewRecette(char *recette);
    RECETTE recettes[10];

    // BooleanOutputNode elements
    BooleanOutputNode *buzzer, *servoOn, *alarmsReset, *jog, *fwd, *rwd, *goPosPark, *servoReady, *servoActivated, *zeroSpeed, *targetSpeedRated, *targetPositionReached, *servoAlarm,
                      *absolutPositionLost, *batteryAlarm, *multipleTurnsOverflow, *puuOverflow, *absoluteCoordonateNotSet, *homeDone, *modbusError, *driveInitialised, *freeRun,
                      *absolutePositionLost, *triggerPR;

    PF8574BooleanOutputNode *immediateStop;

    // BooleanInputNode elements
    BooleanInputNode *eStopA, *capteur_pression_air, *startCycle, *nbCyclesClear;

    // VirtualUint32OutputNode elements
    VirtualUint32OutputNode *user_target_A, *user_target_B, *v_jogSpeed, *v_cycleSpeed, *maxTorque, *nbCyclesVoulus, *nbCyclesMade;
    
    FloatOutputNode *overAllLenght, *parkOffset, *zeroOffset, *bladesSpacing;
    
    VirtualTextOutputNode *recette;

    // Uint16InputNode elements
    Uint16InputNode *status, *absoluteCoordonateSystemStatus, *alarms, *trigger_read, *jogSpeedRead;

    // Uint16OutputNode elements
    Uint16OutputNode *auxFunctions, *jogSpeed;

    // Uint32InputNode elements
    Uint32InputNode *Position, *torque, *pr1SpeedRead;

    // Uint32OutputNode elements
    Uint32OutputNode *target_A, *target_B, *pr1Speed, *pr2Speed;

    bool initialised = false, firstStart = true, goHome = false;
    uint8_t phase = 0;
    uint16_t alarmsCache;
    long startInit = 0;

    PERSISTANT_PARAMETERS parameters;
    DropDown *drompDownIndicator;

public:

};

#endif // FORMACA01_H
