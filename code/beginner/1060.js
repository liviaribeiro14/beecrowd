// Positive Numbers

function countPositiveNumbers(numbers) {
    return numbers.reduce((acc, number) => acc += number > 0, 0);
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    // const input = '7\n-5\n6\n-3.4\n4.6\n12';
    const numbers = input.split('\n').map(number => parseFloat(number));

    console.log(`${countPositiveNumbers(numbers)} valores positivos`);
}

main();