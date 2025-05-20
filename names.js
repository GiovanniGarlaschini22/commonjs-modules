/* STEP 1: names.js
Crea una funzione che accetta due parametri: firstName, lastName.
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/

// creazione funzione con valori di ritorno //
function names(firstName, lastName) {
  return {
    firstName: "Giovanni",
    lastName: "Garlaschini"
  };
};
// funzione esportata //
export { names };