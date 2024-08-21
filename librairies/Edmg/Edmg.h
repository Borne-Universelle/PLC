#ifndef EDMG_LIB_H
#define EDMG_LIB_H

#include "BorneUniverselle.h"

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)

// hash keys: Ce sont les hash qui sont indiqué dans le fichier de config.
#define BUZZER      3976453248
#define INPUT_1     2250121094
#define INPUT_2     4042991291

#define OUTPUT_1    4029808943
#define OUTPUT_2    2262251538
#define OUTPUT_3    497341126
#define OUTPUT_4    1797081704
#define OUTPUT_5    4033781948

#define MODBUS_ERROR    2596006170

#define CONSTR_EDMG "Constructeur de la class EDMG"


class EDMG{
    public:
        EDMG();
        bool logiqueExecutor();

    private:
        BooleanOutputNode *buzzer, *output_1, *output_2, *output_3, *output_4, *output_5, *modbusError;
        BooleanInputNode *input_1, *input_2, *input_3, *input_4, *input_5;

        bool error = false;
        long value = 0;
        long timeout = 1000;

};
#endif