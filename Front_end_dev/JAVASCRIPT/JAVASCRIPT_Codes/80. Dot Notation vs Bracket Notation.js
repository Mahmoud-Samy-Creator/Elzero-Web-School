/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country"

let user = {
    theName: "Osame",
    country: "Egypt",
}

console.log(user.theName)
console.log(user.country)
console.log(user.myVar) //Undefined -> should be written in pracite notation
console.log(user[myVar])