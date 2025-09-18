let student = {
  studentId: 101,
  fullName: "John Doe",
  age: 20,
  isEnrolled: true,
  courses: ["Mathematics", "Physics", "Computer Science"],
};

student.location = "Hyderabad"; // Dot notation
console.log(student.location); // Hyderabad

//  Adding a property dynamically using a variable
let newProp = "loc";
student[newProp] = "Bengaluru";
console.log(student.loc); // Bengaluru

console.log(student);
