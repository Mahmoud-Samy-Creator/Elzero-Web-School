let counterDiv = document.querySelector("div")

let counter = setInterval(()=>{
    if (counterDiv.innterHTML === "0") {
        clearInterval(count)
    } else {
        counterDiv.innerHTML -= 1
    }
}, 1000)