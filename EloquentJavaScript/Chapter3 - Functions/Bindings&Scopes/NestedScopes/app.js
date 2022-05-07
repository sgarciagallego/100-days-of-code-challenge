/*
  * blocks and functions can be created inside other blocks and functions
  ! this creates multiple levels of locality
*/

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeas");
};


/*
  TODO - Explanation for the above code
  ! Line 6 - declaring a fixed variable with the value of the function with the parameter factor
  ! Line 7 - inside the function delcared above, declaring another fixed variable with the value of of another function with the parameters amount, unit, name
  ! Line 8 - assigning a new variable named ingredientAmount with the value of factor * amount
  ! Line 9 - creating an if statement inside the function assigned to the variable ingredient stating if ingredientAmount is more than 1 then unit will be assigned the new value of the string "s"
  ! Line 12 - outside of the if statement, inside the function assigned to ingredient, logging to console a template literal combining the variable ingredientAmount with the unit parameter and lastly the name parameter, last 2 are function parameters
*/

// * Lexical Scoping - a variable defined outside a function can be accessible inside another function defined after the variable declaration