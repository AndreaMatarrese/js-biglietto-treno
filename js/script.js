// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

console.log('Calcolo prezzo biglitto')

let kmeters = parseFloat(prompt('Quanti chilometri devi percorrere?'))
let age=parseInt(prompt('Quanti hanni hai?'))
let price= kmeters * 0.21
let underage = price* 0.2
let overage = price * 0.4


if (age < 18) {
    price=parseFloat( price - underage);
    console.log('il prezzo per te è:', price);

 } else if( age >= 65){
        price=parseFloat(price - overage);
        console.log('il prezzo per te è:', price)
    } 

console.log('il prezzo è:', price)
 

