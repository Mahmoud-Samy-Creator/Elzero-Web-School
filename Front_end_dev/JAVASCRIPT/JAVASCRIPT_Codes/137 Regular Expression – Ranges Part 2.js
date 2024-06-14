/**
 * Ranges
 * - Part(2)
 * [a-z] -- [^a-z]
 * [A-Z] -- [^A-Z]
 * [abc] -- [^abc]
 */

let myString = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/gm;
let NotatozSmall = /[^a-z]/gm;
let atozCapital = /[A-Z]/gm;
let NotatozCapital = /[^A-Z]/gm;
let lettersCapsAndSmall = /[A-Za-z]/gm;
let numsAndSpecials = /[^A-Za-z]/gm;


console.log(myString.match(atozSmall));
console.log(myString.match(NotatozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotatozCapital));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));