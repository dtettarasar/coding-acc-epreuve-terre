// Exercice 5 : Pair ou impair

const args = process.argv.slice(2);
const pattern = /^-?[0-9]+$/;
const argTester = pattern.test(args[0]);

const evenOrOdd = () => {

    console.log(typeof(args[0]));
    const strToInt = parseInt(args[0]);
    console.log(typeof(strToInt));

}

if (args.length != 1 || !argTester) {
    console.log("Veuillez passer un nombre entier en argument");
    console.log("Exemple : node terre04.js 1");
    return false;
} else {
    evenOrOdd();
    return true;
}