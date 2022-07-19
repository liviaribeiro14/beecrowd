// Time Conversion

function main() {
    const input = require('fs').readFileSync('/dev/stdin','utf-8');
    // const input = 140153;
    let seconds = parseInt(input);

    const hourDivisor = 3600;
    const minuteDivisor = 60;
    
    const hours = parseInt(seconds/hourDivisor);
    seconds = seconds % hourDivisor;
    const minutes = parseInt(seconds/minuteDivisor);
    seconds = seconds % minuteDivisor;

    console.log(`${hours}:${minutes}:${seconds}`);
}

main();
