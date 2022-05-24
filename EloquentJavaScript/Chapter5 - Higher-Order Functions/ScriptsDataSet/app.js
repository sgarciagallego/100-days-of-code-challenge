import { posts } from "./data.js";

// ! higher-order functions shine with data processing

// * forEach() - essentially replaces a for loop

const numbers = [1, 2, 3, 4, 5];

// for loop alternative
for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach() alernative
numbers.forEach(i => {
  console.log(i);
});

// using the data set imported

posts.forEach(function (posts) {
  console.log(posts);
});
