// creazione di 2 prompt
// l'utente deve inserire una parola per ogni prompt

var parola1 = prompt("Inserisci la prima parola");
if (parola1 == "" || !Number.isNaN(parseInt(parola1))) {
    alert("E' necessario inserire una parola");
}

var parola2 = prompt("Inserisci la seconda parola");
if (parola1 == "" || !Number.isNaN(parseInt(parola2))) {
    alert("E' necessario inserire una parola");
}

//controllo validità delle parole

// controllo quale parola è più lunga
// stampo la parla piu lunga
//poi quella più corta
if (parola1.length > parola2.length) {
    console.log("La parola più lunga è " + parola1 + " e poi ti stampo anche " + parola2);
} else if (parola2.length > parola1.length) {
    console.log("La parola più lunga è " + parola2 + " e poi ti stampo anche " + parola1);
} else if (parola1.length == parola2.length) {
    console.log("Le parole inserite hanno la stessa lunghezza");
}

if (parola1) {
    alert("E' necessario inserire una parola")
}

