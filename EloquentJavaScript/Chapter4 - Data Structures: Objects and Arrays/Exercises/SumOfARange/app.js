/*
  TODO - Sum of a Range
  ? 1. Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

  ? i. As a bonus assignment, modify your range function to take an optional third argument that indicates the "step" value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

console.log(range(5, 7));

/*
  ! Explanation of the above code

  ? line 10 - creating a function "range" - with 3 parameters: "start", "end" and "step"
  ? line 10b - if "end" is true, then 1 is chosen, if false then -1 is chosen
  ? line 10c - think of the ternary operation occuring as an if else statement (seen below)
  if (start < end) {
    return 1;
  } else {
    return -1;
  }
  ? line 10d - start is equal to that ternary operation
  ? line 11 - creating a variable that grasps an empty array
  ? line 13 - if else statement = if step is greater than 0, then a for loop goes through
  ? line 14 - for loop 1st argument being creating a variable "i" grasping the value of start
  ? line 14b - 2nd argument (checking to see if loop continues) being if the variable "i" is less than or equal to end
  ? line 14c - 3rd argument (what happens with each iteration), the value of step is given to the value of "i"
  ? line 15 - array.push[i] = a new array element is appended to the array with the value of i
  ? line 16->19 - else statement = the above for loop is the same apart from the operation changing when checking to see if the loop continues "i >= end" instead of "i <= end"
  ? line 20 - the variable holding the array created is then returned once the for loops have finished their part of the program
*/

/*
  TODO - section 2

  ? 2. Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
  ? 3. Run the example program and see whether it does indeed return 55.
*/

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(sum(range(1, 10)));   // -> 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

