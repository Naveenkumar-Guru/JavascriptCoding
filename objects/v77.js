//77. Delete a property from an object.

let laptop = {
  laptopName: "Asus",
  Ram: "8Gb",
  Rom: "512Gb",
  Remove: "hardsisk",
};

delete laptop.Remove;
console.log(laptop);
