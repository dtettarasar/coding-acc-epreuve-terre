// Exercice 15 : Trié ou pas

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;

    const errorMsg = "Veuillez passer en argument des nombres entiers (deux minimum).\nExemple : node terre14.js 12 45 789 3 22";

    if (arguments.length < 2) {

        console.log(errorMsg); 
        return false;

    } else {

        for (let i = 0; i < arguments.length;i++) {

            const argValid = pattern.test(arguments[i]);
    
            //console.log(arguments[i] + ": " + argValid);
    
            if (!argValid) {
    
                console.log(errorMsg);
                return false;
    
            }
    
        }

    }

    console.log(arguments);

}

argTester();