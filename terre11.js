// Exercice 12 : 24 to 12

const main = () => {

    const argument = argTester();

    if (argument) {
        
        const result = convertTime(argument);
        console.log(result);

    }

}

const convertTime = (time) => {

    let anteOrPostMeridiem = time.hours > 12 ? "PM" : "AM";
    let hoursTwelve = time.hours > 12 ? time.hours - 12 : time.hours;
    let minutesTwelve = time.minutes > 10 ? time.minutes : "0" + time.minutes;

    let timeTwelve = hoursTwelve + ":" + minutesTwelve + anteOrPostMeridiem;

    return timeTwelve;

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

    const argArr = argument[0].split(":");

    time.hours = parseInt(argArr[0]);
    time.minutes = parseInt(argArr[1]);
    
    if (time.hours > 24 || time.minutes >= 60 || time.hours == 24 && time.minutes != 00) {

        console.log("heure incorrecte");
        return false;

    }

    return time;

}

main();
