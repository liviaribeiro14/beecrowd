// Area

function showShapeArea(figureName, area){
    console.log(`${figureName}: ${area.toFixed(3)}`);
}

function calculateAreas(a, b, c){
    const triangleArea = (base, height) => (base * height)/2;
    showShapeArea('TRIANGULO', triangleArea(a, c));

    const circleArea = (radius) => { 
        const pi = 3.14159;

        return pi * Math.pow(radius, 2);
    };
    showShapeArea('CIRCULO', circleArea(c));

    const trapeziumArea = (base1, base2, height) => (base1 + base2) * height / 2;
    showShapeArea('TRAPEZIO', trapeziumArea(a, b, c));

    const squareArea = (base) => Math.pow(base, 2);
    showShapeArea('QUADRADO', squareArea(b));

    const rectangleArea = (base, height) => base * height;
    showShapeArea('RETANGULO', rectangleArea(a, b));
}

function main(){
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(' ');

    // const lines = ['3.0', '4.0', '5.2'];

    const a = parseFloat(lines.shift());
    const b = parseFloat(lines.shift());
    const c = parseFloat(lines.shift());

    calculateAreas(a, b, c);
}

main();