// 18. Check if a character is a vowel or consonant.

// 1.(If-Else)

// let word = "u";
// if (
//   word === "a" ||
//   word === "e" ||
//   word === "i" ||
//   word === "o" ||
//   word === "u"
// ) {
//   console.log(word, "vowel");
// } else {
//   console.log(word, "consonants");
// }

// //2.Array + includes() Method
// let char = "a";
// let array = ["a", "e", "i", "o", "u"];
// if (array.includes(char)) {
//   console.log(char, "vowels");
// } else {
//   console.log(char, "constaines");
// }

//3
// let ch = "E";
// let vowels = "aeiouAEIOU";

// if (vowels.includes(ch)) {
//   console.log(ch, "is a Vowel");
// } else {
//   console.log(ch, "is a Consonant");
// }

// //4 Regular Expression
// let s = "naveen";
// let reg = /[aeiouAEIOU]/;
// if (reg.test(s)) {
//   console.log(reg, "true");
// } else {
//   console.log(reg, "false");
// }

// // 5.Switch Case Statement.
// let character = "N";
// switch (character.toLowerCase()) {
//   case "A":
//   case "V":
//   case "E":
//   case "E":
//   case "N":
//     console.log(character, "is vowels");
//   default:
//     console.log(character, "is consonant");
// }

// //6.Using Set
// let ch = "h";
// let vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
// if (vowel.has(ch)) {
//   console.log(ch, "it is vowel");
// } else {
//   console.log(ch, "consonant");
// }

//7 Object Lookup (Dictionary style)

// let cha = "a";
// let vowels = { a: true, e: true, i: true, o: true, u: true };
// if (vowels[cha]) {
//   console.log(cha, "is a vowel");
// } else {
//   console.log(cha, "is a consonant");
// }

//8
// let ch = "a";
// let code = ch.toLowerCase().charCodeAt(0);

// if (
//   code === 97 ||
//   code === 101 ||
//   code === 105 ||
//   code === 111 ||
//   code === 117
// ) {
//   console.log(ch, "is a Vowel");
// } else {
//   console.log(ch, "is a Consonant");
// }

//9 JavaScript Array filter() Method
let word = "naveen";
let vowels = word.split("").filter((c) => "aeiou".includes(c));

if (vowels.length > 0) {
  console.log("Word has vowels:", vowels);
} else {
  console.log("Word has no vowels");
}
