// Exercice 15 : Trié ou pas

const main = () => {

    const arguments = argTester();

    if (arguments) {

        console.log(arguments);

        const sortedArr = bubbleSort(arguments);

        console.log(sortedArr);

    }

}

const bubbleSort = (array) => {

    //console.log(array);

    const process = () => {

        let arrIsSorted = true;

        for (let i = 0;i < array.length; i++) {

            //console.log(array[i]);

            if (array[i] > array[i + 1]) {

                arrIsSorted = false;

                let smaller = array[i + 1];
                let higher = array[i];

                array[i] = smaller;
                array[i + 1] = higher;

            }

            if (!arrIsSorted) {
                process();
            }

        }

    }

    process();

    return array;
    
}

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;

    const intArr = [];

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
    
            } else {

                intArr.push(parseInt(arguments[i]));

            }
    
        }

    }

    // console.log(arguments);
    // console.log(intArr);

    return intArr;

}

main();