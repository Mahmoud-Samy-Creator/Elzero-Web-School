function getLastDigit(num) {
    num = num.toString().split("").splice(-1);
    [number] = num;

    return +number;
}

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number