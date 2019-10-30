class Bird {
    constructor(birdNumber) {
        this.name = birdNumber;
        this.points = 0;
        this.wasEaten = false;
    }

    eat() {
        this.points++;
        //console.log("" + this.name + " eat " + birdToEat.name);
    }
}

const birds = [];

for (let i = 1; i <= 10; i++) {
    let bird = new Bird("Bird " + i);
    birds.push(bird);
}


console.log(birds);

let notEatenBirds = [];

while (true) {

    notEatenBirds = birds.filter(bird => bird.wasEaten === false);
    if (notEatenBirds.length < 2) {
        console.log(notEatenBirds);
        break;
    }

    const aggressiveBirdNumber = getRandomElementNumber(notEatenBirds);
    notEatenBirds[aggressiveBirdNumber].eat();

    notEatenBirds[getRandomElementNumber(notEatenBirds)].wasEaten = true;

}

// функция будет возвращать случайный индекс массива
function getRandomElementNumber(ar) {
    let n = Math.random();
    n *= ar.length;
    n = Math.floor(n);
    return n;
}

//
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// do {
//     let indexBird = getRandomInt(0, birds.length-1);
//     let indexBirdToEat = indexBird === 0 ? indexBird+1 : indexBird-1;
//
//     birds[indexBird].eat(birds[indexBirdToEat]);
//     birds.splice(indexBirdToEat, 1);
//
// } while (birds.length > 1);
//
// console.log(birds);



