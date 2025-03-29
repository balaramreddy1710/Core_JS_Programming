function func() {
    console.log("Hi there");
}
function func1(name) {
    console.log("HI ".concat(name));
}
function func2(a, b) {
    return a + b;
}
function func3(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (c, d) { return c + d; }, 0);
}
var func4 = function (a, b) { return a + b; };
console.log(func4(1901, 213));
