let theName = "Elzero";

console.log([...theName]);

console.log(Array.from(theName));

console.log(theName.split(''));

console.log([...theName].concat([]));

console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']