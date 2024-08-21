#ifndef EDMG_LIB_H
#define EDMG_LIB_H

#include "BorneUniverselle.h"
#include "Node.h"
#include "RenderTools.h"

//#define DEBUG

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

// hash keys: Ce sont les hash qui sont indiqué dans le fichier de config.
#define BUZZER                  291612745                               

// Physicals boolean inputs
#define E_STOP_A                3037871547
#define E_STOP_B                2230986534
#define START_CYCLE             2799774631
#define SERVO_READY             2621527064
#define SERVO_ACTIVATED         1631903391
#define ZERO_SPEED              367886937
#define TARGET_SPEED_RATED      2641471820
#define TARGET_POSITION_REACHED 1587245951
#define HOME_DONE               365447618
//#define TORQUE_LIMIT_ACTIVATED  712641023
#define SERVO_ALARM             2114280809
//#define MAGNETIC_BREAK          4082177813

#define ABSOLUTE_POS_LOST       3102308124
#define BATTERY_ALARM           3279613467
#define MULTIPLE_TURNS_OVER     1686859766
#define PUU_OVERFLOW            2918759982
#define ABSOLUTE_COORD_NOT_SET  3208586081

#define MODBUS_ERROR            2051383628
#define DRIVE_INITIALISED       124264916
#define RETURN_POS              121915655

#define SERVO_ON                814574035
#define TRIGGER_PR              2889704882
#define IMMEDIATE_STOP           685018269
#define ALARM_RESET             6472957        // relais de reset des alarms
#define FREE_RUN                1256861844               // Marche en roue libre

#define USER_TARGET             789972827
#define NB_CYCLES_CLEAR         4235215967
#define NB_CYCLES_MADE          1589627430

#define JOG                     3917490492      // le commutateur Jog ou cycle normal
#define FWD                     3697777386      // bouton
#define RWD                     1143003751      // bouton
#define V_CYCLE_SPEED           2842387093
#define V_JOG_SPEED             553984527
#define MAX_TORQUE              1466629405
#define JOG_FULL_TORQUE         2578051090

// Sur servo drive holding registers
#define SERVO_STATUS            377854433
#define ABS_COORD               3997433423
#define ALARMS                  4256228255

#define AUX_FUNCTION            2007447512
#define TRIGGER                 1429083291
#define TRIGGER_READ            398410701
#define JOG_SPEED_READ          3519725700

#define POSITION                2286761184  // lecture 
#define TORQUE                  1932120116
#define TARGET_GO_READ          3815151997
#define TARGET_BACK_READ        2567602691
#define PR1SPEED_READ           1944577862


#define TARGET_GO               591585897      // ecriture du target 1
#define TARGET_BACK             4013394785      // ecriture du target 2

#define CYCLE_SPEED             2148342756
#define JOG_SPEED               2800637332
#define PR1SPEED                3831064525
#define PR2SPEED                762150080
#define GO_AND_BACK             688403912

#define NB_CYCLES_TO_DO         1571975517

#define DELAY_INIT              1000 // 100 ms

#define CONSTR_RESSORT_ROYAL "Constructeur de la class Ressort Royal"
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
        BooleanOutputNode *servoReady, *servoActivated, *zeroSpeed, *targetSpeedRated, *targetPositionRached, *servoAlarm,
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


        // Varialbles
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