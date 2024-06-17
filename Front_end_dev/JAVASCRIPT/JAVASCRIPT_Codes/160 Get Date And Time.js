/**
 * Date And Time
 * - getTime() => Number of Milliseconds
 * - getData() => Day of The Month
 * - getFullYear()
 * - getMonth() => Zero based
 * - getDAY => Day of the week
 * - getHours()
 * - getMinutes()
 * - getSeconds()
 */

// Identidy a day constructor
let dateNow  = new Date();
let birthday = new Date("nov 9, 98");
let dateDiff = dateNow - birthday;

console.log(dateNow);
console.log(birthday);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log("#".repeat(20));

console.log(dateNow);
console.log(`Number of Milliseconds: ${dateNow.getTime()}`);
console.log(`Current Day: ${dateNow.getDate()}`);
console.log(`Current Year: ${dateNow.getFullYear()}`);
console.log(`Index of Current Month: ${dateNow.getMonth() + 1}`);
console.log(`Index of the Current Day: ${dateNow.getDay()}`);
console.log(`Current Hour: ${dateNow.getHours() + 1}`);
console.log(`Current Second: ${dateNow.getSeconds() + 1}`);
