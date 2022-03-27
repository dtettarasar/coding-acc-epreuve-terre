// Exercice 11 : Nombre Premier

const main = () => {

    const argument = argTester();

    console.log(argument);
}

const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /^[0-9]+$/;

    if (argument.length != 1 || !pattern.test(argument)) {
        console.log("Veuillez passer un entier positif en argument");
        console.log("Exemple : node terre10.js 10");
        return false;
    }

    return argument;

}

main();