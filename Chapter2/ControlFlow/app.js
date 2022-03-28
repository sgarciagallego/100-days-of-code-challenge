// ! When your program contains more than one statement, the statements are executed as if they were a story: from TOP TO BOTTOM 
// * -> this is the "control flow"

let userNumber = Number(prompt("Please choose a number:"));

console.log("Your number is the square root of " + userNumber * userNumber);
/*
* the "Number" function converts a string to number
we store the user prompt within a variable named "userNumber"
then we console.log() the number * itself and show it as "your number is the square root of userNumber * userNumber"
*/

let stringNumber = 75;
console.log(String(stringNumber) + " is my age");   // * the "String" function converts data type to a string

let booleanValue = "";
console.log(Boolean(booleanValue));   // * the "Boolean" function converts data type to a boolean

// trivial  schematic representation of a straight line control flow: -->
