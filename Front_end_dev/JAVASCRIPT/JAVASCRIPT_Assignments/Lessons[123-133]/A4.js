let theNumber = 100020003000;
numSet = [...new Set([...`${theNumber}`])].filter((e) => e !== '0');
let str = '';

for (let i = 0 ; i < numSet.length ; i++) {
    str += numSet[i];
}

console.log(str)
