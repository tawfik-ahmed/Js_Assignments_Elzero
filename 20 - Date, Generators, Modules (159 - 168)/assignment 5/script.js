
const time1 = performance.now();

for (let i = 1; i <= 99999; i++) console.log(i);

const time2 = performance.now();

console.log(`Loop Took ${(time2 - time1).toFixed(0)} Milliseconds.`);

// Needed Output
// "Loop Took 1921 Milliseconds."