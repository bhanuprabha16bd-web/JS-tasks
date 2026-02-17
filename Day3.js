//Task 1//
let firstName = "Naveen";
let lastName = "Kumar";

let fullName1 = firstName + " " + lastName;
console.log(fullName1);

let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

console.log("Length of full name:", fullName1.length);

//task 2//
console.log(typeof("5" + 2));       // "string"
console.log(typeof(5 + "2"));       // "string"
console.log(typeof(true + 1));      // "number"
console.log(typeof(false + "hello"));// "string"
console.log(typeof(null + 1));      // "number"

//Task 3//
console.log(Number("100"));       // 100
console.log(Number("10.5"));      // 10.5
console.log(Number("abc"));       // NaN
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

//Task 4//
console.log(Boolean(0));          // false
console.log(Boolean(1));          // true
console.log(Boolean(""));         // false
console.log(Boolean("hello"));    // true
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
//[] empty array is still an object type in JS All objects are truthy, even if empty
//{} empty object is also of type object Objects exist, so JS treats them as truthy

//Task 5//
let num = 7;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

//Task 6//
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75 && marks <= 89) {
    console.log("Grade: B");
} else if (marks >= 50 && marks <= 74) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

//Task 7//
let dayNumber = 3;

switch(dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//Task 8//
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

//Task 9//
let num1 = 3;

for (let i = 1; i <= 10; i++) {
    console.log(`${num1} x ${i} = ${num1 * i}`);
}

//task 10//
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum of first 10 numbers:", sum);
if ("0") {
    console.log("true block");
} else {
    console.log("false block");
}

