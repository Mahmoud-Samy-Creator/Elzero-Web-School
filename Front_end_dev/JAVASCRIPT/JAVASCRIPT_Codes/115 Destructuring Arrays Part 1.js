/**
 * Destructuring:
 * Js expression to extract data from objects and set them to new variables
 */

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"]

let a, b, c, d, e
// a = 1, b = 2, c = 3, d = 4
// let d = 4

// [a = "Mona", b, c, d, e = "Osama"] = myFriends
[a , , c, d, e = "Osama"] = myFriends

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)