'use strict'

console.group("Group One");
console.log("Massage One");
console.log("Massage Two");
console.group("Child Group");
console.log("Massage One");
console.log("Massage Two");
console.group("Grand Child Group");
console.log("Massage One");
console.log("Massage Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group Two");
console.log("Massage One");
console.log("Massage Two");

