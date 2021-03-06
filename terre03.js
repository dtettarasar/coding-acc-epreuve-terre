//Exercice 4 : L’alphabet à partir de

const args = process.argv.slice(2);
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const pattern = /^[a-z]{1}$/;

const argTester = pattern.test(args[0]);

const getRemainingLetters = (letter) => {
    let letterFound = false;
    const container = [];
    //console.log(letter);

    for (let i = 0; i < alphabet.length; i++) {
        
        if (letter === alphabet[i]) {
            letterFound = true;
        }
        
        if (letterFound) {
            container.push(alphabet[i]);
        }

    }
    
    return container.join('');
}

if (args.length !== 1 || !argTester) {
    console.log("Veuillez passer une lettre minuscule en argument");
    console.log("Exemple : node terre03.js a");
} else {
    console.log(getRemainingLetters(args[0]));
}