let available = true

let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", 'JS'],
    available: false,
    address: {
        ksa: "Riyad",
        egypt: {
            one: "Cairo",
            two: "Gize",
        },
    },
    checkAv: function () {
        if (user.available === true) {
            return `Free for Work`
        }
        return `Not Free`
    },
}

console.log(user.name) // "Osama"
console.log(user.age) // 38
console.log(user.skills) // ["HTML", "CSS", 'JS']
console.log(user.skills.join(" | ")) // HTML | "CSS" | "JS"
console.log(user.skills[2])  // JS
console.log(user.address.ksa) // "Riyad"
console.log(user.address.egypt) // {one: "Cairo", two: "Gize"}
console.log(user.address.egypt.one) // "Cairo"
console.log(user["address"].egypt.one);
console.log(user["address"]["egypt"]);
console.log(user["address"]["egypt"]["one"]);
console.log(user.checkAv()) // Not Free 