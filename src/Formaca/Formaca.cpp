#include "Formaca.h"

Formaca::Formaca() : currentState(State::UNDEFINED) { // Optionnel mais rigoureux
    transition(State::INITIALIZING); // Transition explicite vers l'état initial
    Serial.println(CONSTR_FORMACA);

    BorneUniverselle::setInitialStateLoadedCallback([this]() {
        this->initialStateLoadedHandler();
    });

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
    v_immediateStop = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_IMMEDIATE_STOP);
    v_alarmsReset = (BooleanOutputNode *)BorneUniverselle::findNode(CONSTR_FORMACA, V_ALARMS_RESET);

    if (BorneUniverselle::isPlcBroken()) {
        Serial.flush();
        Serial.println("PLC is broken, aborting Formaca constructor");
        return;
    }

    JsonDocument doc;
    if (!persistence.readJsonFromFile(CONFIG_FILE_NAME, doc)) {
        BorneUniverselle::setPlcBroken(persistence.getLastError());
        return;
    }

    if (!doc[MACHINE].isNull()) {
        strlcpy(parameters.machineName, doc[MACHINE], sizeof(parameters.machineName));
    } else {
        Serial.println("WARNING: Machine name not found in config");
        // Valeur par défaut si nécessaire
        strlcpy(parameters.machineName, "Default Machine", sizeof(parameters.machineName));
    }
    
    // Assignation des autres paramètres avec vérification
    parameters.overAllLenght = !doc[OVERALL__LENGHT].isNull() ? doc[OVERALL__LENGHT].as<float>() : 0.0f;
    parameters.reference = !doc[REFERENCE].isNull() ? doc[REFERENCE].as<uint32_t>() : 0;
    parameters.home = !doc[HOME].isNull() ? doc[HOME].as<uint32_t>() : 0;
    parameters.parkOffset = !doc[PARK__OFFSET].isNull() ? doc[PARK__OFFSET].as<float>() : 0.0f;
    parameters.wasteLength = !doc[WASTE__LENGTH].isNull() ? doc[WASTE__LENGTH].as<float>() : 0.0f;
    parameters.rightStop = !doc[RIGHT__STOP].isNull() ? doc[RIGHT__STOP].as<float>() : 0.0f;
    
    // Vérification pour la recette sélectionnée
    if (!doc[SELECTED_RECETTE].isNull()) {
        strlcpy(parameters.selectedRecette, doc[SELECTED_RECETTE], sizeof(parameters.selectedRecette));
        Serial.printf("Selected recette from config: %s\r\n", parameters.selectedRecette);
    } else {
        Serial.println("WARNING: Selected recette not found in config");
        // Assignation d'une valeur par défaut ou laisser vide selon votre logique
        parameters.selectedRecette[0] = '\0';
    }

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
    bool recetteFound = false;
    Serial.println("Recettes");
    Serial.println("--------");
    for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
        Serial.printf("    Name: %s\r\n", parameters.recettes[id].name);
        Serial.printf("    Long lenght: %.2f\r\n", parameters.recettes[id].longlength);
        Serial.printf("    Angle: %.2f\r\n", parameters.recettes[id].angle);
        Serial.printf("    Width: %.2f\r\n", parameters.recettes[id].width);
        Serial.println();
        if (strcmp(parameters.recettes[id].name, parameters.selectedRecette) == 0) {
            recetteFound = true;
        }
    }

    Serial.printf("Selected recette: %s\r\n", parameters.selectedRecette);
    if (!recetteFound) {
        Serial.println("Selected recette not found in list, using first one");
        strlcpy(parameters.selectedRecette, parameters.recettes[0].name, sizeof(parameters.selectedRecette));
        saveMachineParameters();
    } else {
        Serial.printf("Selected recette found: %s\r\n", parameters.selectedRecette);
        recette->setValue(parameters.selectedRecette);
    }

    recette->setValue(parameters.selectedRecette);

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

    flipFlopScie->setValue(false);
    jog->setValue(false);

    recette->setDescriptorCallback([this]() -> JsonDocument {
        return this->getDropDownDescriptorHandler();
    });
    Serial.println("Fin du constructeur Formaca");
}

Formaca::~Formaca() {
    delete drompDownIndicator;
    delete visu;
}

void Formaca::handleInterrupts() {
    if (PF8574BooleanInputNode::isInterrupt()) {
        BorneUniverselle::refresHardwareInputs();
        Serial.printf("Latency: %lu [ms]\r\n", millis() - PF8574BooleanInputNode::getTimeOfInterupt());
        PF8574BooleanInputNode::clearInterruptFlag();
    }
}

