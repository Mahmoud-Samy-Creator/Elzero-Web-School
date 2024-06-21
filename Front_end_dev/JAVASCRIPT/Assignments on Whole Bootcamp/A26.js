let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// Method [1]
console.log([...new Set(myArr)]);

// Method [2]
console.log(Array.from(new Set(myArr)));

// Method [3]
let newSet  = new Set();
myArr.forEach((ele) => {
    newSet.add(ele);
})
console.log([...newSet]);

// Method [4]
let newArr = []
for (ele of myArr) {
    if (!newArr.includes(ele)) {
        newArr.push(ele);
    }
}
console.log(newArr);
// Output Needed
// [10, 20, 30, 50]
