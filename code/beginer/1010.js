// Total chart

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// const lines = ['12 1 5.30', '16 2 5.10'];

function showBilling(total){
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}

function main(){
    const total = lines.reduce((tot, line) => {
        const item = line.split(' ');
        const quantity = item[1];
        const price = parseFloat(item[2]);
        
        return tot + (quantity * price);
    }, 0);
    
    showBilling(total);
}

main();