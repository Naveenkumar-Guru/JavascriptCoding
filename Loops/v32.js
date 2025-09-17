// //32. Count even and odd numbers from 1 to 50.

let evencount = 0;
let oddcount = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evencount++;
  } else {
    oddcount++;
  }
}

console.log("Total even numbers", evencount);
console.log("Total odd numbers", oddcount);

//m2
let num = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    num++;
  }
}
console.log(" odd", num);
