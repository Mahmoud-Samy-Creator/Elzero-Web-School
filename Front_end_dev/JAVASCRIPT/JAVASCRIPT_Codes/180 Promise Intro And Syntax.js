/**
 * Promis Intro and Syntax
 * - Promises in Js is like a Promis in real life
 * - Promises is something that will happen in the future
 * - Promises avoid callback hell
 * - Promises is the Object that represents the status of an
    Asynchrounus Operation and it's resulting value

 * - Promises status
    --- Pending: Initial state.
    --- Fulfilled: completed successfully.
    --- Rejected: Failed.

    - Story
    -- Once A promise Has been called, it will start in a pending state.
    -- The created Promse will eventually end in a resolved state or in a rejected state.
    -- Calling the callback function (Passed to then and catch) Upon Fishing.

    - Then
    --- Taked 2 optional arguments [Callback for success or failure]
 */

/* Promises Syntax */
const myPromise = new Promise((resolveFunction, rejectFunction) => {
    // let connect = true;
    let connect = false;
    if (connect) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction("Connection Failed");
    }
}).then(
    (resolve) => console.log(`Good ${resolve}`),
    (reject) => console.log(`Bad ${reject}`)
);

console.log(myPromise);
