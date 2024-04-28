/*
  Object
  - Create Object With Create Method
*/

// Normal mode

let user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2
    }
}

console.log(user) // object
console.log(user.age) // 20
console.log(user.doubleAge()) // 40

// Create mode
let obj = Object.create({})
console.log(obj)

// Create elements for this object created by create method
obj.a = 100
console.log(obj) // { a: 100 }

let copyObj = Object.create(user)

console.log(copyObj)

console.log(copyObj.age)

copyObj.age = 50

console.log(copyObj.doubleAge()) //age = 50, 100