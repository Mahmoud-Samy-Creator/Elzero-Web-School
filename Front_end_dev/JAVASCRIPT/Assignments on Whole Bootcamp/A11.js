function slicingNumbers(num) {
    let str = num.toString().split("");
    let final = [];
    final.push(str.splice(0, 1).join(""));

    while(str.length) {
        final.push(str.splice(0, 3).join(""));
    }
    return final.join(",");
}

let myMoney = 5301503206;

console.log(slicingNumbers(myMoney));

// Needed Output
// 5,301,503,206