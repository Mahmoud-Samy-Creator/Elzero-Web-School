function getCharacters(word, nums) {
    let wordOne = word.split("").slice(0, nums).join("");
    let wordTwo = word.split("").slice(-nums, ).join("");
    return wordOne + wordTwo;
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool