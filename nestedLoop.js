//Loop to Show the Working days of two weeks
console.log("Week days of two weeks!");
for (let week = 1; week < 3; week++) {
  console.log("Week: ", week);
  for (let day = 1; day < 6; day++) {
    console.log("Day: ", day);
  }
}

// Loop to show the summer months of 3 years
console.log("Summer Months of three years!");
for (let year = 2021; year < 2024; year++) {
  console.log("Year: ", year);
  for (let month = 6; month < 9; month++) {
    console.log("Month: ", month);
  }
}
//To Show the reward according to positions
for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver Medal");
  } else if (i == 3) {
    console.log("Bronze Medal");
  } else {
    console.log(i);
  }
}
//To Show the reward according to positions
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1: {
      console.log("Gold Medal");
      break;
    }
    case 2: {
      console.log("Silver Medal");
      break;
    }
    case 3: {
      console.log("Bronze Medal");
      break;
    }
    default: {
      console.log(i);
    }
  }
}
