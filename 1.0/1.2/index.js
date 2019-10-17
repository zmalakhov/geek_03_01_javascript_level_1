/*
* 1. Ключевые слова для создания переменных:
* let и const
* var - устаревшее ключевое слово
* вместо него испльзуем let
*
* let - заменяет var
* const - значение нельзя изменить
* const - используется для создания констант
* */


/*
* 2. Работа с числами: создание и использование
* */


const year = 2000;
let money = 500;

// money = money + 1000000;

// научная форма записи числа
money = money + 1e5;

console.log(year);
console.log(money);


// число в шестнадцатиричной системе счисления
// 0...9A...F
let x = 0xFFD1;
console.log(x);

// число в двоичной системе счисления
let y = 0b10011001;
console.log(y);


// максимальное хранимое число
const maxValue = 9007199254740992;
console.log(maxValue);

let s = "123";
console.log(s + 10);

let ss = +"123";
console.log(ss + 10);
