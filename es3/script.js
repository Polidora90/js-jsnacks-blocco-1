var somma = 0;

var allNumbers = [];

// creazione di 10 numeri inseriti dall'utente
// con ciclo che si riptete 10 volte
for (var i=0; i<10; i++) {
    var number = (parseInt(prompt("Inserisci un numero")));

    allNumbers.push(number);

    // somma i numeri inseriti
    somma += number;
    // somma = somma + numero;
}

if (Number.isNaN(number)) {
    alert("Hai sbagliato. Inserisci un numero.");
}

console.log(somma);

console.log("I mumeri inseriti sono: " + allNumbers.join(", "));
