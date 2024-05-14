// setInterval(() => {
//     console.log("msg")
// }, 1000)

// setInterval(sayMsg, 1000, "Osama", 38)

// function sayMsg(user, age) {
//     console.log(`I am Message for ${user}, His age is: ${age}`)
// }

let div = document.querySelector("div")
let counter = setInterval(countdown, 1000)

function countdown() {
    div.innerHTML -= 1

    if (div.innerHTML === "0") {
        clearInterval(counter)
    }
}
