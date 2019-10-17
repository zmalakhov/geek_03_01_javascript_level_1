/*
*
* */

const title = "Титаника";
const title2 = title.toUpperCase();

console.log(title);
console.log(title2);

// к верхнему регистру: title.toUpperCase()
// к нижнему регистру: title.toLowerCase()

// заканчивается на: title.endsWith()

// начинается с: title.startsWith()
const a = title.startsWith("Т");


// заменить букву на другую: title.replace()
const title3 = title.replace("а", "о");
console.log(title3);

// позиция символа в наборе строке: title.search()
const aPosition = title.search("а");
console.log(aPosition)





