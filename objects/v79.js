// 79. Filter employees with salary > 50,000. in object
//object

let employee = [
  { eName: "naveen", esal: 45000, eAge: 25 },
  { eName: "Jaya", esal: 75000, eAge: 25 },
  { eName: "Manoj", esal: 65000, eAge: 26 },
  { eName: "saravana", esal: 45000, eAge: 26 },
];

//filter empsal
// let highestSal = employee.filter((emp) => emp.esal === 65000);
// console.log(highestSal);

// emp name

let highestsalName = employee.map((emp) => emp.eName)[(1, 1)];

console.log(highestsalName);
