let arr = [];
// Push method is used to add a new value to array
arr.push("Zain");
arr.push("Ahmed");
console.log(arr);
// Pop method is used to remove last value from array
arr.pop();
console.log(arr);

// We can also declare an array like this. Now i can use this function to use this array and can give any value to it
function arrNames(one, two, three) {
  var names = [];
  names.push(one);
  names.push(two);
  names.push(three);

  console.log(names);
}
arrNames("Zain", "Ahmed", "Hassan");
arrNames("Abdul Basit", "Afzal", "Haider");

// length is used to find the length of the array
console.log("==> Length of the array is :" + arrNames.length);

// Sort function is used to sort all the elements of array
let numbers = [5, 3, 9, 2, 8, 5, 0, 2, 1];
console.log("==> Array after sorting is :" + numbers.sort());

// Push function is used to add a new element at the end of the array.
numbers.push(4);
numbers.push(3);
console.log("==> Array after pushing 20 is :" + numbers.sort());

// Pop function is used to delete an element from the end of the array
numbers.pop();
console.log("==> Array after pop function is :" + numbers);

// join function is used to add a string after each element
console.log("==> Array after join function is : " + numbers.join("*"));

// Delete function is used to delete a number by its index
delete numbers[3];
console.log("==> Array after deleting index 3 value :" + numbers);

// concat function is used to add two arrays
console.log("==> Array after concatination is :" + numbers.concat(arr));

// Map Function
// It is used to apply a function to all the elements of the array
let number = [4, 9, 16, 25, 36, 49];

function squareRoot(num) {
  return Math.sqrt(num);
}

let rootNum = number.map(squareRoot);
console.log("==> Array after map function is :" + rootNum);
