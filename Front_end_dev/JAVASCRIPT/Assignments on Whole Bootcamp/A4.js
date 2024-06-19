function checkRange(n1, n2, n3, n4, n5) {
    let start = n4;
    let end = n5;

    if (n1 >= start && n1 <= end) {
        if (n2 >= start && n2 <= end) {
            if (n3 >= start && n3 <= end) {
                return `Yes All Numbers In Range`;
            } else {
                return `Not All Numbers Is In Range`;
            }
        } else {
            return `Not All Numbers Is In Range`;
        }
    } else {
        return `Not All Numbers Is In Range`;
    }
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range