// Exercice 9 : Puissance d’un nombre
const main = () => {

    const argument = argTester();

    console.log(argument);

}

const argTester = () => {

  const args = process.argv.slice(2);

  return args;

}

main();
