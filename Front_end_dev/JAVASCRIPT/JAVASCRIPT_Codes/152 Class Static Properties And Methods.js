/**
 * OOP
 * Class
 * - Statis Properties And Methods
 */

class User {
    // count = 0
    static count = 0
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
        User.count++;
    }

    // Static methods
    static countMembers() {
        return `${User.count} Members are Created`
    }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(100, "Ahmed", 5000);
let userThree = new User(100, "Hossam", 5000);

// console.log(userOne.count) // 0 => It can be displayed as count is not static.
// console.log(User.count) // Undefined. => As count is not static

console.log(userOne.count) // Undefined. => As count is static -> It can be acessed only using the class User
console.log(User.count) //0 => It can't be displayed as count is static to the class.

console.log(User.countMembers())