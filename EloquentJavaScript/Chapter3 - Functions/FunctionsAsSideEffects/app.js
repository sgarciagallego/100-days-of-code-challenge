/*
  ! Functions can be divided into 2
    - those called for their side effects
    - those called for their return value
*/

/* 
  * Side effect - when a function relies on, or modifies something outside its function parameters to do something
  ! for example, a side effect could be a function which reads/writes from a variable outside its own arguments
*/

/*
  * Return Values - a value that a function returns to the calling scropt or function when it completes a task
  ! a return value can be any one of the four variable types:
    - handle
    - integer
    - object
    - string
*/

/*
  * Pure Function - value-producing function that not only has no side effects but also doesn't rely on side effects such as global bindings
  example below
*/

function pure() {
  return "I am a pure function";
}

console.log(pure());

