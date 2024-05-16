
let date = new Date();

date.setDate(0);
const months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sebtember', 'Oct', 'Nov', 'Dec'];

console.log(date);
console.log(`Previous Month Is ${months[date.getMonth()]} And Last Day Is ${date.getDate()}`)
// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"