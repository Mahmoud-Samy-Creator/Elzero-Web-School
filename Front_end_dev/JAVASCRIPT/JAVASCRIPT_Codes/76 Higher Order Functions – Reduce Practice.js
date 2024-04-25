// Gitting the longest string
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];


let longestWord = theBiggest.reduce((acc, curr) => acc.length > curr.length ? acc : curr)
console.log(longestWord)

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let charr = removeChars.filter(ele => ele != '@').reduce((acc, curr) => `${acc}${curr}`)

console.log(charr)