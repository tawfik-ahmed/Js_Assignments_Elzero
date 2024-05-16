// Add Variables Here

const numberOne = 10;
const numberTwo = 20;

// Ouput
console.log(10 + '' + 20); // Normal Concatenate => 1020
console.log(typeof 10 + '' + 20); // Normal Concatenate => String
console.log(`1020`); // Template Literals Way => 1020
console.log(typeof `1020`); // Template Literals Way => String

console.log(20 + '\n' + 10);
/*
  Normal Concatenate
  20
  10
*/

console.log(`20
10`);
/*
  Template Literals Way
  20
  10
*/