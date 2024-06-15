/**
 * oop
 * - Encapsulation
 * -- Class Fields are punlic by default
 * -- Guards the data against illegal access
 * -- Helps to achive the target without revealing it's complex details
 * -- Will reduce human errors
 * -- Make the application more flexable and managable
 * -- Simplifies the application
 */

class User {
    #e;
    constructor(id, username, eSalary) {
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }

    // Make a getter
    getSalary() {
        return parseInt(this.#e);
    }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.e); // undefined
console.log(userOne.e * 0.3); // NaN

console.log(userOne.getSalary() * 0.3);
