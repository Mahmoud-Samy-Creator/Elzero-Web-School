let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found")
}

haystack.includes(needle) ? console.log("Found") : console.log("not Found")

if (haystack[1] === needle) {
  console.log("Found")
}
