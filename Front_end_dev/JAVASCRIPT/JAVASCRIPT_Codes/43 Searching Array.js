/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// indexOf(Search Element, From Index [Opt])
console.log(myFriends.indexOf("Mohamed")) //1
console.log(myFriends.indexOf("Alaa")) //3
console.log(myFriends.indexOf("Ahmed")) //0
console.log(myFriends.indexOf("Ahmed", 2)) //4

console.log(myFriends.indexOf("Osama")) //-1
if (myFriends.indexOf("Osama") == -1) {
  console.log("Not Found")
}
// - lastIndexOf(Search Element, From Index [Opt])
console.log(myFriends.lastIndexOf("Ahmed")) //4

// includes(valueToFind, fromIndex [Opt]) [ES7]
console.log(myFriends.includes("Ahmed")) //True
console.log(myFriends.includes("Ahmed", 2)) //True
