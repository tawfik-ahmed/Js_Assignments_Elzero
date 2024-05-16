
let element = document.querySelector("form input[type='number']");
let result = document.querySelector("div.result");

element.oninput = function () {

    let number = Number(element.value);
    if (number == "") result.innerHTML = "{0} USD Dollar = {0} Egyptian Pound";
    else result.innerHTML = `\{${number.toFixed(2)}\} USD Dollar = \{${number * 15.6.toFixed(2)}\} Egyptian Pound`;
}