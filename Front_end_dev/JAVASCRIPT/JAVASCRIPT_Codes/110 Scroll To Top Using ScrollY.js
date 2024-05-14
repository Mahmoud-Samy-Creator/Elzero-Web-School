/**
 * BOM [Browser Object Model]
 * - Practice => Scroll To Top
 * - scrollX [Alias => PageXOffset]
 * - scrollY [Alias => PageYOffset]
 */

let btn = document.querySelector("button")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
})

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
