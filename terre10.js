// Exercice 11 : Nombre Premier

const main = () => {

    const argument = argTester();

    let result = null;

    if (argument == 0) {
        result = false;
    } else if (argument) {
        result = isPrimeNumber(argument);
    }

    // console.log("result: " + result);

    if (result) {
    	 console.log("Oui, " + argument + " est un nombre premier.");
    } else {
	     console.log("Non, " + argument + " n'est pas un nombre premier.");
    }

}

const isPrimeNumber = (int) => {

    // console.log(int);

    if (int == 1) {
        return false;
    }

    const divider = [];

    for (let i = int; i > 0; i--){

        const modulo = int % i;
        // console.log("i: " + i);
        // console.log("modulo: " + modulo);
        // console.log("---");

        if (modulo == 0) {
            divider.push(i);
        }

        if (divider.length > 2) {
            break;
        }

    }

    // console.log("divider: ");
    // console.log(divider);

    if (divider.length == 2 && divider[0] == int && divider[1] == 1) {
        return true;
    } else {
        return false;
    }

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
