/*
DOM [Events]
- Use Events On HTML
- Use Events On JS
--- onclick
--- oncontextmenu
--- onmouseenter
--- onmouseleave

--- onload
--- onscroll
--- onresize

--- onfocus
--- onblur
--- onsubmit
*/

let myBtn = document.getElementById("btn")

myBtn.onclick = () => console.log("Clicked")
myBtn.oncontextmenu = () => console.log("Context menu")
myBtn.onmouseenter = () => console.log("Mouse Enter")
myBtn.onmouseleave = () => console.log("Mouse leave")

window.onload = () => {console.log("loading")}
window.onscroll = () => console.log("Scrolling")
window.onresize = () => console.log("Resizing")
