// TODO - Array Methods

let arrayVariable = [1, 2, 3, 4, 5];
console.log(arrayVariable);   // -> [1, 2, 3, 4, 5]

// * .push array method - appends an array item

arrayVariable.push(6);
console.log(arrayVariable);   // -> [1, 2, 3, 4, 5, 6]

// * .pop array method - removes the last array item from an array

arrayVariable.pop();
console.log(arrayVariable);   // -> [1, 2, 3, 4, 5]

// * .unshift array method - prepends an array item

arrayVariable.unshift(0);
console.log(arrayVariable);   // -> [0, 1, 2, 3, 4, 5]

// * .shift array method - removes the first array item from an array

arrayVariable.shift();
console.log(arrayVariable);   // -> [1, 2, 3, 4, 5]

// * .indexOf array method - search for a specific value within an array

console.log(arrayVariable.indexOf(3));  // -> 2 (in position 2 of the array - counting from 0)

console.log(arrayVariable.indexOf(5));  // -> 4

// ! if the value is not found, indexOf will return -1

// * .lastIndexOf array method - search from the end instead of the start 

console.log([1, 2, 3, 2, 1].indexOf(2));    // -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));    // -> 3 (in position 3 of the array - counting from - 0)

// * .slide array method - takes 2 arguments, start and end indices, and will take all the array items between those 2 array positions

console.log([0, 1, 2, 3, 4].slice(2, 4));   // -> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));      // -> [2, 3, 4]

// ! NOTE: it collects the start indices array item but not the end 
// ! also, if only 1 argument is passed, that is the start point and there will be no end point

// * .concat array method - glues 2 arrays together to make a new array

function remove(array, index) {
  return array.slice(0, index)
  .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));  // -> ["a", "b", "d", "e"]

/*
  ! Explanation of the above code
  ? line 50 - the function returns the paremeter array and performs the array method "slice" on the parameter, the starting point being the 0th position and the end point being the second function parameter chosen at line 54
  ? line 51 - passes the array method "concat" which glues the result of line 50, and then slices the array from the value of the 2nd function parameter added by 1
*/

// ! if you pass concat on an argument which isn't an array, the value will be added to the new array as if it were a one-element array

let textA = "jelly";
let textB = "bean";

console.log(textA.concat(textB));   // -> jellybean

