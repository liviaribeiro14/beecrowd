// Consumption

function main(){
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    // const input = `4554
    // 464.6`;
    const line = input.split('\n');    

    const kilometers = parseInt(line.shift());
    const liters = parseFloat(line.shift());

    const consumption = (km, l) => km / l;

    console.log(`${consumption(kilometers,liters).toFixed(3)} km/l`);
}

main();