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
