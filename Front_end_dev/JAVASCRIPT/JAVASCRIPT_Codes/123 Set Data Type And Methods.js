/**
 * Set Data type
 * - Syntax: new Set(iterable)
 * -- Object to store unique values
 * -- Can't access Elements by index
 * 
 * Properties
 * - size
 * 
 * Methods
 * - add
 * - delete
 * - clear
 * - has
 */

let myData = [1, 1, 1, 2, 3];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
let myUniqueData = new Set().add(1).add(1).add(2).add(3);

console.log(myUniqueData.delete(3))
console.log(myUniqueData.delete(20))
console.log(myUniqueData.has(2))
console.log(myUniqueData.has(20))

console.log(myData)
console.log(myData.length)
console.log(myUniqueData)
console.log(myUniqueData.size)
console.log(myUniqueData[0]) //Undifiend



myUniqueData.clear()


