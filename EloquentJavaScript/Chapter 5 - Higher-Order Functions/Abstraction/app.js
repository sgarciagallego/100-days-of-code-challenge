// here are 2 example programs

// 1

let total = 0;
let count = 1;

while (count <= 10) {
  total += count;
  count += 1;   // adds 1 every iteration
}

console.log(total);

// 2 

console.log(sum(range(1, 10)));     
// -> relies on external functions

/* 
  ! 2 is easier than 1 as they're expressing simpler concepts than the program as a whole - but the program still has to be built beforehand
  * Abstractions - hide details and give us the ability to talk about problems at a higher level
  ? It is a skill in programming to realise you are working at too low a level of abstraction
*/