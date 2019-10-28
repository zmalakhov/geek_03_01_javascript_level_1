const rabbit = {
    "name": "Вася",
    "color": "red",
    "speed": 10,
    "getDistance": function (interval) {
        return interval * this.speed;
    },
};

function getDistance(interval){
    return interval * rabbit.speed;
}

console.log(rabbit);
console.log(rabbit.getDistance(10));


// значение для ключа объект может быть функцией
// эта функция называется метод
// в методе объекта можно получить доступ к его свойствам, используя this