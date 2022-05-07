// ! You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

console.log("string"[3]);   // "s" is position 0, "g" is position 5

console.log("string".length); // -> 6

// TODO - Write a function "countBs" that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string

// function countChar taking 2 parameters, 1 the target word being checked for specific characters, the other the character being checked for in the first parameter
function countChar(string, ch) {
  // create a variable tracking the number of wanted characters
  let charTracker = 0;

  // for loop - ensuring the entirety of the characters are checked
  for (let char = 0; char < string.length; char++) {
    // if statetement - if the target word at the specific position within the string is equal to the character being checked for
    if (string[char] == ch) {
      // charTracker (the character counter) gets updated adding 1
      charTracker += 1;
    }
  }
  // once the string has been looped through, the counter gets outputted
  return charTracker;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("Bottom"));   // -> 1
console.log(countChar("monstermouse", "m"));  // -> 2