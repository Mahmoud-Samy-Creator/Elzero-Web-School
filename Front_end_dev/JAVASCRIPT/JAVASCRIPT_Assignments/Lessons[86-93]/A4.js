//  Getting the 2 elements
let divOne = document.getElementsByTagName("div")[0]
let divTwo = document.getElementsByTagName("div")[1]

// Getting the old Titles
let divOneTitle = divOne.getAttribute("title")
let divTwoTitle = divTwo.getAttribute("title")

// Getting the old text value
let divOneText = divOne.innerText
let divTwoText = divTwo.innerText

// Setting attributes
divOne.setAttribute("title", divTwoTitle)
divTwo.setAttribute("title", divOneTitle)

// Setting text values
divOne.innerText = divTwoText
divTwo.innerText = divOneText
