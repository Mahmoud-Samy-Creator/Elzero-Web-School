function createStars(num) {
    let m = 1;
    for (let i = 0 ; i < num ; i++) {
        console.log("*".repeat(m));
        m += 2;
    }
    m = num * 2 - 3;
    for (let i = num - 1 ; i > 0 ; i--) {
        console.log("*".repeat(m));
        m -= 2;
    }
}

console.log(createStars(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *