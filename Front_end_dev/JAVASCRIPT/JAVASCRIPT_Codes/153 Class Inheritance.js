/**
 * OOP
 * - Inheritance
 */

// Parent Class
class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    }
    sayHello() {
        return `Hello ${this.u}`;
    }
}

// Derived Class
class Admin extends User {
    constructor (id, username, permission) {
        super(id, username);
        this.p = permission;
    }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne.u); // Elzero
console.log(userOne.sayHello()); // Hello Elzero
console.log(adminOne.u); // Hello Mahmoud
console.log("###");
console.log(adminOne.i); // 110
console.log(adminOne.u); // Mahmoud
console.log(adminOne.p); // 1
console.log(adminOne.sayHello());
