let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

console.log(input)
console.log(result)
// input.oninput = () => console.log(input.value)

input.oninput = () => result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptio Pound`