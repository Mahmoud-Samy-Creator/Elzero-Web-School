let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());