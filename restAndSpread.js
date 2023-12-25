// Using spread operator to concatenate two or more arrays or objects.

let car = ["XLI", "2007", "White"];
const bike = ["Honda 125", "2022", "Black"];
// We can add new data to array without using push method
car = [...car, "4 Wheels", "1600 CC"];
console.log(car);
//Concatenation of Arrays using Spread Operator
let vehicle = [...car, ...bike];
// vehicle = [...car, ...bike, "G Wagon", "2022", "Black"];
console.log(vehicle);
