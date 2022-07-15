const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
    
const a = parseInt(lines.shift());
const b = parseInt(lines.shift());
const soma = a+b;
   
console.log('SOMA = ' + soma);