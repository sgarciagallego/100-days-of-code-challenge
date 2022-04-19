/*
  ? the ability to treat functions as values combined with the fact that local bindings are re-created every time a function is called brings up an interesting question:
  ! What happens to local bindings when the function call that created them is no longer active?

  example shown belo
*/

function wrapValue(n) {
  let local = n;
  return () => local;   // arrow function calling local
}

let wrap1 = wrapValue(1);   // assigning variable to function with parameter value
let wrap2 = wrapValue(2);   // assigning variable to function with another parameter value

console.log(wrap1());     // -> 1

console.log(wrap2());     // -> 2

/*
  ! above is a good demonstration that local bindings are created anew for every call
  * the explicit local binding from the wrapValue example isn't really needed since a parameter is itself a local binding
*/

// * Closure - being able to reference a specific instance of a local binding in an enclosing scope

function multiplier(factor) {
  return number /* "number" is the function parameter */ => /* "=>" is arrow function declaration */ number * factor;
}

let twice = multiplier(2);
let timesThree = multiplier(3);

console.log(twice(5));        // -> 10
console.log(timesThree(5));   // -> 15

// ! a good mental model for thinking of function values is as containing both 1. the code in their body and 2. the environment in which they're created