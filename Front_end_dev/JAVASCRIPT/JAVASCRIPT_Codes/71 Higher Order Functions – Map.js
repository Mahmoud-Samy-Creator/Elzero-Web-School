/*
Higher Order Functions
---> is a function that accepts functions as parameters and/or returns a function.

- Map
--- method creates a new array
--- populated with the results of calling a provided function on every element
--- in the calling array.

Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
- Element => The current element being processed in the array.
- Index => The index of the current element being processed in the array.
- Array => The Current Array

Notes
- Map Return A New Array

Examples
- Anonymous Function
- Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6]

let newArray = []

// First method
for (let i = 0; i < myNums.length ; i++) {
    newArray.push(myNums[i] + myNums[i])
}

console.log(newArray)

// Second method --> map take function as a paramenter

function addition(ele) {
    return ele + ele
}

let add = myNums.map(addition)

console.log(add)

// Third method --> directly using map function
let addSelf = myNums.map((a) => a + a)

console.log(addSelf)