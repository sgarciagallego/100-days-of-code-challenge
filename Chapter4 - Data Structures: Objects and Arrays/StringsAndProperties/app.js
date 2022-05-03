// ? we can read properties like "length" and "toUpperCase" from string values, but when you try to add a new property, it doesn't stick

let sergio = "Sergio";
sergio.age = "88";

console.log(sergio.age);    // -> undefined

// ! string, number and boolean value types are not objects, and even though JavaScript doesn't complain when you try and set new values on them, it doesn't actually store the properties - they're IMMUTABLE

// * string number and booleans do have built-in properties such as slice and indexOf

console.log("coconuts".slice(4, 7));    // -> nut
console.log("coconuts".indexOf("n"));   // -> 4

// ! a string's indexOf can search for a string containing more than one character whereas the array method can only search for one 

console.log("hello there my friendliness".indexOf("ll"));    // -> 2 (2 l's are found in position 2)

// * .trim string method - removes whitespace from the start and end of a string

console.log("marshmallows \n\n".trim());    // -> marshmallows (without the newlines)

// * .padStart - takes 2 arguments, the desired length and padding characters and prepends it to the string

console.log(String(7).padStart(3, "0"));    // -> 007
