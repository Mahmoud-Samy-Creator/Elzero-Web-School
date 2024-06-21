// Method 1
let smallLettersOne = "abcdefghijklmnopqrstuvwxyz";
console.log(smallLettersOne); // abcdefghijklmnopqrstuvwxyz

// Method 2
let smallLettersTwo = [];
for (let i = 97; i <= 122; i += 1) {
    smallLettersTwo.push(String.fromCharCode(i));
}
smallLettersTwo = smallLettersTwo.join("");
console.log(smallLettersTwo);

// Method 3
let smallLettersThree = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
console.log(smallLettersThree);

// Method 4
let smallLettersFour = [];
for (let i = 65; i <= 90; i++) {
    smallLettersFour.push(String.fromCharCode(i));
}
smallLettersFour = smallLettersFour.join("").toLocaleLowerCase();
console.log(smallLettersFour);


