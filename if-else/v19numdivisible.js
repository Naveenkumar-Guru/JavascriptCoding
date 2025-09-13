// 19. Check if a number is divisible by 3 or 5 or both

//1. If-Else
let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
  console.log(number, "it is dvisiable by both 3 and 5");
} else if (number % 3 === 0) {
  console.log(number, "it is divisible by 3 only");
} else if (number % 5 === 0) {
  console.log(number, "it is divisible by 5 only");
} else {
  console.log(number, "it is not divisible by 3 and 5 number");
}

//2.switch
let num = 5;
switch (num) {
  case num % 3 === 0 && num % 5 === 0:
    console.log(num, "is divisible by both 3 and 5");
    break;
  case num % 3 === 0:
    console.log(num, "is divisible by 3");
    break;
  case num % 5 === 0:
    console.log(num, "is divisible by 5");
    brake;
  default:
    console.log(num, "is not divisible by 3 or 5");
}

//3. Using Function
function divisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "yes 3 and 5 both divisiable");
  } else if (num % 3 === 0) {
    console.log(num, "yes 3 is divisible");
  } else if (num % 5 === 0) {
    console.log(num, "yes 5 is divisible");
  } else {
    console.log(num, "it is not divisible 3 and 5");
  }
}
divisible(100);

//4.Using Array[] + forEach
let n = 9;

let div = [3, 5];

div.forEach((d) => {
  if (n % d === 0) {
    console.log(n, "is divisible by", d);
  }
});



