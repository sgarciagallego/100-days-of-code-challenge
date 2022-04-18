// The way control flows through functions is somewhat involved

// a simple program which makes a few function calls
function greet(who) {
  console.log("Hello " + who);
}

greet("Sergio");
console.log("Bye");

/*
  ! The flow of control from Line 4 to Line 9 goes something like this
  not in function
    in greet
      in console.log
    in greet
  not in function
    in console.log
  not in function
*/