function customCalc (...nums) {
    let sum = 0;
    let arr = Array.from(nums);
    arr.forEach((ele) => {
        if (!Number.isNaN(+ele)) {
            sum += +ele;
        }
    })
    return sum * +arr[0] * +arr[arr.length - 1];
}
console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10