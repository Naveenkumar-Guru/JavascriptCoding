// 50.Find the maximum number in an array.

//m1
let number = [1, 2, 3, 4];
let max = number[0];
for (let i = 1; i <= number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
}
console.log(max);

//m2
let array = [1, 2, 3, 4, 5, 6, 7];
let max1 = Math.max(...array);
console.log(max1);
