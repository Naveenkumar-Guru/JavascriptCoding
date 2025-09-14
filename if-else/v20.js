// //20
//m1
let numb = 100;
let square = Math.sqrt(numb);

if (Number.isInteger(square)) {
  console.log(numb, "is a perfect square");
} else {
  console.log(numb, "is not a perfect square");
}

//m2
let numbers = [20, 30, 4, 6, 7, 8];
numbers.forEach((num) => {
  let square = Math.sqrt(num);
  if (Number.isInteger(square)) {
    console.log(num, "is a perfect square");
  } else {
    console.log(num, "is not a perfect square");
  }
});
