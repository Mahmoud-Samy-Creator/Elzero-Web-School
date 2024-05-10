/**
 * DOM [Traversing]
 * - nextSibling
 * - PreviousSibling
 * - nextElementSibling
 * - previousElementSibling
 * - parentElement
 */

let span = document.querySelector(".two")
// let span = document.getElementsByClassName("two")

console.log(span.nextSibling)
console.log(span.previousSibling)

// Display the elements siblings (elements only)

console.log(span.nextElementSibling)
console.log(span.previousElementSibling)

// Display the parent element
console.log(span.parentElement)

span.onclick = () => span.parentElement.remove()