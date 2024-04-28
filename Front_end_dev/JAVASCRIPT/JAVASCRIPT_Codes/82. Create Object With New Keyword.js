/*
  Object
  - Create With New Keyword new Object();
*/

let user = new Object({
    age: 20
})

console.log(user)
console.log(user.age)

user.age = 38
user["country"] = "Egypt"

console.log(user)
console.log(user.age)
console.log(user.country)

user.sayHello = function () {
    return `Hello`
}

console.log(user.sayHello())