#ifndef NODE_H
#define NODE_H

#define ARDUINOJSON_ENABLE_COMMENTS 1

#include "Arduino.h"
#include <esp32/rom/crc.h>
#include <PCF8574.h>
#include "ArduinoJson.h"
//#include "MyModbus/MyModbus.h"
class MyModbus; // forward declaration
#include "BorneUniverselle/borneUniverselle.h"

#define NAME_LENGHT                 80

#define CLASS_NODE                              1
#define CLASS_INPUT_NODE                        2
#define CLASS_OUTPUT_NODE                       3
#define CLASS_BOOLEAN_INPUT_NODE                4
#define CLASS_BOOLEAN_OUTPUT_NODE               5
#define CLASS_UINT16_INPUT_NODE                 6
#define CLASS_UINT16_OUTPUT_NODE                7
#define CLASS_UINT32_INPUT_NODE                 8
#define CLASS_UINT32_OUTPUT_NODE                9
#define CLASS_HW_BOOLEAN_INPUT_NODE             10
#define CLASS_HW_BOOLEAN_OUTPUT_NODE            11
#define CLASS_VIRTUAL_BOOLEAN_INPUT_NODE        12
#define CLASS_VIRTUAL_BOOLEAN_OUTPUT_NODE       13
#define CLASS_PFC8574_BOOLEAN_INPUT_NODE        14
#define CLASS_PFC8574_BOOLEAN_OUTPUT_NODE       15
#define CLASS_VIRTUAL_UINT32_INPUT_NODE         16
#define CLASS_VIRTUAL_UINT32_OUTPUT_NODE        17

#define FIRST_MODBUS_CLASS                      18

#define CLASS_MODBUS_READ_COIL                  18
#define CLASS_MODBUS_WRITE_COIL_NODE            19
#define CLASS_MODBUS_READHOLDINGREGISTER        20
#define CLASS_MODBUS_WRITEHOLDINGREGISTER       21
#define CLASS_MODBUS_READINPUTREGISTER          22
#define CLASS_MODBUS_READ_DOUBLE_INPUTREGISTER  23
#define CLASS_MODBUS_WRITE_DOUBLE_INPUTREGISTER  24
#define CLASS_MODBUS_READ_DOUBLE_HOLDING_REGISTER 25
#define CLASS_MODBUS_WRITE_DOUBLE_HOLDING_REGISTER 26
#define CLASS_MODBUS_WRITE_MULTIPLE_COILS       27
#define CLASS_MODBUS_READ_MULTIPLE_INPUTS_STATUS 28

#define LAST_MODBUS_CLASS                       28

#define CLASS_FLOAT_INPUT_NODE                  29
#define CLASS_FLOAT_OUTPUT_NODE                 30
#define CLASS_VIRTUAL_FLOAT_INPUT_NODE          31
#define CLASS_VIRTUAL_FLOAT_OUTPUT_NODE         32
#define CLASS_TEXT_INPUT_NODE                   33
#define CLASS_VIRTUAL_TEXT_INPUT_NODE           34
#define CLASS_TEXT_OUTPUT_NODE                  35
#define CLASS_VIRTUAL_TEXT_OUTPUT_NODE          36
        
#define DEFAULT_MODBUS_REFRESH_INTERVAL         500
#define DEFAULT_MODBUS_WEB_REFRESH_INTERVAL     500

#define DEFAULT_MODE 0
#define INPUT_MODE  1
#define OUTPUT_MODE 2

#define PFC_INIT_ERROR              "PFC8574 initialisation error !!!"
#define HASH_NOT_FOUND              "Hash not found !!!!"

#define DESCRIPTOR_INCLUDED  "descriptor included"

class Node{
    public:
        Node(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshIntervl);
        virtual int classType() { return CLASS_NODE; }
        char *getName();
        bool setName(const char *name, const char *parentName);
        bool refresh();
        uint32_t getLastRefresh(); 

