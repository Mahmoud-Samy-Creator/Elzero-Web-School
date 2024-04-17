let start = 1;
let end = 6;
let breaker = 2;

for (let i = start ; i <= end ; i += start) {
  console.log(i)
  console.log(`-- ${breaker}`)
  console.log(`-- ${end - breaker}`)
}
