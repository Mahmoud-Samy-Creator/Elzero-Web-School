/**
 * To understand Ajax, Fetch, Promises
 * Pyramid of Doom || Callback Hell
 * - What is Callback.
 * - Call Hell Example.
 * 
 * What Is Callback
 * - A Function that is passed into another one an argument to be executed later
 * - Function to Handle Photos
 * ----- [1] Download Photo From URL
 * ----- [2] Resize photo
 * ----- [3] Add Logo to the Photo
 * ----- [4] SHow the photo website
 */

/* CallBack function */
function makeItRed(e) {
    e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

setTimeout(() => {
    console.log("Download photo from URL");
    setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
            console.log("Add logo to the photo");
            setTimeout(() => {
                console.log("Show the Photo in website");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
