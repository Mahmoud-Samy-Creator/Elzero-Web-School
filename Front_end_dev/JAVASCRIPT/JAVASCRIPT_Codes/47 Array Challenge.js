/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(0, 4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(1, 3).reverse()); // ["Elham", "Mazero"]
my.splice(0, my.length, "Elzero")
console.log(my); // "Elzero"

console.log(`${my[0].slice(-2, my[0].length-1)}${my[0][my[0].length - 1].toUpperCase()}`); // "rO"