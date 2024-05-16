
let number = document.querySelector("div");

let myFun = function () {
    number.innerHTML--;
    if (number.innerHTML === "5") window.open("https:\\elzero.org", "_blank", "width=500px,height=500px;")
    if (number.innerHTML === "0") clearInterval(count);
}

let count = setInterval(myFun, 1000);