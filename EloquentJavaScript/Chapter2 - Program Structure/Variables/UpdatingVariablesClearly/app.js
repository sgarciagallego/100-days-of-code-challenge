// ! often when looping, a program needs to "update" a variable to hold a value based on the variable's previous value

let counter;
counter = counter + 1;

// * The "+=" - a shortcut for the above shown below:

counter += 1;

// ! Line 3 and 7 are the same thing

// * The "*= 2" - a shortcut to double value

// * The "-= 1" - a shortcut to count down by 1

// ! example below

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

/* 
  ? The code above counts the multiples of 2 up to 12
*/

// ! For variable += 1 and counter -= 1, there are even shorter equivalents: variable++ or variable--