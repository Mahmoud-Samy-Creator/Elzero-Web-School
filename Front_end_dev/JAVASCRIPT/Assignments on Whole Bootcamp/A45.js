let rangeEnd = 10;
let myRangeOne = [];
let myRangeTwo = [];
let myRangeThree = [];
let m = 1;
// Method 1
for (let i = 1 ; i <= rangeEnd ; i++) myRangeOne.push(i);

// Method 2
while(m <= rangeEnd) {
    myRangeTwo.push(m);
    m++;
}

// Method 3
myRangeThree = Array.from({ length: rangeEnd }, (_, index) => index + 1);

// Output Needed
console.log(myRangeOne); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRangeTwo); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRangeThree); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]