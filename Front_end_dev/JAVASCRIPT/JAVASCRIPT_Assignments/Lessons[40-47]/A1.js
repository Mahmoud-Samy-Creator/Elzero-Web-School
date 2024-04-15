let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.length = 3
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

// Method 2
console.log(myFriends.slice(0, -1)); // ["Ahmed", "Elham", "Osama"];