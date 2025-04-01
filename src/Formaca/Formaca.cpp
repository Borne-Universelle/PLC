#include "Formaca/Formaca.h"

Formaca::Formaca() {
    Serial.println(CONSTR_FORMACA);
    // Inscrit la callback
    
    BorneUniverselle::setInitialStateLoadedCallback([this]() {
        this->initialStateLoadedHandler();
    });

   // Initialisation des noeuds
    buzzer = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, BUZZER);
    eStopA = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ESTOPA);
    capteur_pression_air = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CAPTEUR_PRESSION_AIR);
    startCycle = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, STARTCYCLE);
    servoOn = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, SERVOON);
    alarmsReset = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ALARMSRESET);
    flipFlopScie = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, FLIP_FLOP_SCIE);
    jog = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG);
    fwd = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, FWD);
    rwd = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, RWD);
    jogFullTorque = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG_FULL_TORQUE);
    goToPark = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, GO_TO_PARK);
    gotoRef = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, GO_TO_REF);
    calibrate = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CALIBRATE);
    goHomeButton = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, GO_HOME_BUTTON);
    scier = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, SCIER);
    ejectButton = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, EJECT);
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
    v_jogSpeed = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_JOG_SPEED);
    v_cycleSpeed = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, VCYCLE_SPEED);
    v_maxTorque = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TORQUE_CTRL);
    overAllLenght = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, OVERALL_LENGTH);
    parkOffset = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PARK_OFFSET);
    posInch = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, POS_INCH);
    wasteLength = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, WASTE_LENGTH);
    rightStop = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, RIGHT_STOP);
    longLength = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, LENGTH);
    widthLength = (FloatOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, WIDTH_LENGTH);
    nbCyclesVoulus = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, NB_CYCLES_VOULUS);
    nbCyclesMade = (VirtualUint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, NB_CYCLES_EFFECTUES);
    recette = (VirtualTextOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CHOIX_RECETTE);
    status = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, STATUS_DRIVE);
    absoluteCoordonateSystemStatus = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ABSOLUTE_COORDONATE_SYSTEM_STATUS);
    alarms = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ALARMS);
    trigger_read = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TRIGGER_READ);
    jogSpeedRead = (Uint16InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG_SPEED_READ);
    auxFunctions = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, AUX_FUNCTION);
    trigger = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TRIGGER);
    doHome = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, DO_HOME);
    jogSpeed = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, JOG_SPEED);
    position = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, POSITION);
    maxTorque = (Uint16OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, MAX_TORQUE);
    pr1SpeedRead = (Uint32InputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR_SPEED_READ);
    target_A = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TARGET_A);
    target_B = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TARGET_B);
    target_C = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, TARGET_C);
    pr1Speed = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR1_SPEED);
    pr2Speed = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR2_SPEED);
    pr3Speed = (Uint32OutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, PR3_SPEED);
    immediateStop = (PF8574BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, IMMEDIATE_STOP);
    absolutePositionLost = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, ABSOLUTE_POS_LOST);
    nbCyclesClear = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, NB_CYCLES_CLEAR);
    vStart = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_START);
    cancelCycle = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CANCEL_CYCLE);
    cylinderCaptor = (BooleanInputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, CYLINDER_CAPTOR);
    v_servoOn = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_SERVO_ON);
    v_flipFlopScie = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_FLIP_FLOP_SCIE);
    v_immediateStop = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_IMMEDIATE_STOP);
    v_alarmsReset = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_ALARMS_RESET);

    if (BorneUniverselle::isPlcBroken()) {
        Serial.flush();
        Serial.println("PLC is broken, aborting Formaca constructor");
        return;
    }

    if (!LittleFS.begin()) {
        BorneUniverselle::setPlcBroken("Formaca::Formaca An Error has occurred while mounting LittleFS");
        return;
    } else {
        // read and parse the json file
        File file = LittleFS.open(CONFIG_FILE_NAME, FILE_READ);
        if (!file) {
            BorneUniverselle::setPlcBroken("Formaca::Formaca Failed to open config file");
            return;
        }
        JsonDocument doc;
        DeserializationError error = deserializeJson(doc, file);
        file.close();
        if (error) {
            char buff[128];
            sprintf(buff, "%lu:: %s file: deserializeJson() failed: ", millis(), CONFIG_FILE_NAME);
            strcpy_P(buff + strlen(buff), (const prog_char*)error.f_str());
            BorneUniverselle::setPlcBroken(buff);
            return;
        } else {
            strlcpy(parameters.machineName, doc[MACHINE], sizeof(parameters.machineName));
            parameters.overAllLenght = doc[OVERALL__LENGHT];
            parameters.reference = doc[REFERENCE];
            parameters.home = doc[HOME];
            parameters.parkOffset = doc[PARK__OFFSET];
            parameters.wasteLength = doc[WASTE__LENGTH];
            parameters.rightStop = doc[RIGHT__STOP];

            uint8_t idRecette = 0;
            for (JsonObject recette : doc[RECETTES].as<JsonArray>()) {
                parameters.recettes[idRecette].longlength = recette[LONG__LENGTH];
                parameters.recettes[idRecette].angle = recette[ANGLE];
                parameters.recettes[idRecette].width = recette[WIDTH__LENGTH];
                strlcpy(parameters.recettes[idRecette].name, recette[NAME], sizeof(parameters.recettes[idRecette].name));
                Serial.printf("Recette name: %s\r\n", parameters.recettes[idRecette].name);
                idRecette++;
            }
            parameters.nbRecettes = idRecette;
        }

        if (!strcmp(parameters.machineName, MACHINE_RESP)) {
            Serial.printf("Machine name received: %s, machine name ref: %s\r\n", parameters.machineName, MACHINE_RESP);
        }
        Serial.println("Persistance parameters");
        Serial.println("----------------------");
        Serial.printf("Home position: %lu\r\n", (unsigned long)parameters.home);
        Serial.printf("Référence: %lu\r\n", (unsigned long)parameters.reference);
        Serial.printf("Longeur brute: %.2f\r\n", parameters.overAllLenght);
        Serial.printf("Offset parque: %.2f\r\n", parameters.parkOffset);
        Serial.printf("Longeur du rebut: %.2f\r\n", parameters.wasteLength);
        Serial.printf("Butée droite: %.2f\r\n", parameters.rightStop);

        Serial.printf("Nb recettes: %u\r\n", parameters.nbRecettes);
        Serial.println("Recettes");
        Serial.println("--------");
        for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
            Serial.printf("    Name: %s\r\n", parameters.recettes[id].name);
            Serial.printf("    Long lenght: %.2f\r\n", parameters.recettes[id].longlength);
            Serial.printf("    Angle: %.2f\r\n", parameters.recettes[id].angle);
            Serial.printf("    Width: %.2f\r\n", parameters.recettes[id].width);
            Serial.println();
        }

        drompDownIndicator = new DropDown(recette);
        visu = new VisualIndicator(nbCyclesMade);
        if (!drompDownIndicator || !visu) {
            Serial.println("Error: Failed to allocate UI components");
            BorneUniverselle::setPlcBroken("Formaca::Formaca Failed to allocate DropDown or VisualIndicator");
            delete drompDownIndicator;
            delete visu;
            drompDownIndicator = nullptr;
            visu = nullptr;
            return;
        }
        flipFlopScie->setValue(false); // 8 février 2025 on met le flip flop de la scie à 0
    }
    Serial.println("Fin du constructeur Formaca");
}

