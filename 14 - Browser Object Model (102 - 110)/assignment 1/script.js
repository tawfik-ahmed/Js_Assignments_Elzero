
let number = prompt("Print Number From - To");

let number1, number2, slash;
slash = number.indexOf("-");

number1 = Number(number.slice(0, slash));
number2 = Number(number.slice(slash + 1));

let i = number1 < number2 ? number1 : number2; // Smallest Number
let j = i === number1 ? number2 : number1; // Biggest Number

for (i = i; i <= j; i++) console.log(i);