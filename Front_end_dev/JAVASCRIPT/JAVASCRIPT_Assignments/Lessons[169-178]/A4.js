let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let jsObject = JSON.parse(this.responseText);
        console.log(jsObject);

        let mainDiv = document.createElement("div");
        mainDiv.id = "data";
        document.body.appendChild(mainDiv);

        // Function to create a new element using template literals
        const createElement = (htmlString) => {
            const div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            console.log(div.innerHTML);
            return div;
        };

        for (let i = 0; i < jsObject.length; i++) {
            console.log(jsObject[i]);
            const newDiv = createElement(`
                <div>
                    <h2>${jsObject[i].title}</h2>
                    <p>${jsObject[i].id}</p>
                    <p>Author: ${jsObject[i].author}</p>
                    <p>Category: ${jsObject[i].section}</p>
                </div>
            `);
            mainDiv.appendChild(newDiv);
        }
    }
};
