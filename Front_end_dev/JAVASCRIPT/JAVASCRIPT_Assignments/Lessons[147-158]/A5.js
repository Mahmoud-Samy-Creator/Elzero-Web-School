const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

Object.defineProperties(myObj, {
    "score": {
        writable: false,
    },
    "id": {
        enumerable: false,
        configurable: true,
        writable: true,
    },
});

myObj.score = 500; // This will not change the value of score as it is not writable
delete myObj.country; // This will delete the country property

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

// Log all properties, including non-enumerable ones
console.log(Object.assign({}, myObj));
