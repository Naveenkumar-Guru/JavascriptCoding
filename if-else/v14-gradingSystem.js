// //  14. Create a grading system using marks.

let marks = 74;
if (marks >= 90) {
  console.log(marks, "A Grade");
} else if (marks >= 80) {
  console.log(marks, "B Grade");
} else if (marks >= 75) {
  console.log(marks, "C Grade");
} else if (marks >= 55) {
  console.log(marks, "D Grade");
} else if (marks >= 35) {
  console.log(marks, "pass");
} else {
  console.log(marks, "fail");
}

// forEach()
let studentmarks = [90, 75, 55, 34];

studentmarks.forEach((std) => {
  if (std >= 90) {
    console.log(std, "A");
  } else if (std >= 75) {
    console.log(std, "B");
  } else if (std >= 55) {
    console.log(std, "C");
  } else if (std >= 35) {
    console.log(std, "D");
  } else {
    console.log(std, "Fail");
  }
});
