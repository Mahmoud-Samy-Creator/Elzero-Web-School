/**
 * Set vs Weakset
    "
    The WeakSet is weak, meaning references to objects in a WeakSet are
    held weakly. If no other references to an object stored in the weakSet
    exists, those objects can be garbage collected.
    "
 */

/* Data Type used */
/**
 * Set => Can store any data values
 * WeakSet => Collection of Objects only
 */

let mySet = new Set([1, 1, 1, 1, 2, 3, "A", "A"]);
let myws = new WeakSet([{ A: 1, B: 2}]);
console.log(mySet);
console.log(myws);

/* size determination using size property */
/**
 * Set => Have size property
 * WeakSet => Doesn't have size property
 */

console.log(mySet.size)
console.log(myws.size)

/* Keys, Values & entries */
/**
 * Set => Have Keys, Values & Entries
 * WeakSet => Doesn't Have Keys, Values & Entries
 */

let iterator = mySet.keys()

console.log(iterator)
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

/* forEach usage */
/**
 * Set => can use forEach
 * WeakSet => can't user forEach
 */

mySet.forEach((el => console.log(el))) ;