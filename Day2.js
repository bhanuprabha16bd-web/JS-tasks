//Task 1//
//String
let name = "Banu";
console.log(name);
console.log(typeof name);

// Number
let age = 25;
console.log(age);
console.log(typeof age);

// Boolean
let isLearningJS = true;
console.log(isLearningJS);
console.log(typeof isLearningJS);

// Undefined
let city;
console.log(city);
console.log(typeof city);

// Null
let address = null;
console.log(address);
console.log(typeof address);

//Task 2//
let colors = ["red", "green", "blue", "yellow", "black"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors[2]);
console.log(colors.length);

//Task 3//
let student = {
  name: "Naveen",
  skills: ["HTML", "CSS", "JS"],
  experience: "1 year",
  location: "India"
};
console.log(student.name);
console.log(student.skills[0]);
student.role = "Frontend Developer";
console.log(student);

//Task 4//
let x = 10;
let y = 3;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponentiation:", x ** y);

//task 5//
let a = 5;
let post = a++;
console.log("After a++:");
console.log("post =", post); // 5
console.log("a =", a);       // 6
a = 5;
let pre = ++a;
console.log("After ++a:");
console.log("pre =", pre);  // 6
console.log("a =", a);      // 6

let b = 2;
b = b++;
console.log(b);

//Task 6//
let num = 3;
num **= 4;
console.log(num);

//Task 7//
console.log(5 == "5");    // true
console.log(5 === "5");   // false
console.log(0 == false);  // true
console.log(0 === false); // false

//task 8//
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

//Task 9//
let userRole = "manager";

if (userRole === "admin" || userRole === "manager") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//Task 10//
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("User is NOT logged in");
} else {
    console.log("User is logged in");
}

//Task 11//
let age1 = 17;
let eligibility = age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);

let user = {
  name: "Arun",
  age: 22,
  isLoggedIn: true,
  skills: ["JS", "React"]
};
console.log("Name:", user.name);
console.log("First Skill:", user.skills[0]);

if (user.age >= 18) {
  console.log("Adult: Yes");
} else {
  console.log("Adult: No");
}

if (user.isLoggedIn && user.age >= 18) {
  console.log("Access Allowed");
} else {
  console.log("Access Denied");
}

console.log("Login Status:", user.isLoggedIn ? "Logged In" : "Not Logged In");

user.age++;
console.log("New Age:", user.age);

user.skills.push("Node.js");
console.log("Updated Skills:", user.skills);






