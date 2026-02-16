// let count;

// count = 10;

// count = 20;

// console.log(count);
 
// var d;

// d = "message"

// message = "HI";

// var message = "Hi all";

// console.log(message);

// const value = 4;

// value = 5; //showing error (reassing is not allowed)

// console.log(value);

// Create variables
// var city = "Chennai";
// let temperature = 30;
// const country = "India";

// Reassign only allowed variables
// city = "Bangalore";        // var can be reassigned
// temperature = 32;          // let can be reassigned
// country = "USA";        const cannot be reassigned

// Print all values
// console.log("City:", city);
// console.log("Temperature:", temperature);
// console.log("Country:", country);

// var info = "Welcome";

// console.log(info);

// alert(info);

// document.writeln(info);

// let userchoice = confirm("do you want to continue");
// console.log(userchoice);

// let contactNo = prompt("enter your contact Number");
// console.log(contactNo);
// document.writeln(contactNo);

// let update = "loading";

// console.log(update);
// console.warn(update);
// console.error(update);

// var price = 50;
// console.log("Before:", price);
// console.log("after:", price);

// let value = true;
// value = false;
// console.log(value);

// let message = "Hello";
// console.log("First value:", message);
// message = "Welcome";
// console.log("Second value:", message);

// var item = 10;
// var item = 20;
// var item = 50;
// console.log(item);

// const person = {
//     name: "Anu",
//     age: 25
// };

// person.age = 30; //modified property
// console.log(person);

// var userName = "Rahul";
// let age = 28;
// const country = "India";
// console.log("Name:", userName);
// console.warn("Age:", age);
// console.error("Country:", country);

// let name = "Banumathi";

// let age = 25;

// let isLearningJS = true;

// let futureGoal;

// let emptyValue = null;

// console.log("Name:", name);
// console.log("Type of name:", typeof name);

// console.log("Age:", age);
// console.log("Type of age:", typeof age);

// console.log("Learning JS:", isLearningJS);
// console.log("Type of isLearningJS:", typeof isLearningJS);

// console.log("Future Goal:", futureGoal);
// console.log("Type of futureGoal:", typeof futureGoal);

// console.log("Empty Value:", emptyValue);
// console.log("Type of emptyValue:", typeof emptyValue);

// let colors = ["red", "green", "blue", "yellow", "black"];

// console.log("First element:", colors[0]);

// console.log("Last element:", colors[colors.length - 1]);

// console.log("Third element:", colors[2]);

// console.log("Total elements:", colors.length);

// let student = {
//   name: "Naveen",
//   skills: ["HTML", "CSS", "JS"],
//   experience: "1 year",
//   location: "India"
// };

// console.log("Name:", student.name);

// console.log("First Skill:", student.skills[0]);

// student.role = "Frontend Developer";

// console.log("Student Object:", student);

// let x = 10;
// let y = 3;

// console.log("Addition:", x + y);

// console.log("Subtraction:", x - y);

// console.log("Multiplication:", x * y);

// console.log("Division:", x / y);

// console.log("Modulus:", x % y);

// console.log("Exponentiation:", x ** y);

// let a = 5;

// let post = a++;   // Use a++, then increase

// let pre = ++a;    // Increase first, then use

// console.log("Value stored in post:", post);
// console.log("Value stored in pre:", pre);
// console.log("Final value of a:", a);

// let b = 2;
// b = b++;
// console.log(b);

// let num = 3;

// num **= 4; // num ** 4 means 3 × 3 × 3 × 3

// console.log("Result:", num);

// console.log(5 == "5");      // true
// console.log(5 === "5");     // false
// console.log(0 == false);    // true
// console.log(0 === false);   // false

// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("Login Success");
// } else {
//   console.log("Login Failed");
// }

// let role = "admin";

// if (role === "admin" || role === "manager") {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied");
// }

// let isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log("User is NOT logged in");
// } else {
//   console.log("User is logged in");
// }

// let age = 17;

// console.log(age >= 18 ? "Eligible" : "Not Eligible");

// let user = {
//   name: "Arun",
//   age: 22,
//   isLoggedIn: true,
//   skills: ["JS", "React"]
// };
// console.log("Name:", user.name);
// console.log("First Skill:", user.skills[0]);
// console.log("Is Adult:", user.age >= 18);
// if (user.isLoggedIn && user.age >= 18) {
//   console.log("Access Allowed");
// }
// console.log(user.isLoggedIn ? "User is logged in" : "User is not logged in");
// user.age++;
// console.log("New Age:", user.age);
// user.skills.push("Node.js");
// console.log("Updated Skills:", user.skills);

// let firstName = "Naveen";
// let lastName = "Kumar";
// let fullNamePlus = firstName + " " + lastName;
// console.log(fullNamePlus);

// let fullNameTemplate = `${firstName} ${lastName}`;
// console.log(fullNameTemplate);

// console.log(fullNameTemplate.length);

// typeof(5 + "2"); 
// "5" is a string
// The + operator string concatenation
// "5" + 2 → "52"

// typeof(5 + "2")
// "2" is a string
// JavaScript converts 5 to "5"
// 5 + "2" → "52"

