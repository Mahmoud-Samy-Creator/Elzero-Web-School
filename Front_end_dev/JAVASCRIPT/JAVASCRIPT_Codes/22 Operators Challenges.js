/*
  Challenge 1
*/

let a = 10; //8
let b = "20"; //21
let c = 80; // 79

console.log(++a + +b++ + +c++ - +a++); //11 + 20 + 80 - 11 = 100 
console.log(++a + -b + +c++ - -a++ + +a); //94
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 79 + 20 + 9*20 - 21*9 + 8 - 1 = 98

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * 20); // 2000
console.log((-d + f) + +e*2 + g*3); // 173