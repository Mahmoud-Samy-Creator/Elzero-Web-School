let st = "elzero";

// Method [1]
console.log(st[0].toUpperCase() + st.slice(1));

// Method [2]
console.log(`${st[0].toUpperCase()}${st.slice(1)}`);

// Method [3]
console.log(st.split("").map((char, index) => index === 0 ? char.toUpperCase() : char).join(""));

// Method [4]
console.log(st.replace(/^./, char => char.toUpperCase()));

// Method [5]
console.log(st.charAt(0).toUpperCase() + st.substring(1));

// Method [6]
let [first, ...rest] = st;
let result = first.toUpperCase() + rest.join("");
console.log(result);



// // Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"