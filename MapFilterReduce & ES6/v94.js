// 94.Use .filter() to get students with marks > 60

// let studentmarks = [35, 45, 55, 65, 75, 85, 95];

// let student = studentmarks.filter((m) => m >= 60);
// console.log(student);

let students = [
  { name: "Naveen", marks: 95 },
  { name: "Manoj", marks: 75 },
  { name: "Jaya", marks: 45 },
  { name: "Saravana", marks: 82 },
];

let passedStudents = students.filter((student) => student.marks > 60);

console.log(passedStudents);
