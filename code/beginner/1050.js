// DDD

function getDDDList() {
    return [
        { ddd: 61, destination: 'Brasilia' },
        { ddd: 71, destination: 'Salvador' },
        { ddd: 11, destination: 'Sao Paulo' },
        { ddd: 21, destination: 'Rio de Janeiro' },
        { ddd: 32, destination: 'Juiz de Fora' },
        { ddd: 19, destination: 'Campinas' },
        { ddd: 27, destination: 'Vitoria' },
        { ddd: 31, destination: 'Belo Horizonte' },
    ];
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    // const input = '11';
    const code = parseInt(input);

    const city = getDDDList().find(location => location.ddd === code);

    if (city) {
        console.log(city.destination);
    } else {
        console.log('DDD nao cadastrado');
    }
}

main();