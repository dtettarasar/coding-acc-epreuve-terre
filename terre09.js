// Exercice 10 : Racine carrée d'un nombre

const main = () => {

    const argument = argTester();

    if(argument) {
        console.log(argument);
    }

}

const getSquareRoot = () => {

}

const argTester = () => {

    const args = process.argv.slice(2);
    const pattern = /^[0-9]+$/;

    if (args.length != 1 || !pattern.test(args[0])) {
        console.log("Veuillez passer un entier positif en argument");
        console.log("Exemple : node terre09.js 9");
        return false;
    }

    return args[0];

}

main();