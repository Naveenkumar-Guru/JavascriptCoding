//Find employee with highest salary.
let employees = [
  { name: "Naveen", salary: 65000 },
  { name: "Kiran", salary: 50000 },
  { name: "Priya", salary: 60000 },
  { name: "Anil", salary: 45000 },
  { name: "Ravi", salary: 95000 },
];

let salaries = employees.map((emp) => emp.salary);
let highest = Math.max(...salaries);
console.log(highest);
