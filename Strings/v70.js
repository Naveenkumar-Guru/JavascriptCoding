let sentence = "i am learning javascript";
let words = sentence.split(" ");
let result = "";
for (let word of words) {
  capitzedwords = word[0].toLowerCase() + word.slice(1);
  result += capitzedwords + "";
}
console.log(result.trim());
