/**
 * Task 1: String Manipulation
 */

// 1. Define three string variables firstName, middleName, and lastName.
let firstName = "Zebediah";
let middleName = "Patrick";
let lastName = "Miller";

// 2. Declare a function named logFullName that takes no arguments.
function logFullName() {
  // 3. Using template literals, create another variable fullName that combines all three names.
  var fullName = `${firstName} ${middleName} ${lastName}`;
  // 4. Print the fullName to the console.
  console.log(fullName);
}

/**
 * Task 2: Data Types
 */

// 1. Declare a variable named age and assign it a number.
var age = 25;
// 2. Declare a variable named isStudent and assign it a boolean value.
var isStudent = false;
// 3. Declare a variable named courses and assign it an array containing three string values representing courses e.g. "Math", "Science", "History".
var courses = ["Math", "Science", "History"];
// 4. Declare a function named logVariableTypes that takes no arguments.
function logVariableTypes() {
  // 5. Print the type of each variable using the typeof operator.
  console.log(typeof age);
  console.log(typeof isStudent);
  console.log(typeof courses);
}

/**
 * Task 3: Variables Declaration
 */

// 1. Using var, declare a variable named school and assign it a value of "Hogwarts".
var school = "Hogwarts";
// 2. Using let, declare a variable named subject and assign it a value of "Potions".
let subject = "Potions";
// 3. Using const, declare a variable named professor and assign it a value of "Snape".
const professor = "Snape";

/**
 * Task 4: Basic Operators
 */

// 1. Declare two variables x and y with values 5 and 10 respectively.
let x = 5;
let y = 10;

function logAddition() {
  // 2. Log the sum of x and y.
  console.log(x + y);
}
function logSubtraction() {
  // 3. Log the x subtracted from y
  console.log(y - x);
}

function logMultiplication() {
  // 4. Log the product of x and y.
  console.log(x * y);
}

function logDivision() {
  // 5. Log the quotient when x is divided by y.
  console.log(x / y);
}

/**
 * Task 5: Operator Precedence
 */

// 1. Evaluate the following expression without using a calculator or running the code: 3 + 4 * 5.
let result1 = 3 + 4 * 5;

// 2. Now, evaluate this: (3 + 4) * 5.
let result2 = (3 + 4) * 5;

function logResults() {
  // 3. Log both result values in your JavaScript environment and check your answers.
  console.log(result1);
  console.log(result2);
}
