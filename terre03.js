//Exercice 4 : L’alphabet à partir de

const args = process.argv.slice(2);
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const pattern = /^[a-z]{1}$/;

const argTester = pattern.test(args[0]);

/*
console.log(args)
console.log(argTester);
*/

const getRemainingLetters = (letter) => {
    let letterFound = false;
    const container = [];
    console.log(letter);
    return container;
}

if (args.length != 1 || !argTester) {
    console.log("Veuillez saisir une lettre minuscule");
    console.log("Exemple : node terre03.js a");
    return false;
} else {
    getRemainingLetters(args[0]);
}