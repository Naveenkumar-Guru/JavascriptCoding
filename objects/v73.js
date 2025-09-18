//73.Add a method to object to return full name.
let employee = {
  firstName: "Naveen",
  lastName: "Kumar",
  empId: "1005c1",
  empSalary: 25000,
  Address: {
    city: "hyd",
    pincode: 123456,
  },

  // Method to return full name
  getFullName: function () {
    return (
      this.firstName + " " + this.lastName
      //   +" " +
      //   this.Address.city +
      //   " " +
      //   this.Address.pincode
    );
  },
};

console.log(employee.getFullName());
