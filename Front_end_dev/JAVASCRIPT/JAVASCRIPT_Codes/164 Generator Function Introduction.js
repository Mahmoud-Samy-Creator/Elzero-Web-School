/**
 * Generators
 * - Generators Function Run It's Code When Required.
 * - Generators Function Return Special Object [Generator Object]
 * - Generators Are Iterable
 */

function* generateNumbers() {
    yield 1;
    // alert("Hello from Yield 1")
    yield 2;
    yield 3;
    yield 4;
}

let generator = generateNumbers();

console.log(generator);
console.log(typeof generator);

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)