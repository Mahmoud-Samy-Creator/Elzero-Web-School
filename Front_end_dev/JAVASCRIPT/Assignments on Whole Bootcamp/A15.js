function concatenateWithoutLast(words) {
    let finalWords = [];
    for (let word of words) {
        word = word.split("").slice(0, word.length - 1).join("");
        finalWords.push(word);
    }
    return finalWords.join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School
