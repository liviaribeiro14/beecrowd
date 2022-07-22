// Snack

function getTableProductPrices() {
    return [ 
        { code: 1, price: 4.0},
        { code: 2, price: 4.50},
        { code: 3, price: 5.0},
        { code: 4, price: 2.0},
        { code: 5, price: 1.50}
    ];
}

function getTotalAmount(code, quantity) {
    const prices = getTableProductPrices();
    const product = prices.find(prod => prod.code === code);
    return product.price * quantity;
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '2 3';
    const code = parseInt(input.split(' ')[0]);
    const quantity = parseInt(input.split(' ')[1]);

    console.log("Total: R$ " + getTotalAmount(code, quantity).toFixed(2));
}

main();