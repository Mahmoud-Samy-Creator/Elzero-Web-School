/**
 * Data and Time
 * - setTime(Milliseconds)
 * - setDate() => Day of the month [Negative & Positive]
 * - setFullYear(year, month (0-11)[OPT], day (1-31)[opt])
 * - setMonth(Month [0-11], day (1-31)[opt])
 * - setHours([0-23], min [opt](0-59), seconds [opt](0-59), MS => (0-999))
 * - setMinutes(Minutes [0-59], Seconds[OPT](0-59), MS => (0-999))
 * - setSeconds([0-59], MS[opt] => (0-999))
 */

let dateNow = new Date(); // Today's date
console.log(dateNow);

// dateNow.setTime(0); // Unix date
// dateNow.setDate(1);
// dateNow.setDate(2);
// dateNow.setDate(0);
// dateNow.setDate(-1);
// dateNow.setDate(31);
// dateNow.setFullYear(2020);
dateNow.setHours(1);
dateNow.setMinutes(22);
dateNow.setSeconds(44);
console.log(dateNow);