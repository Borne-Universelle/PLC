40093

0 SRDY (servo ready)
1 SON (servo activated) 
2 ZSPD (zero speed) En mouvement  status vert immobile gris lorsque sa bouge
WARN (This is on when servo warning, CW,
CCW, OVRD, undervoltage, communication
error, etc. occurs.)
3 TSPD (target speed reached)
4 TPOS (target position reached)
5 TQL (torque limit activated)  pas mis
6 ALRM (servo alarm)
7 BRKR (magnetic brake control output) 

8 HOME (homing completed)
9 OLW message 
10  message


40101 Absolute Coordonate System Status message pour tous les bits
Bit 0: 1 means the absolute position is lost; 0 means normal.
• Bit 1: 1 means the battery is undervoltage; 0 means normal.
• Bit 2: 1 means the absolute multiple turns is overflowing; 0 means normal.
• Bit 3: 1 means the PUU is overflowing; 0 means normal.
• Bit 4: 1 means the absolute coordinate has not been set; 0 means normal.


40003
Alarms
0 pas d'alarm
si différent de 0 envoyer un message 
11.1 afficher le chiffre en hexa


Départ cycle
Mettre le target Je lis interface web je le pousse dans 1543
Si on le perd on fait un arrêt immediat avec le relais 4 
Si arrêt urgence on fait coller le relais 4
Ecrire 1 dans 1295
J'attends que l'on soit a la position avec bit
Change la target a 10000






