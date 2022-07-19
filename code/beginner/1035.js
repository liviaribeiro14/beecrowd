function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '1';
    const values = input.split(' ');

    const a = parseInt(values.shift());
    const b = parseInt(values.shift());
    const c = parseInt(values.shift());
    const d = parseInt(values.shift());

    const validateValues = (a, b, c, d) => {
        return (b > c) && (d > a) 
                && ((c + d) > (a + b)) 
                & (c > 0) & (d > 0) & ((a % 2) === 0);
    };

    console.log(`Valores ${validateValues(a,b,c,d)? '' : 'nao '}aceitos`);
}

main();