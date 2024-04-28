/*
  Object
  - Create Object With Assign Method
*/

// Normal method

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

// Using assign mode
let finalObject = Object.assign (targetObject, obj1, obj2);

console.log(finalObject)

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);