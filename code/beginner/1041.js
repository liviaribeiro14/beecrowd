//Coordinates of a Point

function getPosition(x, y) {
    if(x === 0 && y === 0) return 'Origem';
    if(x === 0) return 'Eixo Y';
    if(y === 0) return 'Eixo X';

    if(x > 0 && y > 0) return 'Q1';
    if(x < 0 && y > 0) return 'Q2';
    if(x < 0 && y < 0) return 'Q3';
    if(x > 0 && y < 0) return 'Q4';
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '0.1 0.1';

    const x = parseFloat(input.split(' ')[0]);
    const y = parseFloat(input.split(' ')[1]);

    const position = getPosition(x, y);

    console.log(position);
}

main();