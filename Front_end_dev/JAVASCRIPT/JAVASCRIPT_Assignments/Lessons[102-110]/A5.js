let counterDiv = document.querySelector("div")

let counter = setInterval(()=>{
    counterDiv.innerHTML -= 1

    if (counterDiv.innerHTML === "5") {
        window.open(
            "https://elzero.org/",
            "_blank",
            "width=400, height=400, left=200, top=200"
        )
    }

    else if (counterDiv.innerHTML === "0") {
        clearInterval(counter)
    }
}, 1000)
