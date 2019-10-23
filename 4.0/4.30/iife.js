// const films = [
//     {name: "Титаник", money: 1e5},
//     {name: "Смешарики", money: 2e5 + 3e4},
//     {name: "Рапунцель", money: 2e4 + 3e3},
//     {name: "Один дома", money: 4e5 + 9e4},
// ];
//
// const origins = {
//     "Титаник": "Российская федерация",
//     "Смешарики": "США",
//     "Рапунцель": "Республика Беларусь",
//     "Один дома": "Канада",
// };
// let money = 0;
//
// films.map(film => film["country"] = origins[film["name"]]);
// films.forEach(film => money += film.money);
//
// console.log(films);
// console.log(money);



// const foo = () => {};
const foo = (x) => {console.log(x)};
foo("hello");

const foo1 = x => x+"!!!!!";
const y = foo1("hello");
console.log(y);

// сортировка по вторым символам
const li = ["dkjf", "olweuif","laosdfj"];
li.sort( (x, y) => x[1] > y[1] );
console.log(li);

