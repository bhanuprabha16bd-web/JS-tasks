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













