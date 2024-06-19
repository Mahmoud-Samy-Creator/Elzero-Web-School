function addEl(str) {
    if (str === "" || str.slice(0, 2) === "El") return str;
    return "El" + str;
}

console.log(addEl(""));
console.log(addEl("Elzero"));
console.log(addEl("zero"));
