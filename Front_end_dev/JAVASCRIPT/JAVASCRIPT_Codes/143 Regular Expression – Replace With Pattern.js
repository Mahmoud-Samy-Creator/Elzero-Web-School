/**
 * Reguler Expression
 * - replace
 * - replaceAll
 */

let txt = "We Love Programming And @ Because @ Is Amaizing";
let re = /@/ig;

console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
console.log(txt.replaceAll(re, "JavaScript"));
