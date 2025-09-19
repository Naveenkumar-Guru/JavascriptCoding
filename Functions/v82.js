// 82. Create function to return factorial of a number
function factorial(n) {
  let results = 1;
  for (let i = 1; i <= n; i++) {
    results *= i;
  }
  return results;
}

console.log(factorial(5));

// loop

let num = 5;
let res = 1;
for (let i = 1; i <= num; i++) {
  res *= i;
}
console.log(num, "is", res);
