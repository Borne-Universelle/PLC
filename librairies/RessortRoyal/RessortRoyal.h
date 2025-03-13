#ifndef EDMG_LIB_H
#define EDMG_LIB_H

#include "BorneUniverselle.h"
#include "Node.h"
#include "RenderTools.h"

//#define DEBUG

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

#define CONSTR_RESSORT_ROYAL    "Constructeur Ressort Royal"
#define PR1_DONE                20001
#define PR1_START               1
#define PR2_DONE                20002
#define PR2_START               2
#define FWD_VALUE               4998 // Jog forward
#define RWD_VALUE               4999 // jog reverse
#define STOP_VALLUE             0

#define SPEEDS_ARRAY_SIZE       15
#define DEFAULT_CYCLE_SPEED     10 // Correspond à la 2eme entrée du tableau de vitesses de la drive
#define NOMINAL_TORQUE         100
#define JOG_TORQUE              10
#define DELAY_INIT              1000 // 100 ms

// hash keys: Ce sont les hash qui sont indiqué dans le fichier de config.
#define BUZZER                   1711197005

// Physicals boolean inputs
#define E_STOP_A                 3648440655
#define E_STOP_B                 2934447039
#define START_CYCLE              2918064320
#define SERVO_READY              1578545169
#define SERVO_ACTIVATED          1878960780
#define ZERO_SPEED               3381240120
#define TARGET_SPEED_RATED       204382134
#define TARGET_POSITION_REACHED  2857997314
#define HOME_DONE                3171404866
//#define TORQUE_LIMIT_ACTIVATED   712641023
#define SERVO_ALARM              1036420395
//#define MAGNETIC_BREAK           4082177813

#define ABSOLUTE_POS_LOST        1845100150
#define BATTERY_ALARM            1229514833
#define MULTIPLE_TURNS_OVER      4013941733
#define PUU_OVERFLOW             3738696056
#define ABSOLUTE_COORD_NOT_SET   2023813836

#define MODBUS_ERROR             460376054
#define DRIVE_INITIALISED        714661227
#define RETURN_POS               396324830

#define SERVO_ON                 1927398708
#define TRIGGER_PR               4235117271
#define IMMEDIATE_STOP           973196112
#define ALARM_RESET              4138453966
#define FREE_RUN                 2015677485

#define USER_TARGET              645363011
#define NB_CYCLES_CLEAR          1168588921
#define NB_CYCLES_MADE           3822078925

#define JOG                      627952477
#define FWD                      936928435
#define RWD                      2405696470
#define V_CYCLE_SPEED            1951357668
#define V_JOG_SPEED              2984797290
#define MAX_TORQUE               3740987040
#define JOG_FULL_TORQUE          313736047

// Sur servo drive holding registers
#define SERVO_STATUS             4137233651
#define ABS_COORD                4098304980
#define ALARMS                   4126332617

#define AUX_FUNCTION             2308213873
#define TRIGGER                  748480285
#define TRIGGER_READ             4059768218
#define JOG_SPEED_READ           4031699079

#define POSITION                 4045003206
#define TORQUE                   1761329095
#define TARGET_GO_READ           2843041799
#define TARGET_BACK_READ         2152625540
#define PR1SPEED_READ            1103145540

#define TARGET_GO                2532989225
#define TARGET_BACK              3432736329

#define CYCLE_SPEED              1951357668
#define JOG_SPEED                3187488644
#define PR1SPEED                 1282109782
#define PR2SPEED                 2019104905
#define GO_AND_BACK              3029257395

#define NB_CYCLES_TO_DO          3526906192

class RessortRoyal{
    public:
        RessortRoyal();
        bool logiqueExecutor();

        static void InterruptHandling();

    private:
        //Physicals boolean outputs
        BooleanOutputNode *buzzer,  *servoOn, *triggerPR,  *alarmsReset, *freeRun,  *goAndBack;

        PF8574BooleanOutputNode *immediateStop;

        // Virtuals outputs
        BooleanOutputNode *servoReady, *servoActivated, *zeroSpeed, *targetSpeedRated, *targetPositionReached, *servoAlarm,
                          *absolutePositionLost,  *batteryAlarm, *multipleTurnsOverflow, *puuOverflow, *absoluteCoordonateNotSet, *homeDone, *modbusError, *driveInitialised, *jog, *fwd, *rwd, *jogFullTorque;

        // Boolean  inputs
        BooleanInputNode *eStopA, *eStopB, *startCycle, *nbCyclesClear;

        // Modbus inputs
#ifndef DEBUG
        Uint16InputNode *status, *absoluteCoordonateSystemStatus, *alarms, *triggerRead, *jogSpeedRead;
#endif

#ifdef DEBUG
        VirtualUint32InputNode *status, *absoluteCoordonateSystemStatus, *alarms, *triggerRead, *jogSpeedRead;
#endif

#ifndef DEBUG
        // Modbus outputs
        Uint16OutputNode *auxFunctions, *trigger, *jogSpeed, *maxTorque;
#endif

#ifdef DEBUG
        VirtualUint32OutputNode *auxFunctions, *trigger, *jogSpeed, *maxTorque;
#endif

#ifndef DEBUG
        // 32 bits inputs registers
        Uint32InputNode *torque, *targetGoRead, *targetBackRead, *pr1SpeedBack;
#endif

#ifdef DEBUG
        VirtualUint32InputNode *torque, *targetGoRead, *targetBackRead, *pr1SpeedBack;
#endif

        // Affichage de nombre sur le web pouvant être modifié par l'utilisateur
        VirtualUint32OutputNode *v_cycleSpeed, *v_jogSpeed, *user_target, *return_pos, *nbCyclesMade, *nbCyclesToDo;

#ifndef DEBUG
        // 32 bits output holding double registers
        Uint32OutputNode *targetGo, *targetBack, *pr1Speed, *pr2Speed;
#endif

#ifdef DEBUG
         VirtualUint32OutputNode *targetGo, *targetBack, *pr1Speed, *pr2Speed;
#endif


        // Variables
        VisualIndicator *visu;
        long startInit = 0;

        bool initialised = false, firstStart = true, goTarget = false, goHome = false, goBack = false;
        uint8_t phase = 0;
        uint16_t alarmsCache = 0;

        void displayAlarmsAndStatus();
        void driveInitialisation();
        void setCycleSpeed(uint8_t cycleSpeed);
        void saveParameters();
};
#endif