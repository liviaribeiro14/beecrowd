// Age in Days

function main() {
    //const input = require('fs').readFileSync('/dev/stdin','utf-8');
    const input = 800;
    let days = parseInt(input);

    const yearDivisor = 365;
    const monthDivisor = 30;
    
    const years = parseInt(days/yearDivisor);
    days = days % yearDivisor;
    const months = parseInt(days/monthDivisor);
    days = days % monthDivisor;

    console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
}

main();