Formaca::~Formaca() {
    delete drompDownIndicator;
    delete visu;
}

void Formaca::setEmergencyMode(bool status) {
    running = false;
    ejectPhase = false;
    parkPositionPhase = false;
    flipflopInAction = false;

    if (status) {
        if (immediateStop) immediateStop->setValue(true);
        bladeInhibit = false;
        if (!isEmergency) {
            BorneUniverselle::prepareMessage(ERROR, "Emergency stop !!!");
        }
    } else {
        if (isEmergency) {
            BorneUniverselle::prepareMessage(SUCCESS, "Emergency stop reset");
        }
        triggerPending = false;
    }
    isEmergency = status;
}

bool Formaca::isEmergencyMode() {
    return isEmergency;
}

bool Formaca::logiqueExecutor() {
    uint32_t start = millis();
    if (BorneUniverselle::isPlcBroken()) return false;

    if (PF8574BooleanInputNode::isInterrupt()) {
        BorneUniverselle::refresHardwareInputs();
        Serial.printf("Latency: %lu [ms]\r\n", millis() - PF8574BooleanInputNode::getTimeOfInterupt());
        PF8574BooleanInputNode::clearInterruptFlag();
    }

    if (cancelCycle && cancelCycle->getIsChanged() && cancelCycle->getValue() && running) {
        setEmergencyMode(true);
        BorneUniverselle::prepareMessage(ERROR, "Appui sur le bouton Cancel Cycle");
    }

    if (eStopA && ((!eStopA->getIsChanged() && !eStopA->getValue()) || (immediateStop && immediateStop->getIsChanged() && immediateStop->getValue()))) {
        setEmergencyMode(true);
    }

    if (capteur_pression_air && homeDone && capteur_pression_air->getIsChanged() && !capteur_pression_air->getValue() && homeDone->getValue()) {
        if (immediateStop) immediateStop->setValue(true);
        running = false;
        ejectPhase = false;
        parkPositionPhase = false;
        flipflopInAction = false;
        bladeInhibit = false;
        BorneUniverselle::prepareMessage(ERROR, "Attention on a perdu la pression d'air !!!");
    }

    if (cylinderCaptor && cylinderCaptor->getIsChanged() && !cylinderProtectionActivated) {
        cylinderProtectionActivated = true;
        BorneUniverselle::prepareMessage(SUCCESS, "La protection par capteur de cylindre est activée");
    }

    if (auxFunctions && auxFunctions->getValue() == 8) {
        auxFunctions->setValue(-5);
        Serial.printf("%lu:: Drive EEPROM deactivated\r\n", millis());
    }

    if (homeDone && position && homeDone->getValue() && goHome && (millis() - startDelayHome > (uint32_t)position->getRefreshInterval())) {
        goHome = false;
        homePos = position->getValue();
        saveMachineParameters();
        BorneUniverselle::prepareMessage(SUCCESS, "Position du home enregistrée");
        if (longLength && longLength->getValue() > 1 && longLength->getValue() < 100 && !isnan(longLength->getValue())) {
            goToParkPosition();
        }
    }

    if (bladeInhibit && (millis() - startFlipFlopScie > (unsigned long)BLADE_TIME) && cylinderCaptor && !cylinderCaptor->getValue() && cylinderProtectionActivated) {
        if (immediateStop) immediateStop->setValue(true);
        lock = true;
        Serial.println("Les cylindres ne sont pas rentrés pendant le temps imparti");
        BorneUniverselle::prepareMessage(ERROR, "Cylindres de maintien en fonction, je ne peux poursuivre la coupe");
    }

    if (bladeInhibit && (millis() - startFlipFlopScie > (unsigned long)BLADE_TIME) && !readyForNext && !triggerPending && targetPositionReached && targetPositionReached->getValue() && zeroSpeed && zeroSpeed->getValue() && !cylinderProtectionActivated) {
        bladeInhibit = false;
        readyForNext = true;
        Serial.println("Cas sans le capteur de cylindres, fin du temps d'attente");
    }

    if (cylinderCaptor && !readyForNext && !triggerPending && targetPositionReached && targetPositionReached->getValue() && zeroSpeed && zeroSpeed->getValue() && cylinderCaptor->isRisingEdge() && cylinderProtectionActivated) {
        bladeInhibit = false;
        readyForNext = true;
        Serial.println("Cas avec le capteur de cylindre, cylindres remontés avant le timeout");
    }

    if (flipflopInAction && (millis() - startFlipFlopScie > (unsigned long)FLIP_FLOP_TIME)) {
        if (flipFlopScie) flipFlopScie->setValue(false);
        flipflopInAction = false;
        Serial.println("Fin du flip flop de la scie");
    }

    if (alarmsReset && alarmsReset->getIsChanged() && alarmsReset->getValue() == true) {
        Serial.printf("%lu:: Alarms reset\r\n", millis());
        running = false;
        ejectPhase = false;
        parkPositionPhase = false;
        flipflopInAction = false;
        wasteCutting = false;
        normalCut = false;
        readyForNext = false;
        goHome = false;
        triggerPending = false;
        bladeInhibit = false;
        lock = false;
    }

    if (immediateStop && immediateStop->getIsChanged() && !immediateStop->getValue()) {
        Serial.printf("%lu:: Immediate stop reset\r\n", millis());
        setEmergencyMode(false);
    }

    if (position && posInch && position->getIsChanged()) {
        posInch->setValue(convToInch(position->getValue()));
    }

    displayAlarmsAndStatus();

    if (!initialised) {
        driveInitialisation();
        if (millis() - start > 100) {
            Serial.printf("LogicalExecutor take long time when drive is not initaialised: %lu\r\n", millis() - start);
        }
        return true;
    }

    if (triggerPending && (millis() - startMovment > 50)) {
        if (trigger) trigger->setValue(currentPr);
        triggerPending = false;
        Serial.printf("%lu:: trigger send\r\n", millis());
        currentPr++;

        if (currentPr > NB_PR) {
            currentPr = 1;
        }
        return true;
    }

    if ((getIsStartCycle() && homeDone && !homeDone->getValue()) || (goHomeButton && goHomeButton->getIsChanged() && goHomeButton->getValue())) {
        if (trigger) {
            trigger->setValue(120);
            trigger->setValue(0);
        }
        Serial.printf("%lu:: First start: Go to home\r\n", millis());
        goHome = true;
    }

    if (homeDone && homeDone->getIsChanged() && homeDone->getValue() && goHome) {
        if (doHome) doHome->setValue(false);
        Serial.printf("%lu:: Just arrived at home (%lu)\r\n", millis(), (unsigned long)homePos);
        startDelayHome = millis();
        running = false;
    }

    if (getIsStartCycle() && !running && jog && !jog->getValue() && homeDone && homeDone->getValue() && lock == false) {
        if (!isAtPArkPosition()) {
            goToParkPosition();
            return true;
        }

        if (longLength && (longLength->getValue() < 1 || longLength->getValue() > 100 || isnan(longLength->getValue()))) {
            const char* currentRecipe = recette ? recette->getValue() : nullptr;
            bool recipeFound = false;

            if (!currentRecipe || strlen(currentRecipe) == 0) {
                Serial.println("Pas de recette sélectionnée, recherche de la recette par défaut...");
                if (parameters.nbRecettes > 0) {
                    currentRecipe = parameters.recettes[0].name;
                    Serial.printf("Utilisation de la première recette disponible: %s\n", currentRecipe);
                    recipeFound = true;
                }
            } else {
                recipeFound = true;
            }

            if (!recipeFound) {
                BorneUniverselle::prepareMessage(ERROR, "Aucune recette n'est sélectionnée ou disponible");
                return false;
            }

            if (!setNewRecette(currentRecipe)) {
                BorneUniverselle::prepareMessage(ERROR, "La recette sélectionnée n'est pas valide");
                return false;
            }
        }

        if (capteur_pression_air && !capteur_pression_air->getValue()) {
            BorneUniverselle::prepareMessage(ERROR, "Il n'y a pas de pression d'air !!!");
            return true;
        }

        if (immediateStop && immediateStop->getValue()) {
            BorneUniverselle::prepareMessage(ERROR, "La machine est en arrÊt");
            return true;
        }

        running = true;
        parkPositionPhase = false;
        ejectPhase = false;
        Serial.printf("%lu:: Début du cycle: on va couper le rebus (a droite), longeur du morceau fini: %.2f\r\n", millis(), longLength ? longLength->getValue() : 0.0f);
        Serial.printf("référence: %.2f, longeur totale: %.2f, rebus + 1/2 ep. lame: %.2f\r\n", convToInch(parameters.reference), parameters.overAllLenght, totalWasteLength);
        wasteCutting = true;
        goToPosition(parameters.reference - convToPUU(parameters.overAllLenght - totalWasteLength + 0.9));
        return true;
    }

    if (getIsStartCycle() && running && lock) {
        lock = false;
    }

    if (jog && jog->getIsChanged()) {
        Serial.printf("%lu::Formaca:: new value of jog button: %s\r\n", millis(), jog->getValue() ? "true" : "false");
    }

    if (jog && jog->getValue()) {
        readyForNext = false;
        jogTreatment();
    }

    if (!running) {
        interfaceTreatment();
    } else {
        machineTreatment();
    }

    return true;
}

