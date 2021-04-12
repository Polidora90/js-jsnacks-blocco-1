// creazione di 2 prompt
// l'utente deve inserire un numero per ogni prompt
var num1 = parsInt(prompt("Inserisci il primo numero"));
var num2 = parsInt(prompt("Inserisci il secondo numero"));

// controllo dati dell'utente
if (Number.isNaN(num1)) || Number.isNaN(num2)) {
    console.log("Uno o entrambi i numeri non sono validi");
} else {
    // controllo quele dei due numeri è maggiore
    var numeroMaggiore;

    if (num1 > num2) {
        numeroMaggiore = num1;
    } else if (num2 > num1) {
        numeroMaggiore = num2;
    }

    // stampo il numero maggiore
    //anche in caso di numeri negativi
    // va bene !=="undefined" ma anche ==="number". La var è undefined se è vuota, non definita, quindi se nessuna delle due condizioni di riga 14 e 16 non si avverano.
    if (typeof numeroMaggiore !== "undefined") {
        console.log("Il numero maggione è " + numeroMaggiore);
    } else {
        //caso in cui inumeri sono pari
        console.log("I due numeri sono pari");
    }
}

