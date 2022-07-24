// Simple Sort
function getSortAsc(numbers) {
    let index = 0;
    let sortingNumbers = [...numbers];

    while (index < sortingNumbers.length) {
        let internalIndex = index + 1;
        while(internalIndex < sortingNumbers.length) {
            if(sortingNumbers[index] > sortingNumbers[internalIndex]) {
                const temp = sortingNumbers[index];
                sortingNumbers[index] = sortingNumbers[internalIndex];
                sortingNumbers[internalIndex] = temp;
            }

            internalIndex += 1;
        }
        index += 1;
    }
    return sortingNumbers;
}

function main(){
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');

    //const input = '7 21 -14';

    const numbers = input.split(' ').map(item => parseInt(item));

    const sortedAscNumbers = getSortAsc(numbers);
    console.log(sortedAscNumbers.join('\n') + '\n'); 
    console.log(numbers.join('\n'));
}

main();