let myArr = ["69", "108", "122", "101", "114", "111"];
let result = [];
myArr.forEach((ele) => {
    result.push(String.fromCharCode(ele));
})

result = result.join("");

console.log(result); // Elzero