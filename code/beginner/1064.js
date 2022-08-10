// Positives and Average

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '7\n-5\n6\n-3.4\n4.6\n12';
    const values = input.split("\n").filter(i => parseFloat(i) >= 0).map(i => parseFloat(i));
    
    const sum = values.reduce((acc, value) => acc + value, 0);
    console.log(`${values.length} valores positivos`);
    console.log((sum/values.length).toFixed(1));
}

main();