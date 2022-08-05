// Animal

function getAnimalTree(){
    return [
        { 
            type: 'vertebrado', 
            subtype: [
                { 
                    type: 'ave', 
                    subtype: [
                        { 
                            type: 'carnivoro', 
                            subtype: 'aguia'
                        },
                        { 
                            type: 'onivoro', 
                            subtype: 'pomba'
                        },
                    ]
                },
                { 
                    type: 'mamifero', 
                    subtype: [
                        { 
                            type: 'onivoro', 
                            subtype: 'homem'
                        },
                        { 
                            type: 'herbivoro', 
                            subtype: 'vaca'
                        },
                    ]
                },
            ] 
        },
        { 
            type: 'invertebrado', 
            subtype: [
                { 
                    type: 'inseto', 
                    subtype: [
                        { 
                            type: 'hematofago', 
                            subtype: 'pulga'
                        },
                        { 
                            type: 'herbivoro', 
                            subtype: 'lagarta'
                        },
                    ]
                },
                { 
                    type: 'anelideo', 
                    subtype: [
                        { 
                            type: 'hematofago', 
                            subtype: 'sanguessuga'
                        },
                        { 
                            type: 'onivoro', 
                            subtype: 'minhoca'
                        },
                    ]
                },
            ] 
        },
    ];
}

function findTheAnimal(aspects) {
    const animalTree = getAnimalTree();
    const aspectLvl1 = aspects.shift();
    const aspectLvl2 = aspects.shift();
    const aspectLvl3 = aspects.shift();

    let animal; 
    animalTree.forEach(lvl1 => {
        if(lvl1.type === aspectLvl1){
            lvl1.subtype.forEach(lvl2 => {
                if(lvl2.type === aspectLvl2){
                    lvl2.subtype.forEach(lvl3 => {
                        if(lvl3.type === aspectLvl3) {
                            animal = lvl3.subtype;
                        }
                    });
                }
            });
        }
    });

    return animal;
}

function main() {
    const input = require('fs').readFileSync("/dev/stdin", "utf-8");
    //const input = 'vertebrado\nmamifero\nonivoro';
    const aspects = input.toLowerCase().split('\n');

    const animal = findTheAnimal(aspects);

    console.log(animal);
}

main();