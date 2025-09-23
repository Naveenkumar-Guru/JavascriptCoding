// 93. Use .filter() to get even numbers.

//m-1
let array = [1, 2, 3, 4, 5, 6, 7];
let evennum = array.filter((num) => {
  if (num % 2 === 0) {
    console.log(num, "even"); //just for debugging
    return true; //keep this number
  } else {
    console.log(num, "odd");
  }
  return false; //skip odd numbers
});

console.log("even number", evennum);

//m-2

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evennumbers = array1.filter((e) => e % 2 === 0);
console.log(evennumbers, "even numbers");
