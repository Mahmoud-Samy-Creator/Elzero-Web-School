/*
DOM [Check Attributes]
- Element.attributes
- Element.hasAttribute
- Element.hasAttributes
- Element.removeAttribute
*/ 

console.log(document.getElementsByTagName("p"))
console.log(document.getElementsByTagName("p")[0])
console.log(document.getElementsByTagName("p")[0].attributes)

let myP = document.getElementsByTagName("p")[0]

if (myP.hasAttribute("data-src")) {
    // console.log("Attribute Found")
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src")
    } else {
        myP.setAttribute("data-src", "new-Value")
    }
} else {
    console.log("Attribute Not Found")
}

if (myP.hasAttributes()) {
    console.log("Hass Attributes")
} else {
    console.log("Has Not Attributes")
}

if (document.getElementsByClassName("div")[0]) {
    console.log("Has Attributes")
} else {
    console.log("Hass Not Attributes")
}
