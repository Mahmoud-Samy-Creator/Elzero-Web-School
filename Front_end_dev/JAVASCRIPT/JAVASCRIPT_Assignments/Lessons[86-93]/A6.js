// Getting the main elements
let elementsNumberInput = document.querySelector("[name = 'elements']")
let elementsTextInput = document.querySelector("[name = 'texts']")
let submitBtn = document.querySelector("[type = 'submit'")


submitBtn.onclick = function (event) {
    event.preventDefault()
    document.querySelectorAll(".box").forEach(element => element.remove())
    let selectedValue = document.querySelector('select[name="type"]').value;

    for (let i = 0 ; i < elementsNumberInput.value ; i++) {
        let newElement = document.createElement(selectedValue)
        newElement.innerHTML = elementsTextInput.value
        newElement.setAttribute("class", "box")

        document.body.appendChild(newElement)
        console.log(newElement)
    }
    console.log(elementsTextInput.value)
}

