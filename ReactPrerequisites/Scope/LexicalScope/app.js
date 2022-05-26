/*
  * Lexical Scope - refers to the definition of things - anything related to creating words, expressions, or variables is termed lexical
  ! for instance: a scrabble game is a lexical activity because it relates to the creation of words

  * Lexical Scope in JavaScript - the definiton area of an expression, an item's lexical scope is the place in which the item got created
*/

// example below:

// define a variable in the global scope
const myAge = 18;

// call my variable from a function 
function getAge() {
  return myAge;
}

// TODO - Question: Which of the two spaces is myAge's lexical scope?
// ! Answer - the global scope as we defined myAge in the global environment

// ! IMPORTANT - only code within an item's lexical scope can access it