function addnumbers(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(addnumbers[(1, 2, 3)]);
