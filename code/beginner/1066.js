// Even, Odd, Positive and Negative

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '-5\n0\n-3\n-4\n12';
    const allValues = input.split("\n").map(i => parseInt(i)).slice(0, 5);

    const totalEvenValues = allValues.filter(i => i % 2 === 0).length;
    const totalOddValues = allValues.filter(i => i % 2 !== 0).length;
    const totalPositiveValues = allValues.filter(i => i > 0).length;
    const totalNegativeValues = allValues.filter(i => i < 0).length;
    
    console.log(`${totalEvenValues} valor(es) par(es)`); 
    console.log(`${totalOddValues} valor(es) impar(es)`);
    console.log(`${totalPositiveValues} valor(es) positivo(s)`);
    console.log(`${totalNegativeValues} valor(es) negativo(s)`);
}

main();