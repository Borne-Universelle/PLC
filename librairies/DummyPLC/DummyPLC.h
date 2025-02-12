#pragma once
#include "BorneUniverselle.h"
#include "Node.h"

class DummyPLC{
    public:
        DummyPLC();
        bool logiqueExecutor();

        static void InterruptHandling();

         // Déclaration de la méthode non statique
        void initialStateLoadedHandler();
    private:
        
};
