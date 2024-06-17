/**
 * Generators
 * - Generate Infinite Numbers
 * - Use Return Inside Generators
 */

function* generateNumbers() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

