for (let i = 0 ; i < document.images.length ; i++) {
    let image = document.images[i]

    if (image.hasAttribute("alt")) {
        image.setAttribute("alt", "Old")
    } else {
        image.setAttribute("alt", "Elzero New")
    }
}
