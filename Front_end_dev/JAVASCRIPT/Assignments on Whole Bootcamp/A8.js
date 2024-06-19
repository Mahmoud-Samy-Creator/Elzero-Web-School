function findTheClosest(nums, goal) {
    let diffs = [];

    for (let num of nums) {
        diffs.push(goal - num);
    }

    return nums[diffs.indexOf(Math.min(...diffs))];
}

let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

console.log(findTheClosest(nums, goal));

// Closest Number Is 88