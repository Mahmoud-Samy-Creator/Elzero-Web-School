/*
DOM [Deal With Childrens]
- children
- childNodes
- firstChild
- lastChild
- firstElementChild
- lastElementChild
*/

let myElement = document.querySelector("div")
let myElementChildren = myElement.children
let myElementChildNodes = myElement.childNodes

console.log(myElement)
console.log(myElementChildren)
console.log(myElementChildren[0])
console.log(myElementChildren[1])
console.log(myElementChildNodes)
console.log(myElement.firstChild)
console.log(myElement.lastChild)
console.log(myElement.firstElementChild)
console.log(myElement.lastElementChild)