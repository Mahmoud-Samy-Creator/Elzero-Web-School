/**
 * DOM [CSS]
 * style
 * cssText
 * removeProperty(propertyName) [Inline, StyleSheet]
 * setProperty(PropertyName, value, priority)
 */

let element = document.getElementById("my-div")

// Inline style using js
element.style.color = "red"
element.style.fontWeight = "bold"

// Inline style using js in one line
element.style.cssText = "font-size: 90px; color: green; font-width: 600;"

// Remove a css property
element.style.removeProperty("color")

// Setting property
element.style.setProperty("background-color", "red")