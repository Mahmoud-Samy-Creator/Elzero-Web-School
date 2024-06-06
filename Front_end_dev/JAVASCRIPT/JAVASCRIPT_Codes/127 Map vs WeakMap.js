/**
 * Map vs WeakMap
    "
        WeakMap Allows garbage collector to do it's task but not Map
    "
    --
    Map     => Key can be anything
    WeakMap => Key Can be Object Only
 */

let mapUser = { theName: "Elzero" };
let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null //Override the Reference
console.log(mapUser);
console.log(myMap);
console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null;

console.log(myWeakMap)