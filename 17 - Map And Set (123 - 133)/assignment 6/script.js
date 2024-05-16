let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let arrayOfNumbers = chars.filter(e => typeof e === "number");

let arrayOfLitters = chars.filter(e => typeof e === "string");

let concatArray = arrayOfNumbers.concat(arrayOfLitters);

let firstChar = concatArray.findIndex(e => typeof e === "string");

console.log(concatArray.copyWithin(0, firstChar, firstChar + arrayOfNumbers.length));

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']