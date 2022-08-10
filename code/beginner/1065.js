// Even Between five Numbers

function main() {
    //const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    const input = '7\n-5\n6\n-4\n12';
    const values = input.split("\n").filter(i => parseInt(i) % 2 === 0).map(i => parseInt(i));
    
    console.log(`${values.length} valores pares`);
}

main();