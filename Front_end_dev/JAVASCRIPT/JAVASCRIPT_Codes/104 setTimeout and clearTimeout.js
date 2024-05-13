/**
 * BOM [Brownser Object Model]
 * - setTimeout(Function, Timeout, Additional Params)
 * - clearTimeout(Identifier)
 */

setTimeout(function () {
    console.log("Msg")
}, 3000)

// setTimeout(sayMsg, 4000);


// function sayMsg() {
    //     console.log("I am Message")
    // }


// function - time - arg_1 - arg_2
// setTimeout(sayMsg, 3000, "Amr", 23);

// function sayMsg(user, age) {
//     console.log(`I am Message to ${user}, His Age: ${age}`)
// }

let btn = document.querySelector("button")

let counter = setTimeout(sayMsg, 3000)

btn.onclick = function() {
    clearTimeout(counter)
}

function sayMsg() {
    console.log("I am a message")
}