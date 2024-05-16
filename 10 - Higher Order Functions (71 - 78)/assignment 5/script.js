let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((ele, current) => current % 2 !== 0 ? current + ele : current * ele, 1);
console.log(result);
// 500