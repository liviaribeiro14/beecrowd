//Triangle
function verifyItsTriangle(a, b, c){
    const compareSides = (a1, a2, a3) => (a1 + a2) > a3;

    return compareSides(a, b, c) 
        && compareSides(b, c, a) 
        && compareSides(c, a, b);
}

function calculateTrianglePerimeter(a, b, c) {
    return a + b + c;
}

function calculateTrapeziumArea(base1, base2, height) {
    return (base1 + base2) * height / 2;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    //const input = '6.0 4.0 2.1';

    const values = input.split(' ');

    const a = parseFloat(values.shift());
    const b = parseFloat(values.shift());
    const c = parseFloat(values.shift());

    if(verifyItsTriangle(a, b, c)){
        const perimeter = calculateTrianglePerimeter(a, b, c);
        console.log(`Perimetro = ${perimeter.toFixed(1)}`);
    } else {
        const area = calculateTrapeziumArea(a, b, c);
        console.log(`Area = ${area.toFixed(1)}`);
    }
}

main();