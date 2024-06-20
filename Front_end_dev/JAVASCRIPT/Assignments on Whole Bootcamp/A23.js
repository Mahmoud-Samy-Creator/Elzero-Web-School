function reversing(str) {
    let words = str.split(",");

    for (let i = 0 ; i < words.length ; i++) {
        let letters = words[i].split("@");
        
        for (let j = 0 ; j < letters.length ; j++) {
            letters[j] = letters[j].split("").reverse().join("");
        }
        words[i] = letters.join("@");
    }

    return words.join(",");
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl