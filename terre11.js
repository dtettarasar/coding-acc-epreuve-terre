// Exercice 12 : 24 to 12

const main = () => {

    // console.log("hello world");
    const argument = argTester();

    if (argument) {
        
        const result = convertTime(argument);

    }

}

const convertTime = (time) => {

    console.log(time);

}

const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /^[0-9]{1,2}:[0-9]{2}$/;
    
    const time = {};

    if (argument.length != 1 || !pattern.test(argument[0])) {

        console.log("Veuillez passer en argument, une heure au format 24h");
        console.log("Exemple : node terre11.js 00:42");
        return false;

    }

    // console.log("test argument:");
    // console.log(pattern.test(argument[0]));

    const argArr = argument[0].split(":");

    time.hours = parseInt(argArr[0]);
    time.minutes = parseInt(argArr[1]);

    // console.log(argArr);
    // console.log("hours: " + time.hours);
    // console.log("minutes: " + time.minutes);
    
    if (time.hours > 24 || time.minutes >= 60 || time.hours == 24 && time.minutes != 00) {

        console.log("heure incorrecte");
        return false;

    }

    return time;

}

main();
