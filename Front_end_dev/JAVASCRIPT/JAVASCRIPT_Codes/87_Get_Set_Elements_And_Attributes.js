/*
DOM [Get / Set Elements Content And Attributes]
- innerHTML
- textContent
- Change Attributes Directly
- Change Attributes With Methods
--- getAttribute
--- setAttribute

Search
- innerText
*/

let myELement = document.querySelector(".js")

// Get
console.log(myELement)
console.log(myELement.innerHTML)
console.log(myELement.textContent)

// Set
myELement.innerHTML = "Text from <span>Main.js</span> File"
myELement.textContent = "Text from <span>Main.js</span> File"

document.images[0].src = "https://google.com"
document.images[0].alt = "alt text"
// If there the attribute exists, it will overwrite
// If there the attribute not exists, it will create ir
document.images[0].title = "Google"
document.images[0].id = "pic"
document.images[0].className = "img"

// Do the same with methods

// Get --> For getting attributes
let myLink = document.querySelector(".link")
myLink.textContent = "Link"
console.log(myLink.getAttribute("class"))
myLink.setAttribute("href", "https://www.google.com")
console.log(myLink.getAttribute("href"))
