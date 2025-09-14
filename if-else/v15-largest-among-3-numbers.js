// 15. Find the largest among 3 numbers using nested if.

let x = 100;
let y = 300;
let z = 200;

if (x > y) {
  if (x > z) {
    console.log(x, "is big");
  } else {
    console.log(z, "is big");
  }
} else {
  if (y > z) {
    console.log(y, "is big");
  } else {
    console.log(z, "is big");
  }
}

//Normal
let a = 20;
let c = 30;
let b = 10;

if (a > c && a > b) {
  console.log("a is big");
} else if (c > a && c > b) {
  console.log("c is big ");
} else {
  console.log("b is big ");
}
