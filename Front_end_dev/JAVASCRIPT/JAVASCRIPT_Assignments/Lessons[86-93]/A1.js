// Choose the element with 15 way

window.onload = () => console.log(document.querySelector("div"))

console.log(document.querySelector("div"))
console.log(document.querySelector(".element"))
console.log(document.querySelector("#elzero"))
console.log(document.querySelector("[name = 'js']"))
console.log(document.querySelector("div#elzero"))
console.log(document.querySelector("div.element"))

console.log(document.querySelectorAll("div")[0])
console.log(document.querySelectorAll(".element")[0])
console.log(document.querySelectorAll("#elzero")[0])
console.log(document.querySelectorAll("[name = 'js']")[0])

console.log(document.getElementsByTagName("div")[0])
console.log(document.getElementsByClassName("element")[0])
console.log(document.getElementById("elzero"))
console.log(document.getElementsByName('js')[0])
