let x = 0;
let y;

function foo() {
    y = 10;
}

foo();

function foo2() {
    console.log(y);
}

console.log(x);

foo2();


function foo3() {
    // объявление переменной z как глобальной
    // просто не пишем ключевые слова let или const
    z = 100;
}

function foo4() {
    console.log(z + 5);
}

foo3();
foo4();