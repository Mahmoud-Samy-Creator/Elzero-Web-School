/**
 * DOM [Cloning]
 * - cloneNode(Deep)
 */

// let myP = document.querySelector("p")
// let myP = document.querySelector("p").cloneNode()
let myP = document.querySelector("p").cloneNode(true)
let myDiv = document.querySelector("div")

// myDiv.appendChild(myP)
myDiv.appendChild(myP)