/* 
    Javascript Syntax. Interactive course.
    Rishat Ishbulatov, dated Oct 27, 2019.

    A game of survival of birds. Purpose of the game: 
    find out which bird will eat the most of its relatives.

    Solution Algorithm:
    1. Create a Bird class.
    2. Add the properties name, points, wasEaten to the bird.
    3. Create 10 birds with the names Bird 1, Bird 2, ..... Bird 3.
    4. Start the cycle: until there is only one live bird left. The cycle should 
    randomly select one of the live birds and feed it any other (the one that is 
    eaten becomes wasEaten = true, and the one that was fed becomes point ++).
*/

class Bird {
    constructor(name){
        this.name = name || ""
        this.wasEaten = false
        this.points = 0
    }
    eat(bird){
        this.points++
        bird.death()
    }
    death(){
        this.wasEaten = true
        console.log(this.name+' was eaten')
    }
}

let birds = new Array()
for (i = 1; i < 11; i++){
    birds.push(new Bird("Bird " + i))
}

while(birds.length > 1){
    let i = Math.floor(Math.random() * birds.length)
    birds.find(b => b !== birds[i]).eat(birds[i])
    birds.splice(i, 1)
}
console.log(birds[0].name+' survived with score '+birds[0].points)