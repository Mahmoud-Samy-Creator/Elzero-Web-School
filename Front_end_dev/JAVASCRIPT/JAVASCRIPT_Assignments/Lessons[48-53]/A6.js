let start = 0;
let swappedName = "elZerO";
let modified = ""

for (let i = start ; i < swappedName.length ; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    modified += swappedName[i].toUpperCase()
    continue
  }
  modified += swappedName[i].toLowerCase()
}

console.log(modified)
// Output
// "ELzERo"