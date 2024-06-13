/**
 * Array Methods
 * - Array.every(CallbackFunctoin(Element, Index, Array), This Argument)
 * --- CallbackFunction => The function will be executed on the given array
 * ------ Element => The current element to access
 * ------ Index => The current array working with
 * ------ Array => Then current array working with
 * --- This Argument => Value to use as This when Executing Callback Function
 * Returns:
 * - True | False => if all the elements in the array achieve | don't achieve the condition
 */


const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
};

let mainLocation = 15

let locationsArray = Object.keys(locations).map((n) => +n);
console.log(locationsArray);

let check = locationsArray.every(function(e) {
    return e > this;
}, mainLocation);

console.log(check)