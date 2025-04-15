#pragma once

#include "PLC_Persistence/PLC_Persistence.h"
#include "Node/Node.h"
#include "RenderTools/RenderTools.h"

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define DELAY_INIT 100 // 100ms
#define CONSTR_FORMACA "Constructeur class Formaca"

// Constantes de noeuds (inchangées)
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
#define PARK_OFFSET                 1541073354

#define NB_CYCLES_VOULUS            1168588921
#define NB_CYCLES_EFFECTUES         3018797200
#define CHOIX_RECETTE               2565368844
#define STATUS_DRIVE                4137233651
#define ABSOLUTE_COORDONATE_SYSTEM_STATUS 4098304980
#define ALARMS                      4126332617
#define TRIGGER_READ                4059768218
#define JOG_SPEED_READ              4031699079
#define AUX_FUNCTION                2308213873
#define TRIGGER                     748480285
#define JOG_SPEED                   3187488644
#define POSITION                    4045003206
#define MAX_TORQUE                  3740987040
#define TARGET_A_READ               2843041799
#define TARGET_B_READ               2152625540
#define PR_SPEED_READ               1103145540
#define TARGET_A                    2532989225
#define TARGET_B                    3432736329
#define TARGET_C                    2731028726
#define PR1_SPEED                   1282109782
#define PR2_SPEED                   2019104905
#define PR3_SPEED                   4171829142
#define DO_HOME                     2206102162
#define IMMEDIATE_STOP              3505331062
#define FLIP_FLOP_SCIE              756474627
#define NB_CYCLES_CLEAR             362298148
#define JOG_FULL_TORQUE             313736047
#define POS_INCH                    666618897
#define WASTE_LENGTH                3335850172
#define RIGHT_STOP                  3132370279
#define WIDTH_LENGTH                1041711882
#define LENGTH                      2736300668
#define V_START                     824782083
#define CANCEL_CYCLE                2539529911

// Software defines
#define NOMINAL_TORQUE              100
#define JOG_TORQUE                  10
#define CONFIG_FILE_NAME            "/Formaca.json"
#define SPEEDS_ARRAY_SIZE           15

// Drive defines
#define PR1_DONE                    20001
#define PR1_START                   1
#define PR2_DONE                    20002
#define PR2_START                   2
#define PR3_DONE                    20003
#define PR3_START                   3
#define FWD_VALUE                   4998
#define RWD_VALUE                   4999
#define STOP_VALLUE                 0

// Machine defines
#define NB_PR                       2
#define BLADE_TICKNESS              0.125L
#define FLIP_FLOP_TIME              100
#define BLADE_TIME                  5000
#define LEFT                        true
#define RIGHT                       false

// Motor/reductor defines
#define PULSES_PER_TURN             10000
#define MM_PER_TURN                 80.425
#define INCH_PER_TURN               (MM_PER_TURN * 0.0393701)
#define PULSES_PER_INCH             (INCH_PER_TURN * PULSES_PER_TURN)

// Kincony virtual outputs defines
#define V_SERVO_ON                  1581937258

#define V_IMMEDIATE_STOP            4098079457
#define V_ALARMS_RESET              1771340376

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
#define SELECTED_RECETTE    "current recette"

// Structures
struct RECETTE {
    float longlength;
    float width;
    float angle;
    char name[80];
};

struct PERSISTANT_PARAMETERS {
    char machineName[80];
    float overAllLenght;
    uint32_t home;
    uint32_t reference;
    float parkOffset;
    float wasteLength;
    float rightStop;
    RECETTE recettes[100];
    char selectedRecette[80];
    uint8_t nbRecettes;
};

class Formaca {
public:
    enum class State {
        UNDEFINED,
        INITIALIZING,
        IDLE,
        EMERGENCY,
        HOMING,
        PARKING,
        WASTE_CUTTING,
        NORMAL_CUTTING,
        SAWING,
        SAWING_WAIT,
        EJECTING,
        JOGGING,
        TRIGGER_PENDING
    };

public:
    Formaca();
    ~Formaca();
    bool logiqueExecutor();
    static void printPersistance();
    void initialStateLoadedHandler();
    JsonDocument getDropDownDescriptorHandler();

private:
    void handleInterrupts();
    void checkEmergencyConditions(uint32_t now);
    void updateOutputs();
    void transition(State newState);
    void displayAlarmsAndStatus();
    void driveInitialisation();
    void saveDriveParameters();
    void setCycleSpeed(uint8_t cycleSpeed);
    bool setNewRecette(const char *recette);
    uint32_t convToPUU(float length);
    float convToInch(uint32_t puu);
    void cycleSpeedChange();
    void jogTreatment();
    bool saveMachineParameters();
    void goToPosition(uint32_t pos);
    void goToParkPosition();
    void interfaceTreatment();
    void eject();
    bool getIsStartCycle();
    bool isAtPArkPosition();
    void setEmergencyMode(bool status);
    bool isEmergencyMode();
    const char* stateToString(State state);
    void saw(bool status);

