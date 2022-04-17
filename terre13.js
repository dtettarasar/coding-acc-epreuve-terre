// Exercice 14 : Trouver la Suisse

const main = () => {

  const arguments = argTester();

  if (arguments) {

    const result = findMiddle(arguments);

    if (result) {
      console.log(result);
    }

  }

}

const findMiddle = (array) => {

  const sortedArr = [];

  if (array[0] === array[1] || array[0] === array[2] || array[1] === array[2]) {
    console.log("Erreur : au moins 2 arguments sont identiques");
    return false;
  }

  if (array[0] < array[1] && array[0] > array[2] || array[0] > array[1] && array[0] < array[2]) {
    return array[0];
  } else if (array[1] < array[0] && array[1] > array[2] || array[1] > array[0] && array[1] < array[2]) {
    return array[1];
  } else {
    return array[2];
  }

  return 0;

}

const argTester = () => {

  const arguments = process.argv.slice(2);
  const pattern = /^-?[0-9]+$/;

  const errorMsg = "Veuillez passer 3 nombres entiers en argument \nExemple : node terre13.js 5 7 2";

  if (arguments.length !== 3) {
    console.log(errorMsg);
    return false;
  }

  for (let i = 0; i < arguments.length; i++) {

    if (!pattern.test(arguments[i])) {
      console.log(errorMsg);
      return false;
    }

    arguments[i] = parseInt(arguments[i]);

  }

  return arguments;

}

main();
