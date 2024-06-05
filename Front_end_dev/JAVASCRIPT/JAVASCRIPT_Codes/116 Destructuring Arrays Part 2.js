let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]]

// To display Gamal
console.log(myFriends[3][2][1])

// To display Gamal by destructuring
let [, , , [a, , [, b]]] = myFriends

console.log(a)
console.log(b)