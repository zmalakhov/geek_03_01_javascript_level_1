class Bird {
    fly(){
        this.distance += 100;
    }
}

const eagle = new Bird();
eagle.distance = 0;
eagle.fly();

console.log(eagle.distance);


// классы нужны для того, чтобы передавать разным объектам общие методы
// объект - это экземпляр определенного класса