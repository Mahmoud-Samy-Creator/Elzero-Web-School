/*
    Ajax => Asynchrounus JavaScript and XML
    - Ready State => Status of the request
    [0] Request Not Initialized
    [1] Server connection established
    [2] Request received
    [3] Processing request
    [4] Request is finished and response is ready
    - Status
    [200] Response is successful
    [404] Not found
 */

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/Mahmoud-Samy-Creator/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
    console.log(myRequest.readyState);
    console.log(myRequest.status);

    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let myObj = JSON.parse(this.responseText);
        console.log(myObj)
    }
}


