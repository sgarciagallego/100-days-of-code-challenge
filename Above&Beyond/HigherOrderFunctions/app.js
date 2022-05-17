// A more in-depth look into important Higher-Order Functions in JavaScript

/*
  * Higher-Order Functions do at least one of the following

  - takes one or more functions as an argument (parameter)
  - returns a functions as the value/result
*/

/*
  ! 4 WAYS FUNCTIONS ARE DATA IN JAVASCRIPT

  ? 1. => - function that takes or returns another function has become higher-order. It passes them to other functions

  ? 2. {} - Sets them as object properties, which makes them methods

  ? 3. [] - Store them in arrays, useful if calling a list of functions in response to an event

  ? 4. Setting functions as variables
*/


// ---------------------- 

// ! line 12 - used to import the data from this file

import { posts } from "./data.js";

// ----------------------

/*
  ! 1st Type of Higher-Order Function

  * forEach() - essentially replaces a for loop
*/

posts.forEach( post => {
  console.log(post);
});
console.clear();  // * console.clear() clears the console

// -> line 20-22 - a function which loops through all the data properties

// ---------------------

/*
  ! 2nd Type of Higher-Order Function

  * filter() - helps select specific data from results
*/

const filteredPosts = posts.filter(post => {
  return post.userId === 5;
});

console.log(filteredPosts);

// --------------------

/*
  ! 3rd Type of Higher-Order Functions

  * map() - lets you transform data in numerous ways
*/

const mappedPosts = filteredPosts.map(post => {
  return post.id * 10;
});

console.log(mappedPosts);

// ! line 66-70 - gets post id's from the function "filterPosts" and multiplies the id's value by 10

// --------------------

/*
  ! 4th Type of Higher-Order Functions

  * reduce() - computes a single value from the data given to it
*/

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducedPostsValue);

// lines 82-84 - adds all the values together from the array from mappedPosts

// -------------------

/*
  ! 5th Type of Higher-Order Function

  * Set() - 
*/