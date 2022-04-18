// * Looping control flow (loop) -> allows us to go back to some point in the program where we were before and repeat it with the current program state

let number = 0;           // stores the number 0 in the variable "number"

while (number <= 12) {    // while the variable number is less than or equal to 12
  console.log(number);
  number = number + 2;    // output the variable number + 2 until you reach less than or equal to 12
}

// ! the output for the above program goes something like this: -> 0 -> 2 -> 4 -> 6.. -> 12

// the following program calculates and shows the value of 2 of the 10th power.

let result = 1;
let counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);      // this will only display the final result in the browser console -> 1024