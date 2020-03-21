// L'utente inserisce due nuemri in successione. Il software stampa il maggiore

// messaggio da dare all'utente
var msg;
// L'utente inserisce il primo numero e lo salviamo
var primoNumeroUtente = parseInt(prompt("Ciao , inserisci per favore un numero"));
// L'utente inserisce il secondo nuemro e lo salviao
var secondoNuemroUtente = parseInt(prompt("Inserisci ora un secondo nuemro "));

console.log(primoNumeroUtente);
console.log(secondoNuemroUtente);

// Confronto i due numeri per vedere qual è quella più lunga
if (primoNumeroUtente > secondoNuemroUtente){
  msg = "Il primo numero che hai scritto è più grande ed è uguale a :" + primoNumeroUtente;
} else if (secondoNuemroUtente > primoNumeroUtente){
  msg = "Il secondo numero è più grande";
} else{
  msg = "i due numero sono uguali"
}

document.getElementById("numeri").innerHTML = msg;
