/**
 * Async
 * - Async Before Function Mean THis function return A Promise
 * - Async and Await Help in creating  Asynchrounus promise behavior in cleaner style
 */


async function getData() {
        // let users = [];
        let users = ["Mahmoud", "Adham", "Osama"];
        if (users.length > 0) {
            return ("Users found");
        } else {
            return ("No User Found");
        }
}
// function getData() {
//         // let users = [];
//         let users = ["Mahmoud", "Adham", "Osama"];
//         if (users.length > 0) {
//             return new Promise.resolve("Users found");
//         } else {
//             return new Promise.reject("No User Found");
//         }
// }
// function getData() {
//     return new Promise((res, rej) => {
//         // let users = [];
//         let users = ["Mahmoud", "Adham", "Osama"];
//         if (users.length > 0) {
//             res("Users found");
//         } else {
//             rej("No User Found");
//         }
//     })
// }

getData().then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
)