// Exercice 5 : Pair ou impair

const args = process.argv.slice(2);
const pattern = /^-?[0-9]+$/;
const argTester = pattern.test(args[0]);

const evenOrOdd = () => {

    let strToInt = parseInt(args[0]);
    // console.log(typeof(args[0]));
    // console.log(typeof(strToInt));

    //convert negative int to positive
    if (strToInt < 0) {
        strToInt = strToInt * -1;
    }

    const modulo = strToInt % 2;
    // console.log(modulo);

    if (modulo == 1) {
        console.log("impair");
    } else {
        console.log("pair");
    }

}

if (args.length != 1 || !argTester) {
    console.log("Veuillez passer un nombre entier en argument");
    console.log("Exemple : node terre04.js 1");
    return false;
} else {
    evenOrOdd();
    return true;
}