// typeof(true + 1)
// true is converted to the number 1
// 1 + 1 → 2

// typeof(false + "hello")
// "hello" is a string
// + with a string forces concatenation
// false becomes "false"

// console.log(Number("100"));
// console.log(Number("10.5"));
// console.log(Number("abc"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean([]));
// console.log(Boolean({}));

// let num = 7;

// if (num % 2 === 0) {
//   console.log(num + " is Even");
// } else {
//   console.log(num + " is Odd");
// }

// let marks = 75;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75 && marks <= 89) {
//   console.log("Grade B");
// } else if (marks >= 50 && marks <= 74) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

// let dayNumber = 3;

// switch (dayNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// let num = 3;

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log("Final Sum:", sum);

// if ("0") {
//   console.log("true block");
// } else {
//   console.log("false block");
// }

// let word = "developer";

// let count = 0;

// let vowels = "";

// for (let char of word) {
  
//   console.log(char);

//   count++;

//   if ("aeiou".includes(char)) {
//     vowels += char + " ";
//   }
// }

// console.log("Total letters:", count);
// console.log("Vowels:", vowels);

// let skills = ["HTML", "CSS", "JavaScript", "React"];

// let count = 0;

// for (let skill of skills) {
  
//   console.log(skill);

//   console.log("I know " + skill);

//   count++;
// }

// console.log("Total skills:", count);

// let employee = {
//   name: "Arun",
//   role: "Tester",
//   salary: 30000,
//   experience: "2 years"
// };

// for (let key in employee) {
//   console.log(key);
// }

// for (let key in employee) {
//   console.log(employee[key]);
// }

// for (let key in employee) {
//   console.log(key + " : " + employee[key]);
// }

// function table(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
//   }
// }

// table(5);

// function square(num) {
//   return num * num;
// }

// let result = square(5);

// console.log(result);

// function register(name, department, role = "Developer") {
//   console.log("Name:", name);
//   console.log("Department:", department);
//   console.log("Role:", role);
//   console.log("---------------");
// }

// register("Arun", "IT", "Tester"); // Call with role


// register("Meena", "HR"); // Call without role (default will be used)

// function checkScope() {
//   if (true) {
//     var a = 100;
//     let b = 200;
//   }
//   console.log(a);
//   console.log(b);
// }

// console.log(x);
// var x = 10;

// console.log(y);
// let y = 20;

// var x;
// console.log(x); // undefined
// x = 10;

// function greet(name) {
//   console.log("Welcome " + name);
// }

// // Function call
// greet("Bhanu");

// let add = function (a, b) {
//   return a + b;
// };

// let result = add(10, 20);
// console.log(result);

// let subtract = (a, b) => {
//   return a - b;
// };

// let result = subtract(20, 8);
// console.log(result);

// function calculate(operation, a, b) {
//   let result = operation(a, b);
//   console.log(result);
// }


// function add(a, b) {
//   return a + b;
// } // Add function

// function subtract(a, b) {
//   return a - b;
// }// Subtract function

// // Function calls
// calculate(add, 10, 5);
// calculate(subtract, 20, 10);
// function total(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// Function call
// console.log(total(5)(10)(15));

// function* reward() {
//   yield "Level 1 Completed";
//   yield "Level 2 Completed";
//   yield "Level 3 Completed";
//   yield "Team Winner";
// }
// const rewards = reward();

// console.log(rewards.next().value);
// console.log(rewards.next().value);
// console.log(rewards.next().value);
// console.log(rewards.next().value);
// for (let message of reward()) {
//   console.log(message);
// }

 //Object – Team Details
let team = {
  name: "Alpha Team",
  members: 5,
  department: "Development",
  level: "Intermediate"
};


 //for...in – Print Details 
console.log("TEAM DETAILS");
for (let key in team) {
  console.log(key + " : " + team[key]);
}
console.log("----------------");


 //Generator – Rewards 
function* rewardGenerator() {
  yield "Level 1 Completed";
  yield "Level 2 Completed";
  yield "Level 3 Completed";
  yield "Team Winner";
}
console.log("REWARDS");
for (let reward of rewardGenerator()) {
  console.log(reward);
}
console.log("----------------");


//Callback – Score Calculation 
function calculateScore(operation, a, b) {
  return operation(a, b);
}

// Named function
function addScore(a, b) {
  return a + b;
}

// Arrow function
const subtractScore = (a, b) => a - b;

let totalScore = calculateScore(addScore, 80, 20);
let penalty = calculateScore(subtractScore, totalScore, 10);

console.log("Total Score:", totalScore);
console.log("After Penalty:", penalty);

console.log("----------------");

//Default Parameter 
function registerTeam(name, role = "Developer") {
  console.log("Team:", name);
  console.log("Role:", role);
}

registerTeam("Alpha Team");
registerTeam("Alpha Team", "Tester");

console.log("----------------");

//Currying for Bonus Calculation 
function bonus(base) {
  return function (performance) {
    return function (extra) {
      return base + performance + extra;
    };
  };
}

let finalBonus = bonus(1000)(500)(250);
console.log("Final Bonus:", finalBonus);