        uint32_t getHash();
        uint8_t getMode();
        uint32_t getLastWebUpdate();
        void setLastWebUpdate(uint32_t lastUpdate);
        uint32_t getWebUpdateInterval();
        void setWebUpdateInterval(uint16_t interval);
        void clearIsChanged();
        bool getIsChanged();
        bool setDescriptor(JsonDocument descriptor);
        JsonDocument getDescriptor();
        void setShowMessages(bool showMessage); 
        bool getShowMessages(){
            return isShowMessage;
        }
        void showMessage(const char *text);
        void setMode(char * text); 

         // Add callback type definition and setter
        typedef std::function<JsonDocument()> DescriptorCallback;
        void setDescriptorCallback(DescriptorCallback callback) {
             descriptorCallback = callback;
        }
        DescriptorCallback descriptorCallback = nullptr;  

    protected:
        virtual bool specificRefresh() = 0;
        char name[NAME_LENGHT];
        bool updateNeeded = false;  // la valeur cachée est différente de la valeur actuelle.
        uint32_t lastChange;
        uint32_t hash = 0;
        uint32_t lastWebUpdate, webUpdateInterval = DEFAULT_MODBUS_WEB_REFRESH_INTERVAL;
  
        uint32_t getLastChange();
        void setChangeEvent();
        void setMode(uint8_t mode);

    private: 
        uint8_t mode; 
        JsonDocument descriptor;
        bool isShowMessage = false;
        uint32_t lastRefresh = 0;

        // Pour la désactivation temporaire du noeud apres plusieurs erreurs consécutives
        uint8_t consecutiveErrors = 0;
        bool tempDisabled = false;
        uint32_t disabledTime = 0;        // Timestamp de la désactivation
        uint32_t disableDuration = 5000;  // Durée initiale de désactivation (5 secondes)
        uint32_t maxDisableDuration = 60000;
       
        void setLastRefresh(uint32_t lastUpdate);
};

class InputNode: public Node{
    // external world change the value of the node..
    public:
        InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_INPUT_NODE; }
        void setRefreshInterval(uint16_t interval);
        uint32_t getRefreshInterval();

    protected:   
        uint32_t refreshInterval = 0;    
};

class OutputNode: public Node{
    // the node can change the external world..
    public:
        OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_OUTPUT_NODE; }
};

class BooleanInputNode: public InputNode{
     public:
        BooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash,  uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_BOOLEAN_INPUT_NODE; }  
        bool getValue();
        uint32_t getLastUp();
        uint32_t getLastDown();
        bool specificRefresh();
        bool isRisingEdge();
        bool isFallingEdge();
        bool isUpFrom(uint32_t time);
        bool isDownFrom(uint32_t time);  

    protected:
        virtual bool getNewValue(bool& value) = 0;
        bool hideValue = false;
        bool inputInverted;
        uint32_t lastUp = 0, lastDown = 0;
};

class BooleanOutputNode: public OutputNode{
    public: 
        BooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t has,  uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_BOOLEAN_OUTPUT_NODE; }
        void setValue(bool newValue);
        bool getValue();
        uint32_t getLastUp();
        uint32_t getLastDown();
        bool specificRefresh();

    protected:
        virtual bool setNewValue(bool newValue) = 0;
        bool hideValue = false;
        uint32_t lastUp, lastDown;
};

class Uint16InputNode: public InputNode{
    public:
        Uint16InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_UINT16_INPUT_NODE; }
        uint16_t getValue();
        bool specificRefresh();   

    protected:
        uint16_t hideValue = 0;
        virtual bool getNewValue(uint16_t& val) = 0;
};

class Uint32InputNode: public InputNode{
    public:
        Uint32InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_UINT32_INPUT_NODE; }
        uint32_t getValue();
        bool specificRefresh();

    protected:
        uint32_t hideValue = 0;
        virtual bool getNewValue(uint32_t& val) = 0;
};

class FloatInputNode: public InputNode{
     public:
        FloatInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_FLOAT_INPUT_NODE; }
        float getValue();
        bool specificRefresh();

    protected:
        float hideValue = 0;
        virtual bool getNewValue(float& val) = 0;
};

