// * Values are essentially large chunks of bits

// * Numbers are numeric values

// * adding an e to a number will add an exponent 
console.log(2.998e8); // 299800000 (2.998 * 10^8)

// * "Infinity" & "-Infinity" represent positive and negative infinities
console.log(Infinity + -Infinity); // NaN (cannot be comprehended by JavaScript - not a number)

// * Operators are symbols such as "*" and "/"
console.log(8 / 2); // 4 ("/" is the operator for division)
console.log(8 * 2); // 16 ("*" is the operator for multiplication)
console.log(11 % 3); // 2 (8/3 = 3 with a remainder of "2")

// * When operators appear together WITHOUT parentheses, the order they are calculated has to do with their "precedence"
console.log(3 * 2 / 3); // 2 as they go in order of their precedence
console.log(3 * 4 / (2 + 2)); // 2 + 2 is calculated first

// * Unary Operator - 1 value
// * Binary Operator - 2 values
// * Ternary/Conditional Operator - 3 values

// * typeof produced a string value naming the data type you give it
console.log(typeof "hello");  // string
console.log(typeof 3.998);    // number
console.log(typeof true);     // boolean

// * Strings represent text
console.log("This is a string");
console.log('This is also a string');
console.log(`This is also a string wrapped within a template literal`);

console.log("I am adding a\tBIG WHITESPACE"); // \t is a tab
console.log('I am adding a\nNEWLINE');  // \n is newline

// * String can be used with the addition operator to concatenate
console.log("Hello" + "," + " " + "World" + "!");

// * Variables are storage for values you give it
let myName = "Sergio";    // get used to using camelCase
console.log("Hello" + "," + " " + `${myName}` + "!");     // a "${}" while have a variable inside it, which it converts to a string within a template literal

// * A boolean has 2 values "true" and "false"
console.log("Alpha" > "Zeta");  // false as alphabet is read from right to left in JavaScript
console.log(10 < 100);  // true as 100 is greater than 10

console.log(1 >= 1);  // true -> 1 is greater than or equal to 1
console.log(10 <= 10); // true -> 10 is less than or equal to 10
console.log(100 == 101);  // false -> 100 is equal to 101 is wrong
console.log(101 != 100);  // true -> 101 is not equal to 100 is right
console.log(NaN == NaN);  // false -> NaN is not a number therefore is not equal to anything

// * && represents the logical "and", it's a binary operator and returns a true statement only if both values are true
console.log(true && true);    // true
console.log(true && false);   // false

// * the ! represents the logical "not", it's a unary operator and it flips the value given to it
console.log(!true);   // false
console.log(!false);  // true

// * || represents the logical "or", it's a binary operator which returns true if at least one of the values are true
console.log(3 > 1 || 5 < 4);  // true as 3 is greater than 1
console.log(true || false);   // true 
console.log(false || false);  // false

// * the ? represents the conditional operator, which is the only ternary operator, and as a result takes 3 operands: a condition, followed by a colon (:), and finaly the expression to execute if the condition is falsy.
console.log(true ? 1 : 2);  // 1 -> when the condition (true) is in fact true, it will designate the value to the left of the expression (1 : 2)
console.log(false ? 1 : 2); // 2 -> when the condition (false) is in fact false, it will designate the value to the right of the expression (1 : 2)

// * Empty values such as "null" and "undefined" are used to denote the absence of meaningful value (as a result they contain no values)
console.log(undefined);   // undefined
console.log(null);        // null

// * Automatic Type Conversion means that when an operator is applies to the wrong type of value, JavaScript will computate it in a way to make it run
console.log("5" + 5);   // 55 -> automatic type conversion
console.log(5 * "5");   // 25
console.log(null * 8);  // 0 as null has no value
console.log("5" - 1);   // 4
console.log("five" * 5);  // NaN as "five" is a string with no numeric values