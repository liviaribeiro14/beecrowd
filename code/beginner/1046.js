// Game Time
function main() {
    //const input = require('fs').readFileSync('/dev/stdin','utf-8');
    const input = '16 2';
    const values = input.split(' ').map(value => parseInt(value));

    const duration = {
        start: values[0],
        end: values[1],
    };

    if(duration.start >= duration.end) {   
        duration.end += 24;                                         
    }

    console.log(`O JOGO DUROU ${duration.end - duration.start} HORA(S)`);
}

main();