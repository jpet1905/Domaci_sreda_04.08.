/*
2. Treba izracunati popust U DINARIMA koji ostvaruje kupac.
Pravila za ostvarivanje popusta su sledeca:

- Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
- Studenti ostvaruju popust 20% za iznose koji su veci od 3000 din.
- Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
- Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
- Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca.
PRIMER:
Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

let kupac = prompt("Uneti kategoriju kupca", "npr.: zaposlen, student, penzioner ili firma").trim().toLowerCase();
let danUNedelji = 3, ukupniIznos = 4580;
switch (danUNedelji) {
    //radni dani u nedelji
    case 1: case 2: case 3: case 4: case 5:
        if (kupac == "zaposlen") {
            if (ukupniIznos > 5000) {
                ukupniIznos = ukupniIznos * 0.95;
                console.log(`Iznos za uplatu sa ostvarenim popustom je ${ukupniIznos}`);
            } else {
                console.log(`Ne ostvarujete pravo na popust!\nIznos za uplatu je ${ukupniIznos}`);
            }
        } else if (kupac == "student") {
            if (ukupniIznos > 3000) {
                ukupniIznos = ukupniIznos * 0.8;
                console.log(`Iznos za uplatu sa ostvarenim popustom je ${ukupniIznos}`);
            } else {
                console.log(`Ne ostvarujete pravo na popust!\nIznos za uplatu je ${ukupniIznos}`);
            }
        } else if (kupac == "penzioner") {
            if (ukupniIznos > 2000) {
                ukupniIznos = ukupniIznos * 0.7;
                console.log(`Iznos za uplatu sa ostvarenim popustom je ${ukupniIznos}`);
            } else {
                console.log(`Ne ostvarujete pravo na popust!\nIznos za uplatu je ${ukupniIznos}`);
            }
        } else if (kupac == "firma") {
            if (ukupniIznos > 10000) {
                ukupniIznos = ukupniIznos * 0.9;
                console.log(`Iznos za uplatu sa ostvarenim popustom je ${ukupniIznos}`);
            } else {
                console.log(`Ne ostvarujete pravo na popust!\nIznos za uplatu je ${ukupniIznos}`);
            }
        } else {
            console.log(`Zao nam je - ne spadate ni u jednu od kategorija koje mogu da koriste popuste.`)
        }

        break;
    //dani vikenda kada se ostavruje dodatni popust
    case 6: case 7:
        if (kupac == "zaposlen" && ukupniIznos > 5000) {
            ukupniIznos = (ukupniIznos * 0.95) * 0.95; //zagrade su visak, samo radi preglednosti
            console.log(`Iznos za uplatu sa oba ostvarena popusta je ${ukupniIznos}`);
        } else if (kupac == "student" && ukupniIznos > 3000) {
            ukupniIznos = (ukupniIznos * 0.8) * 0.95;
            console.log(`Iznos za uplatu sa oba ostvarena popusta je ${ukupniIznos}`);
        } else if (kupac == "penzioner" && ukupniIznos > 2000) {
            ukupniIznos = (ukupniIznos * 0.7) * 0.95;
            console.log(`Iznos za uplatu sa oba ostvarena popusta je ${ukupniIznos}`);
        } else if (kupac == "firma" && ukupniIznos > 10000) {
            ukupniIznos = (ukupniIznos * 0.9) * 0.95;
            console.log(`Iznos za uplatu sa oba ostvarena popusta je ${ukupniIznos}`);
        } else {
            //vikendom 5% popusa za sve kategorije kupaca i sve iznose kupovine
            ukupniIznos = ukupniIznos * 0.95;
            console.log(`U toku je vikend akcija koja vazi za sve!\nVas iznos za uplatu je ${ukupniIznos}`);
        }
        break;
}