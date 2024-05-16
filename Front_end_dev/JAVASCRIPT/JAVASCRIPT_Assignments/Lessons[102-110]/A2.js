// creating element
let div = document.createElement("div");
let h6 = document.createElement("h6");
let p = document.createElement("p");
let btn = document.createElement("button")

h6.innerHTML = "Welcome";
p.innerHTML = "Welcome to Elzero Web School";
btn.innerHTML = "X"

// Styling elements
document.body.style.cssText = `
    display: flex;
    justify-content: center;
    `
div.style.cssText = `
    width: 200px;
    height: 50px;
    border: 0.5px solid #D2D2D2;
    border-radius: 5px;
    background-color: #EBEAEA;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

h6.style.cssText = `
    margin: 0;
    `

p.style.cssText = `
    margin: 0;
    font-size: 10px
    `

btn.style.cssText = `
    background-color: #f85c5c;
    border: 0.5px solid #d2d2d2;
    color: white;
    border-radius: 50%;
    font-size: 10px;
    position: absolute;
    top: -6px;
    right: -6px;
    padding: 2.5px 6px;
    `
// Adding Elements
div.appendChild(h6)
div.appendChild(p)
div.appendChild(btn)
document.body.appendChild(div);