bool Formaca::getIsStartCycle() {
    return (startCycle && startCycle->getIsChanged() && startCycle->getValue()) || (vStart && vStart->getIsChanged() && vStart->getValue());
}

void Formaca::interfaceTreatment() {
    if (v_servoOn && v_servoOn->getIsChanged() && servoOn) {
        servoOn->setValue(v_servoOn->getValue());
    }
    if (v_flipFlopScie && v_flipFlopScie->getIsChanged() && flipFlopScie) {
        flipFlopScie->setValue(v_flipFlopScie->getValue());
    }
    if (v_immediateStop && v_immediateStop->getIsChanged() && immediateStop) {
        immediateStop->setValue(v_immediateStop->getValue());
        if (alarmsReset) alarmsReset->setValue(v_alarmsReset ? v_alarmsReset->getValue() : false);
    }
    if (v_alarmsReset && v_alarmsReset->getIsChanged() && alarmsReset) {
        alarmsReset->setValue(v_alarmsReset->getValue());
        if (immediateStop) immediateStop->setValue(v_immediateStop ? v_immediateStop->getValue() : false);
    }
    if (overAllLenght && overAllLenght->getIsChanged()) {
        BorneUniverselle::prepareMessage(SUCCESS, "La longeur brute a été mis à jour");
        BorneUniverselle::prepareMessage(WARNING, "Il est nécéssaire d'aller a la position park");
        parameters.overAllLenght = overAllLenght->getValue();
        saveMachineParameters();
        if (parkOffset) {
            parkPosition = parameters.reference - convToPUU(overAllLenght->getValue() + parkOffset->getValue());
            Serial.printf("Nouvelle position de park: %lu pulses, soit %.2f inch\r\n", (long unsigned int)parkPosition, convToInch(parkPosition));
        }
    }

    if (wasteLength && wasteLength->getIsChanged()) {
        if (wasteLength->getValue() > parameters.overAllLenght) {
            BorneUniverselle::prepareMessage(WARNING, "La longeur du rebut ne peut pas être plus grand que la longeur brute");
        } else {
            totalWasteLength = wasteLength->getValue() + bladelostLength;
            BorneUniverselle::prepareMessage(SUCCESS, "La longeur du rebut a été mis à jour");
            parameters.wasteLength = wasteLength->getValue();
            saveMachineParameters();
        }
    }

    if (parkOffset && parkOffset->getIsChanged() && overAllLenght) {
        parameters.parkOffset = parkOffset->getValue();
        parkPosition = parameters.reference - convToPUU(overAllLenght->getValue() + parkOffset->getValue());
        char text[128];
        sprintf(text, "L'offset de chargement a changé: %.2f[inch], nouvelle position de park: %.2f\r\n", parkOffset->getValue(), convToInch(parkPosition));
        BorneUniverselle::prepareMessage(SUCCESS, text);
        BorneUniverselle::prepareMessage(WARNING, "Il faut aller en position park");
        saveMachineParameters();
    }

    if (rightStop && rightStop->getIsChanged()) {
        BorneUniverselle::prepareMessage(SUCCESS, "La butée droite a été mis a jour");
        parameters.rightStop = rightStop->getValue();
        saveMachineParameters();
    }

    if (recette && recette->getIsChanged()) {
        Serial.printf("Nouvelle recette sélectionnée: %s\r\n", recette->getValue());
        if (!setNewRecette(recette->getValue())) {
            BorneUniverselle::setPlcBroken("Incapable de selectionner la nouvelle recette");
        }
    }

    if (nbCyclesClear && nbCyclesClear->getIsChanged() && nbCyclesClear->getValue() && nbCyclesMade) {
        nbCyclesMade->setValue(0);
        Serial.println("Nb cycles clear");
        BorneUniverselle::prepareMessage(SUCCESS, "Nb cycles clear by nb cycle clear button");
    }

    if (v_cycleSpeed && v_cycleSpeed->getIsChanged()) {
        cycleSpeedChange();
    }

    if (nbCyclesVoulus && nbCyclesVoulus->getIsChanged() && visu) {
        Serial.printf("Le nombre de cycle a faire a changé: now %lu\r\n", (unsigned long)nbCyclesVoulus->getValue());
        visu->setMaxValue(nbCyclesVoulus->getValue());
    }

    if (goToPark && goToPark->getIsChanged() && goToPark->getValue()) {
        Serial.println("Go to park par le bouton park");
        goToParkPosition();
    }
}

