/**
 * Map Practice
 * Swap Cases
 * Inverted numbers
 * Ignore Boolen Value
 */

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases.split("")
        .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
        .join("")

console.log(sw)

let inv = invertedNumbers.map(n => -n)
console.log(inv)

let letters = ignoreNumbers
            .split("")
            .map(function (ele) {
                return isNaN(parseInt(ele)) ? ele : "";
            })