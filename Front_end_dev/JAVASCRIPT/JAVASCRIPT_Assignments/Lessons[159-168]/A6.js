function* gen() {
    let index = 14;
    let num = 140;
    let sum = num + index;
    yield index;
    while (true) {
        yield sum;
        sum += num += 200;
    }
}

let generator = gen();
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())