void Formaca::machineTreatment() {
    if (wasteCutting && targetPositionReached && targetPositionReached->getValue() && !getIsStartCycle() && zeroSpeed && zeroSpeed->getValue() && !normalCut && (millis() - startMovment > 1000)) {
        Serial.println("Just arrived at wast cutting position: will saw !");
        wasteCutting = false;
        saw();
        normalCut = true;
        cutModel = LEFT;
    }

    if (normalCut && targetPositionReached && targetPositionReached->getValue() && zeroSpeed && zeroSpeed->getValue() && !bladeInhibit && !readyForNext && !triggerPending && (millis() - startMovment > 1000)) {
        Serial.println("On est arrivé à la position, on scie.");
        saw();
    }

    if (normalCut && !bladeInhibit && readyForNext && position) {
        Serial.println("Fin du sciage on va voir si on peut faire encore un morceau");
        if (cutModel == LEFT) {
            Serial.println("CutModel = LEFT");
            uint32_t newPosition = position->getValue() + convToPUU(bladelostLength + parameters.recettes[idRecette].longlength + bladelostLength);
            if (newPosition < parameters.reference) {
                goToPosition(newPosition);
                BorneUniverselle::prepareMessage(SUCCESS, "Déplacement pour le sciage gauche");
            } else {
                eject();
            }
        } else {
            Serial.println("CutModel = RIGHT");
            float triangleDroit = tan(angleRadians) * parameters.recettes[idRecette].width;
            float displacement = parameters.recettes[idRecette].longlength - 2 * triangleDroit + 2 * bladelostLength;
            float newPosition = position->getValue() + convToPUU(displacement);
            if (newPosition < parameters.reference) {
                goToPosition(newPosition);
                BorneUniverselle::prepareMessage(SUCCESS, "Déplacement pour le sciage à droite");
            } else {
                eject();
            }
        }
        readyForNext = false;
        cutModel = !cutModel;
    }

    if (ejectPhase && targetPositionReached && zeroSpeed && zeroSpeed->getValue() && !triggerPending && (millis() - startMovment > 1000)) {
        ejectPhase = false;
        Serial.println("Arrivé à la position d'ejection");
        goToParkPosition();
    }

    if (parkPositionPhase && targetPositionReached && zeroSpeed && zeroSpeed->getValue() && (millis() - startMovment > 1000)) {
        BorneUniverselle::prepareMessage(SUCCESS, "Fin du cycle");
        normalCut = false;
        running = false;
        parkPositionPhase = false;
        if (nbCyclesMade) nbCyclesMade->setValue(nbCyclesMade->getValue() + 1);
    }
}

