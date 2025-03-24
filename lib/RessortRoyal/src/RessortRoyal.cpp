#include "RessortRoyal/RessortRoyal.h"

RessortRoyal::RessortRoyal(){
    Serial.println(CONSTR_RESSORT_ROYAL);
    // on récupère des pointeurs sur les nodes intéressants depuis le container
    
    //physical inputs nodes
    eStopA                  = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, E_STOP_A);
    eStopB                  = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, E_STOP_B);
    startCycle              = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, START_CYCLE);

    //physical outputs nodes
    buzzer                  = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, BUZZER);
    servoOn                 = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, SERVO_ON);
    triggerPR               = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TRIGGER_PR);
    immediateStop           = (PF8574BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, IMMEDIATE_STOP);
    alarmsReset             = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, ALARM_RESET);
    freeRun                 = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, FREE_RUN);

    // virtuals outputs nodes
    servoReady              = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, SERVO_READY);
    servoActivated          = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, SERVO_ACTIVATED);
    zeroSpeed               = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, ZERO_SPEED);
    targetSpeedRated        = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TARGET_SPEED_RATED);
    targetPositionReached     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TARGET_POSITION_REACHED);
    //torqueLimitActivated    = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TORQUE_LIMIT_ACTIVATED);
    servoAlarm              = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, SERVO_ALARM);
    //magneticBreak           = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, MAGNETIC_BREAK);
    homeDone                = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, HOME_DONE);

    absolutePositionLost    = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, ABSOLUTE_POS_LOST);
    batteryAlarm            = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, BATTERY_ALARM);
    multipleTurnsOverflow   = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, MULTIPLE_TURNS_OVER);
    puuOverflow             = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, PUU_OVERFLOW);
    absoluteCoordonateNotSet = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, ABSOLUTE_COORD_NOT_SET);
    jog                     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, JOG);
    fwd                     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, FWD);
    rwd                     = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, RWD);
    jogFullTorque           = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, JOG_FULL_TORQUE);

    modbusError             = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, MODBUS_ERROR);
    driveInitialised        = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, DRIVE_INITIALISED);

    // virtual 32 bits inputs node
    user_target             = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, USER_TARGET); 
    return_pos              = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, RETURN_POS);
    v_cycleSpeed            = (VirtualUint32OutputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, V_CYCLE_SPEED); 
    v_jogSpeed              = (VirtualUint32OutputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, V_JOG_SPEED);

#ifndef DEBUG
   // Nodes read holding register
    status                              =  (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, SERVO_STATUS);
    absoluteCoordonateSystemStatus      =  (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, ABS_COORD);
    alarms                              =  (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, ALARMS);
    triggerRead                         =  (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TRIGGER_READ);
    jogSpeedRead                        =  (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, JOG_SPEED_READ);

    // Nodes write holding register
    auxFunctions            = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, AUX_FUNCTION);
    trigger                 = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TRIGGER); 
    jogSpeed                = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, JOG_SPEED);
    maxTorque               = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, MAX_TORQUE); 

    // double holding registers
    targetGo                = (Uint32OutputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TARGET_GO);
    targetBack              = (Uint32OutputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TARGET_BACK); 
    pr1Speed                = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, PR1SPEED);
    pr2Speed                = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, PR2SPEED);

    torque                  = (Uint32InputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TORQUE); 
    targetGoRead            = (Uint32InputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TARGET_GO_READ);
    targetBackRead          = (Uint32InputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, TARGET_BACK_READ);
    pr1SpeedBack            = (Uint32InputNode*)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, PR1SPEED_READ);
#endif 

    nbCyclesClear           = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, NB_CYCLES_CLEAR);
    nbCyclesMade            = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, NB_CYCLES_MADE); 
    nbCyclesToDo            = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, NB_CYCLES_TO_DO);
    goAndBack               = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_RESSORT_ROYAL, GO_AND_BACK);


