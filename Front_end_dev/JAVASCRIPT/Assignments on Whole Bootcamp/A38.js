let str = "i lovE elzeRO weB schOOL";

let newString = str.toLowerCase().split(" ");

for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
}

newString = newString.join(" ");
console.log(newString);
