// strings represent text

alert("Hello, World!");
alert('Hello, World!');
alert(`Hello, World!`);

// adding newlines with ENTER (MUST USE BACKTICKS [``])

alert(`Hello,
World!`);

alert("Hello,\nWorld!");    // adding newlines with \n for other quotation marks
alert('Hello,\nWorld!');    // adding newlines with \n for other quotation marks

alert("Hello,\tWorld!");    // adding tabs with \t
alert('Hello,\tWorld!');    // adding tabs with \t
alert(`Hello,\tWorld!`);    // adding tabs with \t


alert("Hello\"\\n\".");     // in the rare case of you wanting a backslash in your code

// unicode for "a" is 0*0410 in 16 bit blocks

// the only operator allowed to be used on strings is addition (+)

alert("Hello," + " World" + "!");   // has concatenated the strings 

alert(`Half of 100 is ${100 / 2}`); // backticks can embed other values




