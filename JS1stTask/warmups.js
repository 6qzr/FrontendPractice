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

// Functions
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const greett = function (name) {
  return `Hello, ${name}!`;
};

// Arrow Function
const greeting = (name) => {
  return `Hello, ${name}!`;
};

// Function with default parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0); // 0 is important to handle empty array
}


// This Keyword
const person = {
    name: "Mohammed",
    getName: function() {
        return this.name;
    },
    getNameArrow: () => {
        return this.name;
    }
}
console.log(person.getName()); // "Mohammed"
console.log(person.getNameArrow()); // undefined, because arrow functions do not have their own 'this'