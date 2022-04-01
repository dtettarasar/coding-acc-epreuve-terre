// Exercice 13 : 12 to 24

const main = () => {
}

const argTester = () => {

  const argument = process.argv.slice(2);
  const pattern = /^[0-9]{1,2}:[0-9]{2}(am|pm|AM|PM)$/;
  const time = {};

  if (argument.length != 1 || !pattern.test(argument[0])) {

      console.log("Veuillez passer en argument, une heure au format 12h");
      console.log("Exemple : node terre12.js 11:40PM");
      return false;

  }

  const argArr = argument[0].split(":");

  time.hours = parseInt(argArr[0]);
  time.meridiem = argArr[1].slice(2)

  console.log(time);

  //console.log(argument);

}

argTester();
