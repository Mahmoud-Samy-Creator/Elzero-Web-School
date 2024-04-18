function multiply(...args) {
  let result = 1
  for (arg of args) {
    if (typeof arg === 'number') {
      result *= Math.trunc(arg)
    }
  }
  console.log(result)
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000