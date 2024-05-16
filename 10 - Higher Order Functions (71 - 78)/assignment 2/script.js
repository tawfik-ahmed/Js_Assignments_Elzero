let myString = "EElllzzzzzzzeroo";

let result = myString.split('').filter((ele, i, arr) => ele != arr[i - 1]).join('');
console.log(result);
// Elzero