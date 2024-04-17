let index = 10;
let jump = 2;
let limit = index - jump - jump - jump;
for (;;) {
  if ((index < limit)) break
  console.log(index)
  index = index - jump
}
