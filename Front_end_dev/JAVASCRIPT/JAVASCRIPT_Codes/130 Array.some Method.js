/**
 * Array Methods
 * - Array.some(CallbackFunctoin(Element, Index, Array), This Argument)
 * --- CallbackFunction => The function will be executed on the given array
 * ------ Element => The current element to access
 * ------ Index => The current array working with
 * ------ Array => Then current array working with
 * --- This Argument => Value to use as This when Executing Callback Function
 * Usage:
 * - Check if Element Exists in Array
 * - Check if Number In rage
 * Returns:
 * - True | False
 */

// Example [1]
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myNumber = 10;
// let check = nums.some(function(e) {
//     return e > 5;
// });

// let check = nums.some((e) => e > 5);

let check = nums.some(function(e) {
    return e > this;
}, myNumber)

console.log(check)


// Example [2]
function checkValue(arr, val) {
    return arr.some(function (e) {
        return e === val;
    });
};
console.log(checkValue(nums, 20)) //False
console.log(checkValue(nums, 5)) //true

// Example [3]
let range = {
    min: 10,
    max: 20,
};

let checkNumberRange = nums.some(function(e) {
    return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberRange)