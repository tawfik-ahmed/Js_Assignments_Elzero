
let deleteP = document.querySelector("p");
deleteP.remove();

let myDiv = document.querySelector("div");

let startDiv = myDiv.cloneNode();

startDiv.className = "start";
startDiv.setAttribute("title", "Start Element");
startDiv.setAttribute("data-value", "Start");
startDiv.textContent = "Start";

let endDiv = document.createElement("div");

endDiv.className = "end";
endDiv.setAttribute("title", "End Element");
endDiv.setAttribute("data-value", "End");
endDiv.textContent = "End";

myDiv.before(startDiv);
myDiv.after(endDiv);
