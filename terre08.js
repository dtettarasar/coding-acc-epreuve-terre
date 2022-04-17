// Exercice 9 : Puissance d’un nombre
const main = () => {

    const argument = argTester();

    if (argument) {

        const result = calculPuissance(argument[0], argument[1]);
        console.log(result);

    }

}

const calculPuissance = (firstNum, expos) => {

    const firstNumInt = parseInt(firstNum) < 0 ? parseInt(firstNum) * -1 : parseInt(firstNum);
    const exposInt = parseInt(expos);
    const isFirstNumNeg = parseInt(firstNum) < 0 ? true : false;
    
    let result = expos === 0 ? 1 : firstNumInt;

    for (let i = 1; i < exposInt; i++) {
        result *= firstNumInt;
    }

    if (isFirstNumNeg) {
        result *= -1;
    }

    return result;

}

const argTester = () => {

  const args = process.argv.slice(2);

  const patternNegAndPos = /^-?[0-9]+$/;
  const patternPosOnly = /^[0-9]+$/;

  const firstNum = args[0];
  const expos = args[1];

  const testFirstNum = patternNegAndPos.test(firstNum);
  const testExpos = patternPosOnly.test(expos);

  if (args.length !== 2 || !testFirstNum || !testExpos) {
    console.log("Veuillez passer deux nombres en arguments (l'exposant est passé en deuxième et doit être positif)");
    console.log("Exemple : node terre08.js 2 3");
    return false;
  }

  return args;

}

main();
