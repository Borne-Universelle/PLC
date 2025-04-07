#include <unity.h>
#include "Formaca.h"

// Mock des classes de base utilisées par Formaca
class MockNode {
public:
    virtual void setValue(float value) {}
    virtual float getValue() { return 0; }
};

class MockBooleanOutputNode : public MockNode {
public:
    bool value = false;
    void setValue(bool val) { value = val; }
    bool getValue() { return value; }
};

class MockFloatOutputNode : public MockNode {
public:
    float value = 0.0;
    void setValue(float val) { value = val; }
    float getValue() { return value; }
};

// Redéfinition des dépendances statiques pour le test
namespace BorneUniverselle {
    MockNode* findNode(const char* context, const char* name) {
        static MockBooleanOutputNode mockBool;
        static MockFloatOutputNode mockFloat;
        if (strcmp(name, WIDTH_LENGTH) == 0 || strcmp(name, LENGTH) == 0 || strcmp(name, WASTE_LENGTH) == 0) {
            return &mockFloat;
        }
        return &mockBool;
    }
    bool isPlcBroken() { return false; }
    void setPlcBroken(const char* error) {}
    void prepareMessage(const char* type, const char* message) {}
}

// Classe Formaca modifiée pour le test
class FormacaTest : public Formaca {
public:
    FormacaTest() : Formaca() {
        // Initialisation des mocks
        widthLength = (FloatOutputNode*)BorneUniverselle::findNode(CONSTR_FORMACA, WIDTH_LENGTH);
        longLength = (FloatOutputNode*)BorneUniverselle::findNode(CONSTR_FORMACA, LENGTH);
        wasteLength = (FloatOutputNode*)BorneUniverselle::findNode(CONSTR_FORMACA, WASTE_LENGTH);

        // Initialisation des paramètres pour simuler une configuration
        parameters.nbRecettes = 2;
        strcpy(parameters.recettes[0].name, "Recette1");
        parameters.recettes[0].width = 10.0;
        parameters.recettes[0].longlength = 20.0;
        parameters.recettes[0].angle = 45.0;
        strcpy(parameters.recettes[1].name, "Recette2");
        parameters.recettes[1].width = 15.0;
        parameters.recettes[1].longlength = 25.0;
        parameters.recettes[1].angle = 30.0;

        // Valeur initiale pour wasteLength
        wasteLength->setValue(5.0);
    }

    // Exposition des membres protégés pour le test
    float getAngleRadians() { return angleRadians; }
    float getTotalWasteLength() { return totalWasteLength; }
    float getBladeLostLength() { return bladelostLength; }
};

// Tests unitaires
void test_setNewRecette_updates_parameters_correctly() {
    FormacaTest formaca;

    // Test avec la première recette
    bool result = formaca.setNewRecette("Recette1");
    TEST_ASSERT_TRUE(result);
    TEST_ASSERT_EQUAL_FLOAT(10.0, ((MockFloatOutputNode*)formaca.widthLength)->value);
    TEST_ASSERT_EQUAL_FLOAT(20.0, ((MockFloatOutputNode*)formaca.longLength)->value);
    TEST_ASSERT_FLOAT_WITHIN(0.01, 0.7854, formaca.getAngleRadians()); // 45° en radians = π/4 ≈ 0.7854
    float expectedBladeLostLength = BLADE_TICKNESS / (2 * sin(0.7854));
    TEST_ASSERT_FLOAT_WITHIN(0.01, expectedBladeLostLength, formaca.getBladeLostLength());
    TEST_ASSERT_FLOAT_WITHIN(0.01, 5.0 + expectedBladeLostLength, formaca.getTotalWasteLength());

    // Test avec la deuxième recette
    result = formaca.setNewRecette("Recette2");
    TEST_ASSERT_TRUE(result);
    TEST_ASSERT_EQUAL_FLOAT(15.0, ((MockFloatOutputNode*)formaca.widthLength)->value);
    TEST_ASSERT_EQUAL_FLOAT(25.0, ((MockFloatOutputNode*)formaca.longLength)->value);
    TEST_ASSERT_FLOAT_WITHIN(0.01, 0.5236, formaca.getAngleRadians()); // 30° en radians = π/6 ≈ 0.5236
    expectedBladeLostLength = BLADE_TICKNESS / (2 * sin(0.5236));
    TEST_ASSERT_FLOAT_WITHIN(0.01, expectedBladeLostLength, formaca.getBladeLostLength());
    TEST_ASSERT_FLOAT_WITHIN(0.01, 5.0 + expectedBladeLostLength, formaca.getTotalWasteLength());
}

void test_setNewRecette_invalid_recipe() {
    FormacaTest formaca;

    // Test avec une recette inexistante
    bool result = formaca.setNewRecette("RecetteInvalide");
    TEST_ASSERT_FALSE(result);
    // Vérifie que les valeurs n'ont pas été modifiées (valeurs par défaut ou inchangées)
    TEST_ASSERT_EQUAL_FLOAT(0.0, ((MockFloatOutputNode*)formaca.widthLength)->value);
    TEST_ASSERT_EQUAL_FLOAT(0.0, ((MockFloatOutputNode*)formaca.longLength)->value);
}

void setup() {
    UNITY_BEGIN();
    RUN_TEST(test_setNewRecette_updates_parameters_correctly);
    RUN_TEST(test_setNewRecette_invalid_recipe);
    UNITY_END();
}

void loop() {}