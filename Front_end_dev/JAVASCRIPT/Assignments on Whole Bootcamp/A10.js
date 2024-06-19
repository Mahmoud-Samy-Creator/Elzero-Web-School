// Write Your Function Implementation Here
String.prototype.elzeroRepeat = function(rep) {
    let str = [];
    for (let i = 0 ; i < rep ; i++) {
        str.push(this);
    }
    return str.join(" ").trim();
}
console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero