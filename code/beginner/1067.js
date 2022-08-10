// Odd Numbers

function main() {
    //const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    const input = '103';
    const value = parseInt(input);
    
    for(let i = 1; i <= value; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

main();