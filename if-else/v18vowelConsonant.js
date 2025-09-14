let char = "n";
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  console.log(char, "is a vowels");
} else {
  console.log(char, "is a consonant");
}

//loop
let str = "NAVEENKUMAR";
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log(ch, "vowels");
  } else {
    console.log(ch, "Consonant");
  }
}
