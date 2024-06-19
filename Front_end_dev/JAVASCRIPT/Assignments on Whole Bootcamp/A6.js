function checkBiggestNum(word) {
    return Math.max(...word.split("").map((num) => +num));
}

  console.log(checkBiggestNum("1500654")); // 6
  console.log(checkBiggestNum("8509507")); // 9