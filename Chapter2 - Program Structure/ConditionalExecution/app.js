// not all programs are straight roads

// * a branching road (where the program takes the proper branch based on the situation at hand) is called "conditional execution" -> and it is created with the "if" keyword/statement in JavaScript


let randomNumber = Number(prompt("Pick a Number"));

if (!Number.isNaN(randomNumber)) {    
  console.log("Your number is the square root of " + randomNumber * randomNumber);
} else {
  console.log("Hey! Why didn't you give me number :(");
}

/*
  ! Explanation of lines 6-9
  ? Line 6 -> asking for a user prompt of a string which is converted to a number and stored in the variable randomNumber
  ? Line 8 -> the "!Number.isNaN" function returns true only if the argument given is NaN (not a number), this condition translates to: unless the variable randomNumber is not a number, do this.
  ? Line 9 -> the console output if the statement is true
  ! CONCLUSION: if the number converted string prompt stored in randomNumber is a number, display the square root in the browser console.
*/


// * in JavaScript, braces - "{}", are used to group any number of statements into a single statement, called a BLOCK

if (1 + 1 == 2) console.log("It's true!");    // -> It's true! (only one statement so braces emitted)

// * the "else" keyword/statement is used to handle the alternative execution path


/*
  ! this is the alternative execution path (shown on lines 10-12 in a function)
  else {
    console.log("Hey! Why didn't you give me number :(");
  }
*/

// ? if you have more than two paths, you can "chain" multiple if/else pairs together

let anotherNumber = Number(prompt("Pick a 2nd Number"));

if (anotherNumber < 10) {
  console.log("Your number is smaller than 10");
} else if (anotherNumber < 100) {
  console.log("Your number is smaller than 100");
} else {
  console.log("Your number is greater than 100");
}