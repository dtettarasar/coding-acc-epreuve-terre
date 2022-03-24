// Exercice 9 : Puissance d’un nombre
const main = () => {

    const argument = argTester();

    console.log(argument);

}

const argTester = () => {

  const args = process.argv.slice(2);

  const patternNegAndPos = /^-?[0-9]+$/;
  const patternPosOnly = /^[0-9]+$/;

  const firstNum = args[0];
  const expos = args[1];

  const testFirstNum = patternNegAndPos.test(firstNum);
  const testExpos = patternPosOnly.test(expos);

  if (args.length != 2 || !testFirstNum || !testExpos) {
    console.log("error");
    return false;
  }

  return args;

}

main();
