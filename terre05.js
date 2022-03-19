// Exercice 6 : Divisions

const args = process.argv.slice(2);
const pattern = /^-?[0-9]+$/;

const main = () => {

  if (argTester()) {
    divider(args[0], args[1]);
  }

}

const divider = (dividende, diviseur) => {

  const intDividende = parseInt(dividende);
  const intDiviseur = parseInt(diviseur);

  console.log("dividende: " + intDividende);
  console.log("diviseur: " + intDiviseur);

  const posDividende = intDividende < 0 ? intDividende * -1 : intDividende;
  const posDiviseur = intDiviseur < 0 ? intDiviseur * -1 : intDiviseur;

  console.log(posDividende);
  console.log(posDiviseur);

  if (posDiviseur > posDividende && posDividende != 0) {
    console.log("Attention: le diviseur doit être inférieur au dividende, indépendamment du signe !");
    return false;
  } else if (posDiviseur == 0) {
    console.log("Attention: le diviseur doit être différent de 0 !");
    return false;
  }

}

const argTester = () => {

  const testDividende = pattern.test(args[0]);
  const testDiviseur = pattern.test(args[1]);

  if (args.length != 2 || !testDividende || !testDiviseur) {
      console.log("Veuillez passer deux nombres entiers en argument (le dividende, puis le diviseur)");
      console.log("Exemple : node terre05.js 10 2");
      return false;
  } else {
      //divider(args[0], args[1]);
      return true;
  }

}

main();