void Formaca::checkEmergencyConditions(uint32_t now) {
    Serial.printf("%lu:: checkEmergencyConditions called, currentState: %s, resumeState: %s\r\n", 
                  (unsigned long)now, stateToString(currentState), stateToString(resumeState));
    // cas avec le bouton stop cycle sur la tablette
    if (cancelCycle->getIsChanged() && cancelCycle->getValue() && currentState != State::IDLE && currentState != State::JOGGING) {
        Serial.printf("%lu:: Cancel cycle pressed, currentState: %s, resumeState: %s, ms: %lu\r\n", 
                      (unsigned long)now, stateToString(currentState), stateToString(resumeState), millis());
        resumeState = currentState;
        Serial.printf("%lu:: Set resumeState to %s for cancelCycle\r\n", 
                      (unsigned long)now, stateToString(resumeState));
        setEmergencyMode(true);
        transition(State::EMERGENCY);
        BorneUniverselle::prepareMessage(ERROR, "Appui sur le bouton Cancel Cycle");
        Serial.printf("%lu:: After cancelCycle transition, currentState: %s, resumeState: %s\r\n", 
                      (unsigned long)now, stateToString(currentState), stateToString(resumeState));
    }
    // cas avec le boutonp hysique e_stop 
    if (!eStopA->getIsChanged() && !eStopA->getValue() && currentState != State::IDLE && currentState != State::JOGGING) {
        Serial.printf("%lu:: eStopA or immediateStop triggered, currentState: %s, resumeState: %s, eStopA: %d, immediateStop: %d\r\n", 
                      (unsigned long)now, stateToString(currentState), stateToString(resumeState), 
                      eStopA->getValue(), immediateStop->getValue());
        if (currentState != State::IDLE && currentState != State::JOGGING) {
            resumeState = currentState;
            Serial.printf("%lu:: Set resumeState to %s for eStopA/immediateStop\r\n", 
                          (unsigned long)now, stateToString(resumeState));
        }
        setEmergencyMode(true);
        transition(State::EMERGENCY);
        Serial.printf("%lu:: After eStopA/immediateStop transition, currentState: %s, resumeState: %s\r\n", 
                      (unsigned long)now, stateToString(currentState), stateToString(resumeState));
    }

    if (capteur_pression_air->getIsChanged() && !capteur_pression_air->getValue() && homeDone->getValue()) {
        Serial.printf("%lu:: Air pressure lost, currentState: %s, resumeState: %s\r\n", 
                      (unsigned long)now, stateToString(currentState), stateToString(resumeState));
        if (currentState != State::IDLE && currentState != State::JOGGING) {
            resumeState = currentState;
            Serial.printf("%lu:: Set resumeState to %s for air pressure\r\n", 
                          (unsigned long)now, stateToString(resumeState));
        }
        immediateStop->setValue(true);
        transition(State::EMERGENCY);
        BorneUniverselle::prepareMessage(ERROR, "Attention on a perdu la pression d'air !!!");
        Serial.printf("%lu:: After air pressure transition, currentState: %s, resumeState: %s\r\n", 
                      (unsigned long)now, stateToString(currentState), stateToString(resumeState));
    }

    if (v_immediateStop->getIsChanged()) {
        Serial.printf("%lu:: v_immediateStop changed, value: %d, currentState: %s, resumeState: %s\r\n", 
                      (unsigned long)now, v_immediateStop->getValue(), stateToString(currentState), stateToString(resumeState));
        immediateStop->setValue(v_immediateStop->getValue());
        alarmsReset->setValue(v_alarmsReset->getValue());
        if (!v_immediateStop->getValue()) {
            BorneUniverselle::prepareMessage(WARNING, "Immediate stop reset");
        }
    }
}

void Formaca::updateOutputs() {
    if (position->getIsChanged()) {
        posInch->setValue(convToInch(position->getValue()));
    }
    displayAlarmsAndStatus();
}

