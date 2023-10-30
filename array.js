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
