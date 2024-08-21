#include "Formaca.h"

Formaca::Formaca() {
    Serial.println(CONSTR_FORMACA);

    buzzer = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, BUZZER);
    eStopA = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ESTOPA);
    capteur_pression_air = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CAPTEUR_PRESSION_AIR);
    startCycle = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, STARTCYCLE);
    servoOn = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, SERVOON);
    goHome = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, GOHOME);
    alarmsReset = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ALARMSRESET);
    jog = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG);
    fwd = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, FWD);
    rwd = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, RWD);
    goPosPark = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, GO_POS_PARK);
    servoReady = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, SERVOREADY);
    servoActivated = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, SERVOACTIVATED);
    zeroSpeed = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ZEROSPEED);
    targetSpeedRated = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TARGETSPEEDRATED);
    targetPositionReached = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ATTARGET);
    servoAlarm = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, SERVOALARM);
    batteryAlarm = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, BATTERYALARM);
    multipleTurnsOverflow = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, MULTIPLETURNSOVERFLOW);
    puuOverflow = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PUUOVERFLOW);
    absoluteCoordonateNotSet = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ABSOLUTECOORDONATENOTSET);
    homeDone = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, HOMEDONE);
    modbusError = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, MODBUSERROR);
    driveInitialised = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, DRIVEINITIALISED);
    user_target_A = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, USER_TARGET_A);
    user_target_B = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, USER_TARGET_B);
    v_jogSpeed = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_JOG_SPEED);
    v_cycleSpeed = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, VCYCLE_SPEED);
    maxTorque = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TORQUE_CTRL);

    overAllLenght   = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, OVERALL_LENGTH);
    parkOffset      = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PARK_OFFSET);
    zeroOffset      = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ZERO_OFFSET);
    bladesSpacing    = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, BLADES_SPACING);

    nbCyclesVoulus = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, NB_CYCLES_VOULUS);
    nbCyclesMade = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, NB_CYCLES_FAIT);
    recette = (VirtualTextOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CHOIX_RECETTE);
    status = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, STATUS);
    absoluteCoordonateSystemStatus = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ABSOLUTE_COORDONATE_SYSTEM_STATUS);
    alarms = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ALARMS);
    trigger_read = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TRIGGER_READ);
    jogSpeedRead = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG_SPEED_READ);
    auxFunctions = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, AUX_FUNCTION);
    triggerPR = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TRIGGER);
    jogSpeed = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG_SPEED);
    Position = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, POSITION);
    torque = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TORQUE);
    pr1SpeedRead = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR_SPEED_READ);
    target_A = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TARGET_A);
    target_B = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TARGET_B);
    pr1Speed = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR1_SPEED);
    pr2Speed = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR2_SPEED);

    immediateStop           = (PF8574BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, IMMEDIATE_STOP);
    alarmsReset             = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ALARM_RESET);
    freeRun                 = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, FREE_RUN);
    absolutePositionLost    = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ABSOLUTE_POS_LOST);
    nbCyclesClear           = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, NB_CYCLES_CLEAR);

    if (!LittleFS.begin()){
        BorneUniverselle::setPlcBroken("Formaca::Formaca An Error has occurred while mounting LittleFS");
        return;
    } else {
        // read and parse the json file
        File file = LittleFS.open(CONFIG_FILE_NAME, FILE_READ);
        JsonDocument doc;
        DeserializationError error = deserializeJson(doc, file);
        if (error){
            char buff[128];
            sprintf(buff, "%lu:: %s file: deserializeJson() failed: ", millis(), CONFIG_FILE_NAME);
            strcpy_P(buff + strlen(buff) , (const prog_char*) error.f_str());
            BorneUniverselle::setPlcBroken(buff);
            return;
        } else {
            strlcpy(parameters.machineName, doc[MACHINE], sizeof(parameters.machineName));
            parameters.overAllLenght = doc[OVERALL__LENGHT];
            parameters.parkOffset    = doc[PARK__OFFSET];
            parameters.zeroOffset    = doc[ZERO__OFFSET];
            parameters.bladesSpacing = doc[BLADES__SPACING];
            uint8_t idRecette = 0;
            for (JsonObject recette : doc[RECETTES].as<JsonArray>()) {
                parameters.recettes[idRecette].longlength = recette[LONG_LENGTH];
                parameters.recettes[idRecette].shortLength = recette[SHORT_LENGTH];
                strlcpy(parameters.recettes[idRecette].name, recette[NAME], sizeof(parameters.recettes[idRecette].name));
                idRecette++;
            }
            parameters.nbRecettes = idRecette;
        }

        if (!strcmp(parameters.machineName, MACHINE_RESP)){
            //BorneUniverselle::setPlcBroken("Formaca::Formaca The machine name is not corresponding !");
            Serial.printf("Machine name received: %s, machine name ref: %s\r\n", parameters.machineName,  MACHINE_RESP);
            //return;
        }

        Serial.printf("Longeur brute: %.2f\r\n", parameters.overAllLenght);
        Serial.printf("Offset parque: %.2f\r\n", parameters.parkOffset);
        Serial.printf("Offset zero: %.2f\r\n", parameters.zeroOffset);
        Serial.printf("Blade spacing: %.2f\r\n", parameters.bladesSpacing);
        Serial.printf("Nb recettes: %u\r\n", parameters.nbRecettes);
        Serial.println("Recettes");
        Serial.println("--------");
        for (uint8_t id = 0; id < parameters.nbRecettes; id++){
            Serial.printf("    Name: %s\r\n", parameters.recettes[id].name);
            Serial.printf("    Short lenght: %.2f\r\n", parameters.recettes[id].shortLength);
            Serial.printf("    Long lenght: %.2f\r\n", parameters.recettes[id].longlength);
            Serial.println();
        }

        drompDownIndicator = new DropDown(recette);
    }	
}