bool Formaca::logiqueExecutor() {
    uint32_t now = millis();
    if (BorneUniverselle::isPlcBroken()) {
        Serial.printf("%lu:: PLC broken, exiting\r\n", (unsigned long)now);
        return false;
    }
    Serial.printf("%lu:: Entering logiqueExecutor, currentState: %s, resumeState: %s\r\n", 
                  (unsigned long)now, stateToString(currentState), stateToString(resumeState));
    
    handleInterrupts();
    checkEmergencyConditions(now);
    Serial.printf("%lu:: After checkEmergencyConditions, currentState: %s, resumeState: %s\r\n", 
                  (unsigned long)now, stateToString(currentState), stateToString(resumeState));
    
    updateOutputs();

    switch (currentState) {
        case State::UNDEFINED:
            transition(State::INITIALIZING);
            return true; // Sortir après transition

        case State::INITIALIZING:
            driveInitialisation();
            if (initialised) {
                transition(State::IDLE);
                return true;
            }
            break;

        case State::IDLE:
            Serial.printf("%lu:: Processing IDLE, resumeState: %s\r\n", 
                          (unsigned long)now, stateToString(resumeState));
            if (!initialised) {
                transition(State::INITIALIZING);
                return true;
            } else if ((getIsStartCycle() && !homeDone->getValue())) {
                transition(State::HOMING);
                return true;
            } else if (getIsStartCycle() && homeDone->getValue()) {
                // Vérifier si un arrêt immédiat est actif
                if (immediateStop->getValue()) {
                    BorneUniverselle::prepareMessage(ERROR, "Arrêt immédiat actif, impossible de reprendre");
                    // resumeState = State::UNDEFINED;
                    return true;
                }
                // Reprendre un cycle interrompu si applicable
                if (resumeState != State::UNDEFINED && resumeState != State::IDLE && resumeState != State::EMERGENCY) {
                    Serial.printf("IDLE: Resume cycle after emergency stop, resumeState: %s\r\n", stateToString(resumeState));
                    State targetState = resumeState;
                    if (resumeState == State::SAWING || resumeState == State::SAWING_WAIT) {
                        // Reprendre à l'état parent
                        targetState = (sawingOrigin == State::UNDEFINED) ? State::WASTE_CUTTING : sawingOrigin;
                    } else if (resumeState == State::TRIGGER_PENDING) {
                        // Reprendre l'état parent
                        targetState = (previousState == State::UNDEFINED || previousState == State::IDLE) ? State::PARKING : previousState;
                    }
                    Serial.printf("%lu:: IDLE: Resuming cycle at %s after emergency\r\n", (unsigned long)now, stateToString(targetState));
                    BorneUniverselle::prepareMessage(SUCCESS, "Reprise du cycle à l'état précédent");
                    transition(targetState);
                    resumeState = State::UNDEFINED; // Réinitialiser après reprise
                    return true;
                } else {
                    Serial.printf("IDLE:: resumeState: %s\r\n", stateToString(resumeState));
                }
                // Comportement par défaut pour un nouveau cycle
                if (!isAtPArkPosition()) {
                    transition(State::PARKING);
                    return true;
                } else {
                    transition(State::WASTE_CUTTING);
                    return true;
                }
            } else if (jog->getValue()) {
                transition(State::JOGGING);
                return true;
            }
            interfaceTreatment();
        break;

        case State::EMERGENCY:
            if (immediateStop->getIsChanged() && !immediateStop->getValue()) {
                setEmergencyMode(false);
                transition(State::IDLE);
                return true;
            }
            if (alarmsReset->getIsChanged() && alarmsReset->getValue()) {
                setEmergencyMode(false);
                transition(State::IDLE);
                Serial.printf("%lu:: Alarms reset\r\n", (unsigned long)now);
                return true;
            }
        break;

        case State::HOMING:
            Serial.printf("%lu:: ETAT HOMING, phase: %d\r\n", (unsigned long)now, homingPhase);
            switch (homingPhase) {
                case 0:
                    trigger->setValue(120);
                    Serial.printf("%lu:: Homing: Trigger set to 120\r\n", (unsigned long)now);
                    stateStartTime = now;
                    homingPhase++;
                    return true;
                case 1:
                    trigger->setValue(0);
                    Serial.printf("%lu:: Homing: Trigger reset to 0, starting homing\r\n", (unsigned long)now);
                    homingPhase++;
                    return true;
                case 2:
                    if (homeDone->getValue()) {
                        doHome->setValue(false);
                        Serial.printf("%lu:: Just arrived at home (%lu)\r\n", (unsigned long)now, (unsigned long)homePos);
                        homeDelayStart = now;
                        homePos = position->getValue();
                        saveMachineParameters();
                        BorneUniverselle::prepareMessage(SUCCESS, "Position du home enregistrée");
                        homingPhase++;
                    }
                    return true;
                case 3:
                    if (now - homeDelayStart > (uint32_t)position->getRefreshInterval()) {
                        if (longLength->getValue() > 1 && longLength->getValue() < 100 && !isnan(longLength->getValue())) {
                            transition(State::PARKING);
                            return true;
                        } else {
                            BorneUniverselle::prepareMessage(ERROR, "Longueur de coupe non définie, pas de déplacement vers la position de parc");
                            transition(State::IDLE);
                            return true;
                        }
                        homingPhase = 0;
                    }
                    return true;
            }
            break;

            case State::PARKING:
                if (previousState == State::TRIGGER_PENDING) {
                    Serial.printf("%lu:: PARKING: Returned from TRIGGER_PENDING, waiting for position\r\n", (unsigned long)now);
                    // Ne pas réinitialiser stateStartTime, continuer l'attente
                }
                else if (stateStartTime == 0) {
                    Serial.println("ETAT PARKING: Will call goToParkPosition()");
                    previousState = State::PARKING;
                    goToParkPosition();
                    stateStartTime = now;
                    transition(State::TRIGGER_PENDING);
                    return true;
                }
                if (targetPositionReached->getValue() && zeroSpeed->getValue() && (now - stateStartTime > 1000)) {
                    BorneUniverselle::prepareMessage(SUCCESS, "Arrivé à la position de parc");
                    transition(getIsStartCycle() ? State::WASTE_CUTTING : State::IDLE);
                    return true;
                }
                Serial.printf("%lu:: PARKING: Waiting for position, targetReached=%d, zeroSpeed=%d, time=%lu\r\n", 
                            (unsigned long)now, targetPositionReached->getValue(), zeroSpeed->getValue(), (unsigned long)(now - stateStartTime));
            break;
            
        case State::WASTE_CUTTING:
            if (previousState == State::SAWING_WAIT) {
                Serial.printf("%lu:: WASTE_CUTTING: First cycle completed, moving to NORMAL_CUTTING\r\n", (unsigned long)now);
                isFirstCycle = false;
                stateStartTime = 0;
                previousState = State::UNDEFINED; // Réinitialiser pour éviter répétition
                transition(State::NORMAL_CUTTING);
                return true;
            }
            if (stateStartTime == 0) {
                Serial.printf("%lu:: Début du cycle: on va couper le rebus\r\n", (unsigned long)now);
                goToPosition(parameters.reference - convToPUU(parameters.overAllLenght - totalWasteLength + 0.9));
                stateStartTime = now;
                transition(State::TRIGGER_PENDING);
                return true;
            }
            if (targetPositionReached->getValue() && zeroSpeed->getValue() && (now - stateStartTime > 1000)) {
                Serial.printf("%lu:: WASTE_CUTTING: Position reached, moving to SAWING\r\n", (unsigned long)now);
                transition(State::SAWING);
                return true;
            }
            Serial.printf("%lu:: WASTE_CUTTING: Waiting for position, targetReached=%d, zeroSpeed=%d, time=%lu\r\n", 
                        (unsigned long)now, targetPositionReached->getValue(), zeroSpeed->getValue(), (unsigned long)(now - stateStartTime));
        break;

        case State::NORMAL_CUTTING:
            if (previousState == State::SAWING_WAIT) {
                Serial.printf("%lu:: NORMAL_CUTTING: Returned from SAWING_WAIT, resetting for next cycle\r\n", (unsigned long)now);
                stateStartTime = 0;
                previousState = State::UNDEFINED; // Réinitialiser pour éviter répétition
                // Ne pas retourner ici, laisser le code continuer pour lancer la nouvelle coupe immédiatement
            }
            if (stateStartTime == 0) {
                if (cutModel == LEFT) {
                    uint32_t newPosition = position->getValue() + convToPUU(bladelostLength + parameters.recettes[idRecette].longlength + bladelostLength);
                    if (newPosition < parameters.reference) {
                        BorneUniverselle::prepareMessage(INFO, "Starting new cut (LEFT -> RIGHT)");
                        goToPosition(newPosition);
                        cutModel = RIGHT;
                        stateStartTime = now;
                        transition(State::TRIGGER_PENDING);
                        return true;
                    } else {
                        transition(State::EJECTING);
                        return true;
                    }
                } else {
                    float triangleDroit = tan(angleRadians) * parameters.recettes[idRecette].width;
                    float displacement = parameters.recettes[idRecette].longlength - 2 * triangleDroit + 2 * bladelostLength;
                    float newPosition = position->getValue() + convToPUU(displacement);
                    if (newPosition < parameters.reference) {
                        BorneUniverselle::prepareMessage(INFO, "Starting new cut (RIGHT -> LEFT)");
                        goToPosition(newPosition);
                        cutModel = LEFT;
                        stateStartTime = now;
                        transition(State::TRIGGER_PENDING);
                        return true;
                    } else {
                        transition(State::EJECTING);
                        return true;
                    }
                }
            }
            if (targetPositionReached->getValue() && zeroSpeed->getValue() && (now - stateStartTime > 1000)) {
                Serial.printf("%lu:: NORMAL_CUTTING: Position reached, moving to SAWING\r\n", (unsigned long)now);
                transition(State::SAWING);
                return true;
            }
            Serial.printf("%lu:: NORMAL_CUTTING: Waiting for position, targetReached=%d, zeroSpeed=%d, time=%lu\r\n", 
                        (unsigned long)now, targetPositionReached->getValue(), zeroSpeed->getValue(), (unsigned long)(now - stateStartTime));
        break;

        case State::SAWING:
            if (stateStartTime == 0) {
                saw(true); // Enclenche la scie (active flipFlopScie)
                stateStartTime = now;
            }
            if (now - stateStartTime > (unsigned long)FLIP_FLOP_TIME) {
                saw(false); // Désactive la scie (désactive flipFlopScie)
                Serial.printf("%lu:: SAWING: Moving to SAWING_WAIT\r\n", (unsigned long)now);
                transition(State::SAWING_WAIT);
                return true;
            }
            Serial.printf("%lu:: SAWING: Waiting for flip flop, time=%lu\r\n", (unsigned long)now, (unsigned long)(now - stateStartTime));
        break;

        case State::SAWING_WAIT:
            if (now - stateStartTime > (unsigned long)BLADE_TIME) {
                if (!cylinderCaptor->getValue() && cylinderProtectionActivated) {
                    immediateStop->setValue(true);
                    BorneUniverselle::prepareMessage(ERROR, "Cylindres de maintien en fonction, je ne peux poursuivre la coupe");
                    transition(State::EMERGENCY);
                    return true;
                } else if (targetPositionReached->getValue() && zeroSpeed->getValue()) {
                    if (sawingOrigin == State::JOGGING) {
                        Serial.printf("%lu:: SAWING_WAIT: Sciage en mode JOG terminé, retour à JOG\r\n", (unsigned long)now);
                        transition(State::JOGGING); // Retour à JOG si initié depuis JOG
                    } else {
                        if (sawingOrigin == State::UNDEFINED) {
                            Serial.printf("%lu:: SAWING_WAIT: sawingOrigin is UNDEFINED, forcing WASTE_CUTTING\r\n", (unsigned long)now);
                            sawingOrigin = State::WASTE_CUTTING;
                        }
                        Serial.printf("%lu:: SAWING_WAIT: Blade time completed, moving to %s\r\n", 
                                    (unsigned long)now, stateToString(sawingOrigin));
                        transition(sawingOrigin);
                    }
                    return true;
                }
            }

            if (cylinderCaptor->isRisingEdge() && cylinderProtectionActivated) {
                if (sawingOrigin == State::JOGGING) {
                    Serial.printf("%lu:: SAWING_WAIT: Cylinder captor triggered in JOG mode, moving to JOG\r\n", 
                                (unsigned long)now);
                    transition(State::JOGGING); // Retour à JOG si initié depuis JOG
                } else {
                    if (sawingOrigin == State::UNDEFINED) {
                        Serial.printf("%lu:: SAWING_WAIT: sawingOrigin is UNDEFINED, forcing WASTE_CUTTING\r\n", (unsigned long)now);
                        sawingOrigin = State::WASTE_CUTTING;
                    }
                    Serial.printf("%lu:: SAWING_WAIT: Cylinder captor triggered, moving to %s\r\n", 
                                (unsigned long)now, stateToString(sawingOrigin));
                    transition(sawingOrigin);
                }
                return true;
            }
            Serial.printf("%lu:: SAWING_WAIT: Waiting for blade time, time=%lu\r\n", (unsigned long)now, (unsigned long)(now - stateStartTime));
        break;

        case State::EJECTING:
            if (stateStartTime == 0) {
                eject();
                transition(State::TRIGGER_PENDING);
                return true;
            }
            if (targetPositionReached->getValue() && zeroSpeed->getValue() && (now - stateStartTime > 1000)) {
                nbCyclesMade->setValue(nbCyclesMade->getValue() + 1);
                transition(State::PARKING);
                return true;
            }
            break;

        case State::JOGGING:
            jogTreatment();
            if (!jog->getValue()) {
                transition(State::IDLE);
                return true;
            }
            break;

        case State::TRIGGER_PENDING:
            Serial.println("ETAT TRIGGER_PENDING");
            if (stateStartTime == 0) {
                Serial.printf("%lu:: TRIGGER_PENDING: Starting delay, previousState: %s\r\n", (unsigned long)now, stateToString(previousState));
                stateStartTime = now;
            }
            else if (now - stateStartTime <= 50) {
                Serial.printf("%lu:: TRIGGER_PENDING: Waiting %lu ms\r\n", (unsigned long)now,  (unsigned long)50 - (now - stateStartTime));
            }
            else {
                trigger->setValue(currentPr);
                Serial.printf("%lu:: Trigger sent (pr: %d), returning to %s\r\n", (unsigned long)now, currentPr, stateToString(previousState));
                currentPr++;
                if (currentPr > NB_PR) currentPr = 1;
                stateStartTime = now;
                if (previousState == State::UNDEFINED || previousState == State::IDLE) {
                    Serial.println("ERROR: previousState invalid, forcing PARKING");
                    transition(State::PARKING);
                } else {
                    transition(previousState);
                }
                return true; // Sortir après transition
            }
            break;
    }
    return true;
} // logicielExecutor

