// Exercice 7 : Inverser une chaîne

const main = () => {

    let result = "";

    const argument = argTester();

    if (argument) {
        result = getReverseStr(argument);
        console.log(result);
    }

}

const getReverseStr = (str) => {

    const strArr = str.split('');

    const revStrArr = [];
    
    for (let i = strArr.length - 1; i >= 0; i--) {
        revStrArr.push(strArr[i]);
    }

    return revStrArr.join('');
}

const argTester = () => {

    const args = process.argv.slice(2);

    if (args.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument");
        console.log("Exemple : node terre06.js 'From Mars to Sirius'");
        return false;
    }

    return args[0];

}

main();
