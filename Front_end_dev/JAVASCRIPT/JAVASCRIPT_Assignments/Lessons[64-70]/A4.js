function specialMix(...data) {
  let result = 0
  for (obj of data) {
    if (isNaN(parseInt(obj)) === false) {
      result += parseInt(obj)
    }
  }
  if (result === 0) return(`All Is String`)
  return result
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings