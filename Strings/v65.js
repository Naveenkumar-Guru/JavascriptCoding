//65.Find the length of a string.

let str = "html";
console.log(str.length);

let str1 = "css";
console.log(str1.split("").length);

let str2 = "javascript";
console.log(Array.from(str2).length);

let str3 = "react.js";
console.log([...str3].length);

let str4 = "node.js";
console.log(Object.keys(str4).length);

// m-5 ...for...of
let string5 = "Expressjs";
count = 0;
for (let char of string) {
  count++;
}
console.log(count);

//m-6 for in
let string6 = "project";
length = 0;
for (let char of string6) {
  length++;
}
console.length;
