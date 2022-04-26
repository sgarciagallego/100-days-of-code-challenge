/*
  * Properties - values associated with a JavaScript object
  ! almost all JavaScript values have properties. Exceptions are null and undefined
*/

// * Object - containers for named values called properties

// null.length; -> Uncaught TypeError - null has no properties

/*
  ? ways to access JavaScript properties include with a dot "." and with square brackets "[]"
  ! value.x and value[x] both access a property on value, but not the same property, difference is the interpretation of x

  * using a dot (e.g. something.x) is calling the property name

  * using square brackets (e.g. something[x]) is evaluating inside the brackets to get a property name

  ! Property names are strings
*/

let nameList = ["John Doe", "Lisa Turner", "Ryan Gosling", "John Terry"];

console.log(nameList[2]);   // evaluating the value inside square brackets to get a property name -> Ryan Gosling

console.log(nameList[2].length);    // the property name being "length" which catches the length of the value, in this case "Ryan Gosling" -> 12

console.log(nameList.length); // the property name being "length", which catches the length of the value, in this case the arrays held in the variable "nameList" -> 4