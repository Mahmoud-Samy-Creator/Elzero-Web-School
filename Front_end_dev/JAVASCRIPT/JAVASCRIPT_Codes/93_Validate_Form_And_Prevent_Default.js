/*
DOM [Events]
- Validate Form Practice
- Prevent Default
*/

// document.links[0].onmouseenter = function(event) {
//     console.log(event)
// }

document.forms[0].onsubmit = function(event) {
    let userValid = false
    let ageValid = false

    // Make the validation rule
    let userInput = document.querySelector("[name = 'username']")
    let ageInput = document.querySelector("[name = 'age']")

    // console.log(userInput.value)
    // console.log(userInput.value.length)
    // console.log(ageInput)
    // console.log(ageInput.value)
    // console.log(ageInput.value.length)


    if (userInput !== "" && userInput.value.length <= 10) {
        userValid = true
    }

    if (ageInput != "") {
        ageValid = true
    }
    if (userValid === false|| ageValid === false) {
        event.preventDefault()
    }
}
document.links[0].onclick = function(event) {
    console.log(event)
    event.preventDefault()
}