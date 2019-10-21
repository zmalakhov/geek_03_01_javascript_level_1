
const films = [
    {name: "Титаник", money: 1e5},
    {name: "Смешарики", money: 2e5 + 3e4},
    {name: "Рапунцель", money: 2e4 + 3e3},
    {name: "Один дома", money: 4e5 + 9e4},
];

const origins = {
    "Титаник": "Российская федерация",
    "Смешарики": "США",
    "Рапунцель": "Республика Беларусь",
    "Один дома": "Канада",
};

// for (let film of films){
//     film["country"] = origins[film["name"]];
// }
// map позволяет перезаписать каждый элемент массива
films.map(film => film["country"] = origins[film["name"]]);

// forEach позволяет получить каждый элемент массива и как то его использовать
//films.forEach(film => console.log(film));
let money = 0;
films.forEach(film => money += film.money);
console.log(money);

console.log(films);