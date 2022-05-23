// * Rest Parameters - help pass an infinite number of function arguments

function sum(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

sum(1, 2, 3, 4, 5, 6);    
// -> 1
// -> 2
// -> [3, 4, 5, 6]

/*
  ! Explanation of the above code

  ? a and b refer to 1 and 2
  ? the rest parameter (...rest) refers to everthing we passed after 1 and 2
  ? rest parameter is represented as an array [3, 4, 5, 6] when calling the function

  ! we essentially use the rest parameter to extract all the remaining values and place them in an array
*/