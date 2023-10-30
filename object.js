var car = {
  name: "XLI",
  company: "Toyota",
  model: 2004,
};
console.log(car);
// expected output: {name: 'XLI', company: 'Toyota', model: 2004}
console.log(car.company);
// expected output: Toyota
// We can also add a new value to object using dot or bracket notation
car.color = "Black";
car["wheels"] = 4;
// You can use space in variable name when using bracket notation
console.log(car);
// expected output: {name: 'XLI', company: 'Toyota', model: 2004, color: 'Black
