/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = 'Elzero Web School'

console.log(a.indexOf("Web")); //7
console.log(a.indexOf("Web", 8)); //-1
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15 Counting from last
console.log(a.slice(0, 5))
console.log(a.repeat(5))
console.log(a.split())
console.log(a.split(""))
console.log(a.split("", 6))
