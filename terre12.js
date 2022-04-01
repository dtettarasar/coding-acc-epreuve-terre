// Exercice 13 : 12 to 24

const main = () => {
}

const argTester = () => {

  const argument = process.argv.slice(2);

  const pattern = /^[0-9]{1,2}:[0-9]{2}(am|pm|AM|PM)$/;

  if (argument.length != 1 || !pattern.test(argument[0])) {

      console.log("Veuillez passer en argument, une heure au format 12h");
      console.log("Exemple : node terre12.js 11:40PM");
      return false;

  }

  console.log(argument);

}

argTester();
