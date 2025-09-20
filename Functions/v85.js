function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      console.log(char + " : is a vowel");
      count++;
    } else {
      console.log(char + " : not a vowel");
    }
  }

  return count;
}
console.log("Total vowels:", countVowels("hello"));

//m2
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      console.log(str[i] + " : is a vowel");
      count++;
    } else {
      console.log(str[i] + " : not a vowel");
    }
  }

  return count;
}

console.log("Total vowels:", countVowels("hello"));
