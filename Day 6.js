//Tsk 1//
let names = ["Arun", "Bala", "Charan", "David"];
names.forEach((name, index) => {
  console.log(`${index + 1} - ${name}`);
});


//Task 2//
let numbers = [2, 4, 6, 8];
let squares = numbers.map(num => num * num);
console.log(squares);


//task 3//
let products = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 60000 },
  { name: "Keyboard", price: 1000 },
  { name: "Monitor", price: 12000 }
];
let expensiveProducts = products.filter(product => product.price > 10000);

console.log(expensiveProducts);


//task 4//
let products1 = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 60000 },
  { name: "Keyboard", price: 1000 },
  { name: "Monitor", price: 12000 }
];

let firstExpensiveProduct = products1.find(
  product => product.price > 10000
);

console.log(firstExpensiveProduct);


//task 5//
let marks = [80, 75, 90, 60];

let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;

console.log("Total:", total);
console.log("Average:", average);


//Task 6//
let ages = [12, 15, 17, 22];

let isAnyAbove18 = ages.some(age => age > 18);

console.log(isAnyAbove18);


//Task 7//
let scores = [60, 70, 80, 90];

let allPassed = scores.every(score => score >= 35);

console.log(allPassed);


//TASk 8//
let prices = [200, 40, 1000, 5, 75];
let ascending = [...prices].sort((a, b) => a - b);
console.log("Ascending:", ascending);

let descending = [...prices].sort((a, b) => b - a);
console.log("Descending:", descending);


//tASK 9//
let name1 = "naveen";

let result = name1.slice(0, 1).toUpperCase() + name1.slice(1);

console.log(result);

//Task 10//
let text = "javascript";

let count = text.split("a").length - 1;

console.log(count);


//Task 11//
let input = " Hello World ";

let result2 = input.trim().toUpperCase();

console.log(result2);


//Task 12//
let sentence = "I love python";

let updatedSentence = sentence.replace("python", "javascript");

let startsWithI = updatedSentence.startsWith("I");
let endsWithJS = updatedSentence.endsWith("javascript");

console.log(updatedSentence);
console.log(startsWithI);
console.log(endsWithJS);


//BONUS – Real World Challenge (Employee Salary System)//
let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 60000 }
];

let highSalaryEmployees = employees.filter(emp => emp.salary > 30000); //Get employees salary > 30000

let firstHighSalary = employees.find(emp => emp.salary > 30000); //Find first employee salary > 30000

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0); //Calculate total salary

let anyLowSalary = employees.some(emp => emp.salary < 20000); //Check if any employee salary < 20000

let allAbove10k = employees.every(emp => emp.salary > 10000); //Check if all employees salary > 10000

console.log(highSalaryEmployees);
console.log(firstHighSalary);
console.log(totalSalary);
console.log(anyLowSalary);
console.log(allAbove10k);