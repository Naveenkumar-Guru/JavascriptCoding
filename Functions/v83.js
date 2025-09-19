//83. Function to check if number is prime

let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (num <= 1) {
  console.log(num, "is NOT a Prime Number");
} else if (isPrime) {
  console.log(num, "is a Prime Number");
} else {
  console.log(num, "is NOT a Prime Number");
}

//m - 2;
function isPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 are not prime
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // divisible → not prime
    }
  }

  return true; // prime
}

console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
