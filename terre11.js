// Exercice 12 : 24 to 12

const main = () => {

    console.log("hello world");
    const argument = argTester();
    // console.log(argument);
}

const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /^[0-9]{1,2}$/;    

    if (argument.length != 1){

        console.log("error");
        return false;

    }

    console.log("test argument:");
    console.log(pattern.test(argument[0]));

    return argument;

}

main();
