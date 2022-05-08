/*
  * Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
  
  TODO - Instructions
  ? i. For this exercise, write two functions, "reverseArray" and "reverseArrayInPlace".
  ? 1. The first, "reverseArray", takes an array as an argument and produces a new array that has the same elements in the inverse order. 
  ? 2. The second, "reverseArrayInPlace", does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

  ! Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

// exercise 1 - don't use the reverse method to reverse the array 

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

console.log(reverseArray([2, 4, 6, 8]));

// exercise 2

function reverseArrayInPlace(array) {
  for ( let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length -1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);

console.log(arrayValue);