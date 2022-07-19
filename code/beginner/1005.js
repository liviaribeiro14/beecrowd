const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
    
const a = parseFloat(lines.shift()) * 3.5;
const b = parseFloat(lines.shift()) * 7.5;

const avg = (a+b)/11;
   
console.log('MEDIA = ' + avg.toFixed(5));