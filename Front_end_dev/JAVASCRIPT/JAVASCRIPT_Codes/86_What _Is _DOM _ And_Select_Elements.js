/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

console.log(document.title)
console.log(document.body)
console.log(document.getElementById("my-div"))
console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("div")[0])
console.log(document.getElementsByClassName("mydiv")) // Return an array of all elements of the same class
console.log(document.getElementsByClassName("mydiv")[0])
console.log(document.querySelector("#special"))
console.log("######################################")
console.log(document.querySelector(".special"))