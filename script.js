var km = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log(km);

if (km) {
    console.log('Hai inserito: ' + km + ' km');
    var età = parseInt(prompt('Quanti anni hai?'));
    console.log(età);
    console.log('età corretta');
    if (età) {
    var prezzokm = 0.21;
    var prezzoTratta = prezzokm * km;
    console.log('il tuo prezzo è ');
    console.log(prezzoTratta);
    if (età < 18) {
        var prezzoFinale = (prezzoTratta - (prezzoTratta * 0.2));
        console.log(prezzoFinale);
        console.log('ma hai diritto allo sconto giovani e il tuo prezzo è ' + prezzoFinale);
    } else if (età > 64) {
        var prezzoFinale = (prezzoTratta - (prezzoTratta * 0.4));
        console.log(prezzoFinale);
        console.log('ma hai diritto allo sconto over64 e il tuo prezzo è ' + prezzoFinale);
    } else {
        var prezzoFinale = prezzoTratta;
        console.log('non hai diritto allo sconto minorenni o over64');
    }
} else {
    console.log("Inserire un'età, per favore");
}
} else {
    console.log('Digita un numero per favore');
}
