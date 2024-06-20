function formatName(theName) {
    let names = theName.split(" ");
    let final = [];

    for (let name of names) {
        final.push(name[0]);
    }

    for (let i = 1 ; i < final.length ; i++) {
        final[i] = final[i].toLowerCase();
    }
    return final.join('.');
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s