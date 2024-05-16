
let number = document.querySelector("div");

let myFun = function () {
    number.innerHTML--;
    if (number.innerHTML === "0") location.replace("https:\\elzero.org");
}

let count = setInterval(myFun, 1000);