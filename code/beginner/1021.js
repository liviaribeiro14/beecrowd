// Banknotes and Coins

function main() {
    const input = require('fs').readFileSync('/dev/stdin','utf-8');
    // const input = 6.14;
    let value = parseFloat(input).toFixed(2);

    const banknotes = [100, 50, 20, 10, 5, 2];
    const coins = [1, 0.5, 0.25, 0.10, 0.05, 0.01];

    console.log('NOTAS:');
    banknotes.forEach(banknote => {
        const notesQuantity = parseInt(value / banknote);
        console.log(notesQuantity + ' nota(s) de R$ ' + banknote.toFixed(2));
        value = value % banknote;
    });

    console.log('MOEDAS:');
    coins.forEach(coin => {
        const coinQuantity = parseInt(value / coin);
        console.log(coinQuantity + ' moeda(s) de R$ ' + coin.toFixed(2));
        value = (value % coin) + 0.00001;
    });
    
}

main();
