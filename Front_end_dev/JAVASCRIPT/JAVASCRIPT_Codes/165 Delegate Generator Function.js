/**
 * Generator
 * - Delagate Generator
 */

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
}

function* generateletters() {
    yield "A";
    yield "B";
    return 1;
    yield "C";
}

function* generateAll() {
    yield* generateNums();
    yield* generateletters();
    yield* [4, 5, 6];
};

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
