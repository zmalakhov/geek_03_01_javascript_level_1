class Bird {
    constructor( name ) {
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const birds = [];
const name = "Bird ";
for (let i = 1; i < 11; i++) {
    birds.push(new Bird( name.concat( i )));
}
let count = 10;
let pos = 0;
let pos1 = 0;
while ( count > 1) {
    pos = getRandomInt( 0, 9 )
    if ( birds[pos].wasEaten ) continue;
    while (true) {
        pos1 = getRandomInt( 0, 9 );
        if (( !birds[pos1].wasEaten ) && (pos !== pos1)) {
            birds[pos1].wasEaten = true;
            birds[pos].points++;
            count--;
            break;
        }
    }
    console.log("Счетчик оставшихся птиц: ", count);
    console.log(birds);
}
console.log("Результат");
console.log(birds);