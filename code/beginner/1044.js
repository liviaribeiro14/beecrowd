//Multiples
function main() {
    const input = require('fs').readFileSync('/dev/stdin','utf8');
    //const input = '6 25';

    const a = parseInt(input.split(' ')[0]);
    const b = parseInt(input.split(' ')[1]);

    const theyAreMultiples = (value1, value2) => (value1 % value2) === 0;

    let result;
    if(a > b) result = theyAreMultiples(a, b);
    else result = theyAreMultiples(b, a);

    console.log(`${result? 'Sao' : 'Nao sao'} Multiplos`);
}

main();