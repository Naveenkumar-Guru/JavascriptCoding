// 72. Access object properties using dot and bracket notation.

let employee = {
  empId: "1005c1",
  empName: "Kumar",
  empSalary: "25000",
  Address: {
    city: "hyd",
    pincode: 123456,
  },
};

//  Dot notation
console.log(employee.empName);
console.log(employee.Address.city);

//braket notation
console.log(employee["empSalary"]);

//Bracket with variable
let key = "empId";
console.log(employee[key]);
