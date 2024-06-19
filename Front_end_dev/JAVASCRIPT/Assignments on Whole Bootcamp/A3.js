let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

// Remove all character if needed
console.log(myString.split("@").join(""));

// Method one using RegExp
console.log(myString.match(/\w+\s\w+\s\w+\s\w+\s@\s\w+\s\w+\s\w+/ig).toString());

// Method two using slice method [Static]
console.log(myString.slice(0, -13));

// Method Three using slice method [Dynamic]
console.log(myString.slice(0, myString.indexOf("@", myString.indexOf("@") + 1)))

// Mehod Four using splite
console.log(myString.split("@").slice(0, 2).join("@"))
// Output Needed
// "Hello Elzero Web School @ We Love Programming"
