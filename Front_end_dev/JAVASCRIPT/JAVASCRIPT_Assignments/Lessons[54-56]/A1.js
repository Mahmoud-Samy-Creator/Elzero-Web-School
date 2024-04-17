let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (friends[counter]) {
  if (friends[counter][index] == 'A' || typeof friends[counter] === 'number') {
    counter++
    continue
  }
  console.log(`${counter} => ${friends[counter]}`)
  counter++
}
