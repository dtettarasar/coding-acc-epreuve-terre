// Exercice 15 : Trié ou pas

const main = () => {

    const arguments = argTester();

    if (arguments) {

        const result = isSorted(arguments);
        
        if (result) {
            console.log("Triée !");
        } else {
            console.log("Pas triée !");
        }

    }

}

const isSorted = (array) => {

    const testArr = [...array];

    const sortedArr = bubbleSort(testArr);

    arrStr = array.join(",");
    sortedArrStr = sortedArr.join(",");

    if (arrStr === sortedArrStr) {
        return true;
    } else {
        return false;
    }

}

const bubbleSort = (array) => {

    let arrIsSorted = true;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > array[i + 1]) {

            arrIsSorted = false;

            let smaller = array[i + 1];
            let higher = array[i];

            array[i] = smaller;
            array[i + 1] = higher;

        }

        if (!arrIsSorted) {
            bubbleSort(array);
        }

    }

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

            if (!argValid) {
    
                console.log(errorMsg);
                return false;
    
            } else {

                intArr.push(parseInt(arguments[i]));

            }
    
        }

    }

    return intArr;

}

main();

//console.log(bubbleSortAlt([1,5,-7,12,2,3,56]));