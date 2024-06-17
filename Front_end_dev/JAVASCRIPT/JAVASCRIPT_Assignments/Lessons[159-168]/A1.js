let dateNow = new Date();
let birthday = new Date("Jul 2, 2000");
let diff = dateNow - birthday;

console.log(`MilliSeconds: ${diff}`);
console.log(`Seconds: ${diff / 1000}`);
console.log(`Minutes: ${diff / 1000 / 60}`);
console.log(`Hours: ${diff / 1000 / 60 / 60}`);
console.log(`Days: ${diff / 1000 / 60 / 60 / 24}`);
console.log(`Years: ${diff / 1000 / 60 / 60 / 24 / 365}`);
