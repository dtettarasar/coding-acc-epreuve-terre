// Exercice 11 : Nombre Premier

const main = () => {

    const argument = argTester();

    console.log(argument);
}

const argTester = () => {

    const argument = process.argv.slice(2);

    if (argument.length != 1) {
        console.log("error");
        return false;
    }

    return argument;

}

main();