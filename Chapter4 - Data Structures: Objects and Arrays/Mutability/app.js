// * Objects are mutable - their properties can be changed

let objectOne = {value: 10};
let objectTwo = objectOne;
let objectThree = {value: 10};

console.log(objectOne == objectTwo);    // -> true
console.log(objectTwo == objectThree);  // -> false

// ! although the property name "value" has the same values (10), they are not equal to eachother

objectOne.value = 15;

console.log(objectTwo.value);   // -> 15 as objectTwo is equal to objectOne

console.log(objectThree.value); // -> 10 as objectThree has not been changed and it's property values remain the same

// ! regardless of the variable type (const or var), you can still change the properties inside an object grasped to that variable (const or var)

const score = {visitors: 0, home: 0};

console.log(score.visitors);

score.visitors = 1;

console.log(score.visitors);