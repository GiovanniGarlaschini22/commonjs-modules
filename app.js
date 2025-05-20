/* CONSEGNA
Lavoriamo con i moduli esportando e importando valori e funzioni.
Segui questi tre step creando i rispettivi files:
*/

/* STEP 1: names.js
Crea una funzione che accetta due parametri: firstName, lastName.
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/

/* STEP 2: hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
    La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.
*/

/* STEP 3: people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri.
    La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
    All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

/* STEP 4: names.js
chiama la funzione di people.js nel file app.js
*/

/*
console.log("Hello World!");
*/

// importo funzione people da people.js //
import { people } from "./people.js";
console.log(people);
