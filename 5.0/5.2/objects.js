// Получение объекта из строки со специальным форматом
const s = '{"a": 1, "b": 2}';
const ob = JSON.parse(s);
console.log(ob);

// Сохранение объекта в строку
ob.b = 30;
const s2 = JSON.stringify(ob);
console.log(s2);

