// Salary Increase

function getSalaryReadjustmentTable(){
    return [
        { beginInterval: 0,         endInterval: 400.00,    percentual: 15 },
        { beginInterval: 400.01,    endInterval: 800.00,    percentual: 12 },
        { beginInterval: 800.01,    endInterval: 1200.00,   percentual: 10 },
        { beginInterval: 1200.01,   endInterval: 2000.00,   percentual: 7 },
        { beginInterval: 2000.01,   percentual: 4 },
    ];
}

function calculateEmployeeSalaryReadjustment(oldSalary) {
    const salaryReadjustmentTable = getSalaryReadjustmentTable();

    const readjustmentRange = salaryReadjustmentTable.find(readjustment => 
        readjustment.beginInterval <= oldSalary && 
        (!readjustment.endInterval || readjustment.endInterval >= oldSalary)); 

    const earned = (oldSalary * readjustmentRange.percentual)/100;

    return {
        newSalary: oldSalary + earned,
        earned,
        percentual: readjustmentRange.percentual,
    };
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    // const input = '800.01'
    const oldSalary = parseFloat(input);

    const result = calculateEmployeeSalaryReadjustment(oldSalary);

    console.log(`Novo salario: ${result.newSalary.toFixed(2)}\nReajuste ganho: ${result.earned.toFixed(2)}\nEm percentual: ${result.percentual} %`);
}

main();