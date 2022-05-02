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