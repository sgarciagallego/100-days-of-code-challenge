// ! to write something a given number of times

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ! we can abstract "doing something N times" as a function like this:

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

repeatLog(5);   // -> 0, 1, 2, 3, 4

// ! if we want to do something other than console logging the functions

function repeat(n, action) {
  for (let i = 0; i <= n; i++) {
    action(i);
  }
}

repeat(3, console.log);   // -> 0, 1, 2, 3

// ! you don't have to pass a predefined value to repeat, you can also create a function value on the spot

let labels = [];

repeat(2, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);  // -> ["Unit 1", "Unit 2", "Unit 3"]