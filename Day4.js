//Task 1//
let word = "developer";

console.log("Characters in word:");
for (let char of word) {
    console.log(char);
}

let count = 0;
for (let char of word) {
    count++;
}
console.log("Total letters:", count);

let vowels = "aeiouAEIOU";
console.log("Vowels in word:");
for (let char of word) {
    if (vowels.includes(char)) {
        console.log(char);
    }
}

//Task 2//
let skills = ["HTML", "CSS", "JavaScript", "React"];
console.log("All skills:");
for (let skill of skills) {
    console.log(skill);
}
console.log("\nSkills with message:");
for (let skill of skills) {
    console.log(`I know ${skill}`);
}
let totalSkills = 0;
for (let skill of skills) {
    totalSkills++;
}
console.log("\nTotal number of skills:", totalSkills);

//Task 3//
let employee = {
    name: "Arun",
    role: "Tester",
    salary: 30000,
    experience: "2 years"
};
console.log("Keys:");
for (let key in employee) {
    console.log(key);
}
console.log("\nValues:");
for (let key in employee) {
    console.log(employee[key]);
}

console.log("\nKey : Value pairs:");
for (let key in employee) {
    console.log(`${key} : ${employee[key]}`);
}

//Task 4//
function table(num4) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num4} x ${i} = ${num4 * i}`);
    }
}
table(5);

//Task 5//
function square(num) {
    return num * num;
}
let result = square(6);
console.log(result);

//Task 6//
function register(name, department, role = "Developer") {
    console.log(`Name: ${name}, Department: ${department}, Role: ${role}`);
}
register("Arun", "IT", "Tester"); // Call with role
register("Banu", "HR"); // Call without role

//Task 7//
// function checkScope() {
//     if (true) {
//         var a = 100; // var is function-scoped
//         let b = 200; //let is block-scoped (only inside { } of if)
//     }
//     console.log(a);
//     console.log(b);
// }

// checkScope();

//Task 8//
// console.log(x); 
// var x = 10;
// console.log(y);
// let y = 20;

//TASK 9//
function greet(name) {
    console.log("Welcome, Bhanu");
}

greet("Bhanu");

//Task 10//
let add = function(a, b) {
    return a + b;
};

let result1 = add(5, 3);
console.log(result1);

//Task 11//

const subtract = (a, b) => a - b;
let result3 = subtract(10, 4);
console.log(result3);

//Task 12//
function add1(a, b) {
    return a + b;
}

function subtract1(a, b) {
    return a - b;
}

function calculate(operation, a, b) {
    let result = operation(a, b);
    console.log(result);
}

calculate(add1, 10, 5);       
calculate(subtract1, 20, 10); 

//Task 13//
function total(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

let result4 = total(5)(10)(15);
console.log(result4);

//task 14//
function* reward() {
    yield "Level 1 Completed";
    yield "Level 2 Completed";
    yield "Level 3 Completed";
    yield "Team Winner";
}

// Using .next()
let rewards = reward();
console.log(rewards.next().value); 
console.log(rewards.next().value); 
console.log(rewards.next().value); 
console.log(rewards.next().value); 

console.log("\nUsing for...of loop:");

// Using for...of
for (let msg of reward()) {
    console.log(msg);
}

//Final team challenge//
// Object - Team Details
let team = {
    name: "Alpha Team",
    leader: "Bhanu",
    members: 4,
    project: "JS Mini Game"
};

// for...in - Print details
console.log("Team Details:");
for (let key in team) {
    console.log(`${key} : ${team[key]}`);
}
console.log();

//Generator - Reward
function* reward() {
    yield "Level 1 Completed";
    yield "Level 2 Completed";
    yield "Level 3 Completed";
    yield "Team Winner";
}

console.log("Rewards using generator:");
for (let msg of reward()) {
    console.log(msg);
}
console.log();

//Callback - Score Calculation
function addScore(a, b) {
    return a + b;
}

function calculateScore(operation, score1, score2) {
    console.log("Total Score:", operation(score1, score2));
}

calculateScore(addScore, 80, 15); // Total Score: 95
console.log();

//Default Parameter - Player registration
function registerPlayer(name, role = "Developer") {
    console.log(`Player: ${name}, Role: ${role}`);
}

registerPlayer("Banu", "Tester");
registerPlayer("Naveen"); 
console.log();

//Currying - Bonus calculation
function bonus(points) {
    return function(multiplier) {
        return function(extra) {
            return points * multiplier + extra;
        }
    }
}

console.log("Bonus:", bonus(10)(2)(5)); 
console.log();

// Named Function - Greeting
function greetPlayer(name) {
    console.log(`Welcome, ${name}!`);
}

greetPlayer("Bhanu");
console.log();

// Arrow Function - Subtract points
const subtractPoints = (total, penalty) => total - penalty;

console.log("Points after penalty:", subtractPoints(50, 15));









