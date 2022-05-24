const nameList = ["John", "Susy", "Sergio"];

function randomNames(names, ...myName) {
  return console.log(myName);
}

randomNames("Sergio", "Toby", "John");

// ! here is an arrow function

let randomNameList = () => {
  return nameList.join(", ");
};

console.log(randomNameList());