class Uint16OutputNode: public OutputNode{
    public: 
        Uint16OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_UINT16_OUTPUT_NODE; }
        void setValue(uint16_t newValue);
        uint16_t getValue();
        bool specificRefresh();
    
    protected:
        uint16_t hideValue = 0; 
        virtual bool setNewValue(uint16_t newValue) = 0;
};

class Uint32OutputNode: public OutputNode{
    public: 
        Uint32OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_UINT32_OUTPUT_NODE; }
        void setValue(uint32_t newValue);
        uint32_t getValue();
        bool specificRefresh();
    
    protected:
        uint32_t hideValue = 0;
        virtual bool setNewValue(uint32_t newValue) = 0;
};

class FloatOutputNode: public OutputNode{
    public: 
        FloatOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_FLOAT_OUTPUT_NODE; }
        void setValue(float newValue);
        float getValue();
        bool specificRefresh();
    
    protected:
        float hideValue = 0;
        virtual bool setNewValue(float newValue) = 0;
};

class TextInputNode: public InputNode{
    #define MAX_TEXT_SIZE 80
    public:
        TextInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_TEXT_INPUT_NODE; }
        char * getValue();
        bool specificRefresh();

    protected:
        char hideValue[MAX_TEXT_SIZE];
        virtual bool getNewValue(char *val) = 0;
};

class TextOutputNode: public OutputNode{
     public: 
        TextOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_TEXT_OUTPUT_NODE; }
        void setValue(const char * newValue);
        char * getValue();
        bool specificRefresh();
    
    protected:
        char  hideValue[80];
        virtual bool setNewValue(char * newValue) = 0;
};

class HardwareBooleanInputNode: public BooleanInputNode{
    public:
        HardwareBooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t _pin, bool inputInverted, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_HW_BOOLEAN_INPUT_NODE; }
        
    private:
        uint8_t pin;
        bool getNewValue(bool& value);
};

class PF8574BooleanInputNode: public BooleanInputNode{
    public:
        PF8574BooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t  i2cAddr, uint8_t pin, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_PFC8574_BOOLEAN_INPUT_NODE; }
        static void interruptHandler();
        static bool isInterrupt();
        static void clearInterruptFlag(){
            interruptFlag = false;
        }
        static long getTimeOfInterupt(){
            return timeOfInterrupt;
        }

    private:
        static PCF8574 *pcfRx;
        static bool isPCF8574_Initialised, pcfError;

        uint8_t pin;
        bool getNewValue(bool& value);
        static long timeOfInterrupt;
        static bool interruptFlag;
};

class ModbusReadCoilNode: public BooleanInputNode {
    // Function 01
    public:
        ModbusReadCoilNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t refreshInterval,  uint16_t webRefreshInterval);
   
        bool getNewValue(bool &value);

        virtual int classType() { return CLASS_MODBUS_READ_COIL; }
        
        private:
            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus; 
};

