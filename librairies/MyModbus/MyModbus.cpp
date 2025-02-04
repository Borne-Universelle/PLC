#include "MyModbus.h"

// Initialisation des variables statiques
/*
uint32_t MyModbus::lastTransaction = 0;
uint32_t MyModbus::lastProblem = 0;
Modbus::ResultCode MyModbus::lastEvent = Modbus::EX_SUCCESS;
MyModbus::ModbusStats MyModbus::stats;
MyModbus::MessageCallback MyModbus::messageCallback = nullptr;
bool MyModbus::isShowMessages = false;
uint32_t MyModbus::transactionTimeout = DEFAULT_TIMEOUT;
*/

MyModbus::MyModbus() {
    lastTransaction = millis();
    lastEvent = Modbus::EX_SUCCESS;
    lastProblem = 0;
    modbus = nullptr;
    resetStats();
}

void MyModbus::showMessages(char* message) {
    if (isShowMessages) {
        Serial.printf("%lu:: %s\r\n", millis(), message);
    }
}

void MyModbus::setShowMessages(bool status) {
    if (status != isShowMessages){
            Serial.println(status ? "Show modbus messages: true" : "Show modbus messages: false");
    }
    
    isShowMessages = status;
}

void MyModbus::setModbus(ModbusRTU *_modbus) {
    modbus = _modbus;
}

void MyModbus::setTimeout(uint32_t ms) {
    if (ms < MIN_TIMEOUT) ms = MIN_TIMEOUT;
    if (ms > MAX_TIMEOUT) ms = MAX_TIMEOUT;
    transactionTimeout = ms;
    Serial.printf("MyModbus timeout: %lu ms\n", transactionTimeout);
}

uint32_t MyModbus::getTimeout() {
    return transactionTimeout;
}

void MyModbus::resetTimeout() {
    transactionTimeout = DEFAULT_TIMEOUT;
}

void MyModbus::waitUntilModbusFree() {
    char message[256];
    showMessages("waitUntilModbusFree");
    uint32_t start = millis();
    while (millis() - lastTransaction < DELAY_TRANSACTION) {
        vTaskDelay(1);
    }

    showMessages("waitUntilModbusFree done");
}

bool MyModbus::waitEndTransaction() {
    uint32_t start = millis();
    uint32_t deadline = millis() + transactionTimeout;
    char message[256];
    sprintf(message, "MyModbus waitEndTransaction, allowed time: %u [ms]", transactionTimeout);
    showMessages(message);
    // On attend au maximum le temps du timeout
    while (millis() < deadline) {
        modbus->task();
        
        // Si la transaction est terminée, on sort de la boucle
        if (!modbus->slave()) {
            stats.lastTransactionTime = millis() - start;
            stats.lastSuccessTime = millis();  // On enregistre le temps du succès
            if (stats.lastTransactionTime > stats.maxTransactionTime) {
                stats.maxTransactionTime = stats.lastTransactionTime;
            }
            if (stats.lastTransactionTime > transactionTimeout/2) {
                Serial.printf("%lu:: MyModbus::waitEndTransaction: warning: long transaction: %lu ms\n", millis(), stats.lastTransactionTime);
            }
            //Serial.println("Transaction done");
            stats.lastTransactionTime = millis() - start;
            if (stats.lastTransactionTime > stats.maxTransactionTime) {
                stats.maxTransactionTime = stats.lastTransactionTime;
            }
            lastEvent = Modbus::EX_SUCCESS;
            sprintf(message, "MyModbus waitEndTransaction done SUCCES, in: %u [ms]", millis() - start);
            showMessages(message);
            return true;
        }  
        vTaskDelay(1);
    }

    sprintf(message, "MyModbus waitEndTransaction out of transacion allowed time (%u ms)", transactionTimeout);
    showMessages(message);
    // Si on est sorti par timeout
    if (modbus->slave()) {
        // On force une dernière fois task() pour nettoyer l'état
        modbus->task();
        // On s'assure que la librairie recommence une nouvelle transaction
        lastEvent = Modbus::EX_TIMEOUT;
        showMessages("Will call handleError");
        handleError(Modbus::EX_TIMEOUT);
        // On force un délai avant la prochaine transaction
        lastTransaction = millis();
    }
    return false;
} // waitEndTransaction

bool MyModbus::isModbusFree() {
    return (millis() - lastTransaction > DELAY_TRANSACTION);
}

Modbus::ResultCode MyModbus::getLastEvent() {
    return lastEvent;
}

