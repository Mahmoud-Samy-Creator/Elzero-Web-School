/**
    Array Methods
    Array.copyWithin(Target, Start (op), End (op))

    "
        Copy Part of An Array to Another Location in the same array
    "
    --- Any -ve value will count from the end
    -- Target
    ---- Index to copy part to
    ---- If @ or > then array length, nothing will be copied
    -- Start
    ---- Index to Start Coping from
    ---- If ommited = start from index 0
    -- End
    ---- Index to end coping from
    ---- Not inclucing End
    ---- If Ommited = Reach the end
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3)
// myArray.copyWithin(4, 6)
// myArray.copyWithin(1, -2)
myArray.copyWithin(1, -2, -1)
console.log(myArray)