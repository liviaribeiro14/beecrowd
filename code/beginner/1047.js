function calculateGameDuration(gameTime){
    const HOUR_IN_MIN = 60;
    const MINUTES_IN_A_DAY = HOUR_IN_MIN * 24;

    const getTotalMinutes = (hour, minutes) => (hour * HOUR_IN_MIN) + minutes;

    const totalStartMinutes = getTotalMinutes(gameTime.startHour, gameTime.startMinute);
    let totalEndMinutes = getTotalMinutes(gameTime.endHour, gameTime.endMinute);

    if(totalEndMinutes < totalStartMinutes) {
        totalEndMinutes = totalEndMinutes + MINUTES_IN_A_DAY;
    }

    const durationInMinutes = totalEndMinutes - totalStartMinutes;

    if(durationInMinutes === 0) 
        return { hours: 24, minutes: 0};

    return {
        hours: parseInt(durationInMinutes / HOUR_IN_MIN),
        minutes: durationInMinutes % HOUR_IN_MIN,
    };
}

function getGameTime(values) {
    return {
        startHour: Math.abs(parseInt(values.shift())),
        startMinute: Math.abs(parseInt(values.shift())),
        endHour: Math.abs(parseInt(values.shift())),
        endMinute: Math.abs(parseInt(values.shift())),
    }
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '7 8 7 7';
    const values = input.split(" ");

    const gameTime = getGameTime(values);
    const gameDuration = calculateGameDuration(gameTime);

    console.log(`O JOGO DUROU ${gameDuration.hours} HORA(S) E ${gameDuration.minutes} MINUTO(S)`);
}

main();