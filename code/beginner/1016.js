// Distance

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');

    // const input = '110';
    
    const distance = parseInt(input);

    const distanceInMinutes = distance * 2;

    console.log(`${distanceInMinutes} minutos`);
}

main();