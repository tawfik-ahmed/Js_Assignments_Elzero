let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let select = document.querySelector("#select")

one.oninput = function () {
    window.sessionStorage.setItem("one", one.value);
}

two.oninput = function () {
    window.sessionStorage.setItem("two", two.value);
}

three.oninput = function () {
    window.sessionStorage.setItem("three", three.value);
}

select.onchange = function () {
    window.sessionStorage.setItem("select", select.value);
}

one.value = window.sessionStorage.getItem("one");
two.value = window.sessionStorage.getItem("two");
three.value = window.sessionStorage.getItem("three");
select.value = window.sessionStorage.getItem("select");