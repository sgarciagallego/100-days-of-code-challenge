/*
  ! it can be useful for a function to accept any number of arguments
  ? for example - Math.max computes the max of all arguments it is given
  TODO - to write a function for this - put three dots before the function's last parameter
*/

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2));    // -> 9

// * Rest Syntax (...) - retrieves the remainder of items, the rest of the items

const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

const {
  c, 
  d, 
  ...restObject
} = object;

console.log(restObject);     // -> {a: 2, b: 2, e: 5}

// ! you can use a similar elipses notation (...) to call a function with an array of arguments

let numbers = [5, 1, 7];

console.log(max(...numbers));   // -> 7

