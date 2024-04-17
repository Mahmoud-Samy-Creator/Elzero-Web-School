let start = 10;
let end = 100;
let exclude = 40;

for (let i = start ; i <= end ; i += start) {
  if (i == 40) continue;
  console.log(i)
}