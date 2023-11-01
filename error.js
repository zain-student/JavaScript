// function addTwoNumbers(a, b) {
//   console.log(a + b);
// }
// addTwoNumbers(4, "7");
//Error Handling
function addTwoNumbers(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("The first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("The second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNumbers("6", 5);
console.log("It still works");
