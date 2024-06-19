let theName = "Elzero";
let newName = theName.split("");

let newOne = `${newName[0]}${newName[newName.length - 1]}`;
let newTwo = newName.splice(1, newName.length - 2).join("");
let newThree = newTwo.split("").splice(1, newTwo.length - 2).join("")

console.log(newOne);
console.log(newTwo);
console.log(newThree);

// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze
