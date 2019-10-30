class Bird {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }
}
const allBirds = [];
for (let i = 1; i <= 10; i++) {

    allBirds.push(new Bird("Bird" + [i]));

}
console.log(allBirds);
console.log();
console.log("Стартовало выживание:");
let randSurvivor = 0;
let randEaten = 0;
let equalityTest = true; // Проверка ра равенство рандомных чисел.
let survivorTest = 0; // Проверка на выживших птичек.
let lifeBird = 0; 
while (survivorTest < allBirds.length-1) {
    while (equalityTest == true) {
        if (randSurvivor == randEaten) {
            randSurvivor = parseInt(Math.random() * allBirds.length);
            randEaten = parseInt(Math.random() * allBirds.length);
        } else if (randSurvivor != randEaten) {
            if (allBirds[randEaten].wasEaten == false && allBirds[randSurvivor].wasEaten == false) {
                allBirds[randSurvivor].points++;
                allBirds[randEaten].wasEaten = true;
                survivorTest++;
                lifeBird = allBirds.length - survivorTest;
                equalityTest = false;
            } else {
                randSurvivor = parseInt(Math.random() * allBirds.length);
                randEaten = parseInt(Math.random() * allBirds.length);
            }
        }
    }
    console.log("Птичка " + allBirds[randSurvivor].name + " съела птичку " + allBirds[randEaten].name + ". " 
    + allBirds[randSurvivor].points + " - столько птичек на ее счету. " + "Живых птичек осталось " + lifeBird + ". ");
    //Обнуление переменных:
    randSurvivor = 0;
    randEaten = 0;
    equalityTest = true;
}
console.log();
console.log(allBirds);