// Exercice 14 : Trouver la Suisse

const main = () => {

  const arguments = argTester();

  if (arguments) {
    console.log(arguments);
  }

}

const argTester = () => {

  const arguments = process.argv.slice(2);
  const pattern = /^-?[0-9]+$/;

  const errorMsg = "Veuillez passer 3 nombres entiers en argument \nExemple : node terre13.js 5 7 2";

  // console.log(arguments);

  if (arguments.length != 3) {
    console.log(errorMsg);
    return false;
  }

  for (let i = 0; i < arguments.length; i++) {

    if (!pattern.test(arguments[i])) {
      console.log(errorMsg);
      return false;
    }

  }

  return arguments;

}

main();
