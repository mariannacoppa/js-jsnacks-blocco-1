// SNACK 1: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// definisco elenco di invitati
const invitati = ["Jay", "Daisy", "Nick", "Susan", "Ann", "Liz", "Patrick", "Thomas", "Robert"];
console.log(invitati);
// recupero il pulsante dal dom
const button = document.getElementById("submit");

button.addEventListener('click', function () {
    // recupero il valore inserito nel campo input
    let firstname = document.getElementById('firstname').value.toLowerCase();
    console.log(firstname);
    // inserisco la variabile di controllo (flag)
    let found_invitati = false;
    // ciclo l'array e confronto l'elemento da cercare con il nome inserito nel form
    for (let i = 0; i < invitati.length; i++) {
        if(invitati[i].toLowerCase() === firstname) {
            // se la condizione è vera, imposto la variabile di controllo true
            found_invitati = true;
        }
    }
    // creo messaggio con contenuto in base al valore della variabile di controllo
    if (found_invitati === true) {
        alert(`Dear ${firstname.toUpperCase()}, you are welcome to the Party`);
    }
    else {
        alert(`Sorry ${firstname.toUpperCase()}, your entry is not allowed`);
    }
});