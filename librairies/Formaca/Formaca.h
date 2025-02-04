#include "borneUniverselle.h"
#include "Node.h"
#include <LittleFS.h>
#include "RenderTools.h"

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define DELAY_INIT 100 // 100ms
#define CONSTR_FORMACA "Constructeur class Formaca"

#ifndef FORMACA01_H
#define FORMACA01_H

#define BUZZER 291612745
#define ESTOPA 3037871547
#define CAPTEUR_PRESSION_AIR        4188971739
#define STARTCYCLE                  2799774631
#define SERVOON 814574035
#define ALARMSRESET 6472957
#define JOG 3917490492
#define FWD 3697777386
#define RWD 1143003751
#define GO_TO_PARK                  1870762650
#define GO_TO_REF                   3285838443
#define CALIBRATE                   4246518124
#define GO_HOME_BUTTON              2237651145
#define SCIER                       4151588873
#define EJECT                       1021838199
#define CYLINDER_CAPTOR             3806663719

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

#define V_JOG_SPEED                 553984527
#define VCYCLE_SPEED                2842387093
#define TORQUE_CTRL                 3237558477

#define OVERALL_LENGTH              283223379
#define PARK_OFFSET                 217690474 // distance entre le morceau de bois brute et le poussoir lorsque le poussoir est au repos.

#define NB_CYCLES_VOULUS                166926353
#define NB_CYCLES_EFFECTUES             4113844772
#define CHOIX_RECETTE                   1596686534
#define STATUS_DRIVE                    377854433
#define ABSOLUTE_COORDONATE_SYSTEM_STATUS 3997433423
#define ALARMS                          4256228255
#define TRIGGER_READ                    398410701
#define JOG_SPEED_READ                  3519725700
#define AUX_FUNCTION                    2007447512
#define TRIGGER                         1429083291
#define JOG_SPEED                       2800637332
#define POSITION                        3574303952
#define MAX_TORQUE                      2909542849
#define TARGET_A_READ                   1738444368
#define TARGET_B_READ                   1314273954
#define PR_SPEED_READ                   1829651207
#define TARGET_A                        2454344301
#define TARGET_B                        3358289165
#define TARGET_C                        2574806929
#define PR1_SPEED                       3831064525
#define PR2_SPEED                       762150080
#define PR3_SPEED                       1786677819
#define DO_HOME                         426015916

#define IMMEDIATE_STOP          685018269
#define ALARM_RESET             6472957        // relais de reset des alarms
#define FLIP_FLOP_SCIE          2466655937
#define NB_CYCLES_CLEAR         922671543
#define USABLE_LENGTH           2461030330
#define JOG_FULL_TORQUE         2578051090

#define POS_INCH                1379913110
#define WASTE_LENGTH            303611356
#define RIGHT_STOP              3066607874
#define WIDTH_LENGTH            847062088
#define LENGTH                  119864519
#define V_START                 3417162335
#define CANCEL_CYCLE            1083491018 

// Software defines
#define NOMINAL_TORQUE         100
#define JOG_TORQUE              10
#define CONFIG_FILE_NAME        "/Formaca.json"
#define SPEEDS_ARRAY_SIZE       15

// drive define (like Ressort Royal)
#define PR1_DONE                20001
#define PR1_START               1
#define PR2_DONE                20002
#define PR2_START               2
#define PR3_DONE                20003
#define PR3_START               3
#define FWD_VALUE               4998 // Jog forward
#define RWD_VALUE               4999 // jog reverse
#define STOP_VALLUE             0


// Machine define
#define NB_PR                   2
#define BLADE_TICKNESS          0.125L // 1/8 inch
#define FLIP_FLOP_TIME          100
#define BLADE_TIME              5000  // temps pour scier
#define LEFT                    true
#define RIGHT                   false

// motor/reductor define
//#define PULSES_PER_TURN         16777216 // Pulses per revolution. nb encoder pulse per revolution ie nb puu per revolution
#define PULSES_PER_TURN         10000 // valeur par défaut
#define MM_PER_TURN             80.425  // mm / tours Données de Yannick
#define INCH_PER_TURN           (MM_PER_TURN * 0.0393701)
#define PULSES_PER_INCH         (INCH_PER_TURN * PULSES_PER_TURN)


struct RECETTE{
	float longlength;  // length in inch of the
    float width;        // largeur du morceu de bois
    float angle;        // angle du morceau de bois
    char name[80];
};

