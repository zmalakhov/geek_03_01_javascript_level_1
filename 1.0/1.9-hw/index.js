/*
* JavaScript. Level 1. Homework 1
* Zaur Malakhov, dated 2019-10-18
* */

const a = 5;
let s = "f";
s = s + a;
console.log(s);

let b = 8;
b = b + 0x1;
b = b + 0b1;
b++;
console.log(b);

let li = [1, 2, 3, 4, 5, 6, 7, 8];
li.splice(3, 3);
li.push(10);
li.push(5e9);
console.log(li);

const ob = {
    numbers: "",
};
ob.numbers = li.join(";");

const str = li.join(";") + ";" + li[4] + ";" + li[4];
ob.newNumbers = str;
console.log(ob);
