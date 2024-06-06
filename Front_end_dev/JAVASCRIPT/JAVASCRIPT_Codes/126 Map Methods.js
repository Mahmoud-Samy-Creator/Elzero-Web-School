/**
 * Map Data Type
 * = Methods:
 * -- set
 * -- get
 * -- delete
 * -- clear
 * -- has
 * 
 * = Properties
 * -- size
 */

/* Adding [Key, Value] to a map 
    - set and get
    - Direct add @ decleration
*/

let myMap = new Map();
let myNewMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
]);
myMap.set(10, "Number");
myMap.set("Name", "String");

console.log(myMap)
console.log(myMap.get(10))
console.log(myMap.get("Name"))

console.log("#####")
console.log(myNewMap)
console.log(myNewMap.get(10))
console.log(myNewMap.get("Name"))
console.log(myNewMap.get(false))

/* Delete a [key, value] pair using delete method*/

myNewMap.delete(10)
console.log(myNewMap.delete("js")) //false
console.log(myNewMap)
console.log(myNewMap.size)

/* Ensuring of element existance using has method */

console.log(myNewMap.has("js")) // false
console.log(myNewMap.has("Name")) // true

/* Clearing all elements @ once using clear elements */
myMap.clear()
myNewMap.clear()

console.log(myMap)
console.log(myNewMap)