/**
 * Map + Set + What you've learned => Challenge
 * Requirments: -
    - You can't Use (Numbers | True | False | Array Index | Loops | Higher function)
    - Only One line solution
 * Hints: -
    - If You use Length => Then only One time
    - You can use * Operator only in calculation
    - Set
    - Spread Operator
    - Math Object Methods
 */

    /* Result required = 210 */
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Solution
console.log([...n1, ...n2].length * Math.max(...n2));

