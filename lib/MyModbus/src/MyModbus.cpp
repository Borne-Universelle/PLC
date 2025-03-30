#include "MyModbus/MyModbus.h"

MyModbus::MyModbus() {
    lastTransaction = millis();
    lastEvent = Modbus::EX_SUCCESS;
    lastProblem = 0;
    modbus = nullptr;
    resetStats();
}

void MyModbus::showMessages(const char* message) {
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
    showMessages("waitUntilModbusFree");
    while (millis() - lastTransaction < DELAY_TRANSACTION) {
        vTaskDelay(pdMS_TO_TICKS(10));
    }
    showMessages("waitUntilModbusFree done");
}

bool MyModbus::waitEndTransaction() {
    uint32_t start = millis();
    uint32_t deadline = millis() + transactionTimeout;
    char message[256];
    sprintf(message, "MyModbus waitEndTransaction, allowed time: %lu [ms]", transactionTimeout);
    showMessages((const char *)message);
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
                sprintf(message, "%lu:: MyModbus::waitEndTransaction: warning: long transaction: %lu ms\r\n", millis(), stats.lastTransactionTime);
                showMessages((const char *)message);
            }
            //Serial.println("Transaction done");
            stats.lastTransactionTime = millis() - start;
            if (stats.lastTransactionTime > stats.maxTransactionTime) {
                stats.maxTransactionTime = stats.lastTransactionTime;
            }
            lastEvent = Modbus::EX_SUCCESS;
            sprintf(message, "MyModbus waitEndTransaction done SUCCES, in: %lu [ms]", millis() - start);
            showMessages((const char *)message);
            return true;
        }  
        vTaskDelay(pdMS_TO_TICKS(10));
     
        //Serial.println("MyModbus::waitEndTransaction vTaskDelay");
    }

    sprintf(message, "MyModbus waitEndTransaction out of transacion allowed time (%lu ms)", transactionTimeout);
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
    
    #define MAX_ERROR_LENGTH 80
    char message[MAX_ERROR_LENGTH + 1];
    char text[MAX_MESSAGE_LENGTH + 1];
    getModbusErrorMessage(event, message, (size_t)MAX_ERROR_LENGTH);
    snprintf(text, MAX_MESSAGE_LENGTH, "MyModbus::handleError: (%lu ms since last error): %s\n", timeSinceLastError, message);

    if (messageCallback) {
        messageCallback(WARNING, text);
    }

    stats.lastErrorTime = millis(); // pour l'erreur suivante.....
}

void MyModbus::getModbusErrorMessage(Modbus::ResultCode event, char* message, size_t size) {
    #define preamb "Modbus error: "
    
    switch (event) {
        case Modbus::EX_ILLEGAL_FUNCTION:
            snprintf(message, size, "%s Function Code not Supported\r\n", preamb);
            break;
        case Modbus::EX_ILLEGAL_ADDRESS:
            snprintf(message, size, "%s Output Address not exists\r\n", preamb);
            break;
        case Modbus::EX_ILLEGAL_VALUE:
            snprintf(message, size, "%s Output Value not in Range\r\n", preamb);
            break;
        case Modbus::EX_SLAVE_FAILURE:
            snprintf(message, size, "%s Slave Device Fails to process request\r\n", preamb);
            break;
        case Modbus::EX_TIMEOUT:
            snprintf(message, size, "%s Operation timeout\r\n", preamb);
            break;
        case Modbus::EX_CONNECTION_LOST:
            snprintf(message, size, "%s Connection lost\r\n", preamb);
            break;
        case Modbus::EX_DATA_MISMACH:
            snprintf(message, size, "%s Data mismatch/CRC error\r\n", preamb);
            break;
        default:
            snprintf(message, size, "%s Unknown error\r\n", preamb);
            break;
    }
}