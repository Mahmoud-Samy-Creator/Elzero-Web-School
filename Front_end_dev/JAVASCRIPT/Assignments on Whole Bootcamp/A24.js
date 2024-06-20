function dashBetweenOdd(num) {
    let numArr = num.toString().split("");
    let result = [];

    for (let i = 0; i < numArr.length; i++) {
        result.push(numArr[i]);
        if (i < numArr.length - 1 && numArr[i] % 2 !== 0 && numArr[i + 1] % 2 !== 0) {
            result.push('-');
        }
    }

    return result.join("");
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
