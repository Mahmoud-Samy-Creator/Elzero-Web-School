// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let size = chars.filter((e) => typeof e === 'number').length;
chars = chars.filter((e) => typeof e === "string");

let finalStr = [...chars.slice(0, size), ...chars];
console.log(finalStr);