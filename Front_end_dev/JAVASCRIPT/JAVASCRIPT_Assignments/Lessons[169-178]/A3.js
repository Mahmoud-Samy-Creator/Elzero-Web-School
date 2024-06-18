/* Fetch JSON */
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        
        // for (obj in mainData) {
        //     mainData[obj].article = "All";
        // }
        mainData.forEach((article) => {
            article["Section"] = "all";
        }) 
        console.log(mainData);

        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}
