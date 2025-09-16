//61.Reverse a string manually (without reverse method).
//M1:- Using for loop
let string = "naveen";
let reverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i];
}
console.log(reverse);

//m-2 Using for...of loop (ES6)
let str = "kumar";
let rev = "";
for (let cha of str) {
  rev = cha + rev;
}
console.log(rev);

//m-3 Using reduce();
let string1 = "hlo";
let reve = string1.split("").reduce((acc, char) => char + acc, "");
console.log("Reversed string:", reve);
