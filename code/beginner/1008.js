// Salary

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function getSalary(totalWorkedHours, amountPerHour){
    return totalWorkedHours * amountPerHour;
}

function showEmployeeSalary(numberEmployee, salary){
    console.log('NUMBER = '+ numberEmployee);
    console.log('SALARY = U$ ' + salary.toFixed(2));
}

function main(){
    const numberEmployee = lines.shift();
    const totalWorkedHours = lines.shift();
    const amountPerHour = parseFloat(lines.shift());
    
    const salary = getSalary(totalWorkedHours, amountPerHour);
    
    showEmployeeSalary(numberEmployee, salary);
}

main();