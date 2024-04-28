/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this)

myVar = 100

function sayHello() {
    console.log(this)
    return this
}

sayHello()

console.log(sayHello())

let user = {
    age: 38,
    ageInDays: function () {
        console.log(this)
        return this.age * 365
    }
}

console.log(user.age)
console.log(user.ageInDays())