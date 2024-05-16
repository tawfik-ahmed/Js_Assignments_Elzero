
let myElement = document.createElement("div");
let X = document.createElement("div");
let myH = document.createElement("h2");
let myP = document.createElement("p");

X.addEventListener("click", () => myElement.remove());

let popUp = function () {

    myH.appendChild(document.createTextNode("Welcome"));
    myP.appendChild(document.createTextNode("Welcome To Elzero Web School"));
    X.append(document.createTextNode("X"));

    myElement.appendChild(myH);
    myElement.appendChild(myP);
    myElement.append(X);

    myElement.style.cssText = "width: 300px; height: 100px; background-color: #f5f3f4; border: solid #e2e0e1 1px; margin: 50px auto; text-align: center; position: relative";
    X.style.cssText = "width: 25px; height: 25px; background-color: red; color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; cursor: pointer; border-radius: 50%; position: absolute; top: 0; right: 0; transform: translate(50%, -50%);";

    document.body.append(myElement);
}

setTimeout(popUp, 5000);

