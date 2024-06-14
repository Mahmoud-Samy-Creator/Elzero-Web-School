/**
 * Ranges
 * - Part (1)
 * (X|Y) => X or Y (Grouping matches)
 * [0-9] => 0 To 9
 * [^0-9] => Any Character Not 0 to 9 (Not Pattern)
 * Practice
 */

let tld = "Com Net Org Info Code Io";
let nums = "12345678910";
let specialNumbers = "1!2@3#4$5g8910";
let practice = "Os1 Os10s Os2 Os8 Os8Os";

let tldRe = /(info|org|io)/igm;
let numsRe = /[0-9]/gm;
let numsReNot = /[^0-2]/gm;
let specialNumbersRe = /[^0-9]/gm;
let practiceRe = /os[0-9]os/igm;

console.log(tld.match(tldRe));
console.log(nums.match(numsRe));
console.log(nums.match(numsReNot));
console.log(specialNumbers.match(specialNumbersRe));
console.log(practice.match(practiceRe));