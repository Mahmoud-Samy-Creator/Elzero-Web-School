function calculate(firstNum, secondNum, operation = 'add') {
  if (!secondNum) {
    console.log('Second Number Not Found')
    return
  }
  operation === 'subtract' ? console.log(firstNum - secondNum) : operation === 'multiply' ? console.log(firstNum * secondNum) : console.log(firstNum + secondNum)
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600