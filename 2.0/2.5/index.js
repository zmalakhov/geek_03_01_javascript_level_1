const tel = "89252346578";

let success = false;
let error = "";

if (tel.length === 11) {
    switch (tel[0]) {
        case "8":
            success = true;
            break;
        case "7":
            error = "Первая цифра семерка.";
            break;
    }
}

console.log(success);
console.log(error);

const s = (success ? "Тест пройден" : "Тест не пройден" + error);
console.log(s);