class ModbusReadMultipleInputsRegistersNode: public InputNode  {
    // Function 01
    public:
        ModbusReadMultipleInputsRegistersNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address,  uint16_t offset, uint8_t nbValues, uint16_t refreshInterval,  uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_READ_MULTIPLE_INPUTS_STATUS; }
        bool specificRefresh();

        uint8_t getNbValues(){
            return nbValues;
        }

        class Bit {
            public:
               
                bool getValue(){
                    return bitValue;
                }

                bool getIsChanged(){
                    //Serial.printf("%lu:: getIsChanged: value: %s, hideValue: %s\r\n", millis(), bitValue ? "true": "false", bitHideValue ? "true": "false");
                    return bitValue != bitHideValue;
                }

                void setValue(bool _value){
                    bitHideValue = bitValue;
                    if (_value != bitValue){ 
                        bitValue = _value;
                        lastChange = millis();
                        //Serial.printf("%lu:: setValue: value: %s, hideValue: %s\r\n", millis(), bitValue ? "true": "false", bitHideValue ? "true": "false");

                        if (bitValue){
                            lastUp = millis();
                        } else {
                            lastDown = millis();
                        }
                    }
                     //Serial.printf("%lu:: setValue2: value: %s, hideValue: %s\r\n", millis(), bitValue ? "true": "false", bitHideValue ? "true": "false");
                }

                uint32_t getLastChange(){
                    return lastChange;
                }

                bool isRisingEdge(){
                     return bitValue && getIsChanged();
                }

                bool isFallingEdge(){
                     return !bitValue && getIsChanged();
                }

                bool isUpFrom(uint32_t time){
                    return bitValue && (millis() - lastChange > time);
                }

                bool isDownFrom(uint32_t time){
                    return !bitValue && (millis() - lastChange > time);
                }
            
            private:
                bool bitValue = false;
                bool bitHideValue = false;
                uint32_t lastUp = 0;
                uint32_t lastDown = 0;
                uint32_t lastChange = 0;
        };
        
        Bit *bits;

        Bit *getBit(uint id){
            if (!bits || id >= nbValues) {
                Serial.printf("Error: Invalid bits access in getBit(). bits=%p, id=%d, nbValues=%d\n", bits, id, nbValues);
                return nullptr;
            }
            return &bits[id];
        }
        
    private:
        uint16_t address;
        uint16_t offset;
        uint8_t  nbValues;
        MyModbus &myModbus; 

    bool getNewValues(bool values[]);
};

class ModbusReadHoldingRegister: public Uint16InputNode {
    // Function 03
    public:
        ModbusReadHoldingRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t refreshInterval,  uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_READHOLDINGREGISTER; }
        
        private: 
            bool getNewValue(uint16_t &value);
            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus; 
};

class ModbusReadDobbleInputRegisters: public Uint32InputNode {
    public:
        ModbusReadDobbleInputRegisters(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t refreshInterval,  uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_READ_DOUBLE_INPUTREGISTER; }
        
        private:
            bool getNewValue(uint32_t& val);

            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre 
            MyModbus &myModbus;
};

class ModbusReadDoubleHoldingRegisters: public Uint32InputNode {
    public:
        ModbusReadDoubleHoldingRegisters(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t refreshInterval, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_READ_DOUBLE_HOLDING_REGISTER; }
        
        private:
            bool getNewValue(uint32_t &value);

            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus; 
};

class ModbusWriteHoldingRegister: public Uint16OutputNode {
    // Function 06
    public:
        ModbusWriteHoldingRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_WRITEHOLDINGREGISTER; }
        
        private:
            bool setNewValue(uint16_t newValue);

            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus;
};

class ModbusWriteDoubleHoldingRegister: public Uint32OutputNode {
    // Function 06
    public:
        ModbusWriteDoubleHoldingRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_WRITE_DOUBLE_HOLDING_REGISTER; }

         bool setNewValue(uint32_t newValue);  // POUR TEST UNIQUEMENT !!!!!!!!!!!!!!!!!!!!!!!!! THIERRY Thierry
        
        private:
            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus;
    
        //    bool setNewValue(uint32_t newValue);
};

class ModbusReadInputRegister: public Uint16InputNode {
    // Function 04
    public:
        ModbusReadInputRegister(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t refreshInterval,  uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_READINPUTREGISTER; }
        
        private:
            bool getNewValue(uint16_t &value);

            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus;
};


class HardwareBooleanOutputNode: public BooleanOutputNode{
    public:
        HardwareBooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t _pin, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_HW_BOOLEAN_OUTPUT_NODE; }
    private:
        bool setNewValue(bool newValue);

        uint16_t address;  // Adresse de l'esclave Modbus
        uint16_t offset;   // Offset du registre
        uint8_t pin;
};

