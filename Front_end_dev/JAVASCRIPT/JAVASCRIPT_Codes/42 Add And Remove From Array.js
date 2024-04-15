/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
  */

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

//  - unshift("", "") Add Element To The First
myFriends.unshift("Osama", "Nabil")
console.log(myFriends)

// - push("", "") Add Element To The End
myFriends.push("Mahmoud", "Samy", "Adham")
console.log(myFriends)

// - shift() Remove First Element From Array
let firstName = myFriends.shift()
console.log(`Hello ${firstName}`)
let lastName = myFriends.pop()
console.log(`Hello ${lastName}`)
console.log(myFriends)