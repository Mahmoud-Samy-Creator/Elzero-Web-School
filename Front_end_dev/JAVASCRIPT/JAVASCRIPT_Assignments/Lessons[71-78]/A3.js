let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newMyArray = myArray
                .map(ele => {
                    if (Array.isArray(ele)) {
                        ele = ele
                        .filter(ele => ele != ",")
                        .join("")
                    }
                    return ele
                })
                .reduce((acc, curr) => acc + curr)
console.log(newMyArray)

// Elzero