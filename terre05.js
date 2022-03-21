// Exercice 6 : Divisions

const main = () => {

  const arguments = argTester();

  if (arguments) {
    const result = divider(arguments);
    console.log("résultat: " + result.quotient);
    console.log("reste: " + result.reste);
  }

}

const divider = (argObj) => {

    const result = {};

    result.quotient = Math.floor(argObj.dividende / argObj.diviseur);
    result.reste = argObj.dividende % argObj.diviseur;

    return result;

}

const argTester = () => {

  const args = process.argv.slice(2);
  const pattern = /^-?[0-9]+$/;

  const testDividende = pattern.test(args[0]);
  const testDiviseur = pattern.test(args[1]);

  const arguments = {};

  if (args.length != 2 || !testDividende || !testDiviseur) {
      console.log("Veuillez passer deux nombres entiers en argument (le dividende, puis le diviseur)");
      console.log("Exemple : node terre05.js 10 2");
      return false;
  }

  const intDividende = parseInt(args[0]);
  const intDiviseur = parseInt(args[1]);

  //console.log("dividende: " + intDividende);
  //console.log("diviseur: " + intDiviseur);

  const posDividende = intDividende < 0 ? intDividende * -1 : intDividende;
  const posDiviseur = intDiviseur < 0 ? intDiviseur * -1 : intDiviseur;

  //console.log(posDividende);
  //console.log(posDiviseur);

  if (posDiviseur > posDividende && posDividende != 0) {
    console.log("Attention: le diviseur doit être inférieur au dividende, indépendamment du signe !");
    return false;
  } else if (posDiviseur == 0) {
    console.log("Attention: le diviseur doit être différent de 0 !");
    return false;
  }

  arguments.dividende = intDividende;
  arguments.diviseur = intDiviseur;

  //console.log("arguments valides:");
  //console.log(arguments);

  return arguments;

}

main();
