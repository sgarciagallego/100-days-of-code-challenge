// The way control flows through functions is somewhat involved

// a simple program which makes a few function calls
function greet(who) {
  console.log("Hello " + who);
}

greet("Sergio");
console.log("Bye");

/*
  ? The console log for this program goes as follows:
    1. Hello Sergio
    2. Bye
  ! The flow of control from Line 4 to Line 9 goes something like this
  not in function
    in greet
      in console.log
    in greet
  not in function
    in console.log
  not in function
*/

// * The Call Stack -  a mechanism for an interpreter to keep track of its place in a script that calls multiple function - what function is currently being run and what functions are called from within that function

// ! storing the stack requires space in the computer memory - when the stack grows too big, the computer will throw a message saying out of stack or too much recursion

// the following code should be commented out to avoid computer memory filling leading to browser unresponsiveness

function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + " came first.");    // Uncaught RangeError: Maximum call stack exceeded

