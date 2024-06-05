/*
    Destructuring
    - Challenge
*/

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [obj1, obj2, obj3] = myFriends;

if (chosen == 1) {
    let {title: a, age: b, available: c, skills: [, d],} = obj1;
    console.log(a)
    console.log(b)
    console.log(c ? "available": "Not Available")
    console.log(d)
} else if (chosen == 2) {
    let {title: a, age: b, available: c, skills: [, d],} = obj2;
    console.log(a)
    console.log(b)
    console.log(c ? "available": "Not Available")
    console.log(d)
} else if (chosen == 3) {
    let {title: a, age: b, available: c, skills: [, d],} = obj3;
    console.log(a)
    console.log(b)
    console.log(c ? "available": "Not Available")
    console.log(d)
} else {
    console.log("Not available")
}