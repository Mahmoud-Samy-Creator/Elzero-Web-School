/**
 * BOM [Browser Object Model]
 * - alert(Message) => Need no response | Only ok available
 * - confirm(Message) => Need Response & Return a boolean
 * - prompt(Message, Defult Message) => Collect data
 */

// window.alert("Test alter") //this.alert === alert()

// let confirmMsg = confirm("Are you sure?")
// console.log(confirmMsg)

let promptMsg = prompt("Good day to you?", "Write Day with 3 chars")
console.log(promptMsg)