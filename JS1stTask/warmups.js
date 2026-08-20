// Variables & Dynamic Typing
const myName = "Mohammed";
let number = 67;

console.log(typeof number);
number = "SixSeven";
console.log(typeof number);

// Operators & Comparisons
console.log("10" == 10);
console.log("10" === 10);

let emptyString = "";
if (emptyString) {
  console.log("This string is not empty"); // will not reach here
}

// Control Flow
const grades = [85, 92, 58, 73, 40];

for (const grade of grades) {
  if (grade >= 60) {
    console.log(`You passed with a grade of ${grade}`);
  } else {
    console.log(`You failed with a grade of ${grade}`);
  }
}

// Letter grade using switch
const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;

  case score >= 80:
    console.log("Grade: B");
    break;

  case score >= 70:
    console.log("Grade: C");
    break;

  default:
    console.log("Grade: F");
}


