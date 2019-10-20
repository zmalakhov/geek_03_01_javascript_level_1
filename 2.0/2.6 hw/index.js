/*
* JavaScript. Level 1. Homework 2
* Zaur Malakhov, dated 2019-10-19
* */

let fedorPoints;
let petrPoints;

fedorPoints = 18;
petrPoints = 22;

fedorValidValue = fedorPoints <= 21;
petrValidValue = petrPoints <= 21;

let result = "";

if ((!fedorValidValue && !petrValidValue) || (fedorPoints === 21 && petrPoints === 21)) {
    result = "Ничья";
} else {
    if (fedorValidValue && !petrValidValue ){
        result = "Федор победил";
    }else if(!fedorValidValue && petrValidValue){
        result = "Петр победил";
    } else {
        result = (fedorPoints > petrPoints ? "Федор победил" : "Петр победил");
    }
}

console.log(result);
