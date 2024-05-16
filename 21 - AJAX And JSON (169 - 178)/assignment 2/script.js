
let request = new XMLHttpRequest();
request.open("GET", "../assignment 1/articles.json");
request.send();

console.log(request);

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) console.log(this.responseText);
}

request.onloadend = function () {
    console.log("Data Loaded");
}