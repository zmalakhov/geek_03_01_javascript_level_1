// функция как выражение
const get = function () {
    console.log("hey");
}

// это объявление  функции
function getTempPrediction(firstDay, secondDay) {
    return nextDay = 0.5 * firstDay + 0.5 * secondDay;
}

const temp = getTempPrediction(40, 20);
console.log(temp);

// передача не всех аргументов
function foo(a, b) {
    // b === undefined ? b = 5 : b = b;
    b ? b : b = 5;
    console.log(a);
    console.log(b);
}

foo(1);


// передача любого количества аргументов
function getTempPrediction1(...days) {
    // console.log(days);
    let sum = 0;
    days.forEach(day => sum += day);
    return sum / days.length;
}

console.log(getTempPrediction1(40, 20, 45, 23));

