/*
  ! There is a third notation for functions
  * Arrow Functions - instead of a function keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character (not to be confused with the greater than or equal to operator, written >=)
*/

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(3, 3));    // -> 27 (base to the power of exponent)

// ! The Arrow (=>) - expresses something like "this input (the parameters) produces this result (the body)" 

/*
  ? When there's only one parameter name, you can omit (exclude) the parentheses outside the parameter list
  ? If the function body is a single expression, rather than a block in braces, the expression will be returned from the function 
  shown below
*/

const square1 = (x) => { return x * x; };
console.log(square1(3));  // -> 9

const square2 = x => x * x;
console.log(square2(7));  // -> 49

/* 
  * when an arrow function has no parameters, the parameter list is just an empty set of parentheses
  show below
*/

const horn = () => {
  console.log("Toot");
};

horn();   // -> "Toot" - function invocation

