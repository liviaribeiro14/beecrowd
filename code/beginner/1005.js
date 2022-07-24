const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
    
const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());

const FIRST_GRADE_WEIGHT = 3.5;
const SECOND_GRADE_WEIGHT = 7.5;
const sum_weights = FIRST_GRADE_WEIGHT + SECOND_GRADE_WEIGHT;

const avg = ((a * FIRST_GRADE_WEIGHT)+(b * SECOND_GRADE_WEIGHT))/sum_weights;
   
console.log('MEDIA = ' + avg.toFixed(5));