/**
 * JSON
 * - JSON.parse() => Convert Text Data to JS object
 * - JSON.stringify() => Convert JS objects to JSON
 */

/* Server ===> User */
/* JSON is a text format "String" */
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

/* Convert JSON to JS Object */
let myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);


/* User ===> Server */
/* User edit on the information */
myJsObject.Username = "Elzero";
myJsObject.Age = 40;
console.log(myJsObject);

/* Convert JS Object to JSON */
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
