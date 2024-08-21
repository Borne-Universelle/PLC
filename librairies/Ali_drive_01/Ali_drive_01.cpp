#include  "Ali_drive_01.h"

Ali_drive_01::Ali_drive_01(){
    Serial.println(CONSTR_RESSORT_ALI_DRIVE_01);

    buzzer                  = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, BUZZER);
    jog                     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, JOG);
    fwd                     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, FWD);
    rwd                     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, RWD);

    servoReady              = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, SERVO_READY);
    servoActivated          = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, SERVO_ACTIVATED);
    zeroSpeed               = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, ZERO_SPEED);
    targetAtSpeed           = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, TARGET_AT_SPEED);
    atTarget                = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, AT_TARGET);
    servoAlarm              = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, SERVO_ALARM);

    userTarget              = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, USER_TARGET);
    vJogSpeed               = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, V_JOG_SPEED);
    vCycleSpeed             = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, V_CYCLE_SPEED);

    errorCode               = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, ERROR_CODE);
    jogSpeedRead            = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, JOG_SPEED_READ);
    posIndex                = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, POS_INDEX);
    busVoltage              = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, BUS_VOLTAGE);
    temp                    = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, TEMP);
    torque                  = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, TORQUE);

    contByCom               = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, CONTR_BY_COM);
    posIndexCmd             = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, POS_INDEX_CMD);
    simInputs               = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, SIM_INPUTS);
    jogSpeed                = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, JOG_SPEED);
    posSpeed                = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, POS_SPEED);
    torqueCmd               = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, TORQUE_CMD);

    statusWord              = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, STATUS_WORD);
    pr1Cmd                  = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, PR1_CMD);
    actPos                  = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, ACT_POS);
    userPos                 = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, USER_POS);
    posCmd                  = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, POS_COMD);

    target                  = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ALI_DRIVE_01, TARGET);

}

void Ali_drive_01:: InterruptHandling(){

}

bool Ali_drive_01::logiqueExecutor(){
    return true;
}
