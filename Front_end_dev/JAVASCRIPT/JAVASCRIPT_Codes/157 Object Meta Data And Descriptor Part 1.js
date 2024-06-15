/**
 * Object Meta Data And Descriptor
 * - writable
 * - enumerable
 * - configurable
 */

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "c", {
    // writable: true,
    writable: false,
    // enumerable: true,
    enumerable: false,
    // configurable: true,
    configurable: false,
    value: 3,
});

console.log(myObject);
console.log(delete myObject.c);
myObject.c = 100;

for (prop in myObject) {
    console.log(`${prop}:${myObject[prop]}`)
}