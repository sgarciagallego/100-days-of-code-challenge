// * Function - a regular variable where the value of the variable is a function, a function is created with an expression that starts with the keyword "function".

const name = "Sergio Garcia";   // creating a constant string variable which is now saved in the memory

function logger() {
  // here is where you give a set of functions you want it to do
  for (let counter = 0; counter <= 10; counter++) {
    console.log(counter);
  }

  for (let triangle = "#"; triangle.length <= 8; triangle += "#") {
    console.log(triangle);
  }
}

logger();   // * this is how you call a function - a function invocation

/*
  TODO - The JavaScript Scope

  ? when you create a function, the set of tasks enlaced within the function will only be available inside the function - i.e. a variable created within a function will not be available outside the function with the variable
  * The Global Scope - the variables declared global, an example being in like 3
  * The Function Scope - the variables declared within a function, an example being on Line 7
  ! Variables declared in the global scope are available in a function but variables declared within the function scope are only available within that specific function scope
*/

// An example below

let myBirthday = "25/08/03";

function scope() {
  console.log(myBirthday);    // -> passes to console through the function invocation in line 34
  let xMas = "25/12/XX";    // creation a variable within the function scope
}

scope();    // -> logs 25/08/03 to console

console.log(xMas);    // -> Uncaught ReferenceError: xMas is not defined - does not pass to the console

// ---------------

const square = function(x) {
  return x * x;
};

console.log(square(12));    // -> 144 to the console

/*
  ! Explanation of Above Code
  ? Line 40 - declaring a fixed variable named square and giving the value function with a paramter of x
  ? Line 41 - this is the function body
  * Line 41 (cont.) - where the return statement stops the execution of the function and returns a value
  ? Line 44 - logging to console the function inside the variable "square", which is x * x, and as 12 is put as the value of choice, it becomes 12 * 12
*/

// ? Did you know: functions can have paramaters and can sometimes not have parameters

const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();    // -> Pling!

/*
  ! Explanation for Code Above
  
  ? Line 18 - assigning the variable with an empty function
  ? Line 19 - the function body, which would be a console.log of the string above
  ? Line 22 - when calling the variable with the function assigned to it, it will console.log the string assigned within the function body in line 19
*/

// another example with the function containing 2 parameteres

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));    // -> 1024

/*
  ! This code console logs the first value to the power of the second value

  ? Line 34 - declaring a variable with a function containing 2 parameters
  ? Line 35 - declaring a result variable with the number value of 1
  ? Line 36 - for loop, 1st statement of for loop initialising the loop with a variable declaration: count = number value of 0, 2nd checking to see if the for loop will continue, in this case it is checking to see if the value of count is less than the value of exponent, and the final statement updating the value, which would increment the value of count by 1
  ? Line 37 - with each for loop, the variable value base will be multiplied by the variable value of result and the result will be assigned 
*/
