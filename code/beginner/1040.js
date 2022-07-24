// Average 3

function getNormalGradesAverage(grades){
    const FIRST_GRADE_WEIGHT = 2;
    const SECOND_GRADE_WEIGHT = 3;
    const THIRD_GRADE_WEIGHT = 4;
    const FOURTH_GRADE_WEIGHT = 1;

    const sumWeights = FIRST_GRADE_WEIGHT + SECOND_GRADE_WEIGHT + THIRD_GRADE_WEIGHT + FOURTH_GRADE_WEIGHT;
    return ((grades[0] * FIRST_GRADE_WEIGHT) 
            + (grades[1] * SECOND_GRADE_WEIGHT) 
            + (grades[2] * THIRD_GRADE_WEIGHT) 
            + (grades[3] * FOURTH_GRADE_WEIGHT))
        / sumWeights;
}

function getFinalAverage(lastChanceGrade, normalAvarage){
    return (normalAvarage + lastChanceGrade) / 2;
}

function verifySecondShot(lastChanceGrade, normalAvarage){    
    const finalAvarage = getFinalAverage(lastChanceGrade, normalAvarage)
    const MIN_GRADE_TO_BE_APPROVED = 5.0;

    console.log(`Aluno em exame.\nNota do exame: ${lastChanceGrade.toFixed(1)}`);
    if(finalAvarage >= MIN_GRADE_TO_BE_APPROVED) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.');
    }
    console.log(`Media final: ${finalAvarage.toFixed(1)}`);
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = '2.0 4.0 7.5 8.0\n6.4';

    const MIN_AVERAGE_TO_BE_APPROVED = 7.0;
    const MIN_AVERAGE_TO_SECOND_SHOT = 5.0;
    const MAX_AVERAGE_TO_SECOND_SHOT = 6.9;

    const grades = input.split('\n')[0].split(' ').map(grade => parseFloat(grade));
    
    const normalAverage = getNormalGradesAverage(grades);

    console.log(`Media: ${normalAverage.toFixed(1)}`);

    if(normalAverage >= MIN_AVERAGE_TO_BE_APPROVED) {
        console.log('Aluno aprovado.');
    } else if (normalAverage <= MAX_AVERAGE_TO_SECOND_SHOT && normalAverage >= MIN_AVERAGE_TO_SECOND_SHOT) {
        const lastChanceGrade = parseFloat(input.split('\n')[1]);
        verifySecondShot(lastChanceGrade, normalAverage);
    }
    else {
        console.log('Aluno reprovado.');
    }
}

main();