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

  setTimeout( () => {
    -> code here
  }, 1000 ); 

  ! -> setTimeout declared, which then calls a function (callback), followed by setting the time in milliseconds
*/

// function 1
let order = (fruitName, callProduction) => {
  setTimeout(function() {
    console.log(`A ${stock.fruits[0]} was selected.`);

    // order placed, call production to start
    callProduction();
  }, 2000);
};

// function 2
let production = () => {
  setTimeout(() => {
    console.log("The production has started.");
    setTimeout(() =>{
      console.log("The fruit has been chopped.");
      setTimeout(() => {
        console.log(`The ${stock.liquid[0]} and ${stock.liquid[1]} has been added.`);
        setTimeout(() => {
          console.log("The machine has started.");
          setTimeout(() => {
            console.log(`The ice-cream has been placed on a ${stock.holder[1]}.`);
            setTimeout(() => {
              console.log(`Some ${stock.toppings[0]} and ${stock.toppings[1]} have been selected.`);
              setTimeout(() => {
                console.log("The ice-cream has been served successfully!");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};


// trigger
order(0, production);

/*
  ! what we see from lines 65-88 is known as callback hell, and is highly messy
  ? however, we do have a solution to this:

  TODO - Using Promises
  * Promises - a JavaScript object that links producing code and consuming code

  ! a promise has 3 states
  - Pending = initial stage. Nothing happens here. Think of it like this: your customer is taking time to order, but has not yet ordered anything
  - Resolved = the customer has received the food and is happy
  - Rejected = customer didn't received their order and left the restaurant
  ? look at the diagram on the HTML document

  ! we need to understand the following first
  - relationship between time and work
  - promise chaining
  - error handling
  - the .finally handler 
*/

/*
  TODO - Relationship between Time and Work

  ! Steps and Time which will take to execute

  ? 1. place order -> 2s
  ? 2. cut the fruit -> 2s
  ? 3. add water and ice -> 1s
  ? 4. start the machine -> 1s
  ? 5. select container -> 2s
  ? 6. select toppings -> 3s
  ? 7. server ice-cream -> 2s
*/

// for this to happen, let's create a variable in JavaScript

let is_shop_open = false;

let promiseOrder = (time, work) => {

  // making a promise to customer "We will serve your ice-cream"
  return new Promise((resolve, reject) => {
    // * resolve = ice-cream delivered
    // * reject = customer didn't get ice-cream

    if(is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed."));
    }
  });
};

// first task (original promise)
promiseOrder(2000, () => console.log(`A ${stock.fruits[0]} was selected.`))

// * .then() in Promise Chaining - returns a promise when our original promise (first task) is resolved (which is in line 150)

// second task
.then(() => {
  return promiseOrder(0, () => console.log("The production has started."));
})
.then(() => {
  return promiseOrder(2000, () => console.log("The fruit has been chopped."));
})
.then(() => {
  return promiseOrder(1000, () => console.log(`The ${stock.liquid[0]} and ${stock.liquid[1]} has been added.`));
})
.then(() => {
  return promiseOrder(1000, () => console.log("The machine has started."));
})
.then(() => {
  return promiseOrder(2000, () => console.log(`The ice-cream has been placed on a ${stock.holder[1]}.`));
})
.then(() => {
  return promiseOrder(3000, () => console.log(`Some ${stock.toppings[0]} and ${stock.toppings[1]} have been selected.`));
})
.then(() => {
  return promiseOrder(2000, () => console.log("The ice-cream has been served successfully."));
})

/*
  ! to catch our errors, let's change our variable to false (line 130)
  * catch() handler - returns a promise, but only when our original promise from .then() was rejected
*/

.catch(() => {
  console.log("The customer has left.");

  // our shop has closed (rejection from else statement in line 144)
  // the customer has left (catch handler from here)
})

// * finally() handler - works regardless of whether our promise was resolved or rejected

.finally(() => {
  console.log("It has reached the end of the day.");

  // it has reached the end of the day (finally handler from here)
});

// TODO - async/await in JavaScript

// ! before async/await, to make a promise we wrote this:

// function order() {
  // return new Promise((resolve, reject) => {
      // write code here
  // });
// }

// ! no using async/await, we write one like this:

async function asyncOrder() {
  // write code here
}

/*
  ! we have to understand try and catch properly first
  TODO - Using Try and Catch Keywords

  * try - used to run our code
  * catch - used to catch errors
*/

// this is using async/await, instead of resolve/reject

async function kitchen() {
  try{
    // fake problem
    await abc;
  }
  catch(err) {
    console.log("abc does not exist.", err);
  }
  finally{
    console.log("runs code anyways.");
  }
}

kitchen();    // run the code

/*
  TODO - Await in JavaScript

  * await - makes a JavaScript wait until a promise settles and returns its result
*/