#ifdef DEBUG
    VirtualUint32InputNode(char *name, char *parentName, uint32_t *hash, uint16_t webRefreshInterval);
    unsigned int  dummyHash = 0;

    status                  =  new VirtualUint32InputNode("status", "debug", &dummyHash, 0);
    absoluteCoordonateSystemStatus = new VirtualUint32InputNode("absoluteCoordonateSystemStatus", "debug",  &dummyHash, 0);
    alarms                  = new VirtualUint32InputNode("alarms", "debug",  &dummyHash, 0);
    triggerRead             = new VirtualUint32InputNode("triggerRead", "debug", &dummyHash, 0);
    jogSpeedRead            = new VirtualUint32InputNode("jogSpeedRead", "debug",  &dummyHash,0);

    // Nodes write holding register

    auxFunctions            = new VirtualUint32OutputNode("auxFunctions", "debug",  &dummyHash, 0); 
    trigger                 = new VirtualUint32OutputNode("trigger", "debug",  &dummyHash, 0);
    jogSpeed                = new VirtualUint32OutputNode("jogSpeed", "debug", &dummyHash, 0);
    maxTorque               = new VirtualUint32OutputNode("maxTorque", "debug", &dummyHash, 0); 
    
    // double holding registers
    targetGo                = new VirtualUint32OutputNode("targetGo", "debug",  &dummyHash, 0); 
    targetBack              = new VirtualUint32OutputNode("targetBack", "debug",  &dummyHash, 0); 
    pr1Speed                = new VirtualUint32OutputNode("pr1Speed", "debug",  &dummyHash, 0); 
    pr2Speed                = new VirtualUint32OutputNode("pr2Speed", "debug",  &dummyHash, 0); 
#endif

    if (!BorneUniverselle::isPlcBroken()){
        visu = new VisualIndicator(nbCyclesMade);
    }

   Serial.println("Fin du constructeur de la class RessortRoyal"); 
}