bool Formaca::logiqueExecutor() {
    // Method implementation
    if (PF8574BooleanInputNode::isInterrupt()){
        BorneUniverselle::refresHardwareInputs();
        Serial.printf("Latency: %lu [ms]\r\n", millis() - PF8574BooleanInputNode::getTimeOfInterupt());
        PF8574BooleanInputNode::clearInterruptFlag();
    }

    if ((eStopA->getValue()) && !immediateStop->getValue()){
        immediateStop->setValue(true);
        BorneUniverselle::prepareMessage(WARNING, "Emergency stop !!!");
    }

     // De active drive eeprom storage
    if (auxFunctions->getValue() == 8){
        auxFunctions->setValue(-5);
        Serial.printf("%lu:: Drive EEPROM deactivated\r\n", millis());
        return true;
    }

    if (BorneUniverselle::isNewClientConnected()){
        Serial.println("NEW CLIENT CONNECTED !!!!!!!!!!!!!!!!!!!!!!");
        JsonDocument docToSend;
        JsonArray recettes = docToSend[RECETTES].to<JsonArray>();
        for (uint8_t id = 0; id < parameters.nbRecettes; id++){
            JsonObject recette = recettes.add<JsonObject>();
            recette[NAME] = parameters.recettes[id].name;
        }

        drompDownIndicator->setItems(docToSend);
        Serial.println("Will set persistants parameters");
        overAllLenght->setValue(parameters.overAllLenght);
        parkOffset->setValue(parameters.parkOffset);
        zeroOffset->setValue(parameters.zeroOffset);
        bladesSpacing->setValue(parameters.bladesSpacing);
        BorneUniverselle::clearNewClientConnected();
    }

    displayAlarmsAndStatus();

#ifndef DEBUG
    if (!initialised){
         // Initialisation du servo drive
        driveInitialisation();
        // Serial.println("Will go out !");
        return true;   
    }
#endif
    
    if (nbCyclesClear->getIsChanged() && nbCyclesClear->getValue()){
        nbCyclesMade->setValue(0);
        Serial.println("Nb cycles clear");
        BorneUniverselle::prepareMessage(SUCCESS, "Nb cycles clear");
    }

    if (alarmsReset->getValue() == true){
        Serial.printf("%lu:: Alarms reset\r\n", millis());
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
            //trigger->setValue(0);
            Serial.printf("%lu::Go to home\r\n", millis());
            goHome = true;
        }

        if (homeDone->getValue() && goHome){
            triggerPR->setValue(false); // PR 0 = home
            Serial.printf("%lu:: Just arrived at home\r\n", millis());
            firstStart = false;
            goHome = false;
        }

        // jog speed
        if (v_jogSpeed->getIsChanged()){
            jogSpeed->setValue(v_jogSpeed->getValue());
            saveDriveParameters();
            BorneUniverselle::prepareMessage(SUCCESS, "Jog speed updated");
        }
    } // drive initialised

    if (recette->getIsChanged()){
        Serial.printf("Nouvelle recette sélectionnée: %s\r\n", recette->getValue());
        if (!setNewRecette(recette->getValue())){
            BorneUniverselle::setPlcBroken("Formaca: unable to set new recette");
        }
    }
    return true;
}

bool Formaca::setNewRecette(char *recette){
    uint8_t id, nbPieces;
    float longlength, shortlenght;
    for (id = 0; id < parameters.nbRecettes; id++){
        if (!strcmp(parameters.recettes[id].name, recette)){
            longlength = parameters.recettes[id].longlength;
            shortlenght =  parameters.recettes[id].shortLength;
            //nbPieces = overAllLenght / (longlength + shortlenght);
            break;
        }
    }


    return (id < parameters.nbRecettes) ? true: false;

}

void Formaca::displayAlarmsAndStatus(){
    // Affiche l'erreur modbus
    if (MyModbus::getLastEvent() == Modbus::EX_SUCCESS){
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
    if (alarms->getIsChanged()){
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

void Formaca::driveInitialisation(){
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
                    
                        uint16_t jogSpeedValue = jogSpeedRead->getValue();
                        Serial.printf("Jog speed lu: %u\r\n", jogSpeedValue);
                        v_jogSpeed->setValue(jogSpeedValue);
                        jogSpeed->setValue(jogSpeedValue);

                        uint32_t speed = pr1SpeedRead->getValue();
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

void Formaca::setCycleSpeed(uint8_t cycleSpeed){
    // drive params is 32 bits. Low word is 2 and high word is the spedd.
    // Doc page 8.191
    uint driveValue = cycleSpeed << 16; // on shift la vitesse dans le high word
    driveValue +=2; // low word: 2-> single mouvment stop when it finish
    Serial.printf("New user speed: %u. Will set register with value 0x%08x\r\n", cycleSpeed, driveValue);

    pr1Speed->setValue(driveValue);
    pr2Speed->setValue(driveValue);
    BorneUniverselle::prepareMessage(SUCCESS, "Cycle speed updated");
}

void Formaca::saveDriveParameters(){
    auxFunctions->setValue(8); // 6 mai 2024
    Serial.printf("%lu:: Parametres de persistance sauvgardés\r\n", millis());
}


