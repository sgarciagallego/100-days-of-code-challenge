//  * Callback Function - in a nutshell, a callback is a function that's passed into another function and is called inside that function for the purpose of completing some sort of routine or action

const button = document.querySelector("button");

function toggle() {
  button.classList.toggle("altColor");
}



/*
  ! Explanation of the above function

  ? Line 3 - setting a constant variable with the value of document.querySelector() which is a method that fetches a specific HTML element, in this case, the button seen in line 11 of our index.html
  ? Line 5 - creating a function called toggle which grabs the button element and toggles the class of "altColor" on the HTML element

  ! if you look at the browser with just the above function you will just see the original button with a yellow background, this is because the function toggle has not been called yet
*/

toggle();   // ! now the function has been called, the button turns red

// ? now we are going to look at how we can toggle the function when the button has been clicked - using a callback function to toggle the function when certain instances are met

button.addEventListener("click", toggle);

/*
  * Event Listener - a JavaScript function which waits for an event to occur

  ? Line 22 - button.addEventListener() adds some arguments inside the function parameters which are events to be met, the first parameter is what event takes place, and the 2nd parameter is the function or program that takes place when the event has been met
  ! the event listener waits for a click on the button to occur, and once met, toggles from yellow to red and vica versa, depending on the toggle state

  * the above code has the toggle function without parentheses, this is known as a callback function - a function within another function that is called inside that function to perform a task, in this case toggle colors
*/

