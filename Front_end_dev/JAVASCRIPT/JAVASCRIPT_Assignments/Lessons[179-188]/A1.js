function getData(fileJson) {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        console.log(myRequest);

        myRequest.onload = function () {
            if (this.readyState === 4 && this.staus === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject("Your json is wrong");
            }
        };
        myRequest.open("GET", fileJson);
        myRequest.send();
    });
}

getData("main.json")
    .then((data) => {
        data.length = 5;
        console.log(data);
        return data;
    })
    .then ((showData) => {
        showData.forEach((data) => {
            let mainDiv = document.createElement("div");
            let title = document.createElement("h3");
            let titleText = document.createTextNode(date.title);
            title.appendChild(titleText);

            let disc = document.createElement("p");
            let discText = document.createTextNode(data.description);
            disc.appendChild(discText);

            mainDiv.appendChild(title);
            mainDiv.appendChild(disc);
            document.body.appendChild(mainDiv);
        })
    })

    getData("main.json")