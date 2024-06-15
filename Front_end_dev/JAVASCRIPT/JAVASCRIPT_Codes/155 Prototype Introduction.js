/**
 * Prototype
 * - Introduction
 * - Prototypes are the mechanism by which javaScript objects ingeret features from one another
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

console.log(User.prototype);

let strOne = "Elzero";

console.log(String.prototype);