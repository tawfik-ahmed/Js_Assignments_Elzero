let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter(ele => typeof ele === 'number').map(ele => -ele);
console.log(result);
// [-1, -10, 10, 20, -5, -3]