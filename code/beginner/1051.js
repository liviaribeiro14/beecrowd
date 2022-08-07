// Taxes

function getTaxes() {
    return [
        { minSalary: 0.00, maxSalary: 2000.00, tax: 0 },
        { minSalary: 2000.01, maxSalary: 3000.00, tax: 8 },
        { minSalary: 3000.01, maxSalary: 4500.00, tax: 18 },
        { minSalary: 4500.01, tax: 28 },
    ];
}

function getPercentual(value, percent){ 
    return value * percent / 100;
}

function calculateTaxRate(salary) {
    let remaining = salary;
    let taxValue = 0.00;

    getTaxes().forEach(range => {
        if(range.maxSalary && salary >= range.maxSalary) {
            taxValue += getPercentual(range.maxSalary - range.minSalary, range.tax);
            remaining -= (range.maxSalary - range.minSalary);
        } else {
            taxValue += getPercentual(remaining.toFixed(2), range.tax);
            remaining = 0;
        }
    });

    return taxValue;
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    // const input = '3002.00';
    const salary = parseFloat(input);

    const taxValue = calculateTaxRate(salary);

    if (taxValue > 0) {
        console.log(`R$ ${taxValue.toFixed(2)}`);
    } else {
        console.log('Isento');
    }
}

main();