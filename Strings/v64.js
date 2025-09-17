//. Convert string to uppercase and lowercase.
let str = "NAVEENKUMAR";
let upperstr = "";
let lowerstr = "";

for (let char of str) {
  upperstr += char.toUpperCase();
  lowerstr += char.toLowerCase();
}
console.log(upperstr);
console.log(lowerstr);
