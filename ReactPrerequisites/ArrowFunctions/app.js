/*
  * Arrow Functions - write functions using shorter syntax, allowing code to keep more concise and readable

  ! Difference from Normal Functions
  ? remove the function keyword
  ? add the fat arrow symbol after ()
  ? add a ; in the closing curly braces

  as seen below
*/

const testFunction = (firstName, lastName) => {
  return firstName+' '+lastName;
};

const singleParam = firstName => {
  return firstName;
};

// * Implicit Return - if your arrow function is only one line, you can return values without having to use the return keyword and the curly braces {}

const anotherTestFunction = () => 'hello there.';
console.log(anotherTestFunction());

// TODO - Using in React

// another way to create a React component is to use arrow function. React takes arrow functions.

// !
// const HelloWorld = (props) => {
//   return <h1>{props.hello}</h1>;
// };

// which is equivalent to:

// !
// class HelloWorld extends Component {
//   render() {
//     return (
//       <h1>{props.hello}</h1>;
//     );
//   }
// }
