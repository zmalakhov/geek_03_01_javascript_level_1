/* типы данных */

// number - число
let x = 10;

// string - строка
let y = "hello";

// undefined - переменная определена, но значение пока не присвоено
let z;

// null - специальный тип данных, не является undefined и нулем
let n = null;

// object - объект
let li = [1,2,3];
let ob = {};

// boolean - логический тип
let b = true;

// typeof - позволяет узнать тип переменной
// можно использовать не как функцию
console.log(typeof x);

console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (z));
console.log(typeof (n));
console.log(typeof (li));
console.log(typeof (ob));
console.log(typeof (b));


// как сочетаются разные типы данных друг с другом

// строки
console.log("hello " + 10);
console.log("hello " + z);
console.log("hello " + n);
console.log("hello " + b);
console.log("hello " + li);
console.log("hello " + ob);

//числа
console.log(x + n);
console.log(x + b);
console.log(x + li);
console.log(x + ob);
console.log(x + z); // NaN