void Formaca::eject() {
    normalCut = false;
    wasteCutting = false;
    BorneUniverselle::prepareMessage(SUCCESS, "Ejection");
    goToPosition(convToPUU(parameters.rightStop));
    ejectPhase = true;
    ejectionStartTime = millis();
}

void Formaca::jogTreatment() {
    if (ejectButton && ejectButton->getIsChanged() && ejectButton->getValue()) {
        eject();
    }
    if (v_jogSpeed && v_jogSpeed->getIsChanged() && jogSpeed) {
        jogSpeed->setValue(v_jogSpeed->getValue());
        saveDriveParameters();
        BorneUniverselle::prepareMessage(SUCCESS, "Jog speed updated");
    }

    if (jogFullTorque && jogFullTorque->getIsChanged() && v_maxTorque && maxTorque) {
        v_maxTorque->setValue(jogFullTorque->getValue() ? NOMINAL_TORQUE : JOG_TORQUE);
        maxTorque->setValue(v_maxTorque->getValue());
        Serial.printf("Torque now is: %lu \r\n", (unsigned long)v_maxTorque->getValue());
    }

    if (fwd && fwd->getIsChanged() && position && jogSpeed) {
        if (fwd->getValue()) {
            if (convToPUU(position->getValue()) > 2) {
                jogSpeed->setValue(FWD_VALUE);
                BorneUniverselle::prepareMessage(SUCCESS, "On lance le jog fwd !");
            } else {
                jogSpeed->setValue(STOP_VALLUE);
                BorneUniverselle::prepareMessage(WARNING, "On est trop pres du switch de home. Mouvement interdit !");
            }
        } else {
            jogSpeed->setValue(STOP_VALLUE);
        }
    }

    if (rwd && rwd->getIsChanged() && jogSpeed) {
        jogSpeed->setValue(rwd->getValue() ? RWD_VALUE : STOP_VALLUE);
        Serial.printf("%s\r\n", rwd->getValue() ? "Jog reverse" : "stop");
    }

    if (calibrate && calibrate->getIsChanged() && calibrate->getValue() && position && overAllLenght && parkOffset) {
        parameters.reference = position->getValue();
        saveMachineParameters();
        BorneUniverselle::prepareMessage(SUCCESS, "La machine est calibrée!!!");
        parkPosition = parameters.reference - convToPUU(overAllLenght->getValue() + parkOffset->getValue());
        Serial.printf("Nouvelle position de parque: %lu [pulses] soit: %.2f [inch]\r\n", (long unsigned int)parkPosition, convToInch(parkPosition));
    }

    if (goHomeButton && goHomeButton->getIsChanged() && goHomeButton->getValue()) {
        Serial.printf("Go to home: %lu\r\n", (unsigned long)parameters.home);
        goToPosition(parameters.home);
    }

    if (gotoRef && gotoRef->getIsChanged() && gotoRef->getValue()) {
        Serial.printf("Go to reference position: %lu\r\n", (unsigned long)parameters.reference);
        goToPosition(parameters.reference);
    }

    if (scier && scier->getIsChanged() && scier->getValue()) {
        saw();
    }
}

