/**
 * OOP
 * Constructor Function
 * - Update Properties
 * - Built In Constructors
 */

class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
    }
    updateName(newName) {
        this.u = newName;
    }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Mahmoud");
console.log(userOne.u);

// Built in constructor
let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true

console.log(strOne.constructor === String); // true
console.log(strTwo.constructor === String); // true