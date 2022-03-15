//Exercice 4 : L’alphabet à partir de

const args = process.argv.slice(2);

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let letterFound = false;

console.log(args)

if (args.length != 1) {
    console.log("Veuillez saisir une lettre");
    console.log("Exemple : node terre03.js a");
    return false;
}