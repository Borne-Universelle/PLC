#include "MemoryMonitor/MemoryMonitor.h"

void MemoryMonitor::trackStats() {
    uint32_t currentFreeHeap = ESP.getFreeHeap();
    
    if (currentFreeHeap < lowestFreeHeap) {
        lowestFreeHeap = currentFreeHeap;
        Serial.printf("%lu::New lowest free heap: %lu bytes\n", millis(), (unsigned long)lowestFreeHeap);
        
        // Appeler l'analyse de tendance à chaque nouveau minimum
        analyzeMemoryTrend();
    }

    uint32_t currentFreePsram = ESP.getFreePsram();
    if (currentFreePsram < lowestFreePsram) {
        lowestFreePsram = currentFreePsram;
        Serial.printf("%lu::New lowest free PSRAM: %lu bytes\n", millis(), (unsigned long)lowestFreePsram);
    }
}

void MemoryMonitor::printStats(const char* context) {
    uint32_t freeHeap = ESP.getFreeHeap();
    uint32_t minFreeHeap = ESP.getMinFreeHeap();
    uint32_t maxAllocHeap = ESP.getMaxAllocHeap();
    uint32_t freePsram = ESP.getFreePsram();
    uint32_t minFreePsram = ESP.getMinFreePsram();

    if (context) {
        Serial.printf("\nMemory Stats for context: %s\n", context);
    } else {
        Serial.println("\nMemory Stats:");
    }
    
    Serial.printf("Free Heap: %lu bytes (Min: %lu bytes)\n",
                 (unsigned long)freeHeap, (unsigned long)minFreeHeap);
    Serial.printf("Max Alloc Heap: %lu bytes\n",
                 (unsigned long)maxAllocHeap);
    Serial.printf("Free PSRAM: %lu bytes (Min: %lu bytes)\n",
                 (unsigned long)freePsram, (unsigned long)minFreePsram);
    
    // Calculate heap fragmentation
    float fragmentation = 100.0 - ((float)maxAllocHeap * 100.0 / (float)freeHeap);
    Serial.printf("Heap Fragmentation: %.1f%%\n", fragmentation);
}

bool MemoryMonitor::getChange(){
    uint32_t currentFreeHeap = ESP.getFreeHeap();
   return currentFreeHeap < lowestFreeHeap;
}

void MemoryMonitor::analyzeMemoryTrend() {
    static uint32_t lastHeapValue = 0;
    static uint32_t lastCheckTime = 0;
    static uint32_t totalLoss = 0;
    static uint32_t checkCount = 0;
    
    uint32_t currentTime = millis();
    uint32_t currentHeap = ESP.getFreeHeap();
    
    // Premier appel
    if (lastHeapValue == 0) {
        lastHeapValue = currentHeap;
        lastCheckTime = currentTime;
        return;
    }
    
    // Calculer la perte sur cette période
    if (currentHeap < lastHeapValue) {
        uint32_t loss = lastHeapValue - currentHeap;
        uint32_t timeElapsed = currentTime - lastCheckTime;
        
        totalLoss += loss;
        checkCount++;
        
        float avgLossPerSecond = (float)totalLoss * 1000.0f / (currentTime - lastCheckTime);
        
        Serial.printf("Memory loss: %lu bytes in %lu ms (%.2f bytes/sec average)\n", loss, timeElapsed, avgLossPerSecond);
    }
    
    lastHeapValue = currentHeap;
    lastCheckTime = currentTime;
}

void MemoryMonitor::sectorAnalysis() {
    static const char* sectors[] = {
        "WiFi", "Modbus", "PLC_Persistence", "Nodes", "Other"
    };
    static uint32_t lastSectorHeap[5] = {0};
    static bool initialized = false;
    
    uint32_t currentHeap = ESP.getFreeHeap();
    
    if (!initialized) {
        for (int i = 0; i < 5; i++) {
            lastSectorHeap[i] = currentHeap;
        }
        initialized = true;
        return;
    }
    
    // Activer/désactiver temporairement différents systèmes et mesurer l'impact
    
    // Exemple: désactiver temporairement WiFi
    WiFi.disconnect(true);
    uint32_t heapWithoutWiFi = ESP.getFreeHeap();
    uint32_t wifiImpact = heapWithoutWiFi - currentHeap;
    
    // Réactiver WiFi si nécessaire
    // ...
    
    Serial.printf("Memory impact by sector:\n");
    Serial.printf("WiFi: %ld bytes\n", (long)wifiImpact);
    // Autres mesures...
}