// ! having the looping condition produce false is not the only way to break out a loop

// * "break" statement - has the effect of immediately breaking out of the enclosing loop

// TODO - Using the for loop

for (let current = 20; ; current = current + 1) {
  if (current % 7  == 0) {
    console.log(current);
    break;
  }
}

// TODO - using the while loop

let anotherCurrent = 20;

while (anotherCurrent = anotherCurrent + 1) {
  if (anotherCurrent % 7 == 0) {
    console.log(anotherCurrent);
    break;
  }
}

/*
  ! Explanation of the above code
  ? Line 19 - Using the % operator is an easy way to test whether a number is divisible by another number, if it is; the remainder of their division is zero
  ? Line 21 - If the break statement was not used in this program then the loop will continue finding the numbers divisible by 7 with a remainder of 0 
  ! continuation - it will also probably crash your PC
*/

// * continue statement - influences the the progress of a loop, meaning it control jumps out of the body with the loop's next iteration