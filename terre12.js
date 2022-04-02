// Exercice 13 : 12 to 24

const main = () => {

  const argument = argTester();

  if (argument) {
    const result = convertTime(argument);
  }

}

const convertTime = (time) => {

  let hourStr = null;
  let minuteStr = null;

  let finalStr = "";

  if (time.meridiem == "pm") {

    hourStr = time.hours += 12;

  } else if (time.hours < 10) {

    hourStr = "0" + time.hours;

  } else {
    hourStr = time.hours;
  }

  minuteStr = time.minutes < 10 ? "0" + time.minutes : time.minutes

  finalStr = hourStr + ":" + minuteStr;

  console.log(time);

  console.log(finalStr);
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
  time.minutes = parseInt(argArr[1].slice(0,2));
  time.meridiem = argArr[1].slice(2).toLowerCase();

  // console.log(time);

  if (time.hours > 12 || time.minutes >= 60) {
    console.log("heure incorrecte");
    return false;
  }

  return time;

  //console.log(argument);

}

main();
