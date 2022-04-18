/*
  TODO - The JavaScript Scope

  ? when you create a function, the set of tasks enlaced within the function will only be available inside the function - i.e. a variable created within a function will not be available outside the function with the variable
  * The Global Scope - the variables declared global, an example being in like 3
  * The Function Scope - the variables declared within a function, an example being on Line 7
  ! Variables declared in the global scope are available in a function but variables declared within the function scope are only available within that specific function scope
*/

// An example below

let myBirthday = "25/08/03";

function scope() {
  console.log(myBirthday);    // -> passes to console through the function invocation in line 34
  let xMas = "25/12/XX";    // creation a variable within the function scope
}

scope();    // -> logs 25/08/03 to console

console.log(xMas);    // -> Uncaught ReferenceError: xMas is not defined - does not pass to the console

/* 
  ? FUN FACT - in pre-ES6 JavaScript, only functions created new scopes
  ! bindings declared with "var", are visible throughout the whole function they appear in
  ! if not in a function, they are available throughout the global scope
  example below
*/

let variable = 10;
if (true) {
  let anotherVar = 20;
  var lastVar = 30;

  console.log(variable + anotherVar + lastVar);
  // -> 60
}

console.log(variable + anotherVar + lastVar);
// -> error: anotherVar not defined as post ES6 JS variable declared

const halve = function(n) {
  return n / 2;
};

let n = 10;

console.log(halve(100));    // -> 50

console.log(n);     // -> 10



