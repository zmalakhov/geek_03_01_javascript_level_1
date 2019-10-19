const a = true;
const b = true;
const ab = a && b;

if (ab) {
    // тело
}

const c = true;
const d = true;
const cd = c || d;

if (cd) {
    // тело
}

const e = true;
const f = !e;

const tel = "89252346578";
if (tel.length == 11 && tel[0] == "8") {
    console.log("Тест пройден");
} else {
    console.log("Тест не пройден");
}