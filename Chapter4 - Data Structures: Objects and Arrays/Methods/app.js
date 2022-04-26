// ? FYI - there are a number of properties that hold function values

let greet = "Hello";

console.log(typeof greet.toUpperCase);  // -> function
console.log(greet.toUpperCase());   // -> HELLO
console.log(greet.toLowerCase());   // -> hello

// * .toUpperCase - translates a string to all capitals
// * .toLowerCase - translates a string to all lower case

/*
  * Methods - Properties that contain a specific function(s)
  ! as in "toUpperCase" is a method to a string coverting it to all capitals
*/

let numberList = [1, 2, 3];
console.log(numberList);

numberList.push(4);   // appends 4 to array
numberList.push(5);   // appends 5 to array

console.log(numberList);

console.log(numberList.pop());  // logs last array value and removes that array value
console.log(numberList);

// * pop method removes last array value

//  * push method appends a value to given array

/*
  ! Stack - a data structure
  * allows to push values into it and pop them out in the opposite order they were in
*/