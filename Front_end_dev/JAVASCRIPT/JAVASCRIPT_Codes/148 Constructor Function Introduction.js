/**
 * OOP
 * Contsructor function and introduction
 */

// Making a constructor function
function User(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(100, "Hassan", 6000);
let userThree = new User(100, "Sayed", 7000);

// Display the users
console.log(userOne)
console.log(userOne.i)
console.log(userOne.u)
console.log(userOne.s)

console.log(userTwo)
console.log(userTwo.i)
console.log(userTwo.u)
console.log(userTwo.s)

console.log(userThree)
console.log(userThree.i)
console.log(userThree.u)
console.log(userThree.s)