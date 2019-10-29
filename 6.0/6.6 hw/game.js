class Bird {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }
    eat(birdToEat){
        this.points++;
        birdToEat.wasEaten = true;
        console.log("" + this.name + " eat " + birdToEat.name);
    }
}

const birds = [];

for (let i = 1; i <= 10; i++) {
    let bird = new Bird("Bird " + i);
    birds.push(bird);
}

console.log(birds);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

do {
    let indexBird = getRandomInt(0, birds.length-1);
    let indexBirdToEat = indexBird === 0 ? indexBird+1 : indexBird-1;

    birds[indexBird].eat(birds[indexBirdToEat]);
    birds.splice(indexBirdToEat, 1);

} while (birds.length > 1);

console.log(birds);



