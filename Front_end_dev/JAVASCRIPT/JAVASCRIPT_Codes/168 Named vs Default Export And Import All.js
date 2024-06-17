/**
 * Modules
 * - Export Alias
 * - Named Export
 * - Default Export
 * - Import All
 */

// at main.js
// - named export
export { a as myNumber, arr, saySomething };
export default function sayHello() {
    return `Hello`;
}

// at app.js
import sayHello, { myNumber, arr, saySomething as s } from "./main.js";
import * as all from "./main.js"
console.log(a);
console.log(arr);
console.log(s());
console.log(all); //Object of the export