void Formaca::setEmergencyMode(bool status) {
    Serial.printf("%lu:: setEmergencyMode called, status: %d, currentState: %s, resumeState: %s\r\n", 
                  (unsigned long)millis(), status, stateToString(currentState), stateToString(resumeState));
    if (status) {
        immediateStop->setValue(true);
        v_immediateStop->setValue(true);
        if (!isEmergency) {
            BorneUniverselle::prepareMessage(ERROR, "Emergency stop !!!");
        }
    } else {
        if (isEmergency) {
            BorneUniverselle::prepareMessage(SUCCESS, "Emergency stop reset");
        }
    }
    isEmergency = status;
    Serial.printf("%lu:: After setEmergencyMode, isEmergency: %d, resumeState: %s\r\n", 
                  (unsigned long)millis(), isEmergency, stateToString(resumeState));
}


bool Formaca::isEmergencyMode() {
    return isEmergency;
}

bool Formaca::getIsStartCycle() {
    bool status = (startCycle->getIsChanged() && startCycle->getValue()) || (vStart->getIsChanged() && vStart->getValue());
    //Serial.printf("Start cycle: %s\r\n", status ? "true" : "false");
    return status;
}

void Formaca::interfaceTreatment() {
    if (cylinderCaptor->getIsChanged() && !cylinderProtectionActivated) {
        cylinderProtectionActivated = true;
        BorneUniverselle::prepareMessage(SUCCESS, "La protection par capteur de cylindre est activée");
    }

    if (auxFunctions->getValue() == 8) {
        auxFunctions->setValue(-5);
        Serial.printf("%lu:: Drive EEPROM deactivated\r\n", (unsigned long)millis());
    }

    if (v_servoOn->getIsChanged()) {
        servoOn->setValue(v_servoOn->getValue());
    }
 
    if (v_immediateStop->getIsChanged()) {
        immediateStop->setValue(v_immediateStop->getValue());
        alarmsReset->setValue(v_alarmsReset->getValue());
    }

    if (v_alarmsReset->getIsChanged()) {
        alarmsReset->setValue(v_alarmsReset->getValue());
        immediateStop->setValue(v_immediateStop->getValue());
    }
    if (overAllLenght->getIsChanged()) {
        //BorneUniverselle::prepareMessage(SUCCESS, "La longueur brute a été mise à jour");
        if (homeDone->getValue()) {
            BorneUniverselle::prepareMessage(WARNING, "Il est nécessaire d'aller à la position parc");
        }
       
        parameters.overAllLenght = overAllLenght->getValue();
        saveMachineParameters();
        parkPosition = parameters.reference - convToPUU(overAllLenght->getValue() + parkOffset->getValue());
        Serial.printf("Nouvelle position de parc: %lu pulses, soit %.2f inch\r\n", (long unsigned int)parkPosition, convToInch(parkPosition));
    }
    if (wasteLength->getIsChanged()) {
        if (wasteLength->getValue() > parameters.overAllLenght) {
            BorneUniverselle::prepareMessage(WARNING, "La longueur du rebut ne peut pas être plus grande que la longueur brute");
        } else {
            totalWasteLength = wasteLength->getValue() + bladelostLength;
            if (homeDone->getValue()) {
                BorneUniverselle::prepareMessage(SUCCESS, "La longueur du rebut a été mise à jour");
            }
            
            parameters.wasteLength = wasteLength->getValue();
            saveMachineParameters();
        }
    }
    if (parkOffset->getIsChanged()) {
        parameters.parkOffset = parkOffset->getValue();
        parkPosition = parameters.reference - convToPUU(overAllLenght->getValue() + parkOffset->getValue());
        if (homeDone->getValue()) {
            char text[128];
            sprintf(text, "L'offset de chargement a changé: %.2f[inch], nouvelle position de parc: %.2f\r\n", parkOffset->getValue(), convToInch(parkPosition));
            BorneUniverselle::prepareMessage(SUCCESS, text);
            BorneUniverselle::prepareMessage(WARNING, "Il faut aller en position parc");
        }
        
        saveMachineParameters();
    }
    if (rightStop->getIsChanged()) {
        if (homeDone->getValue()) {
            BorneUniverselle::prepareMessage(SUCCESS, "La butée droite a été mise à jour");
            BorneUniverselle::prepareMessage(WARNING, "Il faut aller en position parc");
        }
      
        parameters.rightStop = rightStop->getValue();
        saveMachineParameters();
    }
    if (recette->getIsChanged()) {
        Serial.printf("Nouvelle recette sélectionnée: %s\r\n", recette->getValue());
        if (!setNewRecette(recette->getValue())) {
            BorneUniverselle::setPlcBroken("Incapable de sélectionner la nouvelle recette");
        }
    }
    if (nbCyclesClear->getIsChanged() && nbCyclesClear->getValue()) {
        nbCyclesMade->setValue(0);
        Serial.println("Nb cycles clear");
        BorneUniverselle::prepareMessage(SUCCESS, "Nb cycles clear by nb cycle clear button");
    }
    if (v_cycleSpeed->getIsChanged()) {
        cycleSpeedChange();
    }
    if (nbCyclesVoulus->getIsChanged()) {
        Serial.printf("Le nombre de cycles à faire a changé: now %lu\r\n", (unsigned long)nbCyclesVoulus->getValue());
        visu->setMaxValue(nbCyclesVoulus->getValue());
    }

    if (goToPark->getIsChanged() && goToPark->getValue()) {
        Serial.println("Go to park par le bouton parc");
        transition(State::PARKING); // Transition vers l'état PARKING
    }
}

