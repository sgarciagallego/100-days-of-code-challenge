const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// * Destructuring - taking a whole array/object and converting it into a smaller objects/array elements/variables

// ! traditionally you would do this to get first, second & third element

// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];

// ! ES6+ way of getting first, second & third element

const [a, b, c] = alphabet;

console.log(a);     // -> A
console.log(b);     // -> B
console.log(c);     // -> C

/*
  ! The Idea of Destructuring (seen in line 13)

  ? You place the array/binding holding the array you want to destructure on the right-hand side of the equal operator 
  ? on the left-hand side of the equal operator, we place the array elements we want to supply inside the square brackets
  ? in the example above a holds the 0th index, b holds the 1st index, and c holds the 2nd index
*/

// ! if we want to skip the second position seen above

const [one,, three] = alphabet;

console.log(one);   // -> A (one holds the 0th index)
console.log(three);   // -> C (three holds the 2nd index)

// * Spread operator (...) - expands/spreads an iterable object such as an array into a separate list of arguments

const[uno,, tres, ...rest] = alphabet;  // -> ...rest lists the rest of the array elements 

console.log(rest);    // -> ["D", "E", "F"]

// ! Useful: we can use the spread operator to combine arrays

const newArray = [...alphabet, ...numbers];
const newArray2 = alphabet.concat(numbers);

console.log(newArray);  
console.log(newArray2);
// -> both output ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6"]

// ! Useful: dealing with functions and returning more than one parameter from a function

function sumAndMultiply(a, b) {
  return[a + b, a *b];
}

console.log(sumAndMultiply(2, 3));    // -> [5, 6]

// ! destructuring function parameters for separate operations

const [sum, multiply] = sumAndMultiply(2, 3);

console.log(sum);         // -> 5
console.log(multiply);    // -> 6

// TODO - Making my own function destructuring array

function divideAndSubtract(c, d) {
  return[c / d, c - d];
}

const [divide, subtract, opt = "no division"] = divideAndSubtract(10, 2);
// 0th index of array picks up the 0th index of the return output of the function (division)
// 1st index of array picks the 1st index of the return output of the function (subtraction)

console.log(divide);
console.log(subtract);
console.log(opt); // -> because there's no 3rd parameter in the function

