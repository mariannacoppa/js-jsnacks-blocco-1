// SNACK 1: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// definisco elenco di invitati
const invitati = ["Jay", "Daisy", "Nick", "Susan", "Ann", "Liz", "Patrick", "Thomas", "Robert"];
console.log(invitati);
// recupero il pulsante dal dom e gli dico di restare in attesa dell'evento "click"
document.getElementById("submit").addEventListener('click', function () {
    // recupero il valore inserito nel campo input
    let firstname = document.getElementById('firstname').value.toLowerCase();
    console.log(firstname);
    // stabilisco la variabile di controllo (flag)
    let found_invitati = false;
    // ciclo l'array e confronto l'elemento da cercare con il nome inserito nel form
    for (let i = 0; i < invitati.length; i++) {
        // controllo il valore correntemente iterato con quello inserito dall'utente portandoli in lowerCase
        if(invitati[i].toLowerCase() === firstname) {
            // se la condizione è vera, imposto la variabile di controllo a true
            found_invitati = true;
        }
    }
    // creo messaggio con contenuto in base al valore della variabile di controllo
    if (found_invitati) {
        alert(`Dear ${firstname.toUpperCase(0)}, you are welcome to the Party`);
    }
    else {
        alert(`Sorry ${firstname.toUpperCase(0)}, your entry is not allowed`);
    }
});