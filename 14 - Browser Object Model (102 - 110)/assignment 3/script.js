
let number = document.querySelector("div");

let myFun = function () {
    number.innerHTML--;
    if (number.innerHTML === "0") clearInterval(count);
}

let count = setInterval(myFun, 1000);