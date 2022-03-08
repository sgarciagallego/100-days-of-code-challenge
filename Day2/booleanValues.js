// Booleans have two values - TRUE or FALSE

console.log(3 > 2);       // 3 is greater than 2 -> TRUE
console.log(3 < 2);       // 3 is less than 2 -> FALSE

console.log("Adam" < "Zara");   // uppercase A is less than uppercase Z (when comparing strings, JavaScript  goes over characters LEFT TO RIGHT) -> TRUE

console.log("Adam" <= "Zara");  // Adam is less than or equal to (<=) Zara -> TRUE
console.log("Adam" == "Zara");  // Adam is equal to (==) Zara -> FALSE
console.log("Adam" >= "Zara");  // Adam is greater than or equal to (>=) Zara -> FALSE

console.log("NaN" == "NaN");    // NaN is never equal to NaN

console.log(true && false);     // && means "and" in JavaScript, both values must be true otherwise operation passes as false -> FALSE
console.log(true || false);     // || means "or" in JavaScript, at least one value must be true for operation to pass as true ->TRUE
console.log(true ? 1 : 2);      // value on left "picks" which of the other 2 values will come out, when TRUE, chooses the middle value and when false, chooses the value on the right -> 1
console.log(false ? 1 : 2);     // -> 2

console.log(1 + 1 == 2 && 10 * 10 > 50);    // 1 + 1 equals to 2 and 10 * 10 (100) > 50 -> TRUE
