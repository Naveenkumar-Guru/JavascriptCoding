// 99. Use destructuring to extract values from object

//1.Basic Object Destructuring
const user = { name: "NaveenKumar", age: "25", loc: "Hyd" };
const { name, age, loc } = user;
console.log(user);

//2.Destructuring with Different Variable Names
const user1 = { name: "manoj", age: "26", loc: "tpt" };
const { name: uname, age: uage, loc: uloc } = user1;
// console.log(uname, uage, uloc);
console.log(uname);
console.log(uage);
console.log(uloc);

//3Providing Default Values

let studentinfo = { sid: 1001, sname: "jaya" };
let { sid, sname, sMobileno = 1234567890 } = studentinfo;
console.log(studentinfo);
console.log(sMobileno);
