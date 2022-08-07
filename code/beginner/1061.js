// Event Time

function calculatePeriod(totalSeconds) {
    const SECONDS_IN_A_DAY = 60 * 60 * 24;
    const SECONDS_IN_A_HOUR = 60 * 60;
    const SECONDS_IN_A_MINUTE = 60;

    const days = parseInt(totalSeconds / SECONDS_IN_A_DAY);
    totalSeconds -= days * SECONDS_IN_A_DAY;
    const hours = parseInt((totalSeconds / SECONDS_IN_A_HOUR));
    totalSeconds -= hours * SECONDS_IN_A_HOUR;
    const minutes = parseInt((totalSeconds / SECONDS_IN_A_MINUTE));
    totalSeconds -= minutes * SECONDS_IN_A_MINUTE;
    return {
        days,
        hours,
        minutes,
        seconds: totalSeconds,
    };
}

function getTotalSecondsBetweenEndStart(startEvent, endEvent) {
    const totalSeconds = (event) => {
        const SECONDS_IN_A_DAY = 60 * 60 * 24;
        const SECONDS_IN_A_HOUR = 60 * 60;
        const SECONDS_IN_A_MINUTE = 60;

        const hour = parseInt(event.time.split(' : ')[0]);
        const minute = parseInt(event.time.split(' : ')[1]);
        const second = parseInt(event.time.split(' : ')[2]);
        return second + 
                (minute * SECONDS_IN_A_MINUTE) + 
                (hour * SECONDS_IN_A_HOUR) +
                (event.day * SECONDS_IN_A_DAY);
    };

    return totalSeconds(endEvent) - totalSeconds(startEvent);
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = 'Dia 5\n08 : 12 : 23\nDia 9\n06 : 13 : 23';
    const duration = input.split('\n');

    const startEvent = {
        day: parseInt(duration.shift().split(' ')[1]),
        time: duration.shift(),
    };
    const endEvent = {
        day: parseInt(duration.shift().split(' ')[1]),
        time: duration.shift(),
    };

    const totalSeconds = getTotalSecondsBetweenEndStart(startEvent, endEvent);

    const totalPeriod = calculatePeriod(totalSeconds);

    console.log(`${totalPeriod.days} dia(s)`);
    console.log(`${totalPeriod.hours} hora(s)`);
    console.log(`${totalPeriod.minutes} minuto(s)`);
    console.log(`${totalPeriod.seconds} segundo(s)`);
}

main();