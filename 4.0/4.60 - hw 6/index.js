/*
* JavaScript. Level 1. Homework 4
* Zaur Malakhov, dated 2019-10-23
* */

let foo = (a) => {
    return b => {
        if (b === undefined) {
            return a
        }
        return c => {
            if (c === undefined) {
                return a * b
            }
            return d => {
                if (d === undefined) {
                    return a * b * c
                }
                return f => {
                    if (f === undefined) {
                        return a * b * c * d
                    }
                }
            }
        }
    }
};

// let q = foo(5)(2)();
// let q = foo(5)();
let q = foo(2)(1)(3)(4)();

console.log(q);

