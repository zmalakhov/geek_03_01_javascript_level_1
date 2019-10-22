// решение факториала

// let value = 1;
// let start = 5;
//
// while (start != 1) {
//     value *= start;
//     start--;
// }
//
// console.log(value);


// function factorial(number) {
//     console.log(number);
//     if (number <= 1) {
//         return number;
//     } else {
//         return number * factorial(number -1);
//     }
// }

function factorial(number) {
    return number <= 1 ? number : number * factorial(number -1);
}

console.log(factorial(5));;
