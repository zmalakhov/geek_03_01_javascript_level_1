function sum(a) {

    let multiply = a;

    function f(b) {
        b === undefined ? b = 1 : b = b;
        multiply *= b;

        return f;
    }
    f.toString = function () {
        return multiply;
    }
    
    return f;
}
console.log(+sum(5)(2)());
console.log(+sum(5)());
console.log(+sum(2)(1)(3)(4)());