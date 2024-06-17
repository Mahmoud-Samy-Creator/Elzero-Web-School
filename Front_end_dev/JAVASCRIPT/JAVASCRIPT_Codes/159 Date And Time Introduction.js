/**
 * Data and Time
 * - Data Constructor
 * Static Methods
 * - Data.now()
 * 
 * - To Track Time You Need Starting Point
 * - Epoch Time Or Unix Time In CS Is the Number of Seconds since Jan 1, 1970
 */

let dateNow = new Date();

console.log(dateNow); // Todays date
console.log(Date.now()); // Milliseconds since Jan 1, 1970

let seconds = Date.now() / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let years = days/ 365;

// Time since 1970
console.log(seconds);
console.log(minutes);
console.log(hours);
console.log(days);
console.log(years);