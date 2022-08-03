//Triangle Types

function whichTriangleKind(sideA, sideB, sideC) {
    let results = [];

    console.log(sideA, sideB, sideC);
    const sum = sideB + sideC;
    console.log(sum);

    if(sideA >= sideB + sideC) {
        results.push('NAO FORMA TRIANGULO');
        return results;
    }    

    return calculatePossibleTriangles(sideA, sideB, sideC);
}

function calculatePossibleTriangles(sideA, sideB, sideC) {
    let results = [];
    const sumBCPow = Math.pow(sideB, 2) + Math.pow(sideC, 2);
    const aPow = Math.pow(sideA, 2);

    if(aPow === sumBCPow) results.push('TRIANGULO RETANGULO');
    if(aPow > sumBCPow) results.push('TRIANGULO OBTUSANGULO');
    if(aPow < sumBCPow) results.push('TRIANGULO ACUTANGULO');
    if(sideA === sideB && sideB === sideC) results.push('TRIANGULO EQUILATERO');
    else if(sideA === sideB || sideA === sideC || sideB === sideC)
        results.push('TRIANGULO ISOSCELES');
        
    return results;
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '6.0 3.0 4.0';

    const values = input.split(' ').map(value => parseFloat(value));

    const descValues = values.sort((a, b) => b - a);

    const results = whichTriangleKind(descValues[0], descValues[1], descValues[2]);

    console.log(results.join('\n'));
}

main();