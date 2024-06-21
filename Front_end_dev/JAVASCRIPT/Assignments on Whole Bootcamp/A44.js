let last = 30;

let numbers = [];
let newNumbers = [];

for (let i = last ; i > 0 ; i--) {
    if (!(i % 2 === 0)) {
        numbers.push(i);
    }
}

for (let i = 0 ; i < numbers.length ; i++) {
    if (i % 2 === 0) {
        newNumbers.push(numbers[i]);
    }
}
let sum = newNumbers.reduce((acc, curr) => acc + curr);
console.log(newNumbers);
console.log(sum);