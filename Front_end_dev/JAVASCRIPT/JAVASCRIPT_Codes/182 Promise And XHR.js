/* Promise and XHR */
const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("No Data Found"));
            }
        };
        myRequest.open("GET", apiLink);
        myRequest.send();
    })
}

getData("https://api.github.com/users/Mahmoud-Samy-Creator/repos")
    .then((result) => {
        result.length = 10;
        return result;
    }).then((result) => console.log(result[0]))
    .catch((rej) => console.log(reg));