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







