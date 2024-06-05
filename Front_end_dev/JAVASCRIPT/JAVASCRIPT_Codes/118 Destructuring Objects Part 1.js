/**
 * Destructuring
 * - Destructuring Objects
 */

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
};

// Display the properties using dot notation
console.log(user.theName)
console.log(user.theAge)
console.log(user.theTitle)
console.log(user.theCountry)
console.log("====================================")

// Display the properties using brakets
console.log(user["theName"])
console.log(user["theAge"])
console.log(user["theTitle"])
console.log(user["theCountry"])
console.log("====================================")

// Display the properties using variables
let theName = user.theName;
let theAge = user.theAge;
let theTitle = user.theTitle;
let theCountry = user.theCountry;

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);

// Display the properties using destructuring
({theName, theAge, theTitle, theCountry} = user)

console.log(theName)
console.log(theAge)
console.log(theTitle)
console.log(theCountry)