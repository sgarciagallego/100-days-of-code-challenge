// * find() method - will search inside of the array and return the first element for which the callback function returns a true value, if cannot find one, it will return undefined


// array of person names

const names = ["Sergio", "Abdul", "Said"];

// ! find() method in use

function findSergio(item, index, array) {
  return item == "Sergio";
}

const result = names.find(findSergio);
console.log(result);    // -> Sergio

// ------------------------

const personInfo = [
  {
    name: "Sergio",
    age: 18,
    height: "5'11"
  },
  {
    name: "Abdul",
    age: 19,
    height: "5'9"
  },
  {
    name: "Mateo",
    age: 16,
    height: "5'11"
  }
];


// ? find the person with the name "Mateo" and returns that person's name

function findMateo(nameItem) {
  return personInfo.find(nameItem);
}

console.log(findMateo("Mateo"));

