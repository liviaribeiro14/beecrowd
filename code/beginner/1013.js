// The greatest

function main(){
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');

    //const input = '217 14 6';

    const [a, b, c] = input.split(' ').map(item => parseInt(item));

    const greatest = (first, second) => (first + second + Math.abs(first - second)) / 2;
    
    const firstComparation = greatest(a,b);

    const lastComparation = greatest(firstComparation, c);

    console.log(`${lastComparation} eh o maior`);
}

main();