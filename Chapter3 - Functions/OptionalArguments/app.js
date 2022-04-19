// the following code is allowed and therefore executes with no problems
// ? but why

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));   // -> 16

/*
  ! Explanation for the above code
  ? Line 4 - we defined the function "square" with only one parameter "x"
  ? Line 5 - tried to log to console with 3 parameters and still runs correctly
  ! JavaScript will ignore the extra parameters and computes the function of the invoked parameter

  * if you pass too many parameters, it will ignore the extra ones
  * on the other hand, if you pass too few, the missing parameters get assigned the value "undefined" to avoid an error
  
  ! this can be a downside, as you may pass the wrong number of parameters in a function and there will be no errors, so will be harder to debug
*/

// potential upside of optional JavaScript arguments

function minus(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}

console.log(minus(10));       // -> -10
console.log(minus(10, 5));    // -> 5

/*
  ! Walkthrough of the above code
  ? Line 21 - creating a function named "minus" with 2 parameters
  ? Line 22-23 - if statement: if b is equal to undefined then return -a, whatever the value of a may be
  ? 24-25 - else: return a - b, whatever the values of both a and b are
*/

// ! if you write an = operator after a parameter (shown below), followed by an expression, the value of that expression will replace the argument when not given

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));        // -> 16 (4 to the power of 2)
console.log(power(4, 3));     // -> 64 (4 to the power of 3)

/*
  ! why power(4) -> 16 and power(4, 3) -> 64
  ? as the exponent is not given a value within the power function parameters, the 2 will replace the value of undefined exponent in line 41, therefore power(4) being 16
  ? as both arguments are given values, the function can run as intended with the first number (the base) being the operand to the power of the exponent (the second number)
*/

