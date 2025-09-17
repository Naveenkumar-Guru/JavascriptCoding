//74.Loop through object using for...in.

let students = {
  sName: "naveen",
  sAge: "24",
  scity: "ctr",
};

for (let item in students) {
  console.log(item, ":", students[item]);
}
