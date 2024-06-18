/**
 * Async & Await with Try, Catch, Finally
 */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("I am the Good Promise");
        reject("I am the Bad Promise");
    }, 3000);
});

async function readData() {
    console.log("Before Promise");
    try {
        console.log(await myPromise);
    } catch(reason) {
        console.log(reason);
    } finally {
        console.log("After Promise");
    }
}

readData()