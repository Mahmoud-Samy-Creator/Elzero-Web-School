let userInput = window.prompt("Prompt Numbers From - To", "Example: 5-20")

let numberLimits = userInput
.split("-")
.map(num => parseInt(num))
.sort((a, b) => a - b)

// Method 1
let start = numberLimits[0]
let end = numberLimits[numberLimits.length-1]

for (let i = start ; i <= end ; i++) {
    let div = document.createElement("div")
    let divText = document.createTextNode(`${i}`)
    div.appendChild(divText)
    document.body.append(div)
}

