/**
 * OOP
 * Deal With Properties And Methods
 */

class User {
    constructor (id, userName, salary) {
        // Properties
        this.i = id;
        this.u = userName || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function () {
            return `Hello ${this.u}, Your Salary is ${this.s}`;
            };
        }

        // Method
        writeMsg() {
        return `Hello ${this.u}, Your Salary is ${this.s}`;
    }
}


let userOne = new User("100", "Elzero", 4000);
let userTwo= new User("100", "Hassan", 5000);
let userThree = new User("100", "Sayed", 6000);

console.log(userOne.writeMsg())
console.log(userOne.msg())
