
let number = document.querySelector("[name ='elements']");
let text = document.querySelector("[name ='texts']");
let chooseBox = document.querySelector("select");
let result = document.querySelector(".results");
let createEle = document.querySelector("[name ='create'");

number.style.cssText ="120px; margin-bottom: 10px; display: block;";
text.style.cssText ="120px; margin-bottom: 10px; display: block;";
chooseBox.style.cssText ="width: 170px; margin-bottom: 10px; display: block;";
createEle.style.cssText = "width: 170px; background-color: #009d81; color: white; font-weight: bold; outline: none; border: none; height: 30px; display: block;";
result.style.cssText = "display: flex; flex-wrap: wrap;"

document.forms[0].onsubmit = function (e) {
    
    e.preventDefault();
    result.innerHTML = "";

    for(let i = 1; i <= number.value; i++) {

        let box = document.createElement(`${chooseBox.value}`);
        let content = document.createTextNode(`${text.value}`);

        box.appendChild(content);
        box.setAttribute("class", "box");
        box.setAttribute("title", "Element");
        box.setAttribute("id", `id-${i}`);
        result.appendChild(box);

        box.style.color = "white";
        box.style.backgroundColor = "#fc592c";
        box.style.width = "150px";
        box.style.padding = "10px";
        box.style.textAlign = "center";
        box.style.margin = "10px";
        box.style.borderRadius = "5px";
    }
};