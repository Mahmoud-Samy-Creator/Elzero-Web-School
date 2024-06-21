let nums = [10, -20, 300, 50, 100, -50];

let maxOne = 0
let maxTwo = 0
let maxThree = 0
let maxFour = 0

// Method 1
for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] > maxOne) maxOne = nums[i];
}

// Method 2
maxTwo = Math.max(...nums);

// Method 3
maxThree = nums.reduce((acc, curr) => Math.max(acc, curr));

// Method 4
maxFour = nums.map((ele) => ele < 0 ? -ele : ele).sort((a, b) => a - b).reverse()[0];


console.log(maxOne); // 300
console.log(maxTwo); // 300
console.log(maxThree); // 300
console.log(maxFour); // 300