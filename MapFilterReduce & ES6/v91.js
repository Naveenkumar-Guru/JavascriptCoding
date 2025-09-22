//91. Use .map() to double every number in array.
let user = [10, 200, 300, 400, 500];
let users = user.map((u) => {
  return u * u;
});
console.log(users);

let user1 = [10, 200, 300, 400, 500];
let results = user1.map((user) => user * 2);
console.log(users);

let number = [1, 2, 3, 4, 5];
let double = number.map((num) => num * 2);
console.log(double);
