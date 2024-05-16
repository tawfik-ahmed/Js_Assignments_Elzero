
let birthDate = new Date("2003/12/16");
let now = new Date();
let date = now - birthDate;

let seconds = Math.floor(date / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30);
let years = Math.floor(months / 12);

console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${months} Months`);
console.log(`${years} Years`);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"