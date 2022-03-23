// Exercice 8 : Taille d'une chaîne

const main = () => {

    const argument = argTester();

    if (argument) {
        const result = getLength(argument);
        console.log(result);
    }

}

const getLength = (str) => {

  const strArr = str.split("");

  let i = 0;

  while (i != strArr.length) {
    i++;
  }

  return i;

}


const argTester = () => {

    const args = process.argv.slice(2);

    const pattern = /^-?[0-9]+$/;

    if (args.length != 1 || pattern.test(args[0])) {

        console.log("Veuillez passer une chaîne de caractère en argument");
        console.log("Exemple : node terre07.js 'Freak on a Leash'");

        return false;
    }
    return args[0];

}

main();
