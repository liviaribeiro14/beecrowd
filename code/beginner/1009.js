// Salary + bonus

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function getSalary(fixedSalary, salesTotal){
    const BONUS_PERCENTUAL = 15;
    return fixedSalary + (salesTotal * BONUS_PERCENTUAL/100);
}

function showEmployeeSalary(salary){
    console.log(`TOTAL = R$ ${salary.toFixed(2)}`);
}

function main(){
    _ = lines.shift();
    const fixedSalary = parseFloat(lines.shift());
    const salesTotal = parseFloat(lines.shift());
    
    const finalSalary = getSalary(fixedSalary, salesTotal);
    
    showEmployeeSalary(finalSalary);
}

main();