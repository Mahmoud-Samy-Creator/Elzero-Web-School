let arr = [1, 1, 1, 2, 3, 4, 3];
let newSet = new Set(arr);
// Method 1
let uniqueElementsOne = [...newSet]
console.log(uniqueElementsOne); // [1, 2, 3, 4]

// Method 2
let uniqueElementsTwo = Array.from(newSet);
console.log(uniqueElementsTwo);

// Method 3
let newSetting  = new Set();
arr.forEach((ele) => {
    newSetting.add(ele);
})
let uniqueElementsThree = [...newSetting];
console.log(uniqueElementsThree);

// Method 4
let uniqueElementsFour = []
for (ele of arr) {
    if (!uniqueElementsFour.includes(ele)) {
        uniqueElementsFour.push(ele);
    }
}
console.log(uniqueElementsFour);

