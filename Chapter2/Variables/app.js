// * a variable stores values

let caught = 5 * 5;     // variable "caught" = 25
console.log(caught);

let sumTen = 2 * 5;     // 10
console.log(sumTen * sumTen);   // 100 -> 10 * 10

// * if you ask the value of an empty binding, you'll get the value "undefined"
let grapeFruit;
console.log(grapeFruit);  // undefined

// * a single let statement can define multiple bindings
let one = 1, two = 2;
console.log(one + two); // 3

// * "const" can be used to define a constant variable, which will not change in value
const anotherOne = 1;
anotherOne = 3;
console.log(anotherOne);  // 3 with error
