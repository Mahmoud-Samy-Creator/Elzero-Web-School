/**
 * Promise
 * All
 * All settled
 * Race
 */

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The first promise");
    }, 5000);
})
const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The second promise");
    }, 1000);
})
const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The third promise");
    }, 2000);
})

Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues)
);

Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues)
);

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues)
);