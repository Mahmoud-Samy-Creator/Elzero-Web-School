let myString = "EElllzzzzzzzeroo";

let myNewString = myString
                .split("")
                .filter(function(current, index, arr) {
                    return current != arr[index + 1]
                })
                .join('')

console.log(myNewString)