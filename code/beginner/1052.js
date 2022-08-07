// Month

function getMonthList() {
    return [
        { number: 1, month: 'January' },
        { number: 2, month: 'February' },
        { number: 3, month: 'March' },
        { number: 4, month: 'April' },
        { number: 5, month: 'May' },
        { number: 6, month: 'June' },
        { number: 7, month: 'July' },
        { number: 8, month: 'August' },
        { number: 9, month: 'September' },
        { number: 10, month: 'October' },
        { number: 11, month: 'November' },
        { number: 12, month: 'December' },
    ];
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    // const input = '4';
    const monthNumber = parseInt(input);

    const month = getMonthList().find(value => value.number === monthNumber).month;

    console.log(month);
}

main();