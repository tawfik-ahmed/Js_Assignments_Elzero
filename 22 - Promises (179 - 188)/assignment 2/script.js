
async function getData() {
    try {

        let myData = await fetch("./test.json");
        let res = await myData.json();
        res.length = 5;

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

    } catch (err) {
        console.log(err);
    }
};

getData();