void Formaca::goToParkPosition() {
    if (overAllLenght && wasteLength && (overAllLenght->getValue() < 4 || wasteLength->getValue() < 1)) {
        BorneUniverselle::prepareMessage(SUCCESS, "Vous devez spécifier une longeur brute > 4 '' et une longeur de rebut > 1 ''");
    } else {
        BorneUniverselle::prepareMessage(SUCCESS, "La machine va à la position park");
        goToPosition(parkPosition);
        Serial.printf("Go to park position: %lu puu soit %.2f inch\r\n", (long unsigned int)parkPosition, convToInch(parkPosition));
        parkPositionPhase = true;
    }
}

bool Formaca::isAtPArkPosition() {
    if (position && position->getValue() > parkPosition - 10 && position->getValue() < parkPosition + 10) {
        parkPositionPhase = false;
        if (nbCyclesMade) nbCyclesMade->setValue(nbCyclesMade->getValue() + 1);
        return true;
    }
    return false;
}

void Formaca::saw() {
    if (flipFlopScie) {
        flipFlopScie->setValue(true);
        flipflopInAction = true;
        bladeInhibit = true;
        startFlipFlopScie = millis();
        Serial.printf("%lu:: Start scie\r\n", millis());
        BorneUniverselle::prepareMessage(SUCCESS, "Début du sciage");
    }
}

void Formaca::cycleSpeedChange() {
    if (v_cycleSpeed) {
        if (v_cycleSpeed->getValue() > SPEEDS_ARRAY_SIZE) {
            v_cycleSpeed->setValue(15);
            char text[128];
            sprintf(text, "Max cycle speed is 15, lu %lu\r\n", (unsigned long)v_cycleSpeed->getValue());
            BorneUniverselle::prepareMessage(WARNING, text);
        } else if ((int32_t)v_cycleSpeed->getValue() < 0) {
            v_cycleSpeed->setValue(0);
            BorneUniverselle::prepareMessage(WARNING, "Min cycle speed is 0");
        }
        setCycleSpeed(v_cycleSpeed->getValue());
        saveDriveParameters();
    }
}

void Formaca::initialStateLoadedHandler() {
    /*
    Serial.println("NEW CLIENT CONNECTED AND LOADED!!!!!!!!!!!!!!!!!!!!!!");
    JsonDocument docToSend;
    JsonArray recettes = docToSend[RECETTES].to<JsonArray>();
    for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
        JsonObject recetteObj = recettes.add<JsonObject>();
        recetteObj[NAME] = parameters.recettes[id].name;
        Serial.printf("Preparing recette: %s\r\n", parameters.recettes[id].name);
    }

    if (drompDownIndicator) drompDownIndicator->setItems(docToSend);
    if (parameters.nbRecettes > 0) {
        if (!setNewRecette(parameters.recettes[0].name)) {
            BorneUniverselle::prepareMessage(ERROR, "Erreur lors du chargement de la recette par défaut");
        } else if (recette) {
            recette->setValue(parameters.recettes[0].name);
        }
    }
    Serial.println("Will set parameters to the web client");
    if (overAllLenght) overAllLenght->setValue(parameters.overAllLenght);
    if (parkOffset) parkOffset->setValue(parameters.parkOffset);
    if (wasteLength) wasteLength->setValue(parameters.wasteLength);
    if (rightStop) rightStop->setValue(parameters.rightStop);
    if (widthLength) widthLength->setValue(parameters.recettes[idRecette].width);
    if (longLength) longLength->setValue(parameters.recettes[idRecette].longlength);
    if (v_servoOn && servoOn) v_servoOn->setValue(servoOn->getValue());
    if (v_flipFlopScie && flipFlopScie) v_flipFlopScie->setValue(flipFlopScie->getValue());
    if (v_immediateStop && immediateStop) v_immediateStop->setValue(immediateStop->getValue());
    if (v_alarmsReset && alarmsReset) v_alarmsReset->setValue(alarmsReset->getValue());

    if (isEmergencyMode()) {
        BorneUniverselle::prepareMessage(ERROR, "Emergency stop !!!");
    }

    if (immediateStop && immediateStop->getValue()) {
        BorneUniverselle::prepareMessage(ERROR, "Il y a un arrêt immediat, causé soit par le E_STOP ou par le bouton CANCEL !!!");
    }

    if (capteur_pression_air && !capteur_pression_air->getValue()) {
        BorneUniverselle::prepareMessage(ERROR, "Attention on a perdu la pression d'air !!!");
    }
        */
}

