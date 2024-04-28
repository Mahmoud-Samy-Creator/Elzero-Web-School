let objMethodOne = {
    property: `Method One`
}

let objMethodTwo = new Object({
    property: `Method two`
})

let objMethodThree = Object.create({})
objMethodThree.property = `Method three`

let objMethodFour = Object.assign({property: `Method Four`})


console.log(objMethodOne.property);
console.log(objMethodTwo.property);
console.log(objMethodThree.property);
console.log(objMethodFour.property);