// Exercice 14 : Trouver la Suisse

const main = () => {

}

const argTester = () => {

  const arguments = process.argv.slice(2);
  const pattern = /^-?[0-9]+$/;

  console.log(arguments);

  if (arguments.length != 3) {
    console.log("error: wrong number of arguments");
    return false;
  }

  for (let i = 0; i < arguments.length; i++) {

    if (!pattern.test(arguments[i])) {
      console.log("error: at least one arg is not a number");
      return false;
    }

  }

}

argTester();
