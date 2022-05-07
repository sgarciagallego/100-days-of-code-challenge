// TODO - Define a recursive function "isEven" corresponding to this description. The function should accepet a single parameter (a positive, whole number) and return a Boolean

/*
  ! % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it is divisible by 2
  ? here's another way to define whether a positive whole number is even or odd:
    - zero is even
    - one is odd
    - for any other number N, its evenness is the same as N - 2
*/

function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else if (x == 1) {
    return false;
  } else if (x < 0) {
    return isEven(-x);
  } else {
    return isEven(x - 2);
  }
}

console.log(isEven(50));    // -> true
console.log(isEven(75));    // -> false
console.log(isEven(-1));    // -> false

// Self-Rating = 4/10 - worked out how to find whether any number is divisibl by 2 but not the rest