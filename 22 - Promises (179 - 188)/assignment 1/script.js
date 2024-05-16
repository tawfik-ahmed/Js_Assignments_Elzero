
const getData = function (apiLink) {
    return new Promise((resolve, reject) => {

        const myRequest = new XMLHttpRequest();
        myRequest.onload = function () {
            if (myRequest.readyState === 4 && myRequest.status === 200) resolve(JSON.parse(this.responseText))
            else reject(Error("No Data"));
        }

        myRequest.open("GET", apiLink);
        myRequest.send();
    })
};

getData("./test.json").then((res) => {

    res.length = 5;
    return res

}).then((res) => {
    for (let i = 0; i < res.length; i++) {

        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        h3.appendChild(document.createTextNode(res[i].title));
        p.appendChild(document.createTextNode(res[i].description));

        div.appendChild(h3);
        div.appendChild(p);

        document.body.appendChild(div);
    }
}).catch((err) => {
    console.log(err);
})
