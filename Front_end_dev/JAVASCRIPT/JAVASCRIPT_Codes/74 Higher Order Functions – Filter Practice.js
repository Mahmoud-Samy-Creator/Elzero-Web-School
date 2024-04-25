/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let newScentence = sentence
                .split(" ")
                .filter(word => word.length <= 4)
                .join(" ")

console.log(newScentence)

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let newNums = ignoreNumbers
            .split("")
            .filter(ele => isNaN(parseInt(ele)))
            .join("")

console.log(newNums)

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let newMix = mix
            .split("")
            .filter(ele => !isNaN(parseInt(ele)))
            .map(ele => ele * ele)
            .join("")
console.log(newMix)