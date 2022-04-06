// TODO - Prerequisites
console.log("Prerequisites");

// * greater than or equal to
console.log(1 >= 1);  // true -> 1 is greater than or equal to 1

// * less than or equal to
console.log(10 <= 10); // true -> 10 is less than or equal to 10

// * equal to
console.log(100 == 101);  // false -> 100 is equal to 101 is wrong

// * not equal to
console.log(101 != 100);  // true -> 101 is not equal to 100 is right

// * && represents the logical "and", it's a binary operator and returns a true statement only if both values are true
console.log(true && true);    // true
console.log(true && false);   // false

// * the ! represents the logical "not", it's a unary operator and it flips the value given to it
console.log(!true);   // false
console.log(!false);  // true

// * || represents the logical "or", it's a binary operator which returns true if at least one of the values are true
console.log(3 > 1 || 5 < 4);  // true as 3 is greater than 1
console.log(true || false);   // true 
console.log(false || false);  // false

// * the ? represents the conditional operator, which is the only ternary operator, and as a result takes 3 operands: a condition, followed by a colon (:), and finaly the expression to execute if the condition is falsy.
console.log(true ? 1 : 2);  // 1 -> when the condition (true) is in fact true, it will designate the value to the left of the expression (1 : 2)
console.log(false ? 1 : 2); // 2 -> when the condition (false) is in fact false, it will designate the value to the right of the expression (1 : 2)

// TODO - Expressions & Statements
console.log("Expressions and Statements");

// * An expression is a fragment of code which produces a value

!false    // these are expressions -> true

// * A statement is the full code which carries out a complete action

let userName;   // this is a statemnt -> declaring variable

// TODO - Bindings/Variables
console.log("Bindings/Variables");

// * A variable stores values

let myVariable = "This is my 1st variable!";
console.log(myVariable);    // -> This is my 1st variable

// ! If you ask the value of an empty variable, you'll get the value undefined

let myUndeclaredVariable;
console.log(myUndeclaredVariable);    // -> undefined

// ! a single statement can defijne multiple variables

let numberOne = 1, numberTwo = 2;
console.log(numberOne + numberTwo);     // -> 3

// * "const" used to define a variable which won't change in value

const myConstant = 1;
// myConstant = 3;
console.log(myConstant);    // Uncaught TypeError

// TODO - Variable Naming
console.log("Variable Naming");

// ! variable names cannot start with a digit (1, 999 etc)

// ! variable names may include only "$" and "_" but no other punctuation

// ! word with special meaning (keywords) such as "let" cannot be used

// TODO - The Environment
console.log("The Environment");

/* 
* The Environment - the collection of variables and their values that exist at a given time are called
! The environment is never empty, and will have variables and values as part of the language standard
*/

// TODO - Functions
console.log("Functions");

// * A Function - a piece of program wrapped in a value

prompt("Password");     // a function example

// ! Executing a Function is known as "invoking", "calling", or "applying"

// in most cases you will directly use the name of the variable which holds the value

// * Arguments - values given to functions

// TODO - console.log() function
console.log("The console.log() Function");

// * console.log() - outputs values

let firstName = "Sergio", lastName = "Garcia Gallego";
console.log(`Hello there ${firstName} ${lastName}.`);

// TODO - Return Values
console.log("Return Values");

// ! most functions are useful because of the side effect they produce
// * Side Effect - the change of state through the calling of a function or expression

console.log(Math.max(2, 4, 17, 8288));    // this function ("Math.max()")has a side effect of picking the greatest number of the group -> 8288

console.log(Math.min(2, 4) + 100);      // this function ("Math.min()") has a side effect of picking the smallest number of the group (2) and adding 100 -> 102

// * Returning a Value - when a function produces a value

// TODO - The Control Flow
console.log("The Control Flow");

// * The Control Flow - when the program contains multiple statements , the statements are executed as if they were a story: from TOP TO BOTTOM

let userNumber = Number(prompt("Please choose a Number"));

console.log(`Your number is the square root of ${userNumber * userNumber}`);

/* 
* the "Number" function converts a string to a number
? we store the user prompt within a variable name userNumber
? then we console.log() the number * itself and show it as "your number is the square root of userNumber * userNumber"
*/

