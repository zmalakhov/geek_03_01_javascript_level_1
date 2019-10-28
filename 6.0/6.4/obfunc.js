function Bird(speed) {
    this.distance = 0;
    this.speed = speed;
    this.fly = function () {
        this.distance += speed;
    }
}

const eagle = new Bird(100);
eagle.fly();
eagle.fly();

console.log(eagle.distance);


// класс можно создать в виде функции
// объекты такого класса также создаются при помощи new
// у класса в виде феукции нет конструктора, все свойства назначаются напрямую