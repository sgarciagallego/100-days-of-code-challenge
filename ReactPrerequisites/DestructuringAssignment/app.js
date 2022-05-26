// ? one of the most useful new syntax introduced in ES6 - destructuring assignment is simply coputing a part of object or array and putting them into named variables:

const objSnippet = {
  firstName: 'Sergio',
  lastName: 'Garcia Gallego',
  dev: true,
  age: 25
};

// destructure objSnippet
const { firstName, lastName } = objSnippet;

console.log(firstName);   // -> Sergio
console.log(lastName);    // -> Garcia Gallego
// console.log(dev);         // -> dev is not defined (look at line 11)

/*
  ! Explanation

  ? we assigned firstName and lastName from the objSnippet object into a new variable firstName and lastName
*/

// now if we want to put firstName into a new variable called name

const { firstName:name } = objSnippet;

console.log(name);    // -> Sergio






