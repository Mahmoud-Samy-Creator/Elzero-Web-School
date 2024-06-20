let st = "Web SchoolElzero ";

let wordOne = st.slice(-7);
let wordTwo = st.slice(-13, -7) + ' ';
let wordThree = st.slice(-st.length - 1, -13) + ' ';

console.log(wordOne + wordTwo + wordThree);
// Needed Output
// "Elzero Web School"