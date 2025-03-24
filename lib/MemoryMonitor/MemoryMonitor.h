#pragma once

#include "Arduino.h"
#include <WiFi.h>  // Ajoutez cette ligne

class MemoryMonitor {
public:
    static void printStats(const char* context = nullptr);

    static bool getChange();

    // Pour garder un historique des valeurs minimales atteintes
    static void trackStats();

    static void analyzeMemoryTrend();

    static void sectorAnalysis();

private:
    static uint32_t lowestFreeHeap;
    static uint32_t lowestFreePsram;
};