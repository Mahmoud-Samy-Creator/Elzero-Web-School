let setOfNumner = new Set([10]);
setOfNumner.add(20).add(setOfNumner.size);
console.log(setOfNumner);
console.log(Array.from(setOfNumner)[2]);