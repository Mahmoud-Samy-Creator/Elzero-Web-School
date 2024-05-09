/**
 * DOM [Class List]
 * - classList
 * --- length
 * --- contains
 * --- item(index)
 * --- add
 * --- remove
 * --- toggle
 */

let element = document.getElementById("my-div")

// Display all classes for that element
console.log(element.classList)
console.log(typeof element.classList) // Object
console.log(element.classList.length) // Class length
// Esure if the class exist in the element
console.log(element.classList.contains("one")) //true
console.log(element.classList.contains("two")) //true
console.log(element.classList.contains("show")) //true
console.log(element.classList.contains("test")) //true
console.log(element.classList.contains("osama")) // false

// Display the class according to the index
console.log(element.classList.item(0))
console.log(element.classList.item(1))
console.log(element.classList.item(2))
console.log(element.classList.item(3))

// The index can be strings in writing
console.log(element.classList.item("0"))
console.log(element.classList.item("1"))
console.log(element.classList.item("2"))
console.log(element.classList.item("3"))

// Adding classes to the element
element.classList.add("add-one", "add-two")

// Removing classes from the element
element.classList.remove("one", "two")

// Toggeling, if the class here, remove it, and vice verca
element.onclick = function () {
    element.classList.toggle("show")
}
