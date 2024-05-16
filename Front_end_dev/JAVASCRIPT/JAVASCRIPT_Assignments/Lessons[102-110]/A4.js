let counterDiv = document.querySelector("div")

let counter = setInterval(()=>{
    if (counterDiv.innerHTML === "0") {
        window.open(
            "https://elzero.org/",
            "_blank",
            "width=400, height=400, left=200, top=200"
        )
    } else {
        counterDiv.innerHTML -= 1
    }
}, 1000)
