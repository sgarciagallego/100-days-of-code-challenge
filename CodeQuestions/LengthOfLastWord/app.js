/*
  ! The Output

  Input: s = "Hello World"
  Output: 5
*/

var lengthOfLastWord = function(s) {
  const trim = s.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};