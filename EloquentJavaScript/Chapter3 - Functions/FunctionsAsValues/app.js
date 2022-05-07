/*
  ! A function binding usually just acts as a name for a specific piece of program 
  ! This makes it easy to confuse the function and it's name
*/

// ! a binding/variable that holds a function is still just a regular function, and if not constant, can be assigned to a new value
// example below

let launchMissiles = function() {
  missileSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}