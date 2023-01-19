/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function trovaIlPiuGrande(num1, num2){
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(trovaIlPiuGrande(10.5))
console.log(trovaIlPiuGrande(20, 25))

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function notEqual(num) {

  if(num !== 5) {
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function divByFive(num) {

  if(num%5 === 0) {
    console.log("divisible by 5" + " " + num);
  } else {
    console.log("not divisible by 5");
  }
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function CompareValue(num1, num2) {

  if (num1 === 8 || num2 === 8 || num1+num2 === 8 || num1-num2 === 8) {
    console.log("correct");
  } else {
    console.log("not correct");
  }
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function eCommerce(value) {

  let totalShoppingCart = 0;

  if (totalShoppingCart > 50) {
    console.log("La tua spesa è di " + totalShoppingCart);
  } else {
    let value = 25;
    console.log("La tua spesa è di " + totalShoppingCart+value + ", l'ammontare delle spese di spezione è di " + value);
  }

}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function eCommerce(valueOne, valueTwo, valueThree) {

  let totalShoppingCart = (valueOne * 0.2) + (valueTwo * 0.2) + (valueThree * 0.2);

  if (totalShoppingCart > 50) {
    console.log("La tua spesa è di " + totalShoppingCart);
  } else {
    let value = 25;
    console.log("La tua spesa è di " + totalShoppingCart+value + ", mentre l'ammontare delle spese di spezione è di " + value);
  }

}

console.log(eCommerce(45, 56, 65));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sort(par1, par2, par3){

let varOne = 4;
let varTwo = 5;
let varThree = 6;

let Sort = [];

if(varOne <= varTwo && varTwo <= varThree){
  alert(Sort=[varOne, varTwo, varThree]);
} else if (varOne <= varTwo && varOne <= varThree){
  alert(Sort=[varOne, varThree, varTwo]);
} else if (varOne <= varTwo && varOne >= varThree){
  alert(Sort=[varThree, varOne, varTwo]);
} else if (varTwo <= varThree && varOne <= varThree){
  alert(Sort=[varTwo, varOne, varThree]);
} else if (varTwo <= varThree && varOne <= varThree){
  alert(Sort=[varThree, varOne, varTwo]);
} else {
  alert(Sort=[varThree, varTwo, varOne]);
}

}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function controlInt(){

  let num;

  if (typeof num === 'int'){
    console.log("correct!");
  } else {
    console.log("uncorrect!");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num;

if (num % 2 === 0) {
  console.log("Correct");
} else {
  console.log("uncorrect");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (10 > val) {
    console.log("Meno di 10");
  } else if (5 > val) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let value;

if(value < 5) {
  console.log("Tiny");
} else if(value < 10){
  console.log("Small");
} else if(value < 15){
  console.log("Medium");
} else if(Value < 20){
  console.log("Large");
} else if(Value >= 20){
  console.log("Huge");
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let gender;

 gender === isMale ? "male" : "female"

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let count =0;

while(count <= 5){
  console.log(count);
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(i=0; i<=10; i++){
  console.log(i);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(i=0; i<=10; i++){
  if(i===3 || i==8){
    console.log(" ");
  }
  console.log(i);
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(i=0; i <=15; i++){
  if(i%2===0){
    console.log( i + ": pari");
  }else{
    console.log(i + ": dispari");
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(i=1; i<=100; i++){
  if(i%3===0){
    console.log("Fizz");
  } else if(i%5===0){
    console.log("Buzz");
  } else if (i%3===0 && i%5===0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let day;

switch (day){
  case 1: 
  console.log("Lunedì");
  break;
  case 2: 
  console.log("Martedì");
  break;
  case 3:
  console.log("Mercoledì");
  break;
  case 4:
  console.log("Giovedì");
  break;
  case 5: 
  console.log("Venerdì");
  break;
  case 6: 
  console.log("Sabato");
  break;
  case 7:
  console.log("Domenica");
  break;
  default:
    console.log("Inserisci un valore tra 1 e 7 per favore");
}
