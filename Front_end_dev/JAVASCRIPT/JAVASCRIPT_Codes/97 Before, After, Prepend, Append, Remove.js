/**
 * DOM [Deal With Element]
 * - before [Elements || String]
 * - after [Elements || String]
 * - append [Elements || String]
 * - prepenf [Elements || String]
 * - remove
 */

let element = document.getElementById("my-div")

// Before: adding element before existing element
// After: adding element after existing element
element.after("After: Hello from js")
element.before("before: Hello from js")

// Append: appending element in the existing element from the end
// prepend: appending element in the existing element from the start

let appendElement = document.createElement("p")
let appendText = document.createTextNode("This is appededned text")
appendElement.appendChild(appendText)

let prependElement = document.createElement("p")
let prependText = document.createTextNode("This is prepend text")
prependElement.appendChild(prependText)

element.append(appendElement)
element.prepend(prependElement)

// Removing the element from the dom tree
element.remove()