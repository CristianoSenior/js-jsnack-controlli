// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var msg ;
// Chiedere all'utente di inserire la prima parola
var primaParolaUtente = prompt("Ciao , se non hai altro da fare inserisci una paola , per favore");
// Chiedere all'utente di inserire una seconda parola
var secondaParolaUtente = prompt("Per favore visto che sei a casa a non hai da fare niente , inserisci un'altra parola");


console.log(primaParolaUtente.length);
console.log(secondaParolaUtente.length);
// Stampare output con parola più corta prima e parola più lunga dopo

if (primaParolaUtente.length > secondaParolaUtente.length){
  msg = secondaParolaUtente + primaParolaUtente;
} else if (secondaParolaUtente.length > primaParolaUtente.length){
  msg = primaParolaUtente + secondaParolaUtente;
}


document.getElementById("paroleacaso").innerHTML = msg;
