//98. Use for...in to loop over object

let products = {
  mobileName: "OnePlus-13R",
  Ram: "8GB",
  Rom: "256GB",
};

for (let key in products) {
  console.log(key + ":", products[key]);
  //   if (key === "mobileName" || key === "Ram") {
  //     console.log(key + ":", products[key]);
  //   }
}
