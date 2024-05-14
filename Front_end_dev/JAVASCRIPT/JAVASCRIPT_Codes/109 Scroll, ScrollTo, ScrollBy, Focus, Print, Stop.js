/**
 * BOM [Browser Object Model]
 * - stop()
 * - print()
 * - focus()
 * - scrollTo(x, y || options)
 * - scroll(x, y || options)
 * - scrollBy(x, y || option)
 */

windows.stop()
windows.print()
windows.focus()

window.scrollTo(500, 200)
window.scrollBy(500, 200)

// By using options

window.scrollTo({
    left: 2000,
    top: 3000,
    behavior: "smooth",
});