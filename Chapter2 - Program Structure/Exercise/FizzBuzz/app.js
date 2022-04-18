/*
  TODO - Write a program that uses console.log() to print all the numbers from 1 to 100, with two exceptions:
  ? For numbers divisible by 3, print "Fizz" instead of the number
  ? For numbers divisible by 5 (and not 3), print "Buzz" instead
  ? For numbers divisible by both 5 & 3, print "FizzBuzz" 
*/

// ! Solution 1 (first variable output excluded from loop)

let fizzBuzz = 1;
console.log(fizzBuzz);

while (fizzBuzz <= 100) {
  fizzBuzz = fizzBuzz + 1;
  if (fizzBuzz % 15 == 0) {
    console.log("FizzBuzz");
  } else if (fizzBuzz % 3 == 0) {
    console.log("Fizz");
  } else if (fizzBuzz % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(fizzBuzz);
  }
}

// ! Solution 2 (first variable output part of loop) - BETTER

for (let fizzBuzz = 1; fizzBuzz <= 100; fizzBuzz = fizzBuzz + 1) {
  if (fizzBuzz % 15 == 0) {
    console.log("FizzBuzz");
  } else if (fizzBuzz % 3 == 0) {
    console.log("Fizz");
  } else if (fizzBuzz % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(fizzBuzz);
  }
}

/*
  ! Explanation
  ? Line 28 - for loop (the first expression initialises the loop [by declaring a variable], the second expression checks whether the loop should continue, the third expression updates the state of the loop after every repetition/iteration)
  ? Line 29 - remainder (%) operator is an easy way of detecting whether a number is divisible by 15. IF IT IS, the remainder of their division i 0.
  ? Line 31 - checking to see whether the number outputted is divisible by 3. IF IT IS, the remainder of their division is 0.
  ? Line 33 - checking to see whether the number outputted is divisble by 5. IF IT IS, the remainder of their division is 0.
  ? Line 61 - at the end of the loop, if Fizz, Buzz, or FizzBuzz have not been outputted, the program outputs the variable containing the number count it's on.
*/