// Exercice 12 : 24 to 12

const main = () => {

    console.log("hello world");
    const argument = argTester();
    console.log(argument);
}

const argTester = () => {

    const argument = process.argv.slice(2);

    return argument;

}

main();
