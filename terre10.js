// Exercice 11 : Nombre Premier

const main = () => {

    const argument = argTester();

    if (argument) {
        
        const result = isPrimeNumber(argument);
        console.log(result);

    }

}

const isPrimeNumber = (int) => {

    const divider = [];

    for (let i = int; i >= 0; i--){

        const modulo = int % i;
        console.log("i: " + i);
        console.log("modulo: " + modulo);
        console.log("---");
    }

    return int;

}

const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /^[0-9]+$/;

    if (argument.length != 1 || !pattern.test(argument)) {
        console.log("Veuillez passer un entier positif en argument");
        console.log("Exemple : node terre10.js 10");
        return false;
    }

    return parseInt(argument);

}

main();