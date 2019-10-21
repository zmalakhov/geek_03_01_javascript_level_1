// for (let n=1; n<20000; n=n*2){
//     console.log(n);
// }


let n = 0;

while (2 ** n < 20000) {
    console.log(n);
    n++;
}


let i = 5;

do {
    console.log("do цикл");
    i++;
} while (i < 0);
