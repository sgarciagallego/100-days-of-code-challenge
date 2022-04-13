/*
  TODO - Write a program that creates a string that represents an 8x8 grid, using a new line character to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboar
  ? Should look something like this
  ->  # # # #
  -> # # # # 
  ->  # # # #
  -> # # # # 
  ->  # # # #
  -> # # # #
  ->  # # # #
  -> # # # # 
*/

alert("Write a program that creates a string that represents an 8x8 grid, using a new line character to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard");

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

/*
  ! Explanation of Code Above
  ? Line 16 - declaring the variable size with the number type: 8
  ? Line 17 - declaring the variable board with an empty string

  ? Line 19 - for loop creating the y axis (vertical axis), linking y axis to the variable "size" stating that if y is less than the value of size, then the y axis will increment by 1
  ? Line 20 - for loop creating the x axis (horizontal axis), linking the x axis to the variable "size" stating that if x is less than the value of size, then the x axis will increment by 1
  ? Line 21 - adding the values within both variables "x" and "y" within an if statement, and if they are divisible by 2 we follow onto line 22, if not follow to line 24
  ? Line 22 - if line 21 passes as true, the value of board will increment by 1 whitespace
  ? Line 24 - if line 21 passes as false, the value of board will be given one #
  ? for loop for x axis - once the loop finishes and passes, we move to line 27
  ? Line 27 - outside of the x axis loop (horizontal axis), once the the size of x is equal to 8, a new line is added and the x axis loop restarts until y axis reaches 8 lines
  ? Line 30 - the board variable is logged to the console
*/