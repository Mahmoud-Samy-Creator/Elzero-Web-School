/**
 * To Understand Ajax, Fetch, Promises
 * => Asynchrouous vs Syncronous Programming
 * Meaning
 * Syncronous:
 * - Operations runs in sequence
 * - Each Operation must wait for the previous one to complete
 * - Story from real life
 * 
 * Asyncronous:
 * - Operations run in parallel
 * - This means that an operation can occur while another one is still being processed
 * - Story from real life
 * 
 * Facebook as example
 * Simulation
 * 
 * Search:
 * - JS is a single threaded
 * - Multi Threaded languages
 */

// Synchronous
console.log("1")
console.log("2")
window.alert("Operation")
console.log("3")

// Asynchronous
console.log("1")
console.log("2")
setTimeout(() => console.log("oparation"), 3000);
console.log("3")
