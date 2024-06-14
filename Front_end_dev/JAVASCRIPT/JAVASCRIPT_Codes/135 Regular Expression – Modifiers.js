/**
 * Reguler Expression
 * 
 * Syntax:
 * 1) /pattern/modifier(s)
 * 2) new RegExp("pattern", "modifier(s")
 * 
 * Modifiers => Flags
 * i => case-insensitive
 * g => global
 * m => Multiliens
 * 
 * Search methods
 * - match(Patterns)
 * 
 * Match:
 * -- Matches a string against a Reguler Expression pattern
 * -- Returns an array with the Matches
 * -- Returns null if No Match is found
 */

let myString = "Hello Elzero Web School I love elzero hello\nHello Elzero Web School I love elzero hello";

let regexCapital = /Elzero/;
let regexSmall = /elzero/;
let regexCaseInsenstive = /elzero/i;
let regexCaseInsenstiveAndGlobal = /elzero/ig;
let regexMultiLInes = /elzero/igm;

console.log(myString.match(regexCapital));
console.log(myString.match(regexSmall));
console.log(myString.match(regexCaseInsenstive));
console.log(myString.match(regexCaseInsenstiveAndGlobal));
console.log(myString.match(regexMultiLInes))
console.log(myString.match(/Mahmoud/)); // null