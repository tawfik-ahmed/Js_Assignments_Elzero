

let request = new XMLHttpRequest();
request.open("GET", "../assignment 1/articles.json");
request.send();

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

        let mainData = JSON.parse(this.responseText);

        for (let i of mainData) i.category = "All";

        let updatedData = JSON.stringify(mainData);

        console.log(updatedData);
    }
}