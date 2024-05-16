
class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }

    run() {
        return "Car Is Running Now";
    }

    stop = function () {
        return "Car Is Stopped";
    }
}

let car1 = new Car("Toyota Supra", "2024 GR Supra", "47000$");
let car2 = new Car("BMW", "8 Series Gran Coupe", "90000$");
let car3 = new Car("Bugatti", "Bugatti Chiron", "4000000$");

console.log(`Car One ${car1.n} Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());

// Needed Output
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"