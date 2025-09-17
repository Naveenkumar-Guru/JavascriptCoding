//48.Use shift() and unshift() in an array.

let cars = ["suzuki", "Bmw", "Toyota"];

// shift() → is removes the first element ("suzuki")

let removefirst = cars.shift();

// unshift() → adds "Mahindra" at the beginning

let addFirst = cars.unshift("Mahindra");

console.log(cars);