void Formaca::jogTreatment() {
    if (ejectButton->getIsChanged() && ejectButton->getValue()) {
        eject();
    }
    if (v_jogSpeed->getIsChanged()) {
        jogSpeed->setValue(v_jogSpeed->getValue());
        saveDriveParameters();
        BorneUniverselle::prepareMessage(SUCCESS, "Jog speed updated");
    }
    if (jogFullTorque->getIsChanged()) {
        v_maxTorque->setValue(jogFullTorque->getValue() ? NOMINAL_TORQUE : JOG_TORQUE);
        maxTorque->setValue(v_maxTorque->getValue());
        Serial.printf("Torque now is: %lu \r\n", (unsigned long)v_maxTorque->getValue());
    }
    if (fwd->getIsChanged()) {
        if (fwd->getValue()) {
            if (convToPUU(position->getValue()) > 2) {
                jogSpeed->setValue(FWD_VALUE);
                //BorneUniverselle::prepareMessage(SUCCESS, "On lance le jog fwd !");
            } else {
                jogSpeed->setValue(STOP_VALLUE);
                //BorneUniverselle::prepareMessage(WARNING, "On est trop près du switch de home. Mouvement interdit !");
            }
        } else {
            jogSpeed->setValue(STOP_VALLUE);
        }
    }
    if (rwd->getIsChanged()) {
        jogSpeed->setValue(rwd->getValue() ? RWD_VALUE : STOP_VALLUE);
        Serial.printf("%s\r\n", rwd->getValue() ? "Jog reverse" : "stop");
    }
    if (calibrate->getIsChanged() && calibrate->getValue()) {
        parameters.reference = position->getValue();
        saveMachineParameters();
        BorneUniverselle::prepareMessage(SUCCESS, "La machine est calibrée!!!");
        parkPosition = parameters.reference - convToPUU(overAllLenght->getValue() + parkOffset->getValue());
        Serial.printf("Nouvelle position de parc: %lu [pulses] soit: %.2f [inch]\r\n", (long unsigned int)parkPosition, convToInch(parkPosition));
    }

    if (goHomeButton->getIsChanged() && goHomeButton->getValue()) {
        if (!homeDone->getValue()) {
            transition(State::HOMING);
            return;
        }
        Serial.printf("Go to home: %lu\r\n", (unsigned long)parameters.home);
        goToPosition(parameters.home);
    }
    if (gotoRef->getIsChanged() && gotoRef->getValue()) {
        Serial.printf("Go to reference position: %lu\r\n", (unsigned long)parameters.reference);
        goToPosition(parameters.reference);
    }

    if (scier->getIsChanged() && scier->getValue()) {
        Serial.println("Commande de sciage en mode JOG");
        transition(State::SAWING); // Transition vers SAWING au lieu de saw(true)
    }

    if (goToPark->getIsChanged() && goToPark->getValue()) {
        Serial.println("Go to park par le bouton parc");
        transition(State::PARKING); // Transition vers l'état PARKING
    }    
}

