/**
 * Array Methods
 * - Array.from(Iterable, MapFunc, This)
 * --- Variable
 * --- String Numbers
 * --- Set
 * --- Using the Map function
 * --- Arrow Function
 * --- Shorten the method + Use arguments
*/

// Variable
console.log(Array.from("Osama"));

// String Numbers
console.log(
    Array.from("12345", (n) => {
        return +n + +n
    })
);

console.log(
    Array.from("12345", function(n) {
        return +n + +n;
    })
);

// Arrow Function
console.log(
    Array.from("12345", (n) => {
        return n + n
    })
);

// Set
let myArray = [1, 1, 1, 2, 2, 3, 4];
let mySet = new Set(myArray)

console.log(mySet);
console.log(Array.from(mySet));
console.log([...new Set(myArray)]);

// Functions

function testArg() {
    return Array.from(arguments);
};

console.log(testArg("Osama", "Ahmed", "Sayed", 1, 2, 3));