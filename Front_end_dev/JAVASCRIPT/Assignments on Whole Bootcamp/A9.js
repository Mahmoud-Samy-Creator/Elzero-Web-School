function swapEveryTwoChars(word) {
    let str = word.split("");

    for (let i = 0 ; i < str.length ; i += 2) {
        if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
    }

    return str.join("")
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello