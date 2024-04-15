/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
  */

 // - Create Arrays [Two Methods] new Array() + []
 //  - Nested Arrays
let myFriends = ["Ahmed", "Mahmoud", "Sayed", ["Marawan", "Ali"]]
console.log(myFriends)

// - Access Arrays Elements
console.log(`Hello ${myFriends[0]}`)
console.log(`Hello ${myFriends[2]}`)
console.log(`Hello ${myFriends[3][1]}`)
console.log(`${myFriends[3][0][0]}`) // 'M' From "Marawan"

// - Change Arrays Elements
myFriends[3] = ["Sameh", "Ameer"]
myFriends[4] = ["Samy", "Adham"]
console.log(myFriends)

// - Check For Array Array.isArray(arr);
console.log(Array.isArray(myFriends))