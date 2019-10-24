// Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
const li = [ {"a": 4, "b": 5}, {"a":1, "b": 2, "c": 3} ];

for (let ob of li){
    if (ob.hasOwnProperty("c")){
        console.log(ob.c);
    } else {
        console.log("no such property");
    }

}

// Альтернативный способ создания объектов
const ob = new Object();
ob["a"] = 1;
ob.b = 2;



console.log(ob);
console.log();

// Object.keys() - возвращает массив с ключаи объекта
const keys = Object.keys(ob);
// Object.values() - возвращает массив всех значений
const values = Object.values(ob);