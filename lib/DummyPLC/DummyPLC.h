#pragma once
#include "BorneUniverselle/borneUniverselle.h"
#include "Node/Node.h"

#define TX_BUTTON_HOLD    3029257395

#define RECETTE           3143695860    // pour le drop down

class DummyPLC{
    public:
        DummyPLC();
        bool logiqueExecutor();

        static void InterruptHandling();

         // Déclaration de la méthode non statique
        void initialStateLoadedHandler();  // c'est la callback qui sera appelé lors que le js enverra le signal InitialStateLoaded

        JsonDocument getDropDownDescriptorHandler(); // C'est le handler qui sera appelé lorsque le dropdown du js enverra un get value: on va en profiter pour répondre avec le descripteuré


    private:
    BooleanOutputNode *txButtonHold;
    VirtualTextOutputNode *recette;
        
};