class PF8574BooleanOutputNode: public BooleanOutputNode{
    public:
        PF8574BooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint8_t  i2cAddr, uint8_t pin, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_PFC8574_BOOLEAN_OUTPUT_NODE; }
    
    private:
        static PCF8574 *pcfTx;
        static bool isPCF8574_Initialised, pcfError;
        uint8_t pin;
        bool setNewValue(bool newValue);
};

class ModbusWriteCoilNode: public BooleanOutputNode {
    // Function 05
    public:
        ModbusWriteCoilNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _id, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_WRITE_COIL_NODE; }
        
        private:
            bool setNewValue(bool newValue);

            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre
            MyModbus &myModbus;
            uint8_t pin;
};

class ModbusWriteMultipleCoilslNode: public OutputNode {
    public:
        ModbusWriteMultipleCoilslNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t address, uint16_t _register, uint8_t nbValues, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_MODBUS_WRITE_MULTIPLE_COILS; }

        bool specificRefresh();
        uint8_t getNbValues();
        bool getValue(uint8_t id);
        bool setValue(bool value, uint8_t id);
        bool setValues(bool *vals, uint8_t nbValues);
        
        private:
            bool setNewValues();

            uint16_t address;  // Adresse de l'esclave Modbus
            uint16_t offset;   // Offset du registre 
            MyModbus &myModbus;      
            bool *values, *hideValues;
            uint8_t nbValues;
};

class VirtualBooleanInputNode: public BooleanInputNode{
    public:
        VirtualBooleanInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() {return CLASS_VIRTUAL_BOOLEAN_INPUT_NODE; }
        void setValue(bool _value);

    private:
        bool getNewValue(bool& value){
            
            return true;
        };
};

class VirtualUint32InputNode: public Uint32InputNode{
    public:
        VirtualUint32InputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() {return CLASS_VIRTUAL_UINT32_INPUT_NODE; }
        void setValue(uint32_t _value);

    private:
        bool getNewValue(uint32_t& value){
            return true;
        }; 
};

class VirtualFloatInputNode: public FloatInputNode{
    public:
        VirtualFloatInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() {return CLASS_VIRTUAL_FLOAT_INPUT_NODE; }
        void setValue(float _value);

    private:
        bool getNewValue(float& val){
            return true;
        };  
};

class VirtualBooleanOutputNode: public BooleanOutputNode{
    public:
        VirtualBooleanOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() { return CLASS_HW_BOOLEAN_OUTPUT_NODE; }

    private:    
        bool setNewValue(bool value){
            hideValue = value;
            return true;
        };
};

class VirtualUint32OutputNode: public Uint32OutputNode{
    public:
        VirtualUint32OutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() {return CLASS_VIRTUAL_UINT32_OUTPUT_NODE; }

    private:
        bool setNewValue(uint32_t value){
            hideValue = value;
            return true;
        };
};

class VirtualFloatOutputNode: public FloatOutputNode{
    public:
        VirtualFloatOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() {return CLASS_VIRTUAL_FLOAT_OUTPUT_NODE; }

    private:
        bool setNewValue(float value){
            hideValue = value;
            return true;
        };
};

    class VirtualTextInputNode: public TextInputNode{
        public:
            VirtualTextInputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
            virtual int classType() {return CLASS_VIRTUAL_TEXT_INPUT_NODE; }
            void setValue(const char *text);

            // Add callback type definition and setter
            //typedef std::function<JsonDocument(const char*)> DescriptorCallback;
            //void setDescriptorCallback(DescriptorCallback callback) {
            //    descriptorCallback = callback;
            //}

        private:
            bool getNewValue(char *value){
                return true;
            } 

        // Add callback member
        //DescriptorCallback descriptorCallback = nullptr;
    };

class VirtualTextOutputNode: public TextOutputNode{
     public:
        VirtualTextOutputNode(char *name, char *parentName, uint16_t id, uint32_t hash, uint16_t webRefreshInterval);
        virtual int classType() {return CLASS_VIRTUAL_TEXT_OUTPUT_NODE; }
        
    private:
        bool setNewValue(char * value){
            strcpy(hideValue, value);
            return true;
        };
        
};
        
#endif