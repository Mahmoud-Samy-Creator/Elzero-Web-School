/**
 * Date and Time
 * - Track Operation Time
 * 
 * Search
 * - performance.now()
 * - performance.mark()
 */

// Start Time
let start = new Date();

for (let i = 0; i < 10000 ; i++) {
    document.write(`<div>${i}</div>`);
}

let end = new Date();

let duration = end - start

console.log(duration);