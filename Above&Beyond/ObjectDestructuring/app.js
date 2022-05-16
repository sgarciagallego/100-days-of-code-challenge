// creating some objects

const userOne = {
  name: "Sergio",
  age: 18,
  favouriteFood: "Mustard & Lemon Chicken",
  address: {
    house_number: 160,
    street_name: "Welling Way",
    city: "London"
  }
};

const userTwo = {
  name: "Stefania",
  age: 19,
  address: {
    house_number: 29,
    street_name: "Plough Road",
    city: "Peterborough"
  }
};

// ! getting the name and age of the objects above

const { name, age } = userTwo;

console.log(name);    // -> Stefania
console.log(age);     // -> 19

// ! setting object properties name to something else

const { name: userOneName, age: userOneAge } = userOne;

console.log(userOneName);   // -> Sergio
console.log(userOneAge);  // -> 18

// ! adding another property name and value 

const { favouriteFood = "Tajini" } = userOne; 

console.log(favouriteFood);

// ? DID YOU KNOW: you cannot change the object property values if they are already declared but you can add new properties with new values 

// ! you can also destructure nested objects (seen from line 7-11 and line 17-21)

const { name: userTwoName, address: { street_name }} = userTwo;

console.log(userTwoName);   // -> Stefania
console.log(street_name);   // -> Plough Road


const userThree = {
  firstName: "Abdul",
  lastName: "Jimie"
};

const userFour = {
  address: {
    borough: "Bexley"
  }
};

function printUser(user) {
  console.log(`First Name: ${user.firstName}\nLast Name: ${user.lastName}`);
}

printUser(userThree);

function printSimpleUser({firstName, lastName}) {
  console.log(`${firstName}'s last name is ${lastName}.`);
}

printSimpleUser(userThree);