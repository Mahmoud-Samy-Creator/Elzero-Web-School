/*
DOM [Create Elements]
- createElement
- createComment
- createTextNode
- createAttribute
- appendChild
*/
// Element information
let myElement = document.createElement("div")
let myAttribute = document.createAttribute("data-custom")
let myText = document.createTextNode("Product One")
let myCommnet = document.createComment("This is Div")

// Make the full element
myElement.className = "product"
// For future usage
myElement.setAttributeNode(myAttribute)
myElement.setAttribute("data-test", "Testing")
myElement.appendChild(myText)

document.body.appendChild(myElement)

console.log(myElement)