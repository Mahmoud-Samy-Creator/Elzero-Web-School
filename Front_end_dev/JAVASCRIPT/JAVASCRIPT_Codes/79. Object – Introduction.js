/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
    theName: "Osama",
    theAge: 38,
    // Method
    sayHello: function () {
        return "Hello";
    },
}

console.log(user.theName)
console.log(user.theAge)
console.log(user.sayHello())