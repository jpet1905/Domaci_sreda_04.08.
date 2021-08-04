/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:
Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.
*/

//*********RESENJE PRVOG ZADATKA********/
//1.varijanta sa fiksnim unosom visine drveta
var visinaDrveta = 16;
var predjeniPut = 0;
var brojDana = 0;
while (predjeniPut < visinaDrveta) {
    predjeniPut += 3; //svakog dana predje 3cm
    visinaDrveta++; //drvo raste 1cm dnevno
    console.log(`Puz je do sada presao ${predjeniPut}, visina drveta je sada ${visinaDrveta}`);
    ++brojDana; //brojac za dane, plusevi ispred da bi odmah uvecao i racunao od prvog dana 
}
console.log(`Puz se popeo na drvo za ${brojDana}`);
console.log('-------------');

//2.varijanta sa korisnickim zadavanjem visine drveta
function myFunction() {
    let predjeniPut = 0;
    //*konvertuj uneti string u broj, jer prompt posmatra unetu vrednost kao string*
    let visinaDrveta = parseInt(prompt("Unesite pocetnu visinu drveta", "u cm"));
    /*OBAVEZAN USLOV (teorija): parseInt za string sa slovima izbaca NaN, a samo ovako mozemo da proverimo da li nesto nije NaN
    sa ovim if pokrivam i slovni unos i klik korisnika na Cancel (a ne OK)*/
    if (visinaDrveta !== visinaDrveta) {
        console.log('Neispravan unos!');
    } else {
        //kada je korisnim uneo brojcanu vrednost
        let brojDana = 0; //mora od 0 a ne 1, mora ovde a ne van if-a da ne bi stampalo 0 cak i za neispravan unos
        while (predjeniPut < visinaDrveta) {
            predjeniPut += 3; //svakog dana predje 3cm
            visinaDrveta += 1; //drvo raste 1cm dnevno
            console.log(`Puz je do sada presao ${predjeniPut}, visina drveta je sada ${visinaDrveta}`);
            brojDana++; //brojac za dane
        }
        console.log(`Puz se popeo na drvo za ${brojDana}`);
    }
}

