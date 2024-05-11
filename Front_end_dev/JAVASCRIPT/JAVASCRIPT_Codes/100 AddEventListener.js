/**
 * DOM [Add Event Listener]
 * - addEvenetListener
 * - Use Without On
 * - Attach Multiple Events
 * - Error Test
 */

let myP = document.querySelector("p")

// myP.onclick = one;
// myP.onclick = two;

function one() {
    console.log("Message From onClick 1")
}
function two() {
    console.log("Message From onClick 2")
}

// In this way, If I want the 2 function beting executed at the same time
// two() will overwrire one()
// So we use event Listner

myP.addEventListener("click", function() {
    console.log("Message From onClick 1 Event")
})

// So by using EventListener

myP.addEventListener("click", one)
myP.addEventListener("click", two)