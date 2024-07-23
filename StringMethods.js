// All The string methods produce a new string without altering the original string
// All the string methods are case sensitive

// ==> length             Used to know the length of string
let text = " zain Malik ";
console.log("==> Length of the String is " + text.length); // 10

// ==> charAt()           Used to know the character at a specified index
let char = text.charAt(2); //i
console.log("==> Character at index 2 is: " + char);

// ==> charCodeAt()        Used to tell the code of a character
let char1 = text.charCodeAt(5);
console.log("==> Character code at index 5 is: " + char1);

//==> at()                Used to tell the character at specified index
console.log("==> Character at index 2 is: " + text.at(2));

//==> []
console.log("==> Character at index 3 is: " + text[3]);

//==> slice()           Used to output a part of string
console.log("==> Slice of the string is: " + text.slice(2, 8));

//==> subString()       Used to output a part of string
console.log("==> SubString of the string is :" + text.substring(5, 10));

// ==> subStr()         Used to output a part of string.first value denote index and
//                      second value denote number of characters next to the index.
console.log("==> SubString of the string is :" + text.substr(5, 2));

//==> toUpperCase()
console.log("==> The String in upper case is :" + text.toUpperCase());

//==> toLowerCase()
console.log("==> The String in lower case is :" + text.toLowerCase());

//==> concat()      Concatinate the two strings
let bro = " Ahmed";
console.log("==> Concatenation of the string is :" + text.concat(bro));

//==> trim()        Used to clear the white spaces at the start and end
console.log("==> String after trim is :" + text.trim());

//==> trimStart()     Used to clear the white spaces at the start
console.log("==> String after start trim is :" + text.trimStart());

//==> trimEnd()          Used to clear the white spaces at the end
console.log("==> String after end trim is :" + text.trimEnd());

//==> padStart()          Add number of string before defined string
let text1 = 5;
z = text1.toString(); // First converting into string
console.log("==> String after pad start is :" + z.padStart(4, "0"));

//==> padEnd()            Add number of string after defined string
let tex = 5;
z = tex.toString(); // First converting into string
console.log("==> String after pad end is :" + z.padEnd(4, "0"));

//==> repeat()            Used to repeat a string by given number
console.log("==> String after repeating 2 time is :" + text.repeat(3));

//==> replace()           Replace a string with another
let name = "This is Zain, Zain";
console.log("==> String after replacing is :" + name.replace("Zain", "Ahmed"));

//==> replaceAll()         Replace all same strings with another
console.log(
  "==> String after replacing all is :" + name.replaceAll("Zain", "Ahmed")
);

//==> split()               Split by comma
let numbersStr = "1,2,3,4,5";
let numArray = numbersStr.split(",");
console.log(numArray);