void Formaca::eject() {
    if (!homeDone->getValue()) {
        BorneUniverselle::prepareMessage(ERROR, "Le home n'a pas été fait !!!");
        return;
    }
    BorneUniverselle::prepareMessage(SUCCESS, "Éjection");
    goToPosition(convToPUU(parameters.rightStop));
}

void Formaca::goToParkPosition() {
    if (overAllLenght->getValue() < 4 || wasteLength->getValue() < 1) {
        BorneUniverselle::prepareMessage(SUCCESS, "Vous devez spécifier une longueur brute > 4 '' et une longueur de rebut > 1 ''");
    } else {
        BorneUniverselle::prepareMessage(SUCCESS, "La machine va à la position parc");
        goToPosition(parkPosition);
        Serial.printf("Go to park position: %lu puu soit %.2f inch\r\n", (long unsigned int)parkPosition, convToInch(parkPosition));
    }
}

bool Formaca::isAtPArkPosition() {
    if (position->getValue() > parkPosition - 10 && position->getValue() < parkPosition + 10) {
        return true;
    }
    return false;
}

void Formaca::saw(bool status) {
    flipFlopScie->setValue(status);
    Serial.printf("%lu:: %s du flip flop de la scie\r\n", millis(), status ? "start": "stop");
    BorneUniverselle::prepareMessage(SUCCESS, "Début du sciage");
}

void Formaca::cycleSpeedChange() {
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

void Formaca::initialStateLoadedHandler() {
    Serial.println("NEW CLIENT CONNECTED AND LOADED!!!!!!!!!!!!!!!!!!!!!!");
    JsonDocument docToSend;
    JsonArray recettes = docToSend[RECETTES].to<JsonArray>();
    for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
        JsonObject recetteObj = recettes.add<JsonObject>();
        recetteObj[NAME] = parameters.recettes[id].name;
        Serial.printf("Preparing recette: %s\r\n", parameters.recettes[id].name);
    }

    drompDownIndicator->setItems(docToSend);
    if (parameters.nbRecettes > 0) {
        if (!setNewRecette(parameters.recettes[0].name)) {
            BorneUniverselle::prepareMessage(ERROR, "Erreur lors du chargement de la recette par défaut");
        } else {
            recette->setValue(parameters.recettes[0].name);
        }
    }
    Serial.println("Will set parameters to the web client");
    overAllLenght->setValue(parameters.overAllLenght);
    parkOffset->setValue(parameters.parkOffset);
    wasteLength->setValue(parameters.wasteLength);
    rightStop->setValue(parameters.rightStop);
    widthLength->setValue(parameters.recettes[idRecette].width);
    longLength->setValue(parameters.recettes[idRecette].longlength);
    v_servoOn->setValue(servoOn->getValue());
    v_immediateStop->setValue(immediateStop->getValue());
    v_alarmsReset->setValue(alarmsReset->getValue());

    jog->setValue(false);

    if (isEmergencyMode()) {
        BorneUniverselle::prepareMessage(ERROR, "Emergency stop !!!");
    }
    if (immediateStop->getValue()) {
        BorneUniverselle::prepareMessage(ERROR, "Il y a un arrêt immédiat, causé soit par le E_STOP ou par le bouton CANCEL !!!");
    }
    if (!capteur_pression_air->getValue()) {
        BorneUniverselle::prepareMessage(ERROR, "Attention on a perdu la pression d'air !!!");
    }
}

