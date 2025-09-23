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

//3.Providing Default Values

let studentinfo = { sid: 1001, sname: "jaya" };
let { sid, sname, sMobileno = 1234567890 } = studentinfo;
console.log(studentinfo);
console.log(sMobileno);

//4.Nested Object Destructuring
let employee = {
  Ename: "saravana",
  Eaddress: {
    ELoc: "Hyd",
    MobileNo: 1234567890,
  },
};
console.log(employee);
console.log(employee.Eaddress.MobileNo);

//

function cars({ name, price }) {
  //   console.log(`car_NAME:- ${name}, car_PRICE:- ${price}`);
  console.log("car_NAME:- " + name + ", car_PRICE:- " + price);
}
const newcars = { name: "Bmw", price: "200000" };
cars(newcars);
