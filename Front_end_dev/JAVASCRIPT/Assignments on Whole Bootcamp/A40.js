const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
};

Object.freeze(myData);
// Write Your Code Here

myData.skill = "Programming";

console.log(myData.user); // Elzero
console.log(myData.age); // 41
console.log(myData.country); // Egypt
console.log(myData.skill); // Undefined