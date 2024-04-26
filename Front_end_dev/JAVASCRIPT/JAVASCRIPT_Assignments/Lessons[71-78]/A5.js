let nums = [2, 12, 11, 5, 10, 1, 99];

let newNum = nums
            .reduce(function(acc, curr) {
                if (curr % 2 == 0) {
                    return curr * acc
                } else {
                    return curr + acc
                }
            }, 1)

console.log(newNum)
// 500