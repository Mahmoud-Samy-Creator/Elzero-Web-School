/**
 * Destructuring
 * - Destructuring Objects
 * --- Naming the Variables
 * --- Add New Property
 * --- Nested Object
 * --- Destructuring The Nested Object Only
 */

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    },
};

const { theName: n,
        theAge: a,
        theCountry,
        theColor: co = "Red",
        skills: {html: h, css},
    } = user;

console.log(n)
console.log(a)
console.log(theCountry)
console.log(co)
console.log(`My HTML Skills Progress Is ${h}`)
console.log(`My CSS Skills Progress Is ${css}`)
