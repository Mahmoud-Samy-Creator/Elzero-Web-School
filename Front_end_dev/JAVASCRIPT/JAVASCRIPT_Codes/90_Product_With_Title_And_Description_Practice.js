// Create Div Element & it's info
let divElement = document.createElement("div")
let divText = document.createTextNode("Product")
let divCommet = document.createComment("This is main div")
let divAttr = document.createAttribute("version")

// Create h2 Element & it's info
let h2Element = document.createElement("h2")
let h2Text = document.createTextNode("Product Name")
let h2Commet = document.createComment("This is main Header")
h2Element.setAttribute("title", "product-1")
h2Element.appendChild(h2Commet)
h2Element.appendChild(h2Text)
divElement.appendChild(h2Element)


// Create p Element & it's info
// let pElment = document.createElement("p")
// let pText = document.createTextNode("This is product")
// let pCommet = document.createComment("This is main product")
// pElment.setAttribute("paragraph", "Product description")
// pElment.appendChild(pCommet)
// pElment.appendChild(pText)


// Setting Div Element
divElement.setAttributeNode(divAttr)
divElement.setAttribute("product-kind", "Kind-1")
divElement.appendChild(divCommet)
divElement.appendChild(divText)
divElement.appendChild(h2Element)
// divElement.appendChild(pElment)
for (let i = 0 ; i < 100 ; i++) {
    let pElment = document.createElement("p")
    let pText = document.createTextNode("This is product " + i)
    let pCommet = document.createComment("This is main product")
    pElment.setAttribute("paragraph", "Product description")
    pElment.appendChild(pCommet)
    pElment.appendChild(pText)
    divElement.appendChild(pElment)
}
divElement.className = "Product"

console.log(`Hello`)

document.body.appendChild(divElement)
