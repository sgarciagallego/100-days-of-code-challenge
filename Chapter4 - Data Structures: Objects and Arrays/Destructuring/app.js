// The Phi function seen in the Lycanthrope log

/*
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) * 
  (table[0] + table[1]) *
  (table[1] + table[3]) *
  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
*/

/*
  ! the above function is so hard to read as the binding is pointing to an array (seen in line 11)
  ! we would much rather prefer bindings for elements of an array (such as let n00 = table[0])

  * there is a way to do this in JavaScript, if you know the value of the binding is an array
*/

function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
  Math.sqrt((n10 + n11) * (n00 + n01) *
  (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1]));

// ! similar trick works for objects, using braces instead of square brackets

let {myName} = {
  myName: "Sergio",
  age: 18
};

console.log(myName);
