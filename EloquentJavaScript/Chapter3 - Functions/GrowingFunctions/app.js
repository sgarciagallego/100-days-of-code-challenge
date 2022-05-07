// how difficult it is to find a good name for a function is a good indication of how clear a concept it is you're trying to wrap

/*
  here is a program that prints 2 numbers: 
    - the number of cows and chickens on a farm, with the name "Cows" and "Chickens" after them
    - zeros padded before both numbers so that they are always 3 digits long
*/

function printFarmInv (Cows, Chickens, Pigs) {
  let cowString = String(Cows); 
  let chickenString = String(Chickens); 
  let pigString = String(Pigs);

  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  while (pigString.length < 3) {
    pigString = "0" + pigString;
  }
  
  console.log(`${cowString} Cows`);
  console.log(`${chickenString} Chickens`);
  console.log(`${pigString} Pigs`);
}

printFarmInv(7, 11, 117);

/*
  -> 007 Cows
  -> 011 Chickens
  -> 117 Pigs
*/

// * string_expression.length will give us the length of that string

// ! RULE OF THUMB - not to add cleverness to your code unless you're absolutely sure you're going to need it