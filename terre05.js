// Exercice 6 : Divisions

const args = process.argv.slice(2);
const pattern = /^-?[0-9]+$/;

const testDividende = pattern.test(args[0]);
const testDiviseur = pattern.test(args[1]);

if (args.length != 2 || !testDividende || !testDiviseur) {
    console.log("Veuillez passer deux nombres entiers en argument (le dividende, puis le diviseur)");
    console.log("Exemple : node terre05.js 10 2");
    return false;
} else {
    console.log(args)
    return true;
}