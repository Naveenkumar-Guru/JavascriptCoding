//75. Create nested object and access values
let mobiles = {
  modelName: "GalaxyZ9",
  releaseYear: 2025,
  manufacturer: "Samsung",
  specs: {
    screenType: "Super AMOLED",
    batteryCp: "5000mAh",
  },
  features: ["5G", "face unlock"],
};

console.log(mobiles.modelName);
console.log(mobiles.specs.screenType);
console.log(mobiles.specs.batteryCp);
console.log(mobiles.features[0]);

//Delete a nested property
delete mobiles.specs.screenType;
console.log(mobiles.specs.screenType);
