let nums = [20, 100, 50, 10, 15, -20, 30];

nums.sort(function(a, b){return a-b})

console.log([nums[nums.length - 1], nums[nums.length - 2]]);
// Needed Output
// [100, 50]