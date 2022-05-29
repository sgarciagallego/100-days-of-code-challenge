/*
  * Synchronous System - tasks are completed one after the other
  ? think of it as if you had only one hand to complete several tasks, you could only complete a task one at a time

  ! JavaScript is by default single threaded - which means that it can only run/execute one thing at a time, as it has only one call stack
*/

/*
  * Asynchronous System - tasks which are completed independently
  ? think of asynchronous programming as having 10 hands to complete 10 tasks, so each task can be done independently and at the same time / asynchronously

  ! JavaScript is not multi threaded - it cannot execute multiple things at once
*/

// TODO - testing synchronous code
console.log("I");
console.log("eat");
console.log("ice-cream");

// -> lifecycle looks like this: "I" --> "eat" --> "ice-cream"

// TODO - testing asynchronous code
console.log("I");

setTimeout( () => {
  console.log("eat");
}, 2000);

console.log("ice-cream");

// lifecycle looks like this: "I" --> "ice-cream" --> "eat"

// ! because the setTimeout() method prolonged the console log execution of the string "eat" by 2000 milliseconds (2 seconds), the string "ice-cream" was logged before and therefore has become asynchronous

// ---------------------------------------

/*
  * Callback Functions - when you nest a function within another function as an argument, that's called a callback
  ! when doing complex tasks, we break that task down into smaller steps. To help us establish a relationship between these steps according to time and order, we use callbacks
*/

// here is an illustrated callback

function one() {
  // do something
}

function two() {
  // do something else
  call_one();
}

// two(one);   // -> code is being executed