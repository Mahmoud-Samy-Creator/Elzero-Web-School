function repeatWithRules(word) {
    return word
        .split("")
        .map((char, index) => char.repeat(index + 1))
        .join("");
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello"));  // Heelllllllooooo
