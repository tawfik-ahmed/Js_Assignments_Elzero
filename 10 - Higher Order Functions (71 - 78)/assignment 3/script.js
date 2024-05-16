let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce((val, index) => val + index).split('').filter(ele => ele !== ',').join('');
console.log(result);
// Elzero