bool Formaca::setNewRecette(const char *recette) {
    if (!recette || strlen(recette) == 0) {
        char message[256];
        snprintf(message, sizeof(message), "%s: %s", "Formaca::setNewRecette", "text from recette length is 0, probably recette component mis configured");
        BorneUniverselle::setPlcBroken(message);
        return false;
    }

    for (idRecette = 0; idRecette < parameters.nbRecettes; idRecette++) {
        if (!strcmp(parameters.recettes[idRecette].name, recette)) {
            break;
        }
    }

    Serial.printf("Nouveau choix de recette: %s, id: %d\r\n", recette, idRecette);
    if (widthLength) widthLength->setValue(parameters.recettes[idRecette].width);
    if (longLength) longLength->setValue(parameters.recettes[idRecette].longlength);
    angleRadians = parameters.recettes[idRecette].angle / 360 * 2 * PI;
    bladelostLength = BLADE_TICKNESS / (2 * sin(angleRadians));
    Serial.printf("Longeur perdue a cause de la demi épaisseur de la lame: %.4f [inch], angle: %.2f,  \r\n", bladelostLength, parameters.recettes[idRecette].angle);
    totalWasteLength = wasteLength ? wasteLength->getValue() + bladelostLength : bladelostLength;
    Serial.printf("Longeur du rebus: %.2f\r\n", totalWasteLength);
    return (idRecette < parameters.nbRecettes);
}

void Formaca::displayAlarmsAndStatus() {
    MyModbus& myModbus = MyModbus::getInstance();
    if (myModbus.getLastEvent() == Modbus::EX_SUCCESS && modbusError) {
        modbusError->setValue(false);
    } else if (modbusError) {
        modbusError->setValue(true);
    }

    if (status && status->getIsChanged()) {
        if (servoReady) servoReady->setValue(status->getValue() & 0b0000000000000001);
        Serial.printf("Servo ready: %s\r\n", status->getValue() & 0b0000000000000001 ? "true" : "false");
        if (servoActivated) servoActivated->setValue(status->getValue() & 0b0000000000000010);
        if (zeroSpeed) zeroSpeed->setValue(status->getValue() & 0b0000000000000100);
        if (targetSpeedRated) targetSpeedRated->setValue(status->getValue() & 0b0000000000001000);
        if (targetPositionReached) targetPositionReached->setValue(status->getValue() & 0b0000000000010000);
        Serial.printf("Target position reached: %s\r\n", status->getValue() & 0b0000000000010000 ? "true" : "false");
        if (servoAlarm) servoAlarm->setValue(status->getValue() & 0b0000000001000000);
        Serial.printf("Servo alarm: %s\r\n", status->getValue() & 0b0000000001000000 ? "true" : "false");
        if (homeDone) homeDone->setValue(status->getValue() & 0b0000000100000000);
        Serial.printf("Home done: %s\r\n", status->getValue() & 0b0000000100000000 ? "true" : "false");
        if (absolutePositionLost && absoluteCoordonateSystemStatus) absolutePositionLost->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000001);
        if (batteryAlarm && absoluteCoordonateSystemStatus) batteryAlarm->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000010);
        if (multipleTurnsOverflow && absoluteCoordonateSystemStatus) multipleTurnsOverflow->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000100);
        if (puuOverflow && absoluteCoordonateSystemStatus) puuOverflow->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000001000);
        if (absoluteCoordonateNotSet && absoluteCoordonateSystemStatus) absoluteCoordonateNotSet->setValue(absoluteCoordonateSystemStatus->getValue() & 0b000000000010000);
    }

    if (alarms && alarms->getIsChanged()) {
        if (alarms->getValue() == 0) {
            BorneUniverselle::prepareMessage(SUCCESS, "Tout est correct");
        } else {
            char text[128];
            sprintf(text, " Nouvelle valeur du status d'alarme: %u", alarms->getValue());
            BorneUniverselle::prepareMessage(WARNING, text);
        }
        alarmsCache = alarms->getValue();
    }
}

