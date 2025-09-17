let array = [5, 5, 10, 10];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

//for...of loop (ES6)

let array1 = [100, 900, 500, 600, 400];

let sum1 = 0;

for (let num of array1) {
  sum1 += num;
}
console.log(sum1);
