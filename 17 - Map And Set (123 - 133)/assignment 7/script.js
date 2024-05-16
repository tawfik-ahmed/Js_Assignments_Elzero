let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let resArray = numsOne.concat(numsTwo);
console.log(resArray);

resArray = [...numsOne, ...numsTwo];
console.log(resArray);

numsOne.push(...numsTwo);
resArray = numsOne;
console.log(resArray);

// Needed Output
// [1, 2, 3, 4, 5, 6]