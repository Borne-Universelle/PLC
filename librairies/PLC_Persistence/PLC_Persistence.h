#pragma once
#define ARDUINOJSON_ENABLE_COMMENTS 1
#include <Arduino.h>
#include <LittleFS.h>
#include "ArduinoJson.h"
#include "PLC_CommonTypes.h"

#define DEFAULT_PERSISTENCE_TIMEOUT 500  // Timeout en millisecondes
#define DEFAULT_BUSY_WAIT_INTERVAL 50     // Intervalle d'attente en ms pour busy wait
#define DEFAULT_MAX_VERSIONS 10           // Nombre max de versions de backup par défaut
#define JSON_DOCUMENT_MAX_SIZE 16384     // Taille maximale d'un document JSON en octets    

class PLC_Persistence {
    private:
        // Singleton
        static PLC_Persistence* instance;
        
        // Constructeur privé (pattern Singleton)
        PLC_Persistence();
        
        // Variables d'état
        bool busy;
        char lastError[128];
        unsigned long operationStartTime;
        
        // Fonctions privées
        void setLastError(const char* error);
        bool beginFS();
        void endFS();
        bool isPathValid(const char* path);
        
    public:
        // Accès au Singleton
        static PLC_Persistence& getInstance();
        
        // Destructeur
        ~PLC_Persistence();
        
        // Gestion des états
        bool isBusy() const;
        const char* getLastError() const;
        
        // Fonctions avec busy wait
        bool waitUntilAvailable(unsigned long timeout = DEFAULT_PERSISTENCE_TIMEOUT);
        void setBusy(bool state);
        
        // Lecture et écriture de fichiers
        bool saveToFile(const char* path, const char* data, size_t size);
        bool saveToFile(const char* path, const String& data);
        bool readFile(const char* path, String& outData);
        
        // Opérations JSON
        bool saveJsonToFile(const char* path, const JsonDocument& doc);
        bool readJsonFromFile(const char* path, JsonDocument& outDoc);
        
        // Utilitaires
        bool fileExists(const char* path);
        bool deleteFile(const char* path);
        size_t getFileSize(const char* path);
        bool createBackup(const char* path, int maxVersions = DEFAULT_MAX_VERSIONS);
        
        // Nouvelles méthodes pour la gestion du système de fichiers
        bool checkFileSystemIntegrity();
        bool recoverFromBackup(const char* path);
        bool formatFileSystem();
        float getFileSystemUsage(); // Retourne le pourcentage d'utilisation du système de fichiers
        std::vector<String> getFilteredFiles(const char* path, const char* pattern);
        JsonDocument getFilteredFilesAsJson(const char* path, const char* pattern);
};