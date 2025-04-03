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
           // Serial.println(status ? "Show modbus messages: true" : "Show modbus messages: false");
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
    Serial.printf("MyModbus timeout: %lu ms\n", (long unsigned int)transactionTimeout);
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
    snprintf(message, sizeof(message), "MyModbus waitEndTransaction, allowed time: %lu [ms]", (long unsigned int)transactionTimeout);
    showMessages((const char *)message);
    bool status;

    // On attend au maximum le temps du timeout
    while (millis() < deadline) {
        Serial.printf("Avant modbus->task() à %lu ms\n", millis());
        modbus->task();
        Serial.printf("Après modbus->task() à %lu ms\n", millis());

        status = modbus->slave();
        Serial.printf("modbus->slave() = %d à %lu ms\n", status, millis());
        
        // Si la transaction est terminée
        if (!status) {
            stats.lastTransactionTime = millis() - start;
            
            // NE PAS forcer lastEvent = SUCCESS
            // Vérifier plutôt la valeur courante de lastEvent
            
            if (lastEvent == Modbus::EX_SUCCESS) {
                stats.lastSuccessTime = millis();
                if (stats.lastTransactionTime > stats.maxTransactionTime) {
                    stats.maxTransactionTime = stats.lastTransactionTime;
                }
                snprintf(message, sizeof(message), "MyModbus waitEndTransaction done SUCCESS, in: %lu [ms]", (long unsigned int)stats.lastTransactionTime);
                showMessages((const char *)message);
                return true;
            } else {
                // Une erreur a été détectée par le callback, la respecter
                snprintf(message, sizeof(message), "MyModbus waitEndTransaction done ERROR (code:%d), in: %lu [ms]", lastEvent, (long unsigned int)stats.lastTransactionTime);
                showMessages((const char *)message);
                return false;
            }
        }  
        vTaskDelay(pdMS_TO_TICKS(10));
    }

    // Si on est sorti par timeout
    snprintf(message, sizeof(message), "MyModbus waitEndTransaction out of transaction allowed time (%lu ms)", (long unsigned int)transactionTimeout);
    showMessages(message);
    status = modbus->slave();
    Serial.printf("modbus->slave() = %d à %lu ms\n", status, millis());
    if (modbus->slave()) {
        // On force une dernière fois task() pour nettoyer l'état
        Serial.printf("Avant modbus->task() à %lu ms\n", millis());
        modbus->task();
        Serial.printf("Après modbus->task() à %lu ms\n", millis());
        // On s'assure que lastEvent indique un timeout
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
        (long unsigned int)stats.totalTransactions,
        (long unsigned int)stats.successfulTransactions,
        (long unsigned int)stats.totalErrors,
        (long unsigned int)stats.crcErrors,
        (long unsigned int)stats.timeoutErrors,
        (long unsigned int)stats.connectionErrors,
        (long unsigned int)stats.hardErrors,
        (long unsigned int)stats.maxTransactionTime,
        (long unsigned int)stats.lastTransactionTime,
        (long unsigned int)stats.lastErrorTime > 0 ? millis() - stats.lastErrorTime : 0
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
    snprintf(text, MAX_MESSAGE_LENGTH, "MyModbus::handleError: (%lu ms since last error): %s\n", (long unsigned int)timeSinceLastError, message);

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