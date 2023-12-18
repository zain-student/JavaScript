const Car = {
  body: "This is a car.",
  make: "Ford",
  model: "Mustang",
};
// console.log(Object.keys(Car));
// console.log(Object.values(Car));
// console.log(Object.entries(Car));
console.log("All Entries===============>");
for (const [keys, values] of Object.entries(Car)) {
  console.log(`Key: ${keys}, Value: ${values}`);
}
console.log("All Keys=================>");
for (const keys of Object.keys(Car)) {
  console.log(`Key => ${keys}`);
}
console.log("All Values===============>");
for (const values of Object.values(Car)) {
  console.log(`Value => ${values}`);
}
