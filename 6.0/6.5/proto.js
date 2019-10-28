const bird = {"flies": true};

function Eagle(name) {
    this.name = name;
    this.speed = 100;
}
Eagle.prototype = bird;

const eagle1 = new Eagle("Alexander");
console.log(eagle1);
console.log(eagle1.flies);

// выводы
// прототипом класса может выступать объект
// объекты могут прототипом наследовать свойства других объектов
// родительский объект при этом сохраняет функционал
// при попытке получить значение свойства проверяется свойство в объекте,
// затем в классе, и во всех прототипах