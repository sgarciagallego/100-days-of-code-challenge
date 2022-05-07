/*
  TODO - The 3 Function Notations
  * Function Declaration - when a function is created with the global keyword "function"
  * Function Expression - when a function is created through the declaration of a variable
  * Arrow Functions - smaller and simpler function notation, you can tell an arrow function by the "=>" shown after the parentheses
*/

// ! There is a shorter way to create a function binding

// when a function keyword is used at the start of a statement, it works differently
function square(x) {
  return x * x;
}

console.log(square(12));    // -> 144

/*
  * The above is known as a function declaration
  ! Line 4 - statement defines the function "square" and points it at the given function
  ! Line 5 - function declaration with return x * x
  ! Line 6 - declaration logged to console
*/

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars.";
}

// -> The future says: You'll never have flying cars.

/* 
  ? The logged code works, even though the function is defined below the code that uses it, not following the control flow
  * Function declarations are not part of the regular top-to-bottom control flow - they are conceptually moved to the top of their scope and can be used by all the code in that scope
*/


