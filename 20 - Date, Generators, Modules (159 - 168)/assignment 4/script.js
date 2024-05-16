
let date1 = new Date("2003/12/16");
let date2 = new Date(2003, 11, 16);
let date3 = new Date();
date3.setFullYear(2003);
date3.setMonth(11);
date3.setDate(16);
date3.setHours(0, 0, 0);

console.log(date1);
console.log(date2);
console.log(date3);

// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"