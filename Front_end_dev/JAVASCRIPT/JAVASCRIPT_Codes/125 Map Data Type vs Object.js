/**
 * Map data type
 * Syntax: new Map()
 * Mao & object comparizons
 */

/**
 * Map => Doesn't contain key by default
 * Objects => contain key by default
 */

let myObject = {}
let myEmptyObject = Object.create(null)
let myMap = new Map()

console.log(myObject)
console.log(myEmptyObject)
console.log(myMap)

/**
 * Map => Kay be anything [Function, Object, Any Primitive Data Types]
 * Object => String Or Symbol
 */

let myNewObject = {
    10: "Number",
    "10": "String", //overwrite
};

let myNewMap = new Map();

myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object")
myNewMap.set(function doSomeThing() {}, "Function");

console.log(myNewObject);
console.log(myNewMap);
console.log(myNewObject[10]); // String
console.log(myNewObject["10"]); // String
console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

/**
 * Map => Ordered By Insertion
 * Object => Not 100% Till Now
 */

/**
 * Map => Get Items by size
 * Object => Need to be done manually
 */

console.log(myNewMap.size)
console.log(Object.keys(myNewObject).length)

/**
 * Map => Can be directily Iterated
 * Object => Not Directly iteratedm must use Object.keys() and so on
 */

for (let [key, value] of myNewMap) {
    console.log(`${key} : ${value}`)
}

for (let i in Object.keys(myNewObject)) {
    console.log(Object.values(myNewObject)[i])
}

/**
 * Map => Better performance when add or remove Data
 * Object => Low Performance When Comparing To map
 */