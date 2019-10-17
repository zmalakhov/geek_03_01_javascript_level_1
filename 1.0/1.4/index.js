/*
*
* */

// нумерация символов в строке
// Т и т а н и к
// 0 1 2 3 4 5 6

const title = "Титаник";

// получение одного символа
const firstLetter = title[0];
console.log(firstLetter);

// получение подстроки
// с первого символа включительно по второй невключительно
const subTitle = title.substring(1, 3);
console.log(subTitle);

// длина строки
const l = title.length;
console.log(l);

// получим последний символ
const lastLetter = title[title.length - 1];
console.log(lastLetter);

// сложение строк
const s = " - клевый фильм";
let s2 = title + s;
console.log(s2)