bool RessortRoyal::logiqueExecutor(){
    //Serial.print("B");
    long start = millis();
    if (PF8574BooleanInputNode::isInterrupt()){
        BorneUniverselle::refresHardwareInputs();
        Serial.printf("Latency: %lu [ms]\r\n", millis() - PF8574BooleanInputNode::getTimeOfInterupt());
        PF8574BooleanInputNode::clearInterruptFlag();
    }

    if ((!eStopA->getValue() || !eStopB->getValue()) && !immediateStop->getValue()){
        immediateStop->setValue(true);
        BorneUniverselle::prepareMessage(WARNING, "E stop A or E stop B !!!");
    }

    // De active drive eeprom storage
    if (auxFunctions->getValue() == 8){
        auxFunctions->setValue(-5); //6 mai 2024
        Serial.printf("%lu:: EEPROM deactivated\r\n", millis());
        return true;
    }

    displayAlarmsAndStatus();
    //Serial.println("before");
    if (nbCyclesClear->getIsChanged() && nbCyclesClear->getValue()){
        nbCyclesMade->setValue(0);
        Serial.println("Nb cycles clear");
        BorneUniverselle::prepareMessage(SUCCESS, "Nb cycles clear");
    }

    // Initialisation du servo drive
#ifndef DEBUG
    if (!initialised){
        driveInitialisation();
        // Serial.println("Will go out !");
        return true;   
    }
#endif

    if (alarmsReset->getValue() == true && alarmsReset->getIsChanged()){
        Serial.printf("%lu:: Alarm reset depuis l'interface\r\n", millis());
        goTarget = false;
        goBack = false;
        goHome = false;
    }

#ifndef DEBUG
    if (initialised){
#elif
    if (1 == 1){
#endif
        if (startCycle->getIsChanged() && startCycle->getValue() && firstStart){
            // First time start cycle do a home process....
            triggerPR->setValue(true); // PR 0 = home
            // trigger->setValue(0); // 7 décembre 2024
            Serial.printf("%lu::Go to first home\r\n", millis());
            goHome = true;
            goTarget = goBack = false;
        }

        if (homeDone->getValue() && goHome){
            triggerPR->setValue(false); // PR 0 = home
            Serial.printf("%lu:: Just arrived at home\r\n", millis());
            firstStart = false;
            goHome = false;
        }

        if (immediateStop->getIsChanged() && !immediateStop->getValue()){
            Serial.printf("%lu:: Immediate stop reset\r\n", millis());
            BorneUniverselle::prepareMessage(WARNING, "Immediate stop reset");
        }

        if (jog->getIsChanged()){ 
            Serial.println("Jog changed");
            if (jog->getValue()){
                maxTorque->setValue(jogFullTorque->getValue() ? NOMINAL_TORQUE : JOG_TORQUE);
            } else {
                 maxTorque->setValue(NOMINAL_TORQUE);
            }
            Serial.printf("Torque now is: %d \r\n", maxTorque->getValue());
        }

        if (jogFullTorque->getIsChanged() && jog->getValue()){
            maxTorque->setValue(jogFullTorque->getValue() ? NOMINAL_TORQUE : JOG_TORQUE);
            Serial.printf("Torque now is: %d \r\n", maxTorque->getValue());
        }

        // Cycle speed
        if (v_cycleSpeed->getIsChanged()){
            if (v_cycleSpeed->getValue() > SPEEDS_ARRAY_SIZE){
                v_cycleSpeed->setValue(15);
                char text[128];
                sprintf(text, "Max cycle speed is 15, lu %lu\r\n", v_cycleSpeed->getValue());
                BorneUniverselle::prepareMessage(WARNING, text);
            } else if ((int32_t)v_cycleSpeed->getValue() < 0){
                v_cycleSpeed->setValue(0);
                BorneUniverselle::prepareMessage(WARNING, "Min cycle speed is 0");
            }

            // drive params is 32 bits. Low word is 2 and high word is the spedd.
            setCycleSpeed(v_cycleSpeed->getValue());
            saveParameters();
        }

        // jog speed
        if (v_jogSpeed->getIsChanged()){
            jogSpeed->setValue(v_jogSpeed->getValue());
            saveParameters();
            BorneUniverselle::prepareMessage(SUCCESS, "Jog speed updated");
        }

        // target
        if (user_target->getValue() != targetGo->getValue()){
                    //Serial.printf("%u::Will copy user target: %u to drive\r\n", millis(), user_target->getValue());
                    targetGo->setValue(user_target->getValue()); // recopie le user target sur le target du drive
                    saveParameters();
                    BorneUniverselle::prepareMessage(SUCCESS, "User target updated");
        }

        // return pos (back pos)
        if (return_pos->getValue() != targetBack->getValue()){
            targetBack->setValue(return_pos->getValue()); // retour
            saveParameters();
            BorneUniverselle::prepareMessage(SUCCESS, "Back position updated");
        } 
        
        // Jog
        if (jog->getValue() && !goTarget && !goHome && !goBack){
                if (fwd->getIsChanged()){
                    jogSpeed->setValue(fwd->getValue() ? FWD_VALUE : STOP_VALLUE);
                    Serial.printf("%s\r\n", fwd->getValue() ? "Forward" : "stop");
                }

                if (rwd->getIsChanged()){
                    jogSpeed->setValue(rwd->getValue() ? RWD_VALUE: STOP_VALLUE);
                    Serial.printf("%s\r\n", rwd->getValue() ? "Reverse" : "stop");
                } 
        }    
        
        // Arrivé à la position
        if (zeroSpeed->getValue() || (triggerRead->getValue()== PR1_DONE || triggerRead->getValue()== PR2_DONE)){ 
            // Start
            if (startCycle->getValue() && startCycle->getIsChanged() && !goTarget && !goHome && !goBack && !firstStart  && !jog->getValue() && !freeRun->getValue()){
                if (trigger->getValue() == 1){
                    //firstStart = true; // C'est le cas ou le ESP a redemarré et le trigger est resté a 1 ou que l'on a eu un immediaet stop
                    if (!immediateStop->getValue()){
                        trigger->setValue(2); // 1er mai 2024 Apres un laché des boutons start, le pr est resté a 1
                        Serial.println("Go to target 2");
                        goBack = true;        //  Donc le vilebrecain doit remonter
                        return true;
                    } else {
                        if (immediateStop->getValue()){
                            BorneUniverselle::prepareMessage(WARNING, "Before restart you have to remove immediate stop button");
                        }
                    }
                } else {
                    // Le pr vaut o ou 2
                    if (!immediateStop->getValue()){
                        // start du cycle
                        Serial.printf("%lu:: Start cycle\r\n", millis());
                        goTarget = true;
                        // start drive
                        trigger->setValue(1);
                        Serial.println("go to target 1");
                        return true;
                    } else {
                        if (immediateStop->getValue()){
                            BorneUniverselle::prepareMessage(WARNING, "Before restart you have to remove immediatStop button");
                        }
                    }
                }
            }

            // At target
            if (goTarget && triggerRead->getValue()== PR1_DONE ){
                Serial.printf("%lu:: Servo at target position\r\n", millis());
                goTarget = false;

                if (goAndBack->getValue()){
                    Serial.println("Go and back, at target will go back");
                    trigger->setValue(2);
                    goBack = true;
                } else {
                    nbCyclesMade->setValue(nbCyclesMade->getValue() + 1);
                }
               
                
                return true;
            }

            // At back position
            if (goBack && triggerRead->getValue()== PR2_DONE ){
                Serial.printf("%lu::Servo at back position\r\n", millis()); 
                goBack = false;
                nbCyclesMade->setValue(nbCyclesMade->getValue() + 1);
                return true;
            }
        } else {
            // en mouvement

            // Laché le bouton start
            if (!startCycle->getValue() && (goTarget || (goBack && !goAndBack->getValue()))){
                immediateStop->setValue(true);
                goTarget = false;
                goBack = false;
                BorneUniverselle::prepareMessage(WARNING, "Start button off during cycle");
            }

            if (goTarget || goBack){
                //Serial.printf("%u::In Motion True\r\n", millis());
                return true;
            }
        }

        if (nbCyclesToDo->getIsChanged()){
            Serial.printf("Le nombre de cycle a faire a changé: now %lu\r\n", nbCyclesToDo->getValue());
            visu->setMaxValue(nbCyclesToDo->getValue());    
        }
    } // drive initialised

    if (millis() - start > 200){
        Serial.printf("logiqueExecutor time duration: %lu\r\n", millis() - start);
    }
   
    return true;
}

void RessortRoyal::displayAlarmsAndStatus(){
    // Affiche l'erreur modbus
    MyModbus& myModbus = MyModbus::getInstance(); // singleton 
    if (myModbus.getLastEvent() == Modbus::EX_SUCCESS){
        modbusError->setValue(false);
    }  else {
        modbusError->setValue(true);
    }

    // Affiche les etats du drive
    servoReady          ->setValue(status->getValue() &   0b0000000000000001);
    servoActivated      ->setValue(status->getValue() &   0b0000000000000010);
    zeroSpeed           ->setValue(status->getValue() &   0b0000000000000100);
    targetSpeedRated    ->setValue(status->getValue() &   0b0000000000001000);
    targetPositionReached ->setValue(status->getValue() &  0b0000000000010000);
    //torqueLimitActivated->setValue(status->getValue() &  0b0000000000100000);
    servoAlarm          ->setValue(status->getValue() & 0b0000000001000000);
    //magneticBreak     ->setValue(status->getValue() &   0b0000000010000000);
    homeDone             ->setValue(status->getValue() &  0b0000000100000000);

    absolutePositionLost    ->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000001);
    batteryAlarm            ->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000010);
    multipleTurnsOverflow   ->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000100);
    puuOverflow             ->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000001000);
    absoluteCoordonateNotSet ->setValue(absoluteCoordonateSystemStatus->getValue() & 0b000000000010000);

    // Envoie un message au changement d'etats
    // no getIsChanged here because getIschanged is not running when no client connected
    if (alarms->getValue() != alarmsCache){
        if (alarms->getValue() == 0){
            BorneUniverselle::prepareMessage(SUCCESS, "Tout est correct");
        } else {
            char text[128];
            sprintf(text, " Nouvelle valeur du status d'alarme: %u", alarms->getValue());
            BorneUniverselle::prepareMessage(WARNING, text);
        }
        alarmsCache = alarms->getValue();
    }

    if (freeRun->getIsChanged()){
        BorneUniverselle::prepareMessage(SUCCESS, freeRun->getValue() ? "Free run activated" : "Free run desactivated");
        Serial.printf("%s\r\n", freeRun->getValue() ? "Free run activated" : "Free run desactivated");
    }
}

