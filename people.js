/* STEP 3: people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri.
    La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
    All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

// importata la funzione da names.js //
import names from "./names.js";

// importata la funzione da hobbies.js //
import hobby from "./hobbies.js";

// creazione funzione senza parametri //
function people() {
  const nameObj = names("Giovanni", "Garlaschini");
  const hobbies = hobby("Cinema", "Pesca", "Yoga");
  
  return {
    fullName: nameObj,
    hobbies: hobbies,
  };
};

// funzione esportata //
export default people;