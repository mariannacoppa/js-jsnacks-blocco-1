// SNACK 3:
// permetto all'utente di inserire un numero
document.getElementById('number').addEventListener('click', function () {
    // recupero il valore dal campo input inserito dall'utente
    let num = document.getElementById('number').value;
    // verifico che il valore inserito sia lungo esattamente 4 cifre
    if (num.length === 4) {
        // dichiaro la variabile che contiene la somma delle cifre
        let somma = 0;
        // ciclo i valori inseriti
        for(let i = 0; i < num.length; i++) {
            // dichiaro e inizializzo la variabile con il primo numero intero
            somma += parseInt(num[i]);
        }
        // mostro la variabile
        console.log(somma);
    }
    else {
        alert('Non hai inserito un numero di 4 cifre');
    }
});