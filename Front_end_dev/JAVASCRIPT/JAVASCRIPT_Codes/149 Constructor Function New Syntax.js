/**
 * OOP
 * Constructor function new Syntax
 */

class User {
    constructor(id, userName, salary) {
        this.i = id;
        this.u = userName;
        this.s = salary;
    }
}

let userOne = new User("100", "Elzero", 4000);
let userTwo= new User("100", "Hassan", 5000);
let userThree = new User("100", "Sayed", 6000);

console.log(userOne instanceof User);
console.log(userTwo instanceof User);
console.log(userThree instanceof User);

console.log(userOne.constructor === User);
console.log(userTwo.constructor === User);
console.log(userThree.constructor === User);