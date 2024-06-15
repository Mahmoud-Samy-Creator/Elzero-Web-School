/**
 * Object Meta Data And Descriptor
 * - Define Multiple Properties
 * - Check Descriptor
 */

let myObject = new Object({})

Object.defineProperties(myObject, {
    a: {
        configurable: true,
        enumerable: true,
        value: 1,
    },
    b: {
        configurable: true,
        enumerable: true,
        value: 2,
    },
    c: {
        configurable: true,
        value: 3,
    },
});

console.log(myObject)
for (let prop in myObject) {
    console.log(prop, myObject[prop]);
}
