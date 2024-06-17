/**
 * Date and Time
 * 
 * - new Date(timestamp)
 * - new Date(Date string)
 * - new Date(Numerical value)
 * 
 * Format:
 * - "Oct 25 1982"
 * - "10/25/1982"
 * - "1982-10-25" => ISO International Standered
 * - "1982"
 * - "82"
 * - 1982, 9, 25, 2, 10, 0
 * - 1982. 9, 25
 * - "1982-10-25T06:10:00Z"
 * Date.parse("String") // Read date from string
 */

let date1 = new Date(0);
console.log(date1);

console.log(Date.parse("nov 9 98"));
let date2 = new Date(910562400000);
console.log(date2);

let date3 = new Date("11 9 98");
let date4 = new Date("1998-11-9");
let date5 = new Date("1998-11");
let date6 = new Date("1998");
let date7 = new Date("98");
let date8 = new Date(1998, 10, 9, 4, 20, 10);
let date9 = new Date(1998, 10, 9);
let date10 = new Date("1982-10-25TO6:10:00Z");

console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7);
console.log(date8);
console.log(date9);
console.log(date10);
