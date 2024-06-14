/**
 * Reguler Expression
 * Quantifiers
 -  $    => End with something
 -  ^    => Start With Something
 -\ ?=   => Followed by something
 -\ ?!   => Not Followed by something
 */

let myString = "We Love Progrmming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MostafaaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/lz/ig.test(names));

console.log(/^we/ig.test(myString));
console.log(/^\d/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));

console.log(names.match(/\d\w{8}(?!Z)/ig));