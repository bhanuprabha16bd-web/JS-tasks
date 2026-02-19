//Task 1//
let teamA = [
  { name: "John", role: "Developer" },
  { name: "Arun", role: "Tester" }
];
let teamB = [
  { name: "Naveen", role: "Designer" },
  { name: "David", role: "Manager" }
];
let mergedTeam = [...teamA, ...teamB]; //using spread operator
mergedTeam.push({ name: "Priya", role: "HR" });
let backupTeam = [...mergedTeam];
mergedTeam.pop();
mergedTeam.unshift({ name: "Rahul", role: "Team Lead" });
console.log("Merged Team:", mergedTeam);
console.log("Backup Team:", backupTeam);


//Task 2//
let emp1 = { name: "John", salary: 30000 };
let emp2 = { name: "John", salary: 45000 };
let mergedEmp = { ...emp1, ...emp2 };
mergedEmp.salary = 50000;
let newEmp = { ...mergedEmp };
let { name, salary } = newEmp;
console.log(`${name} earns ${salary}`);


//Task 3//
let cart = ["Laptop", "Phone", "Tablet", "Watch"];

cart.pop();

cart.push("Headphones", "Mouse");

cart.unshift("Charger");

cart.shift();

let tabletIndex = cart.indexOf("Tablet");
if (tabletIndex !== -1) {
  cart.splice(tabletIndex, 1, "Camera");
}

let hasPhone = cart.includes("Phone");

let watchIndex = cart.indexOf("Watch");

console.log("Final Cart:", cart);
console.log("Phone exists:", hasPhone);
console.log("Watch index:", watchIndex);


//Task 4//
let marks = [78, 90, 66, 84, 99, 45];
marks.sort((a, b) => a - b);
marks.reverse();
let top3 = marks.slice(0, 3);
let index84 = marks.indexOf(84);
let index45 = marks.indexOf(45);
if (index45 !== -1) {
  marks.splice(index45, 1, 50);
}
console.log("Sorted & Reversed Marks:", marks);
console.log("Top 3 Marks:", top3);
console.log("Index of 84:", index84);


//Task 5//
let company = [
  "Stackly",
  ["Frontend", ["HTML", "CSS", ["JavaScript"]]]
];
let js = company[1][1][2][0];
console.log(js);
let [, [, [, , [javaScript]]]] = company;
console.log(javaScript);
let flatArray = company.flat(Infinity);
console.log(flatArray);
company[1][1][1] = "Tailwind";
console.log(company);


//Task 6//
function attendance(day, ...students) {
  console.log("Day:", day);
  console.log("Total Students:", students.length);
  console.log("First Student:", students[0]);
  console.log("Last Student:", students[students.length - 1]);
  return students;
}
let result = attendance("Monday", "John", "Arun", "David", "Naveen");

console.log("Students Array:", result);


//Task 7//
let stock = [10, 20, 30, 40, 50];
stock.fill(0, stock.length - 2);
stock.push(60, 70);
stock.shift();
let hasThirty = stock.includes(30);
let lastIndex20 = stock.lastIndexOf(20);
stock.reverse();
console.log("Final Stock:", stock);
console.log("30 exists:", hasThirty);
console.log("Last index of 20:", lastIndex20);


//Task 8//
let user = {
  name1: "Naveen",
  role: "Developer",
  skills: ["HTML", "CSS", "JavaScript"]
};
let { name1, role } = user;
let updatedSkills = [...user.skills, "React"];
let clonedUser = { ...user, skills: updatedSkills };
let finalUser = { ...clonedUser, ...{ experience: "2 Years" } };
console.log("Name:", name1);
console.log("Role:", role);
console.log("Skills Length:", finalUser.skills.length);

//Task 9//
let sales = [12000, 45000, 22000, 8000, 15000];
let ascSales = [...sales].sort((a, b) => a - b);
let descSales = [...ascSales].reverse();
let middle3 = ascSales.slice(1, 4);
let lowestIndex = ascSales.indexOf(ascSales[0]);
ascSales.splice(lowestIndex, 1, 10000);
let has50000 = sales.includes(50000);
console.log("Ascending:", ascSales);
console.log("Descending:", descSales);
console.log("Middle 3 Sales:", middle3);
console.log("50000 exists:", has50000);

//Task 10//
let rawData = [1, 2, null, 4, undefined, 6, [7, 8], { a: 10 }];
console.log("Last Element:", rawData[rawData.length - 1]);
let flatData = rawData.flat(Infinity);
flatData.pop();
flatData.push(100);
let cleanedData = [...flatData];
console.log("Cleaned Data:", cleanedData);









