function createStars(num) {
    let m = 1;
    for (let i = 1 ; i <= num ; i++) {
        console.log("*".repeat(m));
        m += 2;
    }
}

console.log(createStars(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************