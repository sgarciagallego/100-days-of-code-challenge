/* 
  * Higher-Order Functions - functions that operate on other functions, either by returning them as arguments or by returning them
  ! they allow us to abstract other actions, not just values
*/

// a function that creates new functions

function greaterThan(n) { 
  return(m => m > n);
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));   // -> true

// a function which changes other functions

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", return", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);

// ----- Just understanding spread a bit more --------

const myName = ["Sergio", "Garcia"];
const sentenceWithName = ["Hi,", "I", "am", ...myName];

const joinStringArray = sentenceWithName.join(" ");

console.log(joinStringArray);

// ---------------------------------------------------

// a function that provides new types of control flow

function unless(test, then) {
  if (!test) {
    then();
  }
}

/*
  ! Explanation of line 42-46\

  ? function 'unless' created with two params, test and then
  ? if the opposite of test is true, then is called
*/

// repeat(3, n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });

// * forEach() - basically provides a for loop as a higher-order function

["A", "B"].forEach(function(loop) {
  console.log(loop);
});
