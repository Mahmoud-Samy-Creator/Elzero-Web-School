let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

Object.freeze(myData);

myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']