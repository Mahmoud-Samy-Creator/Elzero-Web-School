const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
};

// Method 1
let clonedOne = {};
clonedOne.user = myData.user; 
clonedOne.age = myData.age; 
clonedOne.country = myData.country; 

// Method 2
let clonedTwo = Object.assign({}, myData); 

// Method 3
let clonedThree = {...myData}; 

// Method 4
let clonedFour = JSON.parse(JSON.stringify(myData)); 

console.log(clonedOne); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(clonedTwo); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(clonedThree); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(clonedFour); // {user: 'Elzero', age: 41, country: 'Egypt'}