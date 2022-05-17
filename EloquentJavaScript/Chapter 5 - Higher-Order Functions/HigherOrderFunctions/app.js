/* 
  * Higher-Order Functions - functions that operate on other functions, either by returning them as arguments or by returning them
  ! they allow us to abstract other actions, not just values
*/

// function that create new functions

function greaterThan(n) { 
  return(m => m > n);
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));   // -> true

