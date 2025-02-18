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

#define BUZZER                      1711197005
#define ESTOPA                      721063196
#define CAPTEUR_PRESSION_AIR        998762341
#define STARTCYCLE                  2986050054
#define SERVOON                     2864105056
#define ALARMSRESET                 2122812135
#define JOG                         627952477
#define FWD                         936928435
#define RWD                         2405696470
#define GO_TO_PARK                  431233
#define GO_TO_REF                   1483048151
#define CALIBRATE                   3874886927
#define GO_HOME_BUTTON              3099259876
#define SCIER                       2853133322
#define EJECT                       3772375986
#define CYLINDER_CAPTOR             1168588921

#define SERVOREADY                  1948505786
#define SERVOACTIVATED              3387538036
#define ZEROSPEED                   343892977
#define TARGETSPEEDRATED            1762420137
#define ATTARGET                    3030039596
#define SERVOALARM                  3569748327
#define ABSOLUTE_POS_LOST           773850583
#define BATTERYALARM                1101239736
#define MULTIPLETURNSOVERFLOW       2620738621
#define PUUOVERFLOW                 570368243
#define ABSOLUTECOORDONATENOTSET    4234803574
#define HOMEDONE                    2166030126
#define MODBUSERROR                 1552688811
#define DRIVEINITIALISED            3779480165

#define V_JOG_SPEED                 2984797290
#define VCYCLE_SPEED                1951357668
#define TORQUE_CTRL                 3526906192

#define OVERALL_LENGTH              3749283751
#define PARK_OFFSET                 1541073354 // distance entre le morceau de bois brute et le poussoir lorsque le poussoir est au repos.

#define NB_CYCLES_VOULUS                1168588921
#define NB_CYCLES_EFFECTUES             3018797200
#define CHOIX_RECETTE                   2565368844
#define STATUS_DRIVE                    4137233651
#define ABSOLUTE_COORDONATE_SYSTEM_STATUS 4098304980
#define ALARMS                          4126332617
#define TRIGGER_READ                    4059768218
#define JOG_SPEED_READ                  4031699079
#define AUX_FUNCTION                    2308213873
#define TRIGGER                         748480285
#define JOG_SPEED                       4031699079
#define POSITION                        4045003206
#define MAX_TORQUE                      3740987040
#define TARGET_A_READ                   2843041799
#define TARGET_B_READ                   2152625540
#define PR_SPEED_READ                   1103145540
#define TARGET_A                        2532989225
#define TARGET_B                        3432736329

#define TARGET_C                        2731028726  // ?

#define PR1_SPEED                       1282109782
#define PR2_SPEED                       2019104905
#define PR3_SPEED                       4171829142
#define DO_HOME                         2206102162

#define IMMEDIATE_STOP                  3505331062
#define ALARM_RESET                     2122812135        // relais de reset des alarms
#define FLIP_FLOP_SCIE                  756474627
#define NB_CYCLES_CLEAR                 362298148
//#define USABLE_LENGTH           396324830 // ?
#define JOG_FULL_TORQUE                 313736047

#define POS_INCH                        666618897
#define WASTE_LENGTH                    3335850172
#define RIGHT_STOP                      3132370279
#define WIDTH_LENGTH                    1041711882
#define LENGTH                          2736300668
#define V_START                         824782083
#define CANCEL_CYCLE            824782083 

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

    static void InterruptHandling();
    // Déclaration de la méthode non statique
    void initialStateLoadedHandler();

private: 
    void displayAlarmsAndStatus();
    void driveInitialisation();
    void saveDriveParameters();
    void setCycleSpeed(uint8_t cycleSpeed);
    bool setNewRecette(char *recette);
    uint32_t convToPUU(float); // converti des pouces en PUU
    float convToInch(uint32_t);
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
    BooleanOutputNode *buzzer, *servoOn, *alarmsReset, *fwd, *rwd, *jog, *jogFullTorque, *goToPark, *gotoRef, *calibrate, *servoReady, *servoActivated, *zeroSpeed, *targetSpeedRated, *targetPositionReached, *servoAlarm,
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
