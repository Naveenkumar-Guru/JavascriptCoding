// 92.Use .map() to extract names from array of objects.

let studentsDetails = [
  { id: 1, name: "Naveen", age: 25 },
  { id: 1, name: "Manoj", age: 26 },
  { id: 1, name: "jaya", age: 27 },
  { id: 1, name: "Saravana", age: 28 },
];

let totalDetails = studentsDetails.map((std) => std.name);
console.log(totalDetails);

let total = studentsDetails.map((std) => {
  return { NAME: std.name, AGE: std.age, ID: std.id };
});
console.log(total);

let totalDetails1 = studentsDetails.map((std) => [std.name, std.age]);
console.log(totalDetails1);
