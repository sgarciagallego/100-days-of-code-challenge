// * The "switch" statement - can replace multiple if checks - it gives a more descriptive way to compare a value with multiple variants

// ! in JavaScript, the "switch" statement is somewhat awkward, and a chain of if statements may look better

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella");
    break;
  case "sunny":
    console.log("Remember to bring some sunglasses");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

/*
  ! Brief explanation of the above
  ? think of it like an if statement followed by else if statements followed by a final else statement
*/