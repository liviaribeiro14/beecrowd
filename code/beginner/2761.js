// Input and Output of Various Types

function getValues(input){
    const values = input.split(' ');
    const result = {
        integerValue: '',
        floatValue: '',
        caracterValue: '',
        stringValue: '',
    };

    result.integerValue = values[0];
    result.floatValue = values[1];
    result.caracterValue = values[2];

    result.stringValue = values.slice(3).join(' ').replace('\n','');

    return result;
}

function showResult(result) { 
    const tab = '\t'; 
    console.log(`${result.integerValue}${result.floatValue}${result.caracterValue}${result.stringValue}`);
    console.log(`${result.integerValue}${tab}${result.floatValue}${tab}${result.caracterValue}${tab}${result.stringValue}`);
    console.log(`${result.integerValue.padStart(10, ' ')}${result.floatValue.padStart(10, ' ')}${result.caracterValue.padStart(10, ' ')}${result.stringValue.padStart(10, ' ')}`
    );
}

function main() {
    // const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    const input = '-5122 123.141571 K d\n';
    
    const result = getValues(input);

    showResult(result);
}

main();