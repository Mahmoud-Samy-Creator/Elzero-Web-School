/**
 * Prototype
 * - Add To Prototype Chain
 * - Extend Built In constractors features
 */

class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    }
    sayHello() {
        return `Hello ${this.u}`;
    }
}

let userOne = new User(100, "Elzero");

console.log(User.prototype);
console.log(userOne);

// Adding new method using prototypes
User.prototype.sayWelcome = function() {
    return `Welcome ${this.u}`;
};

console.log(userOne.sayWelcome());