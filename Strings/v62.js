// Count vowels in a string.

let string = "Javascript";
let vowels = "aeiouAEIOU";
let count = 0;
let foundvowels = "";

for (let Eachchar of string) {
  if (vowels.includes(Eachchar)) {
    count++;
    foundvowels += Eachchar;
  }
}
// console.log(count);
// .........(or)...........
console.log(count, foundvowels);
