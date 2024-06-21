// Write Your Function Here

function customMerge(array) {
    let mergedArray = [];
    for (let i = 0 ; i < arguments.length ; i++) {
        mergedArray.push(...arguments[i]);
    }

    mergedArray = mergedArray.map((ele) => +ele);
    return mergedArray;
}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]