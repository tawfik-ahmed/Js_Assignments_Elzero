
let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.title = one.className;
two.title = two.className;

let temp = one.textContent;
one.textContent = two.textContent;
two.textContent = `${temp} ${document.getElementsByTagName('div').length}`