let userAge = Number(prompt("How old are you?"));
console.log(`You are ${String(userAge)}.`);   // -> You are [Inputted Number]

// * The "String" function converts the value to a string

let makeTrue = prompt("Place a character here");
console.log(Boolean(makeTrue));

// * The "Boolean" function converts the value to a boolean -> TRUE or FALSE

// TODO - Conditional Execution
console.log("The Conditional Execution");

/* 
* Conditional Execution - a branching road: where the program takes a specific branch based on the situation at hand. 
! It is created with the "if" statement in JavaScript
*/

let conditionalExec = Number(prompt("Pick a Random Number"));

if (!Number.isNaN(conditionalExec)) {
  console.log(`Your number is the square root of ${conditionalExec * conditionalExec}.`);
} else {
  console.log("Hey! Give me a number dumbass :)");
}

/*
  * Braces ({}) - are used to group any number of statements into a single statement, called a BLOCK
  * "else" statement is used to handle the alternative execution path
  ! Explanation of Lines 119 - 125
  ? Line 119 -> asking for a user prompt of a string which is converted to a number and stored in the variable randomNumber
  ? Line 121 -> the "!Number.isNaN" function returns true only if the argument given is NaN (not a number), this condition translates to: unless the variable randomNumber is not a number, do this.
  ? Line 124 -> the console output if the statement is true
  ! CONCLUSION: if the number converted string prompt stored in randomNumber is a number, display the square root in the browser console.
*/

// ! if you have more than two paths, you can "chain" multiple if/else statements together

let chainIfElse = Number(prompt("Pick a 2nd number please"));

if (chainIfElse < 10) {
  console.log("Your number is less than 10");
} else if (chainIfElse < 100) {
  console.log("Your number is less than 100");
} else {
  console.log("Your number is greater than 100");
}

// TODO - While and Do Loops
console.log("While and Do Loops")

// * Looping Control Flow (loop) - allows us to go back to some point in the program where we were before and repeat it with the current program state

let aNumber = 0;

while (aNumber <= 12) {
  console.log(aNumber);
  aNumber = aNumber + 2;
}

// * A statment starting with the keyword "while" creates a loop

/*
  ! Explanation of lines 154 - 159

  ? Line 5 - while the variable number is less than or equal to 12
  ? Line 6 - console logging the number
  ? Line 7 - output the variable number + 2 until you reach less than or equal to 12

  ! output -> 0 \n 2 \n 4 \n .. \n 12
*/

// ? The following program calculates and shows the value of 2 to the 10th power

let result = 1, counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);    // this will only display the final result in the browser console -> 1024

// * "do" loop - similar to the while loop, differs only that it executes it's body at least once

let yourName;

do {
  yourName = prompt("What's your name?")
} while (!yourName);

console.log(yourName);

/*
  ! this program will force you to enter a name
  ? Line 189 - applying the ! (not operator) will convert a value to a Boolean before negating it - all strings apart from "" convert to true
  ! the loop will continue until you provide something other than ""
*/

// TODO - Indenting Code
console.log("Indenting Code");

// ! RULE OF THUMB - indent code following the best ease of readability for group collaboration

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

/*
  ? Line 236 - if false isn't equal to true
*/

// TODO - for Loops
console.log("for Loops");

// ! Many loops follow the same pattern

// ? First a "counter" variable is created to track the progress of the loop

let myLoop = 5;

// ? then comes a while loop, usually with a test expression that checks whether the counter has reached its end value

while (myLoop <= 25) {
  console.log(myLoop);

  // ? At the end of the loop body, the counter is updated to track progress
  myLoop = myLoop + 5;
}

// * the "for" loop - created as a shorter and more comprehensive form of the traditional while loops

for (let forLoop = 0; forLoop <= 12; forLoop = forLoop + 2) {
  console.log(forLoop);
}

// ! the only change is that statements that are related to the "state" of the loop are grouped together after "for"

/*
  ? 1st - Initializes 
  ? 2nd - Checks to see if the loop continues
  ? 3rd - updates after iteration
  ! shown again below with computing 2 to the 10th power
*/

let anotherResult = 1;

for (let counter = 0; counter < 10; counter = counter + 1) {
  anotherResult = anotherResult * 2;
}

console.log(result);    // -> 1024