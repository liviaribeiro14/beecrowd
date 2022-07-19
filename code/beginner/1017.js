// Distance

function main() {
    // const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const input = '22\n67';
    const lines = input.split('\n');
    const kmPerLiter = 12;
    
    const spentTime = lines.shift();
    const averageSpeed = lines.shift();

    const distance = (averageSpeed, spentTime) => averageSpeed * spentTime;

    const liters = (distance) => distance / kmPerLiter;

    console.log(liters(distance(averageSpeed,spentTime)).toFixed(3));
}

main();