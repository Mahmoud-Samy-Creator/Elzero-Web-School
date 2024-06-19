let fileName = "Elzero.php";
let fileNameWithoutExtention = fileName.slice(0, fileName.indexOf("."));
let fileNameExtention = fileName.slice(fileName.indexOf(".") + 1, );

// Method one using string methods
console.log(fileNameWithoutExtention);
console.log(fileNameExtention);

// Method two using regex expression
console.log(fileName.match(/\w+/ig)[0])
console.log(fileName.match(/\w+/ig)[1])
