// Baskara's formula

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '10.0 3.0 5.0';
    const values = input.split(' ');

    const a = parseFloat(values.shift());
    const b = parseFloat(values.shift());
    const c = parseFloat(values.shift());

    const baskaraFormulaSum = (a, b, c) => {
        const delta = Math.pow(b, 2) - 4*a*c;

        return { 
            R1: (-b + Math.sqrt(delta))/(2*a),
            R2: (-b - Math.sqrt(delta))/(2*a)
        };
    };

    const result = baskaraFormulaSum(a, b, c);

    if(!result.R1 || !result.R2){
        console.log('Impossivel calcular');
    }
    else {
        console.log(`R1 = ${result.R1.toFixed(5)}`);
        console.log(`R2 = ${result.R2.toFixed(5)}`);
    }
}

main();