let a = 10, b = 20

// Ouput
/*
Normal Concatenate
20
10
*/
console.log(String(a) + String(b)); // Normal Concatenate => 1020
console.log(typeof(a), typeof(b)) // Normal Concatenate => 1020
/*
Template Literals Way
20
10
*/
console.log(`${a}` + `${b}`); // Template literal => 1020
console.log(typeof(`${a}` + `${b}`)) // Template literal type => 1020

document.write(a)
document.write(b)