    // Variables d'état FSM
    State currentState = State::INITIALIZING;
    State previousState = State::UNDEFINED;
    uint32_t stateStartTime = 0;
    uint32_t homeDelayStart = 0;

    // Variables persistantes
    uint8_t currentPr = 1;
    uint8_t phase = 0;
    uint8_t idRecette = 0;
    bool initialised = false;
    bool isEmergency = false;
    uint16_t alarmsCache = 0;
    uint32_t startInit = 0;
    uint32_t homePos = 0;
    uint32_t parkPosition = 0;
    float bladelostLength = 0;
    float totalWasteLength = 0;
    float angleRadians = 0;
    bool cutModel = LEFT;
    bool cylinderProtectionActivated = false;
    uint8_t homingPhase = 0;

    // Noeuds (garantis non nuls par le constructeur)
    BooleanOutputNode *buzzer, *absolutePositionLost;
    BooleanOutputNode *servoOn;
    BooleanOutputNode *alarmsReset;
    BooleanOutputNode *fwd;
    BooleanOutputNode *rwd;
    BooleanOutputNode *jog;
    BooleanOutputNode *jogFullTorque;
    BooleanOutputNode *goToPark;
    BooleanOutputNode *gotoRef;
    BooleanOutputNode *calibrate;
    BooleanOutputNode *goHomeButton;
    BooleanOutputNode *scier;
    BooleanOutputNode *ejectButton;
    BooleanOutputNode *servoReady;
    BooleanOutputNode *servoActivated;
    BooleanOutputNode *zeroSpeed;
    BooleanOutputNode *targetSpeedRated;
    BooleanOutputNode *targetPositionReached;
    BooleanOutputNode *servoAlarm;
    BooleanOutputNode *batteryAlarm;
    BooleanOutputNode *multipleTurnsOverflow;
    BooleanOutputNode *puuOverflow;
    BooleanOutputNode *absoluteCoordonateNotSet;
    BooleanOutputNode *homeDone;
    BooleanOutputNode *modbusError;
    BooleanOutputNode *driveInitialised;
    BooleanOutputNode *flipFlopScie;
    BooleanOutputNode *doHome;
    BooleanOutputNode *v_servoOn;
    BooleanOutputNode *v_immediateStop;
    BooleanOutputNode *v_alarmsReset;

    PF8574BooleanOutputNode *immediateStop;

    BooleanInputNode *eStopA;
    BooleanInputNode *capteur_pression_air;
    BooleanInputNode *startCycle;
    BooleanInputNode *nbCyclesClear;
    BooleanInputNode *vStart;
    BooleanInputNode *cancelCycle;
    BooleanInputNode *cylinderCaptor;

    VirtualUint32OutputNode *v_jogSpeed;
    VirtualUint32OutputNode *v_cycleSpeed;
    VirtualUint32OutputNode *v_maxTorque;
    VirtualUint32OutputNode *nbCyclesVoulus;
    VirtualUint32OutputNode *nbCyclesMade;

    FloatOutputNode *overAllLenght;
    FloatOutputNode *parkOffset;
    FloatOutputNode *posInch;
    FloatOutputNode *wasteLength;
    FloatOutputNode *rightStop;
    FloatOutputNode *longLength;
    FloatOutputNode *widthLength;

    VirtualTextOutputNode *recette;

    Uint16InputNode *status;
    Uint16InputNode *absoluteCoordonateSystemStatus;
    Uint16InputNode *alarms;
    Uint16InputNode *trigger_read;
    Uint16InputNode *jogSpeedRead;

    Uint16OutputNode *auxFunctions;
    Uint16OutputNode *jogSpeed;
    Uint16OutputNode *trigger;
    Uint16OutputNode *maxTorque;

    Uint32InputNode *position;
    Uint32InputNode *pr1SpeedRead;

    Uint32OutputNode *target_A;
    Uint32OutputNode *target_B;
    Uint32OutputNode *target_C;
    Uint32OutputNode *pr1Speed;
    Uint32OutputNode *pr2Speed;
    Uint32OutputNode *pr3Speed;

    // Objets persistants
    PERSISTANT_PARAMETERS parameters;
    DropDown *drompDownIndicator;
    VisualIndicator *visu;
    PLC_Persistence& persistence = PLC_Persistence::getInstance();

    // State machine
    bool isFirstCycle = true; // Indique si c'est le premier cycle (rebut)
    State sawingOrigin = State::UNDEFINED;
    State resumeState = State::UNDEFINED;
};