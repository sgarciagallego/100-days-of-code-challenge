// creating a journal

let lycanthropeJournal = [];

function addJournalEntry(events, squirrel) {
  lycanthropeJournal.push({events, squirrel});
}

// ! No property values inside the object in braces {}, just property names

// * If the property name in brace notation {} isn't followed by a value, its value is taken from the binding with the same name 

// ? every evening at 10PM - or sometimes the next morning, after climbing down from the top shelf of his bookcase - Jacques records the day

addJournalEntry([
  "work",
  "touched tree",
  "pizza",
  "running",
  "television"
], false);

addJournalEntry([
  "work",
  "ice cream",
  "cauliflower",
  "lasagna",
  "touched tree",
  "brushed tree",
], false);

addJournalEntry([
  "weekend",
  "cycling",
  "break",
  "peanuts",
  "beer"
], true);

// ? once he has enough data points, he intends to use statistics to find out which of these events may be related to the squirrelifications

// * Correlation - a measure of dependence between statistical variables (correlation between variables is usually expressed as a value that ranges from -1 to 1)

/*
  * Variable Correlation Scale
  ! 0 - means the variables are not related
  ! 1 - means the variables are perfectly related
  ! -1 - means the variables are perfectly related but that they are opposites -> when one is true, the other is false
*/

// * Phi Coefficient (Φ) - compute the measure of correlation between two Boolean variables

// creating a visual frequency table for the information suitable to the Lycanthrope

/*
  ! 90 observations
  76 times - no squirrel, no pizza
  9 times - no squirrel, pizza
  4 times - squirrel, no pizza
  1 times - squirrel, pizza

  ! How Pizzas and Squirrels are related
  n00 - no squirrel or pizza (1)
  n01 - no squirrel, pizza (2)
  n10 - squirrel, no pizza
  n11 - squirrel, pizza

  ! What the above means
  n_1: pizza
  n1_: squirrel
  n_0: no pizza
  n0_: no squirrel

  ! now, this
  n0. - all measurements with no squirrel
  n.0 - all measurements with no pizza
  n1. - all measurements with squirrel
  n.1 - all measurements with pizza

  ! Which ones are thr variables
  squirrel and pizza
  if variable is false: 0
  if the variable is true: 1
*/

// ! we can represent a 2-by-2 table in JavaScript with a four element array [76, 9, 4, 1]

// function that computes the phi coefficient from the array seen above

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) / 
  Math.sqrt((table[2] + table[3]) *
  (table[0] + table[1]) *
  (table[1] + table[3]) *
  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));  // -> 0.068599434057...

// * Math.sqrt - the square root function

/*
  ! Explanation of the above function and how it finds the variable correlation

  ? Line 90 - defining a function called "phi" with 1 parameter: "table"
  ? Line 91->95 - placing the mathematical equation of the phi coefficient into JavaScript (seen in the HTML page if you load into live server)
  ? Line 98 - fetching the 2-by-2 table example data and placing it into the four element array
*/

// ! to extract a two-by-two table from a specific event from the journal, we must loop over all the entries and tally how many times the event occurs

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {

    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));

// * "includes" method (line 117) - checks whether a given value exists in the array

/*
  ! explanation of the above code
  ? line 112 - creating a function called "tableFor" with 2 parameters: event & journal
  ? line 113 - creating a variable called table with an array of 4 items
  ? line 114 - for loop, creating a variabled called i, if i is less than the length of whatever the string value of journal is, then the value of i will increment by 1
  ? line 116 - creating a variable called entry and assigning it the value of the 2nd array item of journal and also creating another variable which is assigned the number value of 0
  ? line 117 - if statement = if the value assigned to entry is included in the value of events, the value of index will equal 1
*/
