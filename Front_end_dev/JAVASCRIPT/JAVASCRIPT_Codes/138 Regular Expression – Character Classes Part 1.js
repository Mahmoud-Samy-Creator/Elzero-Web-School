/**
 * Reguler expression
 * Character Classes
 * . => matches any character, except newLine or other line terminations
 * \w => matches word characters. [a-z, A-Z, 0-9 and Under]
 * \W => Not word characters
 * \d => matches digits from 0 to 9
 * \D => matches non digit character.
 * \s => matches whitespace characters.
 * \S => matches non whitespace characters.
 */

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

let dot = /./g;
let word = /\w/g;
let Word = /\W/g;
let valid = /\w@\w.(com|net)/g;

console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(Word));
console.log(email.match(valid));