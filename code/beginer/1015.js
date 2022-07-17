// Distance Between Two Points

function getPoints(line){
    const l = line.split(' ');
    const firstValue = l.shift();
    const secondValue = l.shift();

    return { 
        x: parseFloat(firstValue), 
        y: parseFloat(secondValue) 
    };
}

function getDistance(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    // const input = `-2.5 0.4\n12.1 7.3`;
    const lines = input.split('\n');

    const point1 = getPoints(lines.shift());
    const point2 = getPoints(lines.shift());

    console.log(getDistance(point1, point2).toFixed(4));
}

main();