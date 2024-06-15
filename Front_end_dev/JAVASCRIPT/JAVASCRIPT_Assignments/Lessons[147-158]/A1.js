class Car {
    constructor (name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    Run() {
        return `Car is running now`;
    }
    Stop() {
        return `Car is Stopped`;
    }
}

let CarOne = new Car("MG", 2022, 420000);
let CarTwo = new Car("GM", 2042, 520000);
let CarThree = new Car("TG", 2024, 600000);

console.log(`Car One Is ${CarOne.n} And Model Is ${CarOne.m} And Price Is ${CarOne.p}`);
console.log(`Car One Is ${CarTwo.n} And Model Is ${CarTwo.m} And Price Is ${CarTwo.p}`);
console.log(`Car One Is ${CarThree.n} And Model Is ${CarThree.m} And Price Is ${CarThree.p}`);
console.log(CarOne.Run());
console.log(CarOne.Stop());