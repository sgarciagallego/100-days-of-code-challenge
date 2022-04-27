// * Objects - values of this type are collections of properties (example below)

let dayOne = {
  productive: true,
  events: ["morning routine", "have breakfast", "pack for work", "travel to British Library", "work remote from British Library"]
};

console.log(dayOne.productive);   // -> true
console.log(dayOne.exercise);   // -> undefined

// ! reading a property that doesn't exist will give you the value undefined (seen on line 9)

dayOne.exercise = "TBC";

console.log(dayOne.exercise);   // -> TBC

// * Properties whose names are not valid binding names or valid numbers have to be quotes

let desc = {
  work: "Purple Beard Training ltd.",
  "transport to work": "via bike"
};

// ! It is possible to assign a value to an existing property with the = operator, which will replace the property's value if it already existed (seen on line 26)

dayOne.exercise = true;

console.log(dayOne.exercise);   // -> converted from "TBC" string to true boolean

// * Property Bindings - Same idea as original variables/bindings, as they grasp values onto them

// * Objects Analogy - can be seen as an octupus with limitless numbers of tentacles, the tentacles being the properties within the objects

let anObject = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3,
};

// * The "delete" operator (unary) cuts off a tentacle from such an octupus (see above if confused for analogy)

console.log(anObject);    // -> 0 1 2 3 (just values of properties)

delete anObject.top;    // -> deltes the top property from the object

console.log(anObject);    // -> 1 2 3 (deleted top: 0)

// * the binary "in" operator, when applied to an object and a string, tells you whether that object has a property with that name 

// * Object.keys function - to find out what properties an object has

console.log(Object.keys({x: 0, y: 0, z: 2}));
// -> ["x", "y", "z"]

// ! as you can see (line 53), when you give it an object, it returns an array of strings - which are the object's property names