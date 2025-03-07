#pragma once

class MemoryMonitor {
public:
    static void printStats(const char* context = nullptr) {
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

    static bool getChange(){
         uint32_t currentFreeHeap = ESP.getFreeHeap();
        return currentFreeHeap < lowestFreeHeap;
    }

    // Pour garder un historique des valeurs minimales atteintes
    static void trackStats() {
        uint32_t currentFreeHeap = ESP.getFreeHeap();
        if (currentFreeHeap < lowestFreeHeap) {
            lowestFreeHeap = currentFreeHeap;
            Serial.printf("New lowest free heap: %lu bytes\n", (unsigned long)lowestFreeHeap);
        }

        uint32_t currentFreePsram = ESP.getFreePsram();
        if (currentFreePsram < lowestFreePsram) {
            lowestFreePsram = currentFreePsram;
            Serial.printf("New lowest free PSRAM: %lu bytes\n", (unsigned long)lowestFreePsram);
        }
    }

private:
    static uint32_t lowestFreeHeap;
    static uint32_t lowestFreePsram;
};