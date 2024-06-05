/**
 * Destructuring
 * - Destructuring Mixed Content
 */

const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh"
    },
};

// Object destructuring

const {
    theName: n,
    theAge: a,
    skills: [, , three],
    addresses: {egypt: e},
} = user;

console.log(`Your Name Is: ${n}`)
console.log(`Your Age Is: ${a}`)
console.log(`Your best skill is ${three}`)
console.log(`You Live in : ${e}`)
