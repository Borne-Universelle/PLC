#include <ModbusRTU.h>
#include "esp_task_wdt.h"
#include "PLC_CommonTypes/PLC_CommonTypes.h"
#include "PLC_Tools/PLC_Tools.h"

// ATTENTION !!! CETTE CLASSE EST UN SINGLETON !!!!

#define MIN_TIMEOUT          10    // 10ms minimum
#define MAX_TIMEOUT          1000  // 1s maximum  
#define DEFAULT_TIMEOUT      100   // 100 ms par défaut
#define DELAY_TRANSACTION    1     // 1ms minimum entre transactions

class MyModbus {
public:
    struct ModbusStats {
        uint32_t crcErrors = 0;
        uint32_t timeoutErrors = 0;
        uint32_t connectionErrors = 0;
        uint32_t hardErrors = 0;
        uint32_t totalErrors = 0;
        uint32_t successfulTransactions = 0;
        uint32_t totalTransactions = 0;
        uint32_t lastErrorTime = 0;
        uint32_t lastSuccessTime = 0;
        uint32_t maxTransactionTime = 0;
        uint32_t lastTransactionTime = 0;
        Modbus::ResultCode lastErrorCode = Modbus::EX_SUCCESS;
    };

       // Supprimer la possibilité de copier l'instance
    MyModbus(const MyModbus&) = delete;
    void operator=(const MyModbus&) = delete;

    static MyModbus& getInstance() {
        static MyModbus instance;
        return instance;
    }

    // Configuration Modbus
    void setModbus(ModbusRTU *_modbus);
    ModbusRTU *getModbus(){ return modbus; };

    // Gestion du timeout
    void setTimeout(uint32_t ms);
    uint32_t getTimeout();
    void resetTimeout();

    // Gestion du bus Modbus
    void waitUntilModbusFree();
    bool waitEndTransaction();
    bool isModbusFree();
    Modbus::ResultCode getLastEvent();

    // Gestion des statistiques
    const ModbusStats& getStats();
    void resetStats();
    void getErrorReport(char* buffer, size_t size);
    static bool cbRead(Modbus::ResultCode event, uint16_t transactionId, void* data);
    static bool cbWrite(Modbus::ResultCode event, uint16_t transactionId, void* data);

    // envoi des messages d'erreurs
    typedef void (*MessageCallback)(uint8_t severity, const char* message);
    void setShowMessages(bool status);

    void setMessageCallback(MessageCallback callback) {
        messageCallback = callback;
    }

protected:


private:
    MyModbus(); // Constructeur privé pour empêcher la création d'instance
    ModbusRTU *modbus;
    uint32_t lastTransaction;
    Modbus::ResultCode lastEvent;
    uint32_t lastProblem;
    bool busy = false;
    
    ModbusStats stats;
    uint32_t transactionTimeout;

    void processEvent(Modbus::ResultCode event);
    void handleError(Modbus::ResultCode event);
    void getModbusErrorMessage(Modbus::ResultCode event, char* message);

    bool isShowMessages;
    void showMessages(const char *text);

    MessageCallback messageCallback;

};