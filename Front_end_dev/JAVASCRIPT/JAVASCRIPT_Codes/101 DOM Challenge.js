document.body.style.cssText = "margin: 0; padding: 0"
// Start Header
let header = document.createElement("header")

let logo = document.createElement("h1")
let logoText = document.createTextNode("Elzero")
logo.appendChild(logoText)
logo.style.cssText = "color: green; font-weight: bold"

header.appendChild(logo)

// Start navBar
let nav = document.createElement("nav")
let navList = document.createElement("ul")

let navListArray = [document.createElement("li"), document.createElement("li"),
                    document.createElement("li"), document.createElement("li")]

let navListLinks = [document.createElement("a"), document.createElement("a"),
                    document.createElement("a"), document.createElement("a")]

let navListTextArray = [document.createTextNode("Home"), document.createTextNode("About"),
                        document.createTextNode("Service"), document.createTextNode("Contact")]

for (let i = 0 ; i < 4 ; i++) {
    navListLinks[i].setAttribute("href", "# ")
    navListLinks[i].appendChild(navListTextArray[i])
    navListArray[i].appendChild(navListLinks[i])
    navListLinks[i].style.cssText = "text-decoration: none; color: black"
    navListArray[i].style.cssText = "margin-right: 10px"
    nav.appendChild(navListArray[i])
}

nav.style.cssText = "display: flex; list-style-type: none;"
header.appendChild(nav)
header.style.cssText = `display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 15px;
                        height: 9.3vh`
// End navBar
// End Header
// Start bodySection
let bodySection = document.createElement("section")
bodySection.style.cssText = `
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            background-color: #eee;
                            padding: 20px 5px;
                            height: 75vh;
                            `

for (let i = 0 ; i < 15 ; i++) {
    let element = document.createElement("div")
    let span = document.createElement("span")
    let spanText = document.createTextNode(`${i+1}\n`)
    span.appendChild(spanText)
    let elementText = document.createTextNode("Product")
    element.style.cssText = `
                            margin: 8px;
                            padding: 10px;
                            background-color:white;
                            border: 0.5px solid black;
                            text-align: center;
                            width: calc(25%);
                            color: gray;
                            `
    span.style.cssText = "font-size: 30px; display: block; color: black"
    element.appendChild(span)
    element.appendChild(elementText)
    bodySection.appendChild(element)
}
// End bodySection

// Start Footer
let footerElement = document.createElement("footer")
let footerText = document.createTextNode("Copy Rights")
footerElement.style.cssText = ` color: white;
                                font-weight: bold;
                                background-color: green;
                                text-align: center;
                                height: 10vh;
                                line-height: 70px`
footerElement.appendChild(footerText)
// End Footer
document.body.appendChild(header)
document.body.appendChild(bodySection)
document.body.appendChild(footerElement)
