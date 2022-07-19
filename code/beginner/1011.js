// Sphere volume

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function sphereVolume(radius){
    const pi = 3.14159;
    return (4 * pi * Math.pow(radius, 3))/3.0;
}

function showVolume(volume){
    console.log(`VOLUME = ${volume.toFixed(3)}`);
}

function main(){
    const radius = parseFloat(lines.shift()).toFixed(2);
    
    const volume = sphereVolume(radius);
    
    showVolume(volume);
}

main();