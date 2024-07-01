// SNACK 1: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// definisco elenco degli invitati
const invitati = ["Jay", "Daisy", "Nick", "Patrick", "Scott", "Francis", "Susan", "Edward", "Stuart"];
console.log(invitati);
// recupero il pulsante dal DOM
const button = document.getElementById("submit");
// aggiungo evento al tag button
button.addEventListener('click', function () {
    // recupero il valore inserito nel campo input
    let guest = document.getElementById('name').ariaValueMax.toLowerCase();
    console.log(guest);
    // inserisco variabile di controllo flag
    let found_invitati = false;
    // ciclo l'array e confronto l'elemento da cercare con la mail inserita nel form
    for (let i = 0; i < invitati.lenght; i++) {
        if (invitati[i].toLowerCase() === guest) {
            // se la condizione è vera, imposto la variabile di controllo true
            found_invitati = true;
        }
    }
    // creo messaggio con contenuto in base al valore della variabile di controllo
    if (found_invitati === true) {
        alert(`Dear ${guest.toLowerCase()}, you are welcome to the Party`);
    }
    else {
        alert(`Sorry ${guest.toLowerCase()}, your entry is not granted`);
    }
});