/*
  TODO - Steps to make ice-cream

  ? 1. place order
  ? 2. cut the fruit
  ? 3. add water and ice
  ? 4. start the machine
  ? 5. select container
  ? 6. select toppings
  ? 7. serve ice-cream
*/

// ! we have to store our ingredients in the back-end --> inside an object

let stock = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

// ! the entire business depends on what a customer orders, so once an order has been made, production starts and we server the ice-cream, two functions will be created for this

/*
  ! The Order

  ? 1. order from customer
  ? 2. fetch ingredients
  ? 3. start production
  ? 4. serve
*/

/*
  ! Steps and Time which will take to execute

  ? 1. place order -> 2s
  ? 2. cut the fruit -> 2s
  ? 3. add water and ice -> 1s
  ? 4. start the machine -> 1s
  ? 5. select container -> 2s
  ? 6. select toppings -> 3s
  ? 7. server ice-cream -> 2s
*/

/*
  * The setTimeout() Syntax

  setTimeout( () => {}, 1000 ); 

  ! -> setTimeout declared, which then calls a function (callback), followed by setting the time in milliseconds
*/

// function 1
let order = (fruitName, callProduction) => {
  setTimeout(function() {
    console.log(`${stock.fruits[0]} was selected.`);

    // order placed, call production to start
    callProduction();
  }, 2000);
};

// function two
let production = () => {};


// trigger
order(0, production);