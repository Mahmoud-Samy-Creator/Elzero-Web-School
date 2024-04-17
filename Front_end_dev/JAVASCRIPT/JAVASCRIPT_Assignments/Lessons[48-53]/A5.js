let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = 0
for (let i = 0 ; i < friends.length ; i++) {
  if (friends[i][0] == letter.toUpperCase()) continue
  j++
  console.log(`${j} => ${friends[i]}`)
}

/*
  "1 => Sayed"
  "2 => Eman"
  "3 => Mahmoud"
  "4 => Osama"
  "5 => Sameh"
*/