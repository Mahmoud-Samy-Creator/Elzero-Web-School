let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log("Data Loaded");
    }
}
