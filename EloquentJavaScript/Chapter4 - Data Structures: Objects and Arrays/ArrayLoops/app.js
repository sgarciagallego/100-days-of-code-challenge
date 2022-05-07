// in the Lycanthrope Log chapter, we see a function named "tableFor", where there is a loop like this:

for (let i =0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // do something with entry
}

// ! there is a simple way to do the above

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

// * when a for loop looks like the above, with the word of after a variable definition, it will loop over the elements of the value given after of