void RessortRoyal::driveInitialisation(){
    Serial.printf("%lu::logiqueExecutor: phase: %d\r\n", millis(), phase);
    switch (phase){
        case 0:  auxFunctions->setValue(5); // init volatil memory 6 mai 2024
                phase++;
        break;


        case 1: servoOn->setValue(true);  // energise la drive
                startInit = millis();
                phase++;
        break;

        case 2: if (millis() - startInit > DELAY_INIT){
                    phase++;
                }    
        break;


        case 3: {
                    if (!modbusError->getValue()){
                        initialised = true;
                        Serial.println("Servo drive initailised, will read values and prepare interface");
                        Serial.println("--------------------------------------------------------------");
                        // intialise web interface from value saved on the drive
                    
                        uint32_t targetGoValue = targetGoRead->getValue();
                        Serial.printf("Target Go lu du drive: %lu\r\n", targetGoValue);
                        user_target->setValue(targetGoValue);
                        targetGo->setValue(targetGoValue);
                        
                        uint32_t targetBackValue = targetBackRead->getValue();
                        Serial.printf("Target Back lu du drive: %lu\r\n", targetBackValue);
                        targetBack->setValue(targetBackValue);
                        return_pos->setValue(targetBackValue);
                            
                        uint16_t jogSpeedValue = jogSpeedRead->getValue();
                        Serial.printf("Jog speed lu: %u\r\n", jogSpeedValue);
                        v_jogSpeed->setValue(jogSpeedValue);
                        jogSpeed->setValue(jogSpeedValue);

                        uint32_t speed = pr1SpeedBack->getValue();
                        speed = speed >> 16;
                        v_cycleSpeed->setValue(speed);
                        setCycleSpeed(speed);
                        Serial.printf("PR1 speed lue du drive et isolée: %lu\r\n", speed);

                        maxTorque->setValue(NOMINAL_TORQUE);
                        driveInitialised->setValue(true);
                        
                        BorneUniverselle::prepareMessage(SUCCESS, "Servo drive initialised"); // On ne verra jamais ce message car le drive sera probablement initialisé avant que le client web se connecte
                        Serial.println("--------------------------------------------------------------");
                        if (homeDone->getValue()){
                            // Le PLC a restarté mais le home a déja été fait
                            firstStart = false; 
                        } 
                    }      
                    break;
                }
    }
}

void RessortRoyal::setCycleSpeed(uint8_t cycleSpeed){
    // drive params is 32 bits. Low word is 2 and high word is the spedd.
    // Doc page 8.191
    uint driveValue = cycleSpeed << 16; // on shift la vitesse dans le high word
    driveValue +=2; // low word: 2-> single mouvment stop when it finish
    Serial.printf("New user speed: %u. Will set register with value 0x%08x\r\n", cycleSpeed, driveValue);

    pr1Speed->setValue(driveValue);
    pr2Speed->setValue(driveValue);
    BorneUniverselle::prepareMessage(SUCCESS, "Cycle speed updated");
}

void RessortRoyal::saveParameters(){
    auxFunctions->setValue(8); // 6 mai 2024
    Serial.printf("%lu:: Parametres de persistance sauvgardés\r\n", millis());
}



// To do
//initialiser le torque a 1