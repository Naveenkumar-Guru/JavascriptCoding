// 96. Use .reduce() to find the maximum value.

let numbers = [900, 500, 300, 1000, 200, 400];

let max = numbers.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
console.log("Maximum value:-", max);
