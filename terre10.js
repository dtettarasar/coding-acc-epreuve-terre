// Exercice 11 : Nombre Premier

const main = () => {

    const argument = argTester();

    console.log(argument);
}

const argTester = () => {

    const argument = process.argv.slice(2);

    return argument;

}

main();