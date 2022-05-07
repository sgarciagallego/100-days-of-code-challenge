/* 
  * Recursive Function - a function which calls itself
  ! okay for a function to be recursive, as long as it doesn't do it so often to overflow the stack

  ? Recursion is different to looping - looping is usually better
*/

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));       // -> 8

/*
  ! Explanation of the above code
  ? Line 6 - creates a function called power with the parameters base and exponent
  ? Line 7 - if statement: if the value of exponent is equal to 0, then the statement will return the value for the exponent
  ? Line 9 - else statement: if it does not equal 1: return the value of base multiplied by the function power (the parent function) with the parameters base and exponent - 1

  ! Problem with the code: this way of writing exponentiation compared to looping is about 3x slower
*/

// in the following program, by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));  // -> (((1 * 3) + 5) * 3)

