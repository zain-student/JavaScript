// function letterFinder(word, match) {
//   var condition1 = typeof word == "string" && word.length >= 2;
//   var condition2 = typeof match == "string" && match.length == 1;
//   if (condition1 === true && condition2 === true) {
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === match) {
//         console.log("Fount", match, "at Index :", i);
//       } else {
//         console.log(match, " Not Found at Index :", i);
//       }
//     }
//   } else {
//     console.log("Please pass correct arguments to the function");
//   }
// }
// //This will show the statement in else condition
// letterFinder([], []);
// // This will find the word
// letterFinder("hello", "h");
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
