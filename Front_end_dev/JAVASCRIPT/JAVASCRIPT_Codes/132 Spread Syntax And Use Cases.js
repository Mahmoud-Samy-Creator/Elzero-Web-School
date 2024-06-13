/**
 * Spread Operator => ...Iterable
 * "Allow Iterable To be expanded in Place"
 */

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

/**
 * Usage:
 * 1) Arrays concatination
 * 2) Copy array
 * 3) Push inside Array
 * 4) Use with Math Objects
 * 5) Spread WIth Objects => Merge Objects
*/

// * 1) Arrays concatination
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays)

// * 2) Copy array
let copiedArray = [...myArray1];
console.log(copiedArray);

// * 3) Push inside Array
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);
console.log(allFriends);

// * 4) Use with Math Objects
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// * 5) Spread WIth Objects => Merge Objects
let ObjOne = {
    a: 1,
    b: 2,
};
let objTwo = {
    c: 3,
    d: 4,
};

console.log({...ObjOne, ...objTwo, e:5});
