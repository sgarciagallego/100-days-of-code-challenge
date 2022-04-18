// the following code is allowed and therefore executes with no problems
// ? but why

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));   // -> 16

/*
  ! Explanation for the above code
  ? Line 4 - we defined the function "square" with only one parameter "x"
  ? Line 5 - tried to log to console with 3 parameters and still runs correctly
  ! JavaScript will ignore the extra parameters and computes the function of the invoked parameter

  ! if you pass to many parameters, it will 
*/
