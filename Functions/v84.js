// //84.Function to check if string is palindrome.

// function ispalindrom(str) {
//   let len = str.length;
//   for (let i = 0; i <= len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(ispalindrom("madam"));
// console.log(ispalindrom("mobile"));

//m-2 Function Declaration

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));

// m-3 Function Expression
const isPalindrome = function (str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("madam")); // true

//m-4 Arrow Function (ES6 style)
const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("madam")); // true
