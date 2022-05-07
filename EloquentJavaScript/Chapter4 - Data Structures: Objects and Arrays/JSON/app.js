// * Serialization - converting data objects (which are essentially a combination of code and data represented within a region of data storage) into a series of bytes that saves the state of the object in an easily transmittable form

/*
  * JSON (JavaScript Object Notation) - a serialization format used as a data storage and communication format on the web
  ! JSON looks similar to JavaScript's way of writing arrays and objects - WITH SOME RESTRICTIONS

  ? Property names have to be surrounded by double quotes
  ? only simple data expressions are allowed - NO FUNCTION CALLS, BINDINGS, OR ANYTHING THAT INVOLVES COMPUTATION
  ? comments are not allowed

  example of a Lycanthrope journal entry in JSON seen in this folder under file extension JSON
*/

/*
  ! JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format
*/

// * JSON.stringify - takes a JavaScript value and returns a JSON-encoded string

let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);    // -> {squirrel: false, events: ["weekend"]}

// * JSON.parse - takes the string and converts it to the value it encodes

console.log(JSON.parse(string).events);     // -> ["weekend"]
console.log(JSON.parse(string).squirrel);   // -> false