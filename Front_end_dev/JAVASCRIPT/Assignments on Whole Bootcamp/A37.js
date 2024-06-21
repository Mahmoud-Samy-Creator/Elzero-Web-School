let numOne = 100;
let numTwo = 200;

if (numOne > numTwo) {
    console.log("1st > 2nd");
} else if (numOne < numTwo) {
    console.log("1st < 2nd");
} else {
    console.log("1st = 2nd");
}

// 1st < 2nd
numOne > numTwo ? console.log("1st > 2nd") : numOne < numTwo ? console.log("1st < 2nd") : console.log("1st = 2nd");
// Write Your Ternary Operator Code Here