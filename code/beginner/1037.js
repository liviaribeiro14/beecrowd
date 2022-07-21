// Interval

function getInterval(value) {
    const intervals = ['[0,25]', '(25,50]', '(50,75]', '(75,100]'];

    return intervals.find(interval => {
        const secondPart = interval.split(',')[1];
        const number = secondPart.replace(/[^\d]/g, '');
        if(number >= value) return interval;
    });
}

function getIntervalDescription(value) {
    if (value > 100 || value < 0) {
        return 'Fora de intervalo';
    }
    
    return 'Intervalo ' + getInterval(value);
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '0';
    const value = parseFloat(input.split(' '));

    console.log(getIntervalDescription(value));
}

main();