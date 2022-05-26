// * Scope Chain - refers to the unique spaces that exist from the scope where a variable got called to the global scope

// an example

// define a variable in the global scope
const fullName = "Sergio Garcia";

// define nested functions
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

/* 
  ! In the snippet above, observe that the fullName variable got called from the writeName() function's scope
  ? therefore, the scope chain that exists from the variable's call to the global scope is:
  writeName() scope --> sayName() scope --> profile() scope --> global scope

  * Invocation Scope - where a particular variable is invoked (called on)
  ! there are 4 spaces from fullName's invocation scope to its lexical scope (the global scope in this instance)
*/

// TODO - Practice Time!

// which of the three fullName variables will the computer call:

const myName = "Sergio Garcia";

function profile() {
  const myName = "Robert Downey Jr";
  function sayName() {
    // ! this is the one that it calls
    const myName = "Enrique Iglesias";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}