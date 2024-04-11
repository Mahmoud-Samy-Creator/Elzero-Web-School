/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = '   Ahmed   ';

console.log(theName)
console.log(theName[3])
console.log(theName[6])
theName = theName.trim()
console.log(theName)
console.log(theName.charAt(3))
console.log(theName.toUpperCase())
console.log(theName.toLowerCase())
theName = '   Ahmed   '
console.log(theName.trim().charAt(2).toUpperCase())