bool Formaca::setNewRecette(const char *recette) {
    if (!recette || strlen(recette) == 0) {
        char message[256];
        snprintf(message, sizeof(message), "%s: %s", "Formaca::setNewRecette", "texte de recette vide, probablement mal configuré");
        BorneUniverselle::setPlcBroken(message);
        return false;
    }

    for (idRecette = 0; idRecette < parameters.nbRecettes; idRecette++) {
        if (!strcmp(parameters.recettes[idRecette].name, recette)) {
            break;
        }
    }

    Serial.printf("Nouveau choix de recette: %s, id: %d\r\n", recette, idRecette);
    widthLength->setValue(parameters.recettes[idRecette].width);
    longLength->setValue(parameters.recettes[idRecette].longlength);
    angleRadians = parameters.recettes[idRecette].angle / 360 * 2 * PI;
    bladelostLength = BLADE_TICKNESS / (2 * sin(angleRadians));
    Serial.printf("Longueur perdue à cause de la demi-épaisseur de la lame: %.4f [inch], angle: %.2f\r\n", bladelostLength, parameters.recettes[idRecette].angle);
    totalWasteLength = wasteLength->getValue() + bladelostLength;
    Serial.printf("Longueur du rebus: %.2f\r\n", totalWasteLength);
    return (idRecette < parameters.nbRecettes);
}

void Formaca::displayAlarmsAndStatus() {
    MyModbus& myModbus = MyModbus::getInstance();
    modbusError->setValue(myModbus.getLastEvent() != Modbus::EX_SUCCESS);

    if (status->getIsChanged()) {
        Serial.printf("Status changed: %u\r\n", status->getValue());
        servoReady->setValue(status->getValue() & 0b0000000000000001);
        Serial.printf("Servo ready: %s\r\n", (status->getValue() & 0b0000000000000001) ? "true" : "false");
        servoActivated->setValue(status->getValue() & 0b0000000000000010);
        zeroSpeed->setValue(status->getValue() & 0b0000000000000100);
        targetSpeedRated->setValue(status->getValue() & 0b0000000000001000);
        targetPositionReached->setValue(status->getValue() & 0b0000000000010000);
        Serial.printf("Target position reached: %s\r\n", (status->getValue() & 0b0000000000010000) ? "true" : "false");
        servoAlarm->setValue(status->getValue() & 0b0000000001000000);
        Serial.printf("Servo alarm: %s\r\n", (status->getValue() & 0b0000000001000000) ? "true" : "false");
        homeDone->setValue(status->getValue() & 0b0000000100000000);
        Serial.printf("Home done: %s\r\n", (status->getValue() & 0b0000000100000000) ? "true" : "false");
        absolutePositionLost->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000001);
        batteryAlarm->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000010);
        multipleTurnsOverflow->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000000100);
        puuOverflow->setValue(absoluteCoordonateSystemStatus->getValue() & 0b0000000000001000);
        absoluteCoordonateNotSet->setValue(absoluteCoordonateSystemStatus->getValue() & 0b000000000010000);
    }

    if (alarms->getIsChanged()) {
        if (alarms->getValue() == 0) {
            BorneUniverselle::prepareMessage(SUCCESS, "Tout est correct");
        } else {
            char text[128];
            sprintf(text, "Nouvelle valeur du status d'alarme: %u", alarms->getValue());
            BorneUniverselle::prepareMessage(WARNING, text);
        }
        alarmsCache = alarms->getValue();
    }
}

void Formaca::driveInitialisation() {
    static const uint32_t INIT_TIMEOUT = 15000; // 15 secondes
    uint32_t now = millis();
    Serial.printf("%lu::driveInitialisation: phase: %d\r\n", (unsigned long)now, phase);

    if (now - startInit > INIT_TIMEOUT) {
        Serial.println("Erreur : Initialisation du servo drive trop longue (>15s), forçage de la fin avec état partiel");
        BorneUniverselle::prepareMessage(WARNING, "Initialisation du servo drive interrompue après 15 secondes, vérifiez la connexion Modbus");
        initialised = true;
        driveInitialised->setValue(false);
        return;
    }

    switch (phase) {
        case 0:
            auxFunctions->setValue(5);
            phase++;
            break;

        case 1:
            servoOn->setValue(true);
            startInit = now;
            phase++;
            break;

        case 2:
            if (now - startInit > DELAY_INIT) {
                phase++;
            }
            break;

        case 3:
            if (!modbusError->getValue()) {
                initialised = true;
                Serial.println("Servo drive initialisé, lecture des valeurs et préparation de l'interface");
                Serial.println("--------------------------------------------------------------");
                uint16_t jogSpeedValue = jogSpeedRead->getValue();
                Serial.printf("Jog speed lu: %u\r\n", jogSpeedValue);
                v_jogSpeed->setValue(jogSpeedValue);
                jogSpeed->setValue(jogSpeedValue);
                uint32_t speed = pr1SpeedRead->getValue() >> 16;
                v_cycleSpeed->setValue(speed);
                setCycleSpeed(speed);
                Serial.printf("PR1 speed lue du drive et isolée: %lu\r\n", (unsigned long)speed);
                v_maxTorque->setValue(NOMINAL_TORQUE);
                maxTorque->setValue(NOMINAL_TORQUE);
                driveInitialised->setValue(true);
                BorneUniverselle::prepareMessage(SUCCESS, "Servo drive initialisé");
                Serial.println("--------------------------------------------------------------");
            }
            break;
    }
}

void Formaca::setCycleSpeed(uint8_t cycleSpeed) {
    uint driveValue = cycleSpeed << 16;
    driveValue += 2;
    Serial.printf("New user speed: %u. Will set register with value 0x%08x\r\n", cycleSpeed, driveValue);
    pr1Speed->setValue(driveValue);
    pr2Speed->setValue(driveValue);
    pr3Speed->setValue(driveValue);
    BorneUniverselle::prepareMessage(SUCCESS, "Cycle speed updated");
}

void Formaca::saveDriveParameters() {
    auxFunctions->setValue(8);
    Serial.printf("%lu:: Paramètres de persistance sauvegardés\r\n", millis());
}

