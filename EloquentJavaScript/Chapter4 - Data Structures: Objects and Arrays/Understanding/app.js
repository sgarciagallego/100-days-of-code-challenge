/* 
  ! numbers, booleans and strings are the types that data structures are built from
  * Objects - containers for named values called properties
  ! Objects allow us to group values - including other objects - to build more complex structures

  * Data Structures - are techniques for storing and organizing data that make it easier to modify, navigate and access
*/

// * Properties - JavaScript values (example below)

let property = ["Sandwich", "Salad", "English Breakfast"];

console.log(property[2]);   // -> English Breakfast
console.log(property[2].length);  // -> 17

// ! The value within the square brackets [] and the word after the fulls top "." are both properties

// * Methods - Properties which contain functions (example below)

let greet = "Hello There!";

console.log(greet.toUpperCase()); // -> HELLO THERE!
console.log(greet.toLowerCase());   // -> hello there!
console.log(greet.length);  // -> 11

// ! toUpperCase and toLowerCase are both JavaScript methods which convert string characters to all capitals or all lower case depending