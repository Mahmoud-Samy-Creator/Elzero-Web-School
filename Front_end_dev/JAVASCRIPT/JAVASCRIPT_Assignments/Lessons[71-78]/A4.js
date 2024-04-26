let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newArray = numsAndStrings
            .filter(ele => Number.isInteger(ele))
            .map(ele => -ele)
console.log(newArray)
// [-1, -10, 10, 20, -5, -3]