void Formaca::driveInitialisation() {
    static const uint32_t INIT_TIMEOUT = 15000; // 15 secondes
    Serial.printf("%lu::logiqueExecutor: phase: %d\r\n", millis(), phase);

    if (millis() - startInit > INIT_TIMEOUT) {
        Serial.println("Erreur : Initialisation du servo drive trop longue (>15s), forçage de la fin avec état partiel");
        BorneUniverselle::prepareMessage(WARNING, "Initialisation du servo drive interrompue après 15 secondes, vérifiez la connexion Modbus");
        initialised = true;
        if (driveInitialised) driveInitialised->setValue(false);
        return;
    }

    switch (phase) {
        case 0:
            if (auxFunctions) auxFunctions->setValue(5);
            phase++;
            break;

        case 1:
            if (servoOn) servoOn->setValue(true);
            startInit = millis();
            phase++;
            break;

        case 2:
            if (millis() - startInit > DELAY_INIT) {
                phase++;
            }
            break;

        case 3:
            if (modbusError && !modbusError->getValue()) {
                initialised = true;
                Serial.println("Servo drive initailised, will read values and prepare interface");
                Serial.println("--------------------------------------------------------------");
                uint16_t jogSpeedValue = jogSpeedRead ? jogSpeedRead->getValue() : 0;
                Serial.printf("Jog speed lu: %u\r\n", jogSpeedValue);
                if (v_jogSpeed) v_jogSpeed->setValue(jogSpeedValue);
                if (jogSpeed) jogSpeed->setValue(jogSpeedValue);
                uint32_t speed = pr1SpeedRead ? pr1SpeedRead->getValue() : 0;
                speed = speed >> 16;
                if (v_cycleSpeed) v_cycleSpeed->setValue(speed);
                setCycleSpeed(speed);
                Serial.printf("PR1 speed lue du drive et isolée: %lu\r\n", (unsigned long)speed);
                if (v_maxTorque) v_maxTorque->setValue(NOMINAL_TORQUE);
                if (maxTorque) maxTorque->setValue(NOMINAL_TORQUE);
                if (driveInitialised) driveInitialised->setValue(true);
                BorneUniverselle::prepareMessage(SUCCESS, "Servo drive initialised");
                Serial.println("--------------------------------------------------------------");
            }
            break;
    }
}

void Formaca::setCycleSpeed(uint8_t cycleSpeed) {
    uint driveValue = cycleSpeed << 16;
    driveValue += 2;
    Serial.printf("New user speed: %u. Will set register with value 0x%08x\r\n", cycleSpeed, driveValue);
    if (pr1Speed) pr1Speed->setValue(driveValue);
    if (pr2Speed) pr2Speed->setValue(driveValue);
    if (pr3Speed) pr3Speed->setValue(driveValue);
    BorneUniverselle::prepareMessage(SUCCESS, "Cycle speed updated");
}

void Formaca::saveDriveParameters() {
    if (auxFunctions) {
        auxFunctions->setValue(8);
        Serial.printf("%lu:: Parametres de persistance sauvgardés\r\n", millis());
    }
}

uint32_t Formaca::convToPUU(float length) {
    return length * PULSES_PER_INCH;
}

float Formaca::convToInch(uint32_t puu) {
    return (double)puu / (double)PULSES_PER_INCH;
}

bool Formaca::saveMachineParameters() {
    File file = LittleFS.open(CONFIG_FILE_NAME, FILE_WRITE);
    if (!file) {
        Serial.println("Error: Failed to open config file for writing");
        return false;
    }
    JsonDocument doc;
    doc[MACHINE] = MACHINE_RESP;
    doc[HOME] = parameters.home;
    doc[REFERENCE] = parameters.reference;
    doc[OVERALL__LENGHT] = parameters.overAllLenght;
    doc[PARK__OFFSET] = parameters.parkOffset;
    doc[WASTE__LENGTH] = parameters.wasteLength;
    doc[RIGHT__STOP] = parameters.rightStop;

    JsonArray recettes = doc[RECETTES].to<JsonArray>();
    for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
        JsonObject recette = recettes.add<JsonObject>();
        recette[LONG__LENGTH] = parameters.recettes[id].longlength;
        recette[ANGLE] = parameters.recettes[id].angle;
        recette[NAME] = parameters.recettes[id].name;
        recette[WIDTH__LENGTH] = parameters.recettes[id].width;
    }

    serializeJson(doc, file);
    file.close();
    BorneUniverselle::prepareMessage(SUCCESS, "Paramètres de persistance sauvgardés");
    return true;
}

void Formaca::printPersistance() {
    File file = LittleFS.open(CONFIG_FILE_NAME, FILE_READ);
    if (!file) {
        Serial.println("Error: Failed to open config file for reading");
        return;
    }
    JsonDocument doc;
    DeserializationError error = deserializeJson(doc, file);
    file.close();
    if (error) {
        char buff[1000];
        sprintf(buff, "%lu:: Formaca.json: deserializeJson() failed: ", millis());
        strcpy_P(buff + strlen(buff), (const prog_char*)error.f_str());
        Serial.println(buff);
        return;
    }

    Serial.println("Paramètres de persistance enregistrés");
    Serial.println("-------------------------------------");
    serializeJsonPretty(doc, Serial);
}

void Formaca::goToPosition(uint32_t pos) {
    Serial.printf("%lu:: Going to position: %lu (inch: %f) with current pr: %d\r\n", millis(), (unsigned long)pos, convToInch(pos), currentPr);
    switch (currentPr) {
        case 1:
            if (target_A) target_A->setValue(pos);
            break;
        case 2:
            if (target_B) target_B->setValue(pos);
            break;
        case 3:
            if (target_C) target_C->setValue(pos);
            break;
        default:
            BorneUniverselle::setPlcBroken("currentPr not consistant");
    }
    if (trigger) {
        triggerPending = true;
        startMovment = millis();
    }
}