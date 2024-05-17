/**
 * BOM [Browser Object Model]
 * Local Storage
 * => It's a window property
 * => Control the storage object
 * => Methods to store, get & delete in the local storage
 * - setItem
 * - getItem
 * - removeItem
 * - clear => Delete all data in the local storage
 * - key => Get the key value pair of data in local storage
 */

// It's a normal object
console.log(typeof window.localStorage)

// Set data in the local storage => We can user all ways of object
// .setItem method (localStorage method)
window.localStorage.setItem("color", "#F00")
// object Property method 
window.localStorage.fontWeight = "bold"
// Key / value pair method
window.localStorage["font-size"] = "20px"

// Get objects
console.log(window.localStorage.getItem("color"))
console.log(window.localStorage.fontWeight)
console.log(window.localStorage["font-size"])

// USing local storage
document.body.style.backgroundColor = window.localStorage["color"]

// removing an item => using key
window.localStorage.removeItem("color")


// key => behave like index
console.log(window.localStorage.key(0))
// clear all
window.localStorage.clear()