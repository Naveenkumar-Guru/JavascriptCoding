let Employees = [
  {
    emp_id: 1,
    empNames: "Naveen",
    emp_loc: "Hyderabad",
    emp_mail: "naveen.k@company.com",
    emp_phone_no: "9876543210",
    emp_salary: "32000",
    emp_pf: "PF201A",
  },
  {
    emp_id: 2,
    empNames: "Ravi",
    emp_loc: "Bangalore",
    emp_mail: "ravi.m@company.com",
    emp_phone_no: "9876543211",
    emp_salary: "28000",
    emp_pf: "PF202B",
  },
  {
    emp_id: 3,
    empNames: "Kiran",
    emp_loc: "Chennai",
    emp_mail: "kiran.s@company.com",
    emp_phone_no: "9876543212",
    emp_salary: "35000",
    emp_pf: "PF203C",
  },
  {
    emp_id: 4,
    empNames: "Ajay",
    emp_loc: "Pune",
    emp_mail: "ajay.r@company.com",
    emp_phone_no: "9876543213",
    emp_salary: "30000",
    emp_pf: "PF204D",
  },
  {
    emp_id: 5,
    empNames: "Manoj",
    emp_loc: "Delhi",
    emp_mail: "manoj.t@company.com",
    emp_phone_no: "9876543214",
    emp_salary: "27000",
    emp_pf: "PF205E",
  },
];

// // m-1
// let EmpData1 = Employees.map((emp) => emp);
// console.log(EmpData1);

// // m-2
// let EmpData2 = Employees.map((e) => {
//   return {
//     empid: e.emp_id,
//     empNames: e.emp,
//     emploc: e.emp_loc,
//     empmail: e.emp_mail,
//     empPhoneNo: e.emp_phone_no,
//     empSalary: e.emp_salary,
//     empPf: e.emp_pf,
//   };
// });
// console.log(EmpData2);

//m-3
let empData3 = Employees.filter((e) => e.emp_salary === "32000").map((e) => [
  e.emp_id,
  e.emp_mail,
]);

console.log(empData3);
