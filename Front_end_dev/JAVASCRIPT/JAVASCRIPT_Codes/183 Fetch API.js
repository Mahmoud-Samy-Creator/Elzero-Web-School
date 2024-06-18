/* Fetch API */

fetch("https://api.github.com/users/Mahmoud-Samy-Creator/repos")
    .then((result) => {
        console.log(result);
        let myData = result.json();
        console.log(myData);
        return myData;
    })
    .then((myData) => {
        myData.length = 10;
        return myData;
    })
    .then((myData) => {
        console.log(myData[0]);
    })
