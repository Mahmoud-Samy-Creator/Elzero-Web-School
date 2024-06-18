/**
 * Promise Training
 * We will go to the meeting, Promise me That we will find 4 Employees
 * .then(we will choose 2 people)
 * .then(we will test them and get 1 of them)
 * .catch(No one came)
 * 
 * Then     => Promise is successull use the resolved date
 * Catch    => Promise is failed, catch the error
 * Finally  => Promise Successfull or failed finally do something
 */

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    // let employees = ["Osama", "Sayed", "Ahmed", "Mahmoud"];
    let employees = ["Osama", "Sayed"];
    if (employees.length === 4) {
        resolveFunction(employees);
    } else {
        rejectFunction(Error("Number of employees is not 4"));
    }
}).then((resolved) => {
    resolved.length = 2;
    return resolved;
}).then((resolved) => {
    resolved.length = 1;
    console.log(`The choosen employee is ${resolved}`);
}).catch((rejected) => {
    console.log(rejected);
}).finally(console.log("The operation is done"));