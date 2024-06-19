fetch("main.json")
    .then((result) => {
        return result.json()
    })
    .then((result) => {
        result.length = 5;
        return result;
    })
    .then((result) => {
        result.forEach((data) => {
            let mainDiv = document.createElement("div");
            let title = document.createElement("h3");
            let p = document.createElement("p");

            let titleText = document.createTextNode(`${data.title}`);
            let pText = document.createTextNode(`${data.description}`);

            title.appendChild(titleText);
            p.appendChild(pText);
            mainDiv.appendChild(title);
            mainDiv.appendChild(p);

            document.body.appendChild(mainDiv);
        })
    })