uint32_t Formaca::convToPUU(float length) {
    return length * PULSES_PER_INCH;
}

float Formaca::convToInch(uint32_t puu) {
    return (double)puu / (double)PULSES_PER_INCH;
}

bool Formaca::saveMachineParameters() {
    JsonDocument doc;
    doc[MACHINE] = MACHINE_RESP;
    doc[HOME] = parameters.home;
    doc[REFERENCE] = parameters.reference;
    doc[OVERALL__LENGHT] = parameters.overAllLenght;
    doc[PARK__OFFSET] = parameters.parkOffset;
    doc[WASTE__LENGTH] = parameters.wasteLength;
    doc[RIGHT__STOP] = parameters.rightStop;
    doc[SELECTED_RECETTE] = parameters.selectedRecette;

    JsonArray recettes = doc[RECETTES].to<JsonArray>();
    for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
        JsonObject recette = recettes.add<JsonObject>();
        recette[LONG__LENGTH] = parameters.recettes[id].longlength;
        recette[ANGLE] = parameters.recettes[id].angle;
        recette[NAME] = parameters.recettes[id].name;
        recette[WIDTH__LENGTH] = parameters.recettes[id].width;
    }
    
    PLC_Persistence& persistence = PLC_Persistence::getInstance();
    if (!persistence.saveJsonToFile(CONFIG_FILE_NAME, doc)) {
        BorneUniverselle::prepareMessage(ERROR, "Erreur lors de la sauvegarde des paramètres de la machine");
        return false;
    }
    
    BorneUniverselle::prepareMessage(SUCCESS, "Paramètres de persistance sauvegardés");
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
            target_A->setValue(pos);
            break;
        case 2:
            target_B->setValue(pos);
            break;
        case 3:
            target_C->setValue(pos);
            break;
        default:
            BorneUniverselle::setPlcBroken("currentPr not consistent");
    }
    //trigger->setValue(currentPr); // on ne peut pas déclencher le trigger ici il faut faire un tour de boucle.
}

JsonDocument Formaca::getDropDownDescriptorHandler() {
    Serial.println("Formaca::getDropDownDescriptorHandler");
    JsonDocument doc, docToSend;
    if (!persistence.readJsonFromFile(CONFIG_FILE_NAME, doc)) {
        BorneUniverselle::setPlcBroken(persistence.getLastError());
        return docToSend;
    }
 
    JsonArray recettes = docToSend[ITEMS].to<JsonArray>();
    bool recetteFound = false;
    for (uint8_t id = 0; id < parameters.nbRecettes; id++) {
        // Ajouter directement le nom comme chaîne au lieu d'un objet
        recettes.add(parameters.recettes[id].name);
        if (strcmp(parameters.recettes[id].name, parameters.selectedRecette) == 0) {
            recetteFound = true;
        }
    }

    Serial.printf("Selected recette: %s\r\n", parameters.selectedRecette);
    if (!recetteFound && parameters.nbRecettes > 0) {
        Serial.println("Selected recette not found in list, using first one");
        strlcpy(parameters.selectedRecette, parameters.recettes[0].name, sizeof(parameters.selectedRecette));
        saveMachineParameters();
    } else if (recetteFound) {
        Serial.printf("Selected recette found: %s\r\n", parameters.selectedRecette);
    }
    
    // Définir la valeur sélectionnée
    docToSend[VALUE] = parameters.selectedRecette;
    
    // Ajouter d'autres propriétés du descripteur
    //docToSend["default"] = "";
    //docToSend["tooltip"] = "";
    
    //Serial.println("Will send the following JSON to handler:");
    //serializeJsonPretty(docToSend, Serial);
    return docToSend;
}

void Formaca::transition(State newState) {
    if (currentState != newState) {
        Serial.printf("%lu:: Transition from %s to %s (previousState: %s, resumeState: %s)\r\n", 
                      (unsigned long)millis(), stateToString(currentState), stateToString(newState), 
                      stateToString(previousState), stateToString(resumeState));
        
        if (newState == State::SAWING) {
            sawingOrigin = currentState;
            Serial.printf("%lu:: Setting sawingOrigin to %s, resumeState: %s\r\n", 
                          (unsigned long)millis(), stateToString(sawingOrigin), stateToString(resumeState));
        }
        
        previousState = currentState;
        currentState = newState;
        
        if (newState == State::PARKING && currentState != State::TRIGGER_PENDING) {
            Serial.printf("%lu:: Resetting stateStartTime for initial PARKING entry\r\n", (unsigned long)millis());
            stateStartTime = 0;
        }
        else if (newState != State::PARKING && newState != State::WASTE_CUTTING && 
                 newState != State::TRIGGER_PENDING && newState != State::SAWING_WAIT && 
                 newState != State::NORMAL_CUTTING && newState != State::EJECTING) {
            Serial.printf("%lu:: Resetting stateStartTime for non-excepted state %s\r\n", 
                          (unsigned long)millis(), stateToString(newState));
            stateStartTime = 0;
        }
    }
}

const char* Formaca::stateToString(State state) {
    switch (state) {
        case State::UNDEFINED:         return "UNDEFINED";
        case State::INITIALIZING:      return "INITIALIZING";
        case State::IDLE:              return "IDLE";
        case State::EMERGENCY:         return "EMERGENCY";
        case State::HOMING:            return "HOMING";
        case State::PARKING:           return "PARKING";
        case State::WASTE_CUTTING:     return "WASTE_CUTTING";
        case State::NORMAL_CUTTING:    return "NORMAL_CUTTING";
        case State::SAWING:            return "SAWING";
        case State::SAWING_WAIT:       return "SAWING_WAIT";
        case State::EJECTING:          return "EJECTING";
        case State::JOGGING:           return "JOGGING";
        case State::TRIGGER_PENDING:   return "TRIGGER_PENDING";
        default:                       return "UNKNOWN"; // Sécurité pour les cas imprévus
    }
}