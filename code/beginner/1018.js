// Banknotes

function main() {
    const input = require('fs').readFileSync('/dev/stdin','utf-8');
    // const input = 576;
    let value = parseInt(input);
    console.log(value);

    const banknotes100 = Math.floor(value / 100);
    console.log(banknotes100 + ' nota(s) de R$ 100,00');
    value = value % 100;
    const banknotes50 = Math.floor(value / 50);
    console.log(banknotes50 + ' nota(s) de R$ 50,00');
    value = value % 50;
    const banknotes20 = Math.floor(value / 20);
    console.log(banknotes20 + ' nota(s) de R$ 20,00');
    value = value % 20;
    const banknotes10 = Math.floor(value / 10);
    console.log(banknotes10 + ' nota(s) de R$ 10,00');
    value = value % 10;
    const banknotes5 = Math.floor(value / 5);
    console.log(banknotes5 + ' nota(s) de R$ 5,00');
    value = value % 5;
    const banknotes2 = Math.floor(value / 2);
    console.log(banknotes2 + ' nota(s) de R$ 2,00');
    value = value % 2;
    const banknotes1 = Math.floor(value / 1);
    console.log(banknotes1 + ' nota(s) de R$ 1,00');
}

main();
