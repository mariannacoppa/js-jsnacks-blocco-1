// SNACK 2:
// Crea un array vuoto
let numbers = [];
// lancio un ciclo di 6 iterazioni
for (let i = 0; i <= 6; i++) {
    // permetto l'inserimento del numero da parte dell'utente
    let num = prompt('inserisci un numero');
    // verifico: se il numero è dispari
    if (num % 2 != 0) {
        // allora inserisco il numero nell'array
        numbers.push(num);
    }
}