// Json key
#define MACHINE_RESP        "Formaca scie"
#define MACHINE             "machine"
#define HOME                "home"
#define REFERENCE           "reference"        // Position du poussoir au croisement des scies en bas
#define OVERALL__LENGHT     "overall length"            // longeur du morceau de bois brute
#define PARK__OFFSET        "park offset"
#define WASTE__LENGTH       "wast length"
#define RIGHT__STOP          "right stop"
#define RECETTES            "recettes"
#define LONG__LENGTH        "longLength"               // Longeur du grand côté du morceau de bois fini
#define ANGLE               "angle"
#define WIDTH__LENGTH       "width"

struct PERSISTANT_PARAMETERS{
    char machineName[80];
    float overAllLenght;
    uint32_t home;                            // longeur du morceau de bois brute
    uint32_t reference;
    float parkOffset;
    float wasteLength;
    float rightStop;

    RECETTE recettes[100];
    uint8_t nbRecettes;
};

class Formaca {
public:
    Formaca();
    bool logiqueExecutor();
    static void printPersistance();

private: 
    static void InterruptHandling();
    void displayAlarmsAndStatus();
    void driveInitialisation();
    void saveDriveParameters();
    void setCycleSpeed(uint8_t cycleSpeed);
    bool setNewRecette(char *recette);
    uint32_t convToPUU(float); // converti des pouces en PUU
    float convToInch(uint32_t);
    void newClientConnected();
    void cycleSpeedChange(); 
    void jogTreatment();
    bool saveMachineParameters();
    void goToPosition(uint32_t pos);
    void goToParkPosition();
    void saw(); // scier
    void machineTreatment();
    void interfaceTreatment();
    void eject();
    bool getIsStartCycle();
    bool isAtPArkPosition();
    void setEmergencyMode(bool status);
    bool isEmergencyMode();

    uint8_t currentPr = 1;

    // BooleanOutputNode elements
    BooleanOutputNode *buzzer, *servoOn, *alarmsReset, *jog, *fwd, *rwd, *jogFullTorque, *goToPark, *gotoRef, *calibrate, *servoReady, *servoActivated, *zeroSpeed, *targetSpeedRated, *targetPositionReached, *servoAlarm,
                      *absolutPositionLost, *batteryAlarm, *multipleTurnsOverflow, *puuOverflow, *absoluteCoordonateNotSet, *homeDone, *modbusError, *driveInitialised, *freeRun, *scier, *flipFlopScie,
                      *absolutePositionLost, *doHome, *ejectButton, *goHomeButton;

    PF8574BooleanOutputNode *immediateStop;

    // BooleanInputNode elements
    BooleanInputNode *eStopA, *capteur_pression_air, *startCycle, *nbCyclesClear, *vStart, *cancelCycle, *cylinderCaptor;

    // VirtualUint32OutputNode elements
    VirtualUint32OutputNode *v_jogSpeed, *v_cycleSpeed, *v_maxTorque, *nbCyclesVoulus, *nbCyclesMade;
    
    FloatOutputNode *overAllLenght, *parkOffset, *posInch, *wasteLength, *rightStop, *longLength, *widthLength;
    
    VirtualTextOutputNode *recette;

    // Uint16InputNode elements
    Uint16InputNode *status, *absoluteCoordonateSystemStatus, *alarms, *trigger_read, *jogSpeedRead;

    // Uint16OutputNode elements
    Uint16OutputNode *auxFunctions, *jogSpeed, *trigger, *maxTorque;

    // Uint32InputNode elements
    Uint32InputNode *position, *pr1SpeedRead;

    // Uint32OutputNode elements
    Uint32OutputNode *target_A, *target_B, *target_C, *pr1Speed, *pr2Speed, *pr3Speed;

    bool initialised = false, goHome = false,  triggerPending = false,  flipflopInAction = false, bladeInhibit = false, running = false, wasteCutting = false, normalCut = false,
                       cutModel, ejectPhase = false, parkPositionPhase = false, readyForNext = false, cylinderProtectionActivated = false, lock = false;

    uint8_t phase = 0, lastPrActiv = 0, idRecette, isEmergency = false;
    uint16_t alarmsCache;
    long startInit = 0, startDelayHome, startFlipFlopScie = 0, startMovment = 0;

    PERSISTANT_PARAMETERS parameters;
    DropDown *drompDownIndicator;
    VisualIndicator *visu;

    uint32_t homePos, parkPosition, ejectionStartTime;

    float bladelostLength = 0, totalWasteLength = 0, angleRadians;

public:

};

#endif // FORMACA01_H
