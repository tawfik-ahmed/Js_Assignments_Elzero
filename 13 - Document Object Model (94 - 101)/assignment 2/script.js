
let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let theDiv = document.querySelector(".classes-list div");

if (theDiv.childElementCount === 0) theDiv.textContent = "No Classes To Show";

isValid = val => val.trim().length > 0;

function addNewClasses() {

    if (!isValid(addClass.value)) return;
    theDiv.textContent = "";

    let theClasses = addClass.value.toLowerCase().split(' ');
    for (let i = 0; i < theClasses.length; i++) {

        let mySpan = document.createElement("span");
        currentElement.classList.add(theClasses[i]);
        mySpan.appendChild(document.createTextNode(theClasses[i]));
        theDiv.appendChild(mySpan);
    }
    
    addClass.value = null;
}

function deleteClasses() {

    if (!isValid(removeClass.value)) return;

    let removedClass = removeClass.value.toLowerCase().split(' ');
    removedClass.forEach(e => {
        currentElement.classList.remove(e);

        let spans = theDiv.querySelectorAll("span");
        spans.forEach(span => (span.textContent === e) ? span.remove() : "");
    });

    removeClass.value = null;
    if (theDiv.childElementCount === 0) theDiv.textContent = "No Classes To Show";
}

addClass.onblur = addNewClasses;
removeClass.onblur = deleteClasses;