const MyModbus::ModbusStats& MyModbus::getStats() {
    return stats;
}

void MyModbus::resetStats() {
    stats = ModbusStats();
}

void MyModbus::getErrorReport(char* buffer, size_t size) {
    snprintf(buffer, size, 
        "Modbus Stats:\n"
        "Success rate: %.1f%%\n"
        "Total trans.: %lu\n"
        "Success trans: %lu\n"
        "Total errors: %lu\n"
        "CRC errors: %lu\n"
        "Timeout errors: %lu\n"
        "Connection errors: %lu\n"
        "Hard errors: %lu\n"
        "Max trans. time: %lu ms\n"
        "Last trans. time: %lu ms\n"
        "Last error: %lu ms ago",
        (stats.totalTransactions > 0) ? 
            (float)stats.successfulTransactions * 100.0f / stats.totalTransactions : 0,
        stats.totalTransactions,
        stats.successfulTransactions,
        stats.totalErrors,
        stats.crcErrors,
        stats.timeoutErrors,
        stats.connectionErrors,
        stats.hardErrors,
        stats.maxTransactionTime,
        stats.lastTransactionTime,
        stats.lastErrorTime > 0 ? millis() - stats.lastErrorTime : 0
    );
}

bool MyModbus::cbRead(Modbus::ResultCode event, uint16_t transactionId, void* data) {
    MyModbus& instance = getInstance();
    instance.lastTransaction = millis();
    instance.showMessages("MyModbus::cbRead, will call processEvent");
    instance.processEvent(event);
    return (event == Modbus::EX_SUCCESS);
}

bool MyModbus::cbWrite(Modbus::ResultCode event, uint16_t transactionId, void* data) {
    MyModbus& instance = getInstance();
    instance.lastTransaction = millis();
    instance.showMessages("MyModbus::cbWrite, will call processEvent");
    instance.processEvent(event);
    return (event == Modbus::EX_SUCCESS);
}

void MyModbus::processEvent(Modbus::ResultCode event) {
    lastEvent = event;
    stats.totalTransactions++;

    if (event == Modbus::EX_SUCCESS) {
        stats.successfulTransactions++;
        stats.lastSuccessTime = millis();
        return;
    }
    
    showMessages("MyModbus::processEvent: will call handleError");
    handleError(event);
}

void MyModbus::handleError(Modbus::ResultCode event) {
    stats.totalErrors++;
    stats.lastErrorCode = event;

    switch(event) {
        case Modbus::EX_TIMEOUT:
            stats.timeoutErrors++;
            break;
        case Modbus::EX_DATA_MISMACH:
            stats.crcErrors++;
            break;
        case Modbus::EX_CONNECTION_LOST:
            stats.connectionErrors++;
            break;
        case Modbus::EX_SLAVE_FAILURE:
        case Modbus::EX_GENERAL_FAILURE:
            stats.hardErrors++;
            break;
        default:
            break;
    }

    // On calcule le temps depuis la dernière erreur
    uint32_t timeSinceLastError = millis() - stats.lastErrorTime;
    
    char message[256];
    getModbusErrorMessage(event, message);
    Serial.printf("%lu:: MyModbus::handleError: Modbus Error (%lu ms since last error): %s\n", millis(), timeSinceLastError, message);
    
    if (messageCallback) {
        messageCallback(WARNING, "Erreur Modbus");
    }

    stats.lastErrorTime = millis(); // pour l'erreur suivante.....
}
void MyModbus::getModbusErrorMessage(Modbus::ResultCode event, char* message) {
    strcpy(message, "Modbus error: ");
    
    switch (event) {
        case Modbus::EX_ILLEGAL_FUNCTION:
            strcat(message, "Function Code not Supported");
            break;
        case Modbus::EX_ILLEGAL_ADDRESS:
            strcat(message, "Output Address not exists");
            break;
        case Modbus::EX_ILLEGAL_VALUE:
            strcat(message, "Output Value not in Range");
            break;
        case Modbus::EX_SLAVE_FAILURE:
            strcat(message, "Slave Device Fails to process request");
            break;
        case Modbus::EX_TIMEOUT:
            strcat(message, "Operation timeout");
            break;
        case Modbus::EX_CONNECTION_LOST:
            strcat(message, "Connection lost");
            break;
        case Modbus::EX_DATA_MISMACH:
            strcat(message, "Data mismatch/CRC error");
            break;
        default:
            strcat(message, "Unknown error");
    }
}