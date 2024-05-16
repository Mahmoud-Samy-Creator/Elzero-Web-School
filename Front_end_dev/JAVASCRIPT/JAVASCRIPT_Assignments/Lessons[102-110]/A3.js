let counterDiv = document.querySelector("div")

let counter = setInterval(() => {
    counterDiv.innerHTML -= 1
    if (counterDiv.innerHTML === "0") {
        clearInterval(counter)
    }
}, 1000)