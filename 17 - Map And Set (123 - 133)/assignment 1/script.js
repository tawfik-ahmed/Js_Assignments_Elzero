
let mySet = new Set([10]);
mySet.add(20).add(mySet.size);

console.log(mySet)
console.log(Array.from(mySet)[2])

/* Needed Output
Set(3) { 10, 20, 2 }
2
*/