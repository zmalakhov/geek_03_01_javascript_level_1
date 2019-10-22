/*
* JavaScript. Level 1. Homework 3
* Zaur Malakhov, dated 2019-10-21
* */

/*
* 1. Вывести все числа от 10 000 до 150 000, у которых сумма трех предыдущих элементов при делении на 100 дает остаток 52, вторая цифра — 2.
* */

// for (let n = 1e4; n < 15e4; n++) {
//     let k = 3 * n - 6;
//     let s = "" + k;
//     if (s.endsWith("52") && s[1] === "2") {
//         console.log("Число: " + n + "; сумма трех предыдущих: " + k);
//     }
// }


// вариант из разбора ДЗ

const goodNumbers = [];

let n = 1e4;
while (n < 15e4){

    let sum = 0;
    for (let m of [n-1, n-2, n-3]){
        sum += m;
    }
    if (sum % 100 === 52 && String(sum)[1] === "2") {
        //console.log("Число: " + n + "; сумма трех предыдущих: " + k);
        goodNumbers.push(n);
    }

    n++;
}

console.log(goodNumbers);

