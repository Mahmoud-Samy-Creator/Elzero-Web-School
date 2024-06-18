/**
 * Await
 * - Await Works only inside async functions
 * - Await Make js wait fro the promise result
 * - Await is more elegant syntax of getting promise result
 */

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I am the good promise");
    }, 3000);
});

async function readData() {
    console.log('Before Promise');
    await myPromise.then((resolved) => console.log(resolved));
    console.log('After Promise');
}

readData();
