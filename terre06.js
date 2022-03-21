// Exercice 7 : Inverser une chaîne

const main = () => {

    const argument = argTester();

    console.log(argument);

}

const argTester = () => {

    const args = process.argv.slice(2);

    if (args.length != 1) {
        console.log("Veuillez passer une chaîne de caractère en argument");
        console.log("Exemple : node terre06.js 'From Mars to Sirius'");
        return false;
    }

    return args[0];

}

main();
