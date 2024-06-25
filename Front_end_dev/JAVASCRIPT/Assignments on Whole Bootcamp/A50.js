function createStars(num) {
    let m = num * 2 - 1;
    let spaces = num * 2 - m;
    for (let i = 0 ; i < num ; i++) {
        console.log(" ".repeat(spaces) + "*".repeat(m));
        m -= 2;
        spaces += 1;
    }
    m = 1;
    spaces = num;

    for (let i = 0 ; i < num ; i++) {
        console.log(" ".repeat(spaces) + "*".repeat(m));
        spaces -= 1;
        m += 2;
    }
}
createStars(6);


  // Output Needed
//   ***********
//    *********
//     *******
//      *****
//       ***
//        *
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********