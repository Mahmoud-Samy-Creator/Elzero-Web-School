/**
 * DOM [Events Simulation]
 * click
 * focus
 * blur
 * Idea => Initiate an event @ action occured
 */

let one = document.querySelector(".one")
let two = document.querySelector(".two")

// @onload action occured
window.onload = function() {
    // Focus event initiated
    two.focus()
}

one.onblur = function () {
    document.links[0].click();
}