// * Spread Operator - spreads / expands the value of an iterable (repeating) object in JavaScript. It can also be used to expand arrays and other expresions 

function add(a, b) {
  return a + b;
}

const numbers = [5, 6];
const sum = add(...numbers);

console.log(sum);   // -> 11

/*
  ! Explanation of the above code

  ? We use the spread operator when we call the add function
  ? we spread the array in the numbers variable, so the value of the parameter a will be 5 and the value of parameter b will be 6
  ? resulting in the sum being 11
*/
