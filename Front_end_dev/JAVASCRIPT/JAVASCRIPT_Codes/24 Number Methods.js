/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/
// Number conversion to string
console.log((100).toString());
console.log(100..toString());

console.log(Number("100 Osama"))
console.log(Number(+"100 Osama"))
console.log(parseInt("100 Osama"))
console.log(parseInt("100.5 Osama"))
console.log(parseFloat("100.5 Osama"))

// Insuring that the input is a number
console.log(Number.isInteger("100"))
console.log(Number.isInteger(100.500))
console.log(Number.isInteger(100))

console.log(Number.isNaN("Osama / 20"))