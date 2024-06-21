let myArray = [100, 200, 300, 400];

// Method 1
let clonedArrayOne = [...myArray];

// Method 2
let clonedArraySecond = Array.from(myArray, x => x);

// Method 3
let clonedArrayThree = [];
myArray.forEach((ele) => clonedArrayThree.push(ele));

// Method 4
let clonedArrayFour = [];
for (let i = 0 ; i < myArray.length ; i++) {
    clonedArrayFour[i] = myArray[i];
}

// Method 5
[a, b, c, d] = myArray;
let clonedArrayFive = [a, b, c, d];

// Method 6
let clonedArraySix = [];

while(myArray.length) {
    clonedArraySix.push(myArray.pop())
}

clonedArraySix = clonedArraySix.reverse();
myArray = [100, 200, 300, 400];

// Method 7
let clonedArraySeven = myArray.splice(0, myArray.length);
myArray = [100, 200, 300, 400];

// Method 8
let clonedArrayEight = myArray.slice();

// Method 9
let clonedArrayNine = JSON.parse(JSON.stringify(myArray));



console.log(clonedArrayOne); // [100, 200, 300, 400]
console.log(clonedArraySecond) // [100, 200, 300, 400]
console.log(clonedArrayThree); // [100, 200, 300, 400]
console.log(clonedArrayFour); // [100, 200, 300, 400]
console.log(clonedArrayFive); // [100, 200, 300, 400]
console.log([a, b, c, d]); // [100, 200, 300, 400]
console.log(clonedArraySix); // [100, 200, 300, 400]
console.log(clonedArraySeven); // [100, 200, 300, 400]
console.log(clonedArrayEight); // [100, 200, 300, 400]
console.log(clonedArrayNine); // [100, 200, 300, 400]