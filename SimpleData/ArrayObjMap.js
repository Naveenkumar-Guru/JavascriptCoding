let Employees = [
  {
    emp_id: 1,
    emp_Names: "Naveen",
    emp_loc: "Hyderabad",
    emp_mail: "naveen@company.com",
    emp_phone_no: "9876543210",
    emp_salary: "32000",
    emp_pf: "PF201A",
  },
  {
    emp_id: 2,
    emp_Names: "Ravi",
    emp_loc: "Bangalore",
    emp_mail: "ravi@company.com",
    emp_phone_no: "9876543211",
    emp_salary: "28000",
    emp_pf: "PF202B",
  },
  {
    emp_id: 3,
    emp_Names: "Kiran",
    emp_loc: "Chennai",
    emp_mail: "kiran@company.com",
    emp_phone_no: "9876543212",
    emp_salary: "35000",
    emp_pf: "PF203C",
  },
  {
    emp_id: 4,
    emp_Names: "Ajay",
    emp_loc: "Delhi",
    emp_mail: "ajay@company.com",
    emp_phone_no: "9876543213",
    emp_salary: "30000",
    emp_pf: "PF204D",
  },
  {
    emp_id: 5,
    emp_Names: "Manoj",
    emp_loc: "Delhi",
    emp_mail: "manoj@company.com",
    emp_phone_no: "9876543214",
    emp_salary: "24000",
    emp_pf: "PF205E",
  },
];

// // m-1
let EmpData1 = Employees.map((emp) => emp);
console.log("DATA:-1", EmpData1);

// m-2
let EmpData2 = Employees.map((e) => {
  return {
    empid: e.emp_id,
    empName: e.emp_Names,
    empLoc: e.emp_loc,
    empmail: e.emp_mail,
    empPhoneNo: e.emp_phone_no,
    empSalary: e.emp_salary,
    empPf: e.emp_pf,
  };
});
console.log("DATA:-2", EmpData2);

//m-3
let empData3 = Employees.map((e) => {
  return [e.emp_id, e.emp_Names, e.emp_mail];
});
console.log("DATA:-3", empData3);

// m-4 filter sal>32000
let empData4 = Employees.filter((f) => Number(f.emp_salary) >= 32000).map(
  (e) => {
    return [e.emp_id, e.emp_Names, e.emp_salary];
  }
);
console.log("DATA:-4", empData4);
