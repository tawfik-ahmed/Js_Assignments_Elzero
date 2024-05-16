let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map(ele => typeof ele === 'string' ? ele : '').reduce((char, ele) => char + ele);

console.log(result);
// Elzero