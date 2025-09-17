//33.Print numbers divisible by 3 and 5 from 1 to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  } else if (i % 3 === 0) {
    console.log(i, "is divisible by 3");
  } else if (i % 5 === 0) {
    console.log(i, "is divisible by 5");
  } else {
    console.log(i, "is not divisible by 3 or 5");
  }
}
