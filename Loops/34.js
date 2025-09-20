// 34.Print the first 10 Fibonacci numbers.

let num = 12;
let a = 0;
let b = 1; // first two Fibonacci numbers

for (let i = 1; i <= num; i++) {
  console.log(a); //print current number
  let next = a + b; // calculate next number
  a = b; //    move forward
  b = next;
}
// o/p:-0, 1, 1, 2, 3, 5, 8, 13, 21, 34


// i=1 → print 0, next = 0+1=1, update → a=1, b=1
// i=2 → print 1, next = 1+1=2, update → a=1, b=2
// i=3 → print 1, next = 1+2=3, update → a=2, b=3
// i=4 → print 2, next = 2+3=5, update → a=3, b=5
// i=5 → print 3, next = 3+5=8, update → a=5, b=8

// At the start of i = 10
// a = 34
// b = 55

// Steps inside the loop:
// console.log(a) → prints 34
// next = a + b = 34 + 55 = 89
// a = b = 55
// b = next = 89
