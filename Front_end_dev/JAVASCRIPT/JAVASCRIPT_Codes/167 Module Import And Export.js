/**
 * Modules
 * - Import and Export
 */

// at main.js
let a = 10;
let arr = [1, 2, 3, 4];
function saySomething() {
    return `Something`;
}

export { a, arr, saySomething }

// at app.js
import { a, arr, saySomething as s } from "./main.js";

console.log(a);
console.log(arr);
console.log(s());
