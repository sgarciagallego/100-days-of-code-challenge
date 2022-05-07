// Most functions are useful because of the "side effect" they produce

// * A "side effect" is the modification (change) of state through the invocation (calling) of a function or expression

console.log(Math.max(2, 4, 17, 8288));    // this function has a side effect of picking the greatest number of the group -> 8288

console.log(Math.min(2, 4) + 100);        // this function has a side effect of picking the smallest number of the group = 2 and adding 100 -> 102

// * when a function produces a value, it is said to "return" that value