
let request = new XMLHttpRequest();
request.open("GET", "../assignment 1/articles.json");
request.send();

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

        let mainData = JSON.parse(this.responseText);

        let div = document.createElement("div");
        div.setAttribute("id", "data");

        for (let i = 0; i < mainData.length; i++) {

            let childDivs = document.createElement("div");

            let h2 = document.createElement("h2");
            h2.appendChild(document.createTextNode(`Title ${i + 1}`));
            childDivs.appendChild(h2);

            let p1 = document.createElement("p");
            p1.appendChild(document.createTextNode(`Article Number ${i + 1} Body`));
            childDivs.appendChild(p1);

            let p2 = document.createElement("p");
            p2.appendChild(document.createTextNode(`Author: ${mainData[i].author}`));
            childDivs.appendChild(p2);

            let p3 = document.createElement("p");
            p3.appendChild(document.createTextNode(`Category: ${mainData[i].category}`));
            childDivs.appendChild(p3);

            div.appendChild(childDivs);
        }

        document.body.appendChild(div);
    }
}