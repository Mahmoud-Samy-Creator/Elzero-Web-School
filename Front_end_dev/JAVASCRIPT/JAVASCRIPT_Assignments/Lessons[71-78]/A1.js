let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newMix = mix.map(function(ele) {
//     return !isNaN(ele) ? "" : ele
// })
let newMix = mix
            .map(ele => !isNaN(ele) ? "" : ele)
            .reduce((acc, curr) => acc + curr)
console.log(newMix)