// //18.Check if a character is vowels or consonant

// let ch = "n";

// ch = ch.toLocaleLowerCase();
// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//   console.log(ch, "is a vowel");
// } else {
//   console.log(ch, "consonant");
// }

let str = "NAVEEN KUMAR";

for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase(); // take each character.

  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log(ch, "vowels");
  } else {
    console.log(ch, "consonant");
  }
}
