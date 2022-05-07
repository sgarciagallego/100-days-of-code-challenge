// * Math - a sort of grab bag of number-related utility functions


const numArray = [9, 7, -2, 3];
const numSqrt = 25;

console.log(Math.max(...numArray));     // -> 9
console.log(Math.min(...numArray));     // -> -2
console.log(Math.sqrt(...numArray));    // -> 3

console.log(Math.sqrt(numSqrt));   // -> 5

/* 
  * Namespace - set of signs that are used to identify and refer to objects of various kinds
  ! Math creates a namespace so that all these functions and values do not have to be global bindings
  ! too many global bindings pollutes the namespace
*/

// * .random() Math Method - generates a random number between 0 and 1

console.log(Math.random());   // -> random number between 0 and 1

// * .round() Math method - rounds to the nearest integer

console.log(Math.round(65.8));    // -> 66

let randomNumber = Math.random() * 100;   
console.log(Math.round(randomNumber));

// the above two lines create a random integer generator between 1 and 100

// * .floor() Math method - rounds down to the nearest integer

console.log(Math.floor(65.8));    // -> 65

// * .ceil() Math method - rounds up to the nearest integer

console.log(Math.ceil(65.4));    // -> 66

// * .abs() Math method - makes a number positive by all means

console.log(Math.abs(-07